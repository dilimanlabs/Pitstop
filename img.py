import webapp2
from google.appengine.api import images

from functools import wraps
from models import models
from handlers.basehandler import BaseHandler


def get_image(func):

    @wraps(func)
    def get_image(self, *ar, **kw):
        image_model, image_extension = func(self, *ar, **kw)

        image = images.Image(image_model.full_size_image)
        if 'height' in self.request.GET and 'width' in self.request.GET:
            try:
                height = int(self.request.GET['height'])
                width = int(self.request.GET['width'])
                image.resize(height=height, width=width)
            except:
                pass

        image.rotate(0)

        image_final = None
        if image_extension == 'jpg' or image_extension == 'jpeg':
            image_final = image.execute_transforms(output_encoding=images.JPEG)
            self.response.headers['Content-Type'] = 'image/jpeg'
        elif image_extension == 'png':
            image_final = image.execute_transforms(output_encoding=images.PNG)
            self.response.headers['Content-Type'] = 'image/png'
        elif image_extension == 'webp':
            image_final = image.execute_transforms(output_encoding=images.WEBP)
            self.response.headers['Content-Type'] = 'image/webp'

        if image_final:
            self.response.headers.add_header("Access-Control-Allow-Origin", "*")
            self.response.out.write(image_final)
            self.response.status = '200 OK'
        else:
            self.error(404)

    return get_image


class ImageHandler(BaseHandler):

    @get_image
    def get(self, *ar, **kw):
        image_id = ar[0]
        image_extension = ar[1].lower()

        image_model = self.get_model(models.Image, image_id)

        return image_model, image_extension


class BusinessImageHandler(BaseHandler):

    @get_image
    def get(self, *ar, **kw):
        business_id = ar[0]
        image_id = ar[1]
        image_extension = ar[2].lower()

        business_model = self.get_model(models.Business, business_id)
        image_model = self.get_model(models.Image, image_id, parent=business_model)

        return image_model, image_extension


class ProductImageHandler(BaseHandler):

    @get_image
    def get(self, *ar,**kw):
        business_id = ar[0]
        product_id = ar[1]
        image_id = ar[2]
        image_extension = ar[3].lower()

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=product_model)

        return image_model, image_extension


class PageImageHandler(BaseHandler):

    @get_image
    def get(self, *ar,**kw):
        business_id = ar[0]
        page_id = ar[1]
        image_id = ar[2]
        image_extension = ar[3].lower()

        business_model = self.get_model(models.Business, business_id)
        page_model = self.get_model(models.Page, page_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=page_model)

        return image_model, image_extension


class EstablishmentImageHandler(BaseHandler):

    @get_image
    def get(self, *ar, **kw):
        business_id = ar[0]
        establishment_id = ar[1]
        image_id = ar[2]
        image_extension = ar[3].lower()

        business_model = self.get_model(models.Business, business_id)
        establishment_model = self.get_model(models.Establishment, establishment_id, parent=business_model)
        image_model = self.get_model(models.Image, image_id, parent=establishment_model)

        return image_model, image_extension


class AccountImageHandler(BaseHandler):

    @get_image
    def get(self, *ar, **kw):
        accountId_id = ar[0]
        image_id = ar[1]
        image_extension = ar[2].lower()

        accountId_obj = self.get_model(models.AccountId, accountId_id)

        accountBody_obj = None
        if accountId_obj.accountBody_key:
            accountBody_obj = accountId_obj.accountBody_key.get()

        if not accountBody_obj:
            self.abort(404)

        image_model = self.get_model(models.Image, image_id, parent=accountBody_obj)

        return image_model, image_extension


app = webapp2.WSGIApplication([
    (r'^.*/businesses/([a-zA-Z0-9]{11})/products/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', ProductImageHandler),
    (r'^.*/businesses/([a-zA-Z0-9]{11})/pages/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', PageImageHandler),
    (r'^.*/businesses/([a-zA-Z0-9]{11})/establishments/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', EstablishmentImageHandler),
    (r'^.*/businesses/([a-zA-Z0-9]{11})/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', BusinessImageHandler),
    (r'^.*/accounts/([a-zA-Z0-9]+)/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', AccountImageHandler),
    (r'^.*/images/([a-zA-Z0-9]{11}).(jpg|jpeg|png|webp)/?$', ImageHandler),
], debug=True)