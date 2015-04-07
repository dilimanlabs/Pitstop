import webapp2

from google.appengine.api import users
from google.appengine.ext import deferred

from admin import workit
from admin.api import category, business, establishment, product, page
from handlers import handler


class MainHandler(handler.Handler):
    def get(self):
        user = users.get_current_user()

        if user:
            self.render('admin.html', userId=user.nickname())
        else:
            self.redirect(users.create_login_url(self.request.uri))

class WorkItHandler(webapp2.RequestHandler):
    def get(self):
        deferred.defer(workit.WorkIt)
        self.response.out.write('Schema migration successfully initiated.')


app = webapp2.WSGIApplication([
    (r'^.*/admin/api/categories/?$', category.CategoryCollectionHandler),
    (r'^.*/admin/api/categories/([a-zA-Z0-9]{11})/?$', category.CategoryItemHandler),
    (r'^.*/admin/api/categories/([a-zA-Z0-9]{11})/images/?$', category.CategoryItemImageCollectionHandler),
    (r'^.*/admin/api/categories/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$', category.CategoryItemImageItemHandler),
    (r'^.*/admin/api/businesses/?$', business.BusinessCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/?$', business.BusinessItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/images/?$', business.BusinessItemImageCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$', business.BusinessItemImageItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/establishments/?$', establishment.EstablishmentCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/?$', establishment.EstablishmentItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/images/?$', establishment.EstablishmentItemImageCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$', establishment.EstablishmentItemImageItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/products/?$', product.ProductCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/?$', product.ProductItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/images/?$', product.ProductItemImageCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$', product.ProductItemImageItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/pages/?$', page.PageCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/pages/([a-zA-Z0-9]{11})/?$', page.PageItemHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/pages/([a-zA-Z0-9]{11})/images/?$', page.PageItemImageCollectionHandler),
    (r'^.*/admin/api/businesses/([a-zA-Z0-9]{11})/pages/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11})/?$', page.PageItemImageItemHandler),

    #('/admin/workit', WorkItHandler),
    ('/admin.*', MainHandler),

], debug=True)