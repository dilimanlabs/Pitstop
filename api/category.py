from google.appengine.ext import ndb
from models import models

from handlers import basehandler

class CategoryCollectionHandler(basehandler.BaseHandler):

    @basehandler.get_list
    def get(self, *ar, **kw):
        limit = 20#kw['limit']
        category_keys, next_cursor, more = models.Category.fetch_keys(limit,  kw['cursor'])

        categories = []
        for category_model in ndb.get_multi(category_keys):
            categories.append(category_model.build())

        return None, {
            'meta': self.get_meta(more=more, next_cursor=next_cursor),
            'response': {
                'categories': categories
            }
        }