import webapp2

from api import account, business, category, establishment, marker, page, product
from handlers.basehandler import BaseHandler


class MainHandler(BaseHandler):
    def get(self):
        self.render('index.html')


class BusinessHandler(BaseHandler):
    def get(self):
        self.render('business.html')


class MapHandler(BaseHandler):
    def get(self):
        self.render('map.html')


config = {
    'webapp2_extras.auth': {
        'user_model': 'models.User',
        'user_attributes': []
    },
    'webapp2_extras.sessions': {
        'secret_key': 'Tanya Patricia Tiongson Allas'
    }
}


app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/business', BusinessHandler),
    ('/map.*', MapHandler),

    (r'^.*/accounts/([a-zA-Z0-9]+)/verify/([a-zA-Z0-9]+)/?$', account.SignUpVerificationHandler),

    (r'^.*/api/check_id/?$', account.CheckIDHandler),
    (r'^.*/api/check_password/?$', account.CheckPasswordHandler),
    (r'^.*/api/check_name/?$', account.CheckNameHandler),

    (r'^.*/api/categories/?$', category.CategoryCollectionHandler),

    (r'^.*/api/login/?$', account.LoginHandler),
    (r'^.*/api/logout/?$', account.LogoutHandler),

    (r'^.*/api/accounts/?$', account.AccountCollectionHandler),
    (r'^.*/api/accounts/([a-zA-Z0-9]+)/?$', account.AccountItemHandler),
    (r'^.*/api/accounts/([a-zA-Z0-9]+)/images/?$', account.AccountItemImageCollectionHandler),

    (r'^.*/api/markers/([0-9]+)/([0-9]+)/([0-9]+)/?$', marker.MarkerCollectionHandler),

    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/?$', business.BusinessItemHandler),
    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/?$', establishment.EstablishmentItemHandler),
    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/pages/?$', page.BusinessItemPageCollectionHandler),
    (r'^.*/api/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/?$', product.BusinessItemProductItemHandler),
], debug=True, config=config)