import json

from google.appengine.ext import ndb

from handlers import basehandler
from models import models
from utils import account_utils
from utils import urlhash


class CheckIDHandler(basehandler.BaseHandler):
    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'id': {
                    'type': 'string'
                }
            },
            'required': [
                'id'
            ],
            'additionalProperties':False
            }

        data = self.validate_body(schema)

        id = data['id']

        error = account_utils.check_id(id)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'error': error
            }
        })


class CheckPasswordHandler(basehandler.BaseHandler):
    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'password': {
                    'type': 'string'
                }
            },
            'required': [
                'password'
            ],
            'additionalProperties':False
            }

        data = self.validate_body(schema)

        password = data['password']

        error = account_utils.check_password(password)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'error': error
            }
        })


class CheckNameHandler(basehandler.BaseHandler):
    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'name': {
                    'type': 'string'
                }
            },
            'required': [
                'name'
            ],
            'additionalProperties':False
            }

        data = self.validate_body(schema)

        name = data['name']

        error = account_utils.check_name(name)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'error': error
            }
        })


class LoginHandler(basehandler.BaseHandler):
    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'account': {
                    'type': 'object',
                    'properties': {
                        'id' : {
                            'type': 'string'
                        },
                        'password': {
                            'type': 'string'
                        }
                    },
                    'required' : [
                        'id',
                        'password'
                    ],
                    'additionalProperties': False
                }
            },
            'required': [
                'account'
            ],
            'additionalProperties': False
        }

        data = self.validate_body(schema)

        id = str(data['account']['id'])
        password = str(data['account']['password'])

        authToken, message = models.AccountId.authenticate(id=id, password=password)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'authToken': authToken,
                'message': message
            }
        })


class AccountCollectionHandler(basehandler.BaseHandler):
    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'account': {
                    'type': 'object',
                    'properties': {
                        'id' : {
                            'type': 'string'
                        },
                        'name': {
                            'type': 'string'
                        },
                        'password': {
                            'type': 'string'
                        }
                    },
                    'required': [
                        'id',
                        'name',
                        'password'
                    ],
                    'additionalProperties': False
                }
            },
            'required': [
                'account'
            ],
            'additionalProperties': False
        }

        data = self.validate_body(schema)

        id = str(data['account']['id'])
        name = str(data['account']['name'])
        password = str(data['account']['password'])

        authToken = models.AccountId.create(id, name, password)

        if authToken:
            response_code = '201 Created'
            extra_headers = [['Location', '/account/' + id]]
        else:
            response_code = '200 OK'
            extra_headers = None

        self.set_response(response_code, extra_headers=extra_headers, data={
            'meta': self.get_meta(),
            'response': {
                'authToken': authToken
            }
        })


class AccountItemHandler(basehandler.BaseHandler):
    def get(self):
        pass

class AccountItemImageCollectionHandler(basehandler.BaseHandler):
    def post(self, *ar, **kw):
        accountId_id = ar[0]

        accountId_key = ndb.Key(models.AccountId, accountId_id)
        accountId_obj = accountId_key.get()

        if not accountId_obj:
            self.abort(404)

        accountBody_obj = None
        if accountId_obj.accountBody_key:
            accountBody_obj = accountId_obj.accountBody_key.get()

        if not accountBody_obj:
            self.abort(404)

        authToken = self.get_authToken(accountBody_obj.key)

        img_key = models.Image(title=self.request.POST['title'].encode('ascii', 'ignore'),
                               full_size_image=self.request.POST['image'].file.read(), parent=accountBody_obj.key).put()
        img_id = urlhash.int_to_base62(img_key.integer_id())

        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers.add_header('Location', '/accnt/' + urlhash.int_to_base62(accountBody_obj.key.integer_id()) + '/img/' + img_id)
        self.response.status = '201 Created'