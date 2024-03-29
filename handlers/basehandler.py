import fix_path

import jinja2
import json
import os
import re
import time
import webapp2

from functools import wraps
from google.appengine.datastore.datastore_query import Cursor
from libs import jsonschema
from models import models
from utils import urlhash
from webapp2_extras import auth, sessions


template_dir = os.path.join(os.path.dirname(__file__), '../static/templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), extensions=['jinja2.ext.autoescape'], autoescape = True)
#jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir), extensions=['jinja2.ext.autoescape'], variable_start_string='((', variable_end_string='))', autoescape=True)


def create(func):

    @wraps(func)
    def create(self, *ar, **kw):

        extra_headers, data = func(self, *ar, **kw)

        self.set_response('201 Created', extra_headers=extra_headers, data=data)

    return create

def get(func):

    @wraps(func)
    def get(self, *ar, **kw):

        extra_headers, data = func(self, *ar, **kw)

        self.set_response('200 OK', extra_headers=extra_headers, data=data)

    return get


def get_list(func):

    @wraps(func)
    def get_list(self, *ar, **kw):
        kw['limit'], kw['cursor'] = self.get_limit_and_cursor()

        extra_headers, data = func(self, *ar, **kw)

        self.set_response('200 OK', extra_headers=extra_headers, data=data)

    return get_list


def user_required(func):
    """
        Requires that a user be logged in to access the resource
    """
    @wraps(func)
    def check_login(self, *ar, **kw):
        if not self.user:
            self.abort(401)
        else:
            return func(self, *ar, **kw)

    return check_login


class BaseHandler(webapp2.RequestHandler):

    def __init__(self, request, response):
        super(BaseHandler, self).__init__(request, response)


    def write(self, *a, **kw):
        self.response.write(*a, **kw)


    def render_str(self, template, **params):
        t = jinja_env.get_template(template)
        return t.render(params)


    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))


    @webapp2.cached_property
    def session_store(self):
        return sessions.get_store(request=self.request)


    @webapp2.cached_property
    def session(self):
        return self.session_store.get_session(backend='datastore')


    def dispatch(self):
        try:
            super(BaseHandler, self).dispatch()
        finally:
            # Save the session after each request
            self.session_store.save_sessions(self.response)


    @webapp2.cached_property
    def auth(self):
        return auth.get_auth(request=self.request)


    @webapp2.cached_property
    def user(self):
        return self.auth.get_user_by_session()


    @webapp2.cached_property
    def user_model(self):
        user_model, timestamp = self.auth.store.user_model.get_by_auth_token(
                self.user['user_id'],
                self.user['token']) if self.user else (None, None)

        return user_model


    def get(self, *ar, **kw):
        self.abort(405)


    def put(self, *ar, **kw):
        self.abort(405)


    def post(self, *ar, **kw):
        self.abort(405)


    def delete(self, *ar, **kw):
        self.abort(405)


    def get_limit_and_cursor(self):
        GET_params = self.request.GET

        limit = 10
        cursor = None

        if 'limit' in GET_params:
            try:
                limit = int(GET_params['limit'])
            except:
                self.abort(400)

        if 'cursor' in GET_params:
            try:
                cursor = Cursor(urlsafe=GET_params['cursor'].encode('ascii', 'ignore'))
            except:
                self.abort(400)

        return limit, cursor


    def set_response(self, status_code, extra_headers=None, data=None):
        self.response.status = status_code
        self.response.headers.add_header('Access-Control-Allow-Origin', '*')

        if extra_headers:
            for extra_header in extra_headers:
                self.response.headers.add_header(extra_header[0], extra_header[1])

        if data:
            self.response.headers['Content-Type'] = 'application/json'

            self.response.out.write(json.dumps(data))


    def validate_body(self, schema):
        data = json.loads(self.request.body)

        try:
            jsonschema.validate(data, schema)
            return data
        except jsonschema.ValidationError:
            self.abort(400, detail='Invalid request body. Validation Error.')
        except jsonschema.SchemaError:
            self.abort(500, detail='Invalid request body. Schema Error.')
        except ValueError:
            self.abort(400, detail='Invalid request body. Value Error.')

    def check_if_non_empty_string(self, string):
        if string.strip() == '':
            self.abort(400)

    def check_if_nonzero_length(self, list):
        if len(list) == 0:
            self.abort(400)

    def check_if_zero_length(self, list):
        if len(list) != 0:
            self.abort(400)

    def get_model(self, model_class, model_id, parent=None, strict=True):
        model = None
        parent_key = None
        if parent:
            parent_key = parent.key
        try:
            model = model_class.get_by_id(id=urlhash.base62_to_int(model_id), parent=parent_key)
        except:
            self.abort(404)

        if strict and not model:
            message = model_class.__name__ + ' : ' + model_id
            if parent:
                message += '\nwith parent ' + parent.__class__.__name__ + ' : ' + urlhash.int_to_base62(parent_key.integer_id())
            self.abort(404, detail=message)
        else:
            return model

    # find a better name
    def check_if_same(self, keys, model):
        if len(keys) == 0:
            pass # good
        elif len(keys) == 1 and keys[0].integer_id() == model.key.integer_id():
            pass # good
        else:
            self.abort(400)

    def match_regex(self, pattern, value, strict=True):
        matchObj = re.match(pattern, value)
        if strict and not matchObj:
            message = value + ' does not match pattern : ' + pattern
            self.abort(400, detail=message)

        return matchObj

    def get_authToken(self, parent=None):
        authToken = str(self.request.headers.get('authToken'))

        if not authToken:
            self.abort(401)

        if not models.Session.validate(authToken, parent):
            self.abort(401)

        return authToken

    @staticmethod
    def get_primaryImage(primaryImage_key):
        primaryImage = ''
        try:
            primaryImage_model = primaryImage_key.get()
            primaryImage = primaryImage_model.url
        except:
            pass

        return primaryImage

    @staticmethod
    def get_meta(more=None, next_cursor=None):
        meta = {
            'timestamp': time.time()
        }

        if more and next_cursor:
            meta['next_cursor'] = next_cursor.urlsafe()

        return meta