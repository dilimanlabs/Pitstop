from handlers import basehandler
from models import models


class BusinessItemProductItemHandler(basehandler.BaseHandler):

    @basehandler.get
    def get(self, *ar, **kw):
        business_id = ar[0]
        product_id = ar[1]

        business_model = self.get_model(models.Business, business_id)
        product_model = self.get_model(models.Product, product_id, parent=business_model)

        self.set_response('200 OK', data={
            'meta': self.get_meta(),
            'response': {
                'product': product_model.build()
            }
        })