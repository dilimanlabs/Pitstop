import webapp2
from handlers.handler import Handler
import json

from google.appengine.ext import ndb
from models import models
from utils import urlhash

from handlers.basehandler import BaseHandler

from api import account, business, category, establishment, marker, page

class MainHandler(Handler):
    def get(self):
        self.render('index.html')

class BusinessHandler(Handler):
    def get(self):
        self.render('business.html')

class MapHandler(Handler):
    def get(self):
        self.render('map.html')

class ProductHandler(webapp2.RequestHandler):
    def get(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]

        try:
            business_model = models.Business.get_by_id(id=urlhash.base62_to_int(business_id))
            business_key = business_model.key
        except:
            business_model = None

        if business_model is None:
            # error
            pass

        product = {}
        try:
            product_model = models.Product.get_by_id(parent=business_key, id=urlhash.base62_to_int(product_id))
        except:
            product_model = None

        if product_model is None:
            # error
            pass
        else:
            product = {
                'description' : product_model.description,
                'imageUrl' : product_model.imageUrl,
                'name' : product_model.name,
                'url' : product_model.url
            }

        self.response.headers['Content-Type'] = 'application/json'
        self.response.out.write(json.dumps({'product' : product}))


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/business', BusinessHandler),
    ('/map.*', MapHandler),

    (r'^.*/api/establishment/search/?$', establishment.SearchHandler),

    (r'^.*/api/check_id/?$', account.CheckIDHandler),
    (r'^.*/api/check_password/?$', account.CheckPasswordHandler),
    (r'^.*/api/check_name/?$', account.CheckNameHandler),

    (r'^.*/api/categories/?$', category.CategoryCollectionHandler),

    (r'^.*/api/login/?$', account.LoginHandler),

    (r'^.*/api/accounts/?$', account.AccountCollectionHandler),
    (r'^.*/api/accounts/([a-zA-Z0-9]+)/?$', account.AccountItemHandler),
    (r'^.*/api/accounts/([a-zA-Z0-9]+)/images/?$', account.AccountItemImageCollectionHandler),

    (r'^.*/api/markers/([0-9]+)/([0-9]+)/([0-9]+)/?$', marker.MarkerCollectionHandler),

    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/?$', business.BusinessItemHandler),

    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/?$', establishment.EstablishmentItemHandler),

    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/pages/?$', page.BusinessItemPageCollectionHandler),

    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/?$', ProductHandler),
], debug=True)