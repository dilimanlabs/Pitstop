from google.appengine.ext import ndb
from protorpc import message_types
from protorpc import messages
from protorpc import remote

from models import models

class BusinessPageForm(messages.Message):
    fullName = messages.StringField(1, required=True)
    position = messages.StringField(2, required=True)
    phoneNumber = messages.StringField(3, required=True)
    emailAddress = messages.StringField(4, required=True)
    businessSize = messages.StringField(5, required=True)
    businessName = messages.StringField(6, required=True)
    businessType = messages.StringField(7, required=True)
    businessAddress = messages.StringField(8, required=True)
    businessWebsite = messages.StringField(9, required=True)


class CreateBusinessPageFormRequest(messages.Message):
    businesspageform = messages.MessageField(BusinessPageForm, 1, required=True)

class PostService(remote.Service):

    @remote.method(CreateBusinessPageFormRequest, message_types.VoidMessage)
    def create(self, request):
        models.BusinessPageForm(
            fullName=request.businesspageform.fullName,
            position=request.businesspageform.position,
            phoneNumber=request.businesspageform.phoneNumber,
            emailAddress=request.businesspageform.emailAddress,
            businessSize=request.businesspageform.businessSize,
            businessName=request.businesspageform.businessName,
            businessType=request.businesspageform.businessType,
            businessAddress=request.businesspageform.businessAddress,
            businessWebsite=request.businesspageform.businessWebsite).put()

        return message_types.VoidMessage()