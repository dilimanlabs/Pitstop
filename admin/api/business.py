from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import urlhash

schema1 = {
    'type': 'object',
    'properties': {
        'business': {
            'type': 'object',
            'properties': {
                'adminUsers': {
                    'type': 'array',
                    'items': {
                        'type': 'string'
                    },
                    'minItems': 0,
                    'uniqueItems': True
                },
                'description': {
                    'type': 'string'
                },
                'name': {
                    'type': 'string'
                },
                'registeredName': {
                    'type': 'string'
                }
            },
            'required': [
                'adminUsers',
                'description',
                'name',
                'registeredName'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'business'
    ],
    'additionalProperties': False
}

schema2 = {
    'type': 'object',
    'properties': {
        'business': {
            'type': 'object',
            'properties': {
                'adminUsers': {
                    'type': 'array',
                    'items': {
                        'type': 'string'
                    },
                    'minItems': 0,
                    'uniqueItems': True
                },
                'description': {
                    'type': 'string'
                },
                'name': {
                    'type': 'string'
                },
                'primaryImage': {
                    'type': 'string'
                },
                'registeredName': {
                    'type': 'string'
                }
            },
            'required': [
                'adminUsers',
                'description',
                'name',
                'primaryImage',
                'registeredName'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'business'
    ],
    'additionalProperties': False
}

business_img_pattern = r'^.*/businesses/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$'


class BusinessCollectionHandler(basehandler.BaseHandler):

    @basehandler.get_list
    def get(self, *ar, **kw):
        business_keys, next_cursor, more = models.Business.fetch_keys(kw['limit'], kw['cursor'])

        businesses = []
        for business_model in ndb.get_multi(business_keys):
            businesses.append(business_model.build())

        return None, {
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'businesses': businesses
            }
        }

    @basehandler.create
    def post(self, *ar, **kw):
        data = self.validate_body(schema1)

        self.check_if_non_empty_string(data['business']['registeredName'])
        self.check_if_zero_length(models.Business.fetch_by_registeredName(data['business']['registeredName']))

        business_key = models.Business(
            adminUsers=data['business']['adminUsers'],
            description=data['business']['description'],
            name=data['business']['name'],
            registeredName=data['business']['registeredName']).put()

        business_model_url = '/businesses/' + urlhash.int_to_base62(business_key.integer_id())
        business_model = business_key.get()
        business_model.url = business_model_url
        business_model.put()

        return [['Location', business_model_url]], None


class BusinessItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]

        business_model = self.get_model(models.Business, business_id)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'business': business_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        data = self.validate_body(schema2)

        business_model = self.get_model(models.Business, business_id)

        self.check_if_non_empty_string(data['business']['registeredName'])
        self.check_if_same(models.Business.fetch_by_registeredName(data['business']['registeredName']), business_model)

        business_model.adminUsers = data['business']['adminUsers']

        business_model.description = data['business']['description']

        business_model.name = data['business']['name']

        if data['business']['primaryImage']:
            match_obj = self.match_regex(business_img_pattern, data['business']['primaryImage'])

            if business_id == match_obj.group(1):
                image_model = self.get_model(models.Image, match_obj.group(2), parent=business_model)
                business_model.primaryImage = image_model.key
            else:
                self.abort(400)
        else:
            business_model.primaryImage = None

        business_model.registeredName = data['business']['registeredName']

        business_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]

        business_model = self.get_model(models.Business, business_id)

        business_model.key.delete()

        self.set_response('200 OK')


class BusinessItemImageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)

        image_keys, next_cursor, more = models.Image.fetch_keys(limit, cursor, business_model.key)

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

        business_model = self.get_model(models.Business, business_id)

        image_key = models.Image(
            title=self.request.POST['title'].encode('ascii', 'ignore'),
            full_size_image=self.request.POST['image'].file.read(),
            parent=business_model.key).put()

        image_model_url = '/businesses/' + business_id + '/images/' + urlhash.int_to_base62(image_key.integer_id())
        image_model = image_key.get()
        image_model.url = image_model_url
        image_model.put()

        self.set_response('201 Created', extra_headers=[['Location', image_model_url]])


class BusinessItemImageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        image_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        image_model = self.get_model(models.Image, image_id, parent=business_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'image': image_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        image_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        image_model = self.get_model(models.Image, image_id, parent=business_model)

        image_model.title = self.request.POST['title'].encode('ascii', 'ignore')

        image_model.full_size_image = self.request.POST['image'].file.read()

        image_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        image_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        image_model = self.get_model(models.Image, image_id, parent=business_model)

        image_model.key.delete()

        self.set_response('200 OK')