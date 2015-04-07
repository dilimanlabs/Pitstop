import json

from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import urlhash
from business import business_img_pattern

schema1 = {
    'type': 'object',
    'properties': {
        'product': {
            'type': 'object',
            'properties': {
                'description': {
                    'type': 'string'
                },
                'intents': {
                    'type': 'array',
                    'items': {
                        'type': 'object',
                        'properties': {
                            'action': {
                                'type': 'string'
                            },
                            'name': {
                                'type': 'string'
                            },
                            'value': {
                                'type': 'string'
                            }
                        },
                        'required': [
                            'action',
                            'name',
                            'value'
                        ],
                        'additionalProperties': False
                    },
                    'minItems': 0,
                    'uniqueItems': True
                },
                'isPromo': {
                    'type': 'boolean'
                },
                'isVisible': {
                    'type': 'boolean'
                },
                'name': {
                    'type': 'string'
                },
                'order': {
                    'type': 'integer'
                },
                'primaryImage': {
                    'type': 'string'
                }
            },
            'required': [
                'description',
                'intents',
                'isPromo',
                'isVisible',
                'name',
                'order',
                'primaryImage'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'product'
    ],
    'additionalProperties': False
}

product_pattern = r'^.*/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/?$'
product_img_pattern = r'^.*/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$'


class ProductCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)

        product_keys, next_cursor, more = models.Product.fetch_keys(limit, cursor, business_model.key)

        products = []
        for product_model in ndb.get_multi(product_keys):
            products.append(product_model.build())

        self.set_response('200 OK', data={
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'products': products
            }
        })

    def post(self, *ar, **kw):
        business_id = ar[0]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)

        self.check_if_non_empty_string(data['product']['name'])
        self.check_if_zero_length(models.Product.fetch_by_name(data['product']['name'], business_model.key))

        intents = []
        for intent in data['product']['intents']:
            intents.append(
                models.Intent(
                    action=intent.action,
                    name=intent.name,
                    value=intent.value)
            )

        if data['product']['primaryImage']:
            match_obj = self.match_regex(business_img_pattern, data['product']['primaryImage'])

            if business_id == match_obj.group(1):
                image_model = self.get_model(models.Image, match_obj.group(2), parent=business_model)
                primaryImage = image_model.key
            else:
                self.abort(400)
        else:
            primaryImage = None

        product_key = models.Product(
            parent=business_model.key,
            description=data['product']['description'],
            intents=intents,
            isPromo=data['product']['isPromo'],
            isVisible=data['product']['isVisible'],
            name=data['product']['name'],
            order=data['product']['order'],
            primaryImage=primaryImage).put()

        product_model_url = '/businesses/' + business_id + '/products/' + urlhash.int_to_base62(product_key.integer_id())
        product_model = product_key.get()
        product_model.url = product_model_url
        product_model.put()

        self.set_response('201 Created', extra_headers=[['Location', product_model_url]])


class ProductItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'product': product_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        self.check_if_non_empty_string(data['product']['name'])
        self.check_if_same(models.Product.fetch_by_name(data['product']['name'], business_model.key), product_model)

        product_model.description = data['product']['description']

        intents = []
        for intent in data['product']['intents']:
            intents.append(
                models.Intent(
                    action=intent.action,
                    name=intent.name,
                    value=intent.value)
            )
        product_model.intents = intents

        product_model.isPromo = data['product']['isPromo']

        product_model.isVisible = data['product']['isVisible']

        product_model.name = data['product']['name']

        product_model.order = data['product']['order']

        if data['product']['primaryImage']:
            match_obj = self.match_regex(business_img_pattern, data['product']['primaryImage'], strict=False)

            if match_obj and business_id == match_obj.group(1):
                image_model = self.get_model(models.Image, match_obj.group(2), parent=business_model)
                product_model.primaryImage = image_model.key
            else:
                match_obj = self.match_regex(product_img_pattern, data['product']['primaryImage'])

                if match_obj and business_id == match_obj.group(1) and product_id == match_obj.group(2):
                    image_model = self.get_model(models.Image, match_obj.group(3), parent=product_model)
                    product_model.primaryImage = image_model.key
                else:
                    self.abort(400)
        else:
            product_model.primaryImage = None

        product_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        product_model.key.delete()

        self.set_response('200 OK')


class ProductItemImageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        image_keys, next_cursor, more = models.Image.fetch_keys(limit, cursor, product_model.key)

        images = []
        for image_model in ndb.get_multi(image_keys):
            images.append(image_model.build())

        self.set_response('200 OK', data={
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'images': images
            }
        })

    def post(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        image_key = models.Image(
            title=self.request.POST['title'].encode('ascii', 'ignore'),
            full_size_image=self.request.POST['image'].file.read(),
            parent=product_model.key).put()

        image_model_url = '/businesses/' + business_id + '/products/' + product_id + '/images/' + urlhash.int_to_base62(image_key.integer_id())
        image_model = image_key.get()
        image_model.url = image_model_url
        image_model.put()

        self.set_response('201 Created', extra_headers=[['Location', image_model_url]])


class ProductItemImageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=product_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'image': image_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=product_model)

        image_model.title = self.request.POST['title'].encode('ascii', 'ignore')

        image_model.full_size_image = self.request.POST['image'].file.read()

        image_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=product_model)

        image_model.key.delete()

        self.set_response('200 OK')