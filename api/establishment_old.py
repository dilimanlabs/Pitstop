import webapp2
from handlers.handler import Handler
import json

from google.appengine.ext import ndb
from models import models
from utils import urlhash

from handlers import basehandler

class EstablishmentItemHandler(basehandler.BaseHandler):
    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        categories = []
        for category_model in ndb.get_multi(establishment_model.categories):
            categories.append({
                'description': category_model.description,
                'name': category_model.name,
                'pluralName': category_model.pluralName,
                'url': category_model.url,
                'primaryImage': self.get_primaryImage(category_model.primaryImage)
            })

        contact = {
            'formattedPhone': establishment_model.contact.formattedPhone,
            'phone': establishment_model.contact.phone
        }

        location = {
            'address': establishment_model.location.address,
            'cc': establishment_model.location.cc,
            'cityOrMunicipality': establishment_model.location.cityOrMunicipality,
            'country': establishment_model.location.country,
            'position': {
                'lat': establishment_model.location.position.lat,
                'lon': establishment_model.location.position.lon
            },
            'slippyPosition': establishment_model.location.slippyPosition
        }

        pages_model_query = models.Page.query(ancestor=establishment_model.key).order(models.Page.order)

        pages = []
        if pages_model_query:
            keys = pages_model_query.fetch(keys_only=True)
            if keys:
                for page in ndb.get_multi(keys):
                    business_page = models.Page.query(models.Page.title == page.title, ancestor=business_model.key).fetch()

                    product_keys_not_available = list(set(business_page[0].products) - set(page.products))
                    products = []
                    for product_key in page.products:
                        try:
                            product_model = product_key.get()
                        except:
                            product_model = None

                        if product_model:
                            intents = []
                            for intent in product_model.intents:
                                intents.append({'action' : intent.action, 'name' : intent.name, 'value' : intent.value})

                            products.append({'name' : product_model.name, 'description' : product_model.description, 'imageUrl' : product_model.imageUrl, 'url' : product_model.url, 'order' : product_model.order, 'available' : True, 'intents' : intents})

                    for product_key in product_keys_not_available:
                        try:
                            product_model = product_key.get()
                        except:
                            product_model = None

                        if product_model and product_model.isVisible:
                            intents = []
                            for intent in product_model.intents:
                                intents.append({'action' : intent.action, 'name' : intent.name, 'value' : intent.value})

                            products.append({'name' : product_model.name, 'description' : product_model.description, 'imageUrl' : product_model.imageUrl, 'url' : product_model.url, 'order' : product_model.order, 'available' : False, 'intents' : intents})

                    promo_keys_not_available = list(set(business_page[0].promos) - set(page.promos))
                    promos = []
                    for promo_key in page.promos:
                        try:
                            promo_model = promo_key.get()
                        except:
                            promo_model = None

                        if promo_model:
                            promos.append({'name' : promo_model.name, 'url' : promo_model.url, 'order' : promo_model.order,'available' : True})

                    for promo_key in promo_keys_not_available:
                        try:
                            promo_model = promo_key.get()
                        except:
                            promo_model = None

                        if promo_model:
                            promos.append({'name' : promo_model.name, 'url' : promo_model.url, 'order' : promo_model.order, 'available' : False})

                    obj = {
                        'description': page.description,
                        'imageUrl' : page.imageUrl,
                        'order' : page.order,
                        'products' : products,
                        'promos' : promos,
                        'title' : page.title,
                        'url' : page.url
                    }

        if not pages:
            pages_model_query = models.Page.query(ancestor=business_model.key).order(models.Page.order)
            if pages_model_query:
                keys = pages_model_query.fetch(keys_only=True)
                if keys:
                    for page in ndb.get_multi(keys):
                        products = []
                        for product_key in page.products:
                            try:
                                product_model = product_key.get()
                            except:
                                product_model = None

                            if product_model and product_model.isVisible:
                                intents = []
                                for intent in product_model.intents:
                                    intents.append({'action' : intent.action, 'name' : intent.name, 'value' : intent.value})

                                products.append({'name' : product_model.name, 'description' : product_model.description, 'imageUrl' : product_model.imageUrl, 'url' : product_model.url, 'order' : product_model.order, 'available' : False, 'intents' : intents})

                        promos = []
                        for promo_key in page.promos:
                            try:
                                promo_model = promo_key.get()
                            except:
                                promo_model = None

                            if promo_model:
                                promos.append({'name' : promo_model.name, 'url' : promo_model.url, 'order' : promo_model.order,'available' : False})

                        obj = {
                            'description': page.description,
                            'imageUrl' : page.imageUrl,
                            'order' : page.order,
                            'products' : products,
                            'promos' : promos,
                            'title' : page.title,
                            'url' : page.url
                        }

                        pages.append(obj)

        establishment = {
            'categories': categories,
            'contact': contact,
            'location': location,
            'name': establishment_model.name,
            'url': establishment_model.url,
            'pages' : pages
        }

        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers['Cache-Control'] = 'max-age=3600'
        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps({
            'meta': None,
            'response': {
                'establishment': establishment
            }
        }))
        self.response.status = '200 OK'