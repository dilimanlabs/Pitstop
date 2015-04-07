import json

from google.appengine.ext import ndb

import logging
from handlers import basehandler
from models import models


class MarkerCollectionHandler(basehandler.BaseHandler):

    @basehandler.get
    def get(self, *ar, **kw):
        zoom = str(ar[0])
        x = str(ar[1])
        y = str(ar[2])

        #authToken = self.get_authToken()

        limit, cursor = self.get_limit_and_cursor()

        tile = zoom + '/' + x + '/' + y
        keys, next_cursor, more = models.Establishment.query(models.Establishment.location.slippyPosition == tile)\
            .order(models.Establishment._key).fetch_page(limit, start_cursor=cursor, keys_only=True)

        establishments = []
        for establishment_model in ndb.get_multi(keys):
            establishments.append(establishment_model.build())

        self.response.cache_control.no_cache = None
        self.response.cache_control.public = True
        self.response.cache_control.max_age = 3600
        return None, {
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'tile': tile,
                'establishments': establishments
            }
        }