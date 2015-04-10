import webapp2
from handlers.handler import Handler
import json

from google.appengine.api import search
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

class SearchHandler(basehandler.BaseHandler):

    @basehandler.get
    def get(self, *ar, **kw):
        query = None

        if 'query' in self.request.GET:
            try:
                query = str(self.request.GET['query'])
            except:
                self.abort(400)
        else:
            self.abort(400)

        establishments = []
        try:
            index = search.Index("Establishments_Index")
            search_results = index.search(query)
            for doc in search_results:
                matchObj = self.match_regex(r'^.*/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/?$', doc.doc_id)
                business_model = self.get_model(models.Business, matchObj.group(1))
                establishment_model = self.get_model(models.Establishment, matchObj.group(2), parent=business_model)
                establishments.append(establishment_model.build())
        except search.Error:
            pass

        self.response.cache_control.no_cache = None
        self.response.cache_control.public = True
        self.response.cache_control.max_age = 3600
        return None, {
            'meta': self.get_meta(),
            'response': {
                'establishments': establishments
            }
        }