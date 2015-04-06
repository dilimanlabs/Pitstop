import webapp2
from handlers.handler import Handler
import json

from google.appengine.ext import ndb
from models import models
from utils import urlhash

from handlers import basehandler

class EstablishmentItemHandler(basehandler.BaseHandler):

    @basehandler.get
    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)

        establishment = establishment_model.build()

        #page_keys = models.Page.fetch_all_keys(parent=business_model) # TODO

        #pages = []
        #for page_model in ndb.get_multi(page_keys):
        #    pages.append(page_model.build(resolved=True))

        #establishment['pages'] = pages

        self.response.cache_control.no_cache = None
        self.response.cache_control.public = True
        self.response.cache_control.max_age = 3600
        return None, {
            'meta': self.get_meta(),
            'response': {
                'establishment': establishment
            }
        }