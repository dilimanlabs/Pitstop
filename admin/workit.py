import logging

from google.appengine.ext import deferred
from google.appengine.ext import ndb

from models import models
from utils import urlhash

BATCH_SIZE = 100  # ideal batch size may vary based on entity size.

def WorkIt(cursor=None, num_updated=0):
    #Dining
    # aaAbP7IO1me

    #Dealership
    # aaAfmEbcXoy

    #Battery
    # aaAmGkukKho

    #Air & Water
    # aaAmcywTuUu

    #Servicing
    # aaAqpp3ElAO

    #Toilet
    # aaAr09qWgVM

    #Tire Care
    # aaAu93qLMjc

    #Cash
    # aaxFvA6sCei

    #Parking
    # aaxMPhpAo68

    #Tire
    # aaxsx67KMQS

    #ATM
    # aaxxLOvkieO

    #Fuel
    # aaz2pacu708

    #Carwash
    # aaz7CRz4Do4

    #Convenience Store
    # aaz9Iq08oEK

    #id = 'aaxtUtVuYIm' #motolite
    #image_id = 'aaAd8fYD7yS'

    #id = 'aaz3Lw0fjSC' # yokohama
    #image_id = 'aazW4aHTNF6'

    #id = 'aaxGYb5KRZQ' # petron
    #image_id = 'aaAmAC7roJM'

    #id = 'aaAlhw4X3xA' # rapide
    #image_id = 'aaAewzdwpCC'

    id = '' #shell
    image_id = ''

    biz_model = models.Business.get_by_id(id=urlhash.base62_to_int(id))

    query = models.Product.query(ancestor=biz_model.key)
    results, cursor, more = query.fetch_page(BATCH_SIZE, start_cursor=cursor)

    #query = models.Page.query()
    #results, cursor, more = query.fetch_page(BATCH_SIZE, start_cursor=cursor)

    to_put = []
    for p in results:
        if p.url == '/businesses/aaxtUtVuYIm/products/aaxWcF0i7EW': # MM
            intents = []
            intents.append(models.Intent(action='ACTION_DIAL',
                                         name='tel:',
                                         value='3706686'))

            p.intents = intents

            to_put.append(p)
        elif p.url == '/businesses/aaxtUtVuYIm/products/aaAfUhezHGK':# !MM
            intents = []
            intents.append(models.Intent(action='ACTION_DIAL',
                                         name='tel:',
                                         value='1800103706686'))

            p.intents = intents

            to_put.append(p)

        #image_model = models.Image.get_by_id(id=urlhash.base62_to_int(image_id), parent=biz_model.key)
        #p.primaryImage = image_model.key

        #p.categories = [models.Category.get_by_id(id=urlhash.base62_to_int('aaAqpp3ElAO')).key]

        #delattr(p,"imageUrl")

        #to_put.append(p)

    if to_put:
        ndb.put_multi(to_put)
        num_updated += len(to_put)
        logging.debug('Put %d entities to Datastore for a total of %d', len(to_put), num_updated)
        deferred.defer(WorkIt, cursor=cursor, num_updated=num_updated)
    else:
        logging.debug('UpdateSchema complete with %d updates!', num_updated)