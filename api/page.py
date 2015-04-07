import webapp2
from handlers.handler import Handler
import json

from google.appengine.ext import ndb
from models import models
from utils import urlhash

from handlers import basehandler

class BusinessItemPageCollectionHandler(basehandler.BaseHandler):

    @basehandler.get
    def get(self, *ar, **kw):
        business_id = ar[0]

        business_model = self.get_model(models.Business, business_id)

        page_keys = models.Page.fetch_all_keys(parent=business_model) # TODO

        pages = []
        for page_model in ndb.get_multi(page_keys):
            pages.append(page_model.build(resolved=True))

        self.response.cache_control.no_cache = None
        self.response.cache_control.public = True
        self.response.cache_control.max_age = 3600
        return None, {
            'meta': self.get_meta(),
            'response': {
                'pages': pages
            }
        }