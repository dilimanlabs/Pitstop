from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import urlhash
from utils.country_utils import CountryCodeCountryDict, CountryCodeList
from utils.map_utils import from_coords
from business import business_img_pattern
from category import category_pattern
import logging
schema1 = {
    'type': 'object',
    'properties': {
        'establishment': {
            'type': 'object',
            'properties': {
                'categories': {
                    'type': 'array',
                    'items': {
                        'type': 'string'
                    },
                    'minItems': 0,
                    'uniqueItems': True
                },
                'contact': {
                    'type': 'object',
                    'properties': {
                        'phone': {
                            'type': 'string'
                        },
                        'formattedPhone': {
                            'type': 'string'
                        }
                    },
                    'required': [
                        'phone',
                        'formattedPhone'
                    ],
                    'additionalProperties': False
                },
                'location': {
                    'type': 'object',
                    'properties': {
                        'address': {
                            'type': 'string'
                        },
                        'cc': {
                            'type': 'string',
                            'enum': CountryCodeList
                        },
                        'cityOrMunicipality': {
                            'type': 'string'
                        },
                        'position': {
                            'type': 'object',
                            'properties': {
                                'lat': {
                                    'type': 'number'
                                },
                                'lon': {
                                    'type': 'number'
                                }
                            },
                            'required': [
                                'lat',
                                'lon'
                            ],
                            'additionalProperties': False
                        }
                    },
                    'required': [
                        'address',
                        'cc',
                        'cityOrMunicipality',
                        'position'
                    ],
                    'additionalProperties': False
                },
                'name': {
                    'type': 'string'
                },
                'primaryImage': {
                    'type': 'string'
                }
            },
            'required': [
                'categories',
                'contact',
                'location',
                'name',
                'primaryImage'
            ],
            'additionalProperties': False
        }
    },
    'required': [
        'establishment'
    ],
    'additionalProperties': False
}

establishment_img_pattern = r'^.*/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$'


class EstablishmentCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)

        establishment_keys, next_cursor, more = models.Establishment.fetch_keys(limit, cursor, business_model.key)

        establishments = []
        for establishment_model in ndb.get_multi(establishment_keys):
            establishments.append(establishment_model.build())

        self.set_response('200 OK', data={
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'establishments': establishments
            }
        })

    def post(self, *ar, **kw):
        business_id = ar[0]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)

        self.check_if_non_empty_string(data['establishment']['name'])
        self.check_if_zero_length(models.Establishment.fetch_by_name(data['establishment']['name'], business_model.key))

        categories = []
        for category in data['establishment']['categories']:
            matchObj = self.match_regex(category_pattern, category)

            if matchObj.group(0):
                category_model = self.get_model(models.Category, matchObj.group(1))
                categories.append(category_model.key)
            else:
                self.abort(400)

        if data['establishment']['primaryImage']:
            matchObj = self.match_regex(business_img_pattern, data['establishment']['primaryImage'])

            if business_id == matchObj.group(1):
                image_model = self.get_model(models.Image, matchObj.group(2), parent=business_model)
                primaryImage = image_model.key
            else:
                self.abort(400)
        else:
            primaryImage = None

        establishment_key = models.Establishment(
            parent=business_model.key,
            categories=categories,
            contact=models.Contact(
                formattedPhone=data['establishment']['contact']['formattedPhone'],
                phone=data['establishment']['contact']['phone']),
            location=models.Location(
                address=data['establishment']['location']['address'],
                cc=data['establishment']['location']['cc'],
                cityOrMunicipality=data['establishment']['location']['cityOrMunicipality'],
                country=CountryCodeCountryDict[data['establishment']['location']['cc']],
                position=ndb.GeoPt(
                    data['establishment']['location']['position']['lat'],
                    data['establishment']['location']['position']['lon']),
                slippyPosition=from_coords(
                    lat=data['establishment']['location']['position']['lat'],
                    lon=data['establishment']['location']['position']['lon'])),
            name=data['establishment']['name'],
            primaryImage=primaryImage).put()

        establishment_model_url = '/businesses/' + business_id + '/establishments/' + urlhash.int_to_base62(establishment_key.integer_id())
        establishment_model = establishment_key.get()
        establishment_model.url = establishment_model_url
        establishment_model.put()

        self.set_response('201 Created', extra_headers=[['Location', establishment_model_url]])


class EstablishmentItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'establishment': establishment_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        data = self.validate_body(schema1)

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        self.check_if_non_empty_string(data['establishment']['name'])
        self.check_if_same(models.Establishment.fetch_by_name(data['establishment']['name'], business_model.key), establishment_model)

        categories = []
        for category in data['establishment']['categories']:
            matchObj = self.match_regex(category_pattern, category)

            if matchObj.group(0):
                category_model = self.get_model(models.Category, matchObj.group(1))
                categories.append(category_model.key)
            else:
                self.abort(400)
        establishment_model.categories = categories

        contact = models.Contact(
            formattedPhone=data['establishment']['contact']['formattedPhone'],
            phone=data['establishment']['contact']['phone'])
        establishment_model.contact = contact

        location = models.Location(
            address=data['establishment']['location']['address'],
            cc=data['establishment']['location']['cc'],
            cityOrMunicipality=data['establishment']['location']['cityOrMunicipality'],
            country=CountryCodeCountryDict[data['establishment']['location']['cc']],
            position=ndb.GeoPt(
                data['establishment']['location']['position']['lat'],
                data['establishment']['location']['position']['lon']),
            slippyPosition=from_coords(
                lat=data['establishment']['location']['position']['lat'],
                lon=data['establishment']['location']['position']['lon']))
        establishment_model.location = location

        establishment_model.name = data['establishment']['name']

        if data['establishment']['primaryImage']:
            matchObj = self.match_regex(business_img_pattern, data['establishment']['primaryImage'], strict=False)

            if matchObj and business_id == matchObj.group(1):
                image_model = self.get_model(models.Image, matchObj.group(2), parent=business_model)
                establishment_model.primaryImage = image_model.key
            else:
                matchObj = self.match_regex(establishment_img_pattern, data['establishment']['primaryImage'])

                if matchObj and business_id == matchObj.group(1) and establishment_id == matchObj.group(2):
                    image_model = self.get_model(models.Image, matchObj.group(3), parent=establishment_model)
                    establishment_model.primaryImage = image_model.key
                else:
                    self.abort(400, datail='Invalid image.')
        else:
            establishment_model.primaryImage = None

        establishment_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        establishment_model.key.delete()

        self.set_response('200 OK')


class EstablishmentItemImageCollectionHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        limit, cursor = self.get_limit_and_cursor()

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        image_keys, next_cursor, more = models.Image.fetch_keys(limit, cursor, establishment_model.key)

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
        establishment_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        image_key = models.Image(
            title=self.request.POST['title'].encode('ascii', 'ignore'),
            full_size_image=self.request.POST['image'].file.read(),
            parent=establishment_model.key).put()

        image_model_url = '/businesses/' + business_id + '/establishments/' + establishment_id + '/images/' + urlhash.int_to_base62(image_key.integer_id())
        image_model = image_key.get()
        image_model.url = image_model_url
        image_model.put()

        self.set_response('201 Created', extra_headers=[['Location', image_model_url]])


class EstablishmentItemImageItemHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=establishment_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'image': image_model.build()
            }
        })

    def put(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=establishment_model)

        image_model.title = self.request.POST['title'].encode('ascii', 'ignore')

        image_model.full_size_image = self.request.POST['image'].file.read()

        image_model.put()

        self.set_response('200 OK')

    def delete(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        image_id = ar[2]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=establishment_model)

        image_model.key.delete()

        self.set_response('200 OK')