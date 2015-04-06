from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import urlhash
from business import business_img_pattern
from product import product_pattern

schema1 = {
    'type': 'object',
    'properties': {
        'page': {
            'type': 'object',
            'properties': {
                'description': {
                    'type': 'string'
                },
                'order': {
                    'type': 'integer'
                },
                'primaryImage': {
                    'type': 'string'
                },
                'products': {
                    'type': 'array',
                    'items': {
                        'type': 'string'
                    },
                    'minItems': 0,
                    'uniqueItems': True
                },
                'title': {
                    'type': 'string'
                }
            },
            'required': [
                'description',
                'order',
                'primaryImage',
                'products',
                'title'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'page'
    ],
    'additionalProperties': False
}

page_img_pattern = r'^.*/businesses/([a-zA-Z0-9]{11})/pages/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$'


class PageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)

        page_keys, next_cursor, more = models.Page.fetch_keys(limit, cursor, business_model)

        pages = []
        for page_model in ndb.get_multi(page_keys):
            pages.append(page_model.build())

        self.set_response('200 OK', data={
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'pages': pages
            }
        })

    def post(self, *ar, **kw):
        business_id = ar[0]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)

        self.check_if_non_empty_string(data['page']['title'])
        self.check_if_zero_length(models.Page.fetch_by_title(data['page']['title'], business_model.key))

        if data['page']['primaryImage']:
            matchObj = self.match_regex(business_img_pattern, data['page']['primaryImage'])

            if business_id == matchObj.group(1):
                image_model = self.get_model(models.Image, matchObj.group(2), parent=business_model)
                primaryImage = image_model.key
            else:
                self.abort(400)
        else:
            primaryImage = None

        products = []
        for product in data['page']['products']:
            matchObj = self.match_regex(product_pattern, product)

            if business_id == matchObj.group(1):
                product_model = self.get_model(models.Product, matchObj.group(2), parent=business_model)
                products.append(product_model.key)
            else:
                self.abort(400)

        page_key = models.Page(
            description=data['page']['description'],
            order=data['page']['order'],
            primaryImage=primaryImage,
            products=products,
            title=data['page']['title']).put()

        page_model_url = '/businesses/' + business_id + '/pages/' + urlhash.int_to_base62(page_key.integer_id())
        page_model = page_key.get()
        page_model.url = page_model_url
        page_model.put()

        self.set_response('201 Created', extra_headers=[['Location', page_model_url]])


class PageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'page': page_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)

        self.check_if_non_empty_string(data['page']['title'])
        self.check_if_same(models.Page.fetch_by_title(data['page']['title'], business_model.key), page_model)

        page_model.description = data['page']['description']

        page_model.order = data['page']['order']

        if data['page']['primaryImage']:
            matchObj = self.match_regex(business_img_pattern, data['page']['primaryImage'], strict=False)

            if matchObj and business_id == matchObj.group(1):
                image_model = self.get_model(models.Image, matchObj.group(2), parent=business_model)
                page_model.primaryImage = image_model.key
            else:
                matchObj = self.match_regex(page_img_pattern, data['page']['primaryImage'])

                if matchObj and business_id == matchObj.group(1) and page_id == matchObj.group(2):
                    image_model = self.get_model(models.Image, matchObj.group(3), parent=page_model)
                    page_model.primaryImage = image_model.key
                else:
                    self.abort(400)
        else:
            page_model.primaryImage = None

        products = []
        for product in data['page']['products']:
            matchObj = self.match_regex(product_pattern, product)

            if business_id == matchObj.group(1):
                product_model = self.get_model(models.Product, matchObj.group(2), parent=business_model)
                products.append(product_model.key)
            else:
                self.abort(400)
        page_model.products = products

        page_model.title = data['page']['title']

        page_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)

        page_model.key.delete()

        self.set_response('200 OK')


class PageItemImageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)

        image_keys, next_cursor, more = models.Image.fetch_keys(limit, cursor, page_model.key)

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
        page_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)

        image_key = models.Image(
            title=self.request.POST['title'].encode('ascii', 'ignore'),
            full_size_image=self.request.POST['image'].file.read(),
            parent=page_model.key).put()

        image_model_url = '/businesses/' + business_id + '/pages/' + page_id + '/images/' + urlhash.int_to_base62(image_key.integer_id())
        image_model = image_key.get()
        image_model.url = image_model_url
        image_model.put()

        self.set_response('201 Created', extra_headers=[['Location', image_model_url]])


class PageItemImageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=page_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'image': image_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=page_model)

        image_model.title = self.request.POST['title'].encode('ascii', 'ignore')

        image_model.full_size_image = self.request.POST['image'].file.read()

        image_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        page_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=page_model)

        image_model.key.delete()

        self.set_response('200 OK')