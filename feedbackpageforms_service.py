from google.appengine.ext import ndb
from protorpc import message_types
from protorpc import messages
from protorpc import remote

from models import models

class FeedbackPageForm(messages.Message):
    fullName = messages.StringField(1, required=True)
    emailAddress = messages.StringField(2, required=True)
    phoneNumber = messages.StringField(3, required=True)
    businessName = messages.StringField(4, required=True)
    comments = messages.StringField(5, required=True)

class CreateFeedbackPageForm(messages.Message):
    feedbackpageform = messages.MessageField(FeedbackPageForm, 1, required=True)

class PostService(remote.Service):

    @remote.method(CreateFeedbackPageForm, message_types.VoidMessage)
    def create(self, request):
        models.FeedbackPageForm(
            fullName=request.feedbackpageform.fullName,
            phoneNumber=request.feedbackpageform.phoneNumber,
            emailAddress=request.feedbackpageform.emailAddress,
            businessName=request.feedbackpageform.businessName,
            comments=request.feedbackpageform.comments).put()

        return message_types.VoidMessage()