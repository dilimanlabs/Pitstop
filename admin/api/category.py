from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import urlhash

schema1 = {
    'type': 'object',
    'properties': {
        'category': {
            'type': 'object',
            'properties': {
                'description': {
                    'type': 'string'
                },
                'name': {
                    'type': 'string'
                },
                'pluralName': {
                    'type': 'string'
                }
            },
            'required': [
                'description',
                'name',
                'pluralName'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'category'
    ],
    'additionalProperties': False
}

schema2 = {
    'type': 'object',
    'properties': {
        'category': {
            'type': 'object',
            'properties': {
                'description': {
                    'type': 'string'
                },
                'name': {
                    'type': 'string'
                },
                'pluralName': {
                    'type': 'string'
                },
                'primaryImage': {
                    'type': 'string'
                }
            },
            'required': [
                'description',
                'name',
                'pluralName',
                'primaryImage'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'category'
    ],
    'additionalProperties': False
}

category_pattern = r'^.*/categories/([a-zA-Z0-9]{11})/?$'
category_img_pattern = r'^.*/categories/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$'


class CategoryCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        limit, cursor = self.get_limit_and_cursor()

        category_keys, next_cursor, more = models.Category.fetch_keys(limit, cursor)

        categories = []
        for category_model in ndb.get_multi(category_keys):
            categories.append(category_model.build())

        self.set_response('200 OK', data={
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'categories': categories
            }
        })

    def post(self, *ar, **kw):
        data = self.validate_body(schema1)

        self.check_if_non_empty_string(data['category']['name'])
        self.check_if_zero_length(models.Category.fetch_by_name(data['category']['name']))

        category_key = models.Category(
            description=data['category']['description'],
            name=data['category']['name'],
            pluralName=data['category']['pluralName']).put()

        category_model_url = '/categories/' + urlhash.int_to_base62(category_key.integer_id())
        category_model = category_key.get()
        category_model.url = category_model_url
        category_model.put()

        self.set_response('201 Created', extra_headers=[['Location', category_model_url]])


class CategoryItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        category_id = ar[0]

        category_model = self.get_model(models.Category, category_id)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'category': category_model.build()
            }
        })

    def put(self, *ar, **kw):
        category_id = ar[0]
        data = self.validate_body(schema2)

        category_model = self.get_model(models.Category, category_id)

        self.check_if_non_empty_string(data['category']['name'])
        self.check_if_same(models.Category.fetch_by_name(data['category']['name']), category_model)

        category_model.description = data['category']['description']

        category_model.name = data['category']['name']

        category_model.pluralName = data['category']['pluralName']

        if data['category']['primaryImage']:
            match_obj = self.match_regex(category_img_pattern, data['category']['primaryImage'])

            if category_id == match_obj.group(1):
                image_model = self.get_model(models.Image, match_obj.group(2), parent=category_model)
                category_model.primaryImage = image_model.key
            else:
                self.abort(400)
        else:
            category_model.primaryImage = None

        category_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        category_id = ar[0]

        category_model = self.get_model(models.Category, category_id)

        category_model.key.delete()

        self.set_response('200 OK')


class CategoryItemImageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        category_id = ar[0]
        limit, cursor = self.get_limit_and_cursor()

        category_model = self.get_model(models.Category, category_id)

        image_keys, next_cursor, more = models.Image.fetch_keys(limit, cursor, category_model.key)

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
        category_id = ar[0]

        category_model = self.get_model(models.Category, category_id)

        image_key = models.Image(
            title=self.request.POST['title'].encode('ascii', 'ignore'),
            full_size_image=self.request.POST['image'].file.read(),
            parent=category_model.key).put()

        image_model_url = '/categories/' + category_id + '/images/' + urlhash.int_to_base62(image_key.integer_id())
        image_model = image_key.get()
        image_model.url = image_model_url
        image_model.put()

        self.set_response('201 Created', extra_headers=[['Location', image_model_url]])


class CategoryItemImageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        category_id = ar[0]
        image_id = ar[1]

        category_model = self.get_model(models.Category, category_id)
        image_model = self.get_model(models.Image, image_id, parent=category_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'image': image_model.build()
            }
        })

    def put(self, *ar, **kw):
        category_id = ar[0]
        image_id = ar[1]

        category_model = self.get_model(models.Category, category_id)
        image_model = self.get_model(models.Image, image_id, parent=category_model)

        image_model.title = self.request.POST['title'].encode('ascii', 'ignore')

        image_model.full_size_image = self.request.POST['image'].file.read()

        image_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        category_id = ar[0]
        image_id = ar[1]

        category_model = self.get_model(models.Category, category_id)
        image_model = self.get_model(models.Image, image_id, parent=category_model)

        image_model.key.delete()

        self.set_response('200 OK')