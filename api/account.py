from google.appengine.api import mail
from google.appengine.ext import ndb
from webapp2_extras import auth
from webapp2_extras.appengine.auth.models import UserToken
from webapp2_extras.auth import InvalidAuthIdError, InvalidPasswordError

from handlers import basehandler
from models import models
from utils import account_utils, urlhash


class AccountCollectionHandler(basehandler.BaseHandler):

    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'account': {
                    'type': 'object',
                    'properties': {
                        'username' : {
                            'type': 'string'
                        },
                        'email': {
                            'type': 'string'
                        },
                        'password': {
                            'type': 'string'
                        }
                    },
                    'required': [
                        'username',
                        'email',
                        'password'
                    ],
                    'additionalProperties': False
                }
            },
            'required': [
                'account'
            ],
            'additionalProperties': False
        }

        data = self.validate_body(schema)

        username = str(data['account']['username'])
        email = str(data['account']['email'])
        password = str(data['account']['password'])

        success, info = self.user_model.create_user(username,
            unique_properties=['email_address'],
            email_address=email, password_raw=password,
            verified=False)

        if success:
            user_id = info.get_id()
            token = self.user_model.create_signup_token(user_id)

            sender_address = "<dilimanlabs@gmail.com>"
            subject = "Account Verification"
            body = """
            pitstop.dilimanlabs.com/accounts/%s/verify/%s/
            """ % (user_id, token)

            mail.send_mail(sender_address, email, subject, body)

            response_code = '201 Created'
            self.set_response(response_code)
        else:
            self.abort(401)


class AccountItemHandler(basehandler.BaseHandler):

    @basehandler.user_required
    def get(self, *ar, **kw):
        auth = self.auth
        data = auth.get_session_data()
        user_token = models.User.token_model.get_key(data['user_id'], 'auth', data['token']).get()

        if user_token:
            user = self.user
            self.set_response('200', data={"message": "You are logged in as " + user.auth_ids[0]})
        else:
            self.abort(401)


class AccountItemImageCollectionHandler(basehandler.BaseHandler):
    def post(self, *ar, **kw):
        accountId_id = ar[0]

        accountId_key = ndb.Key(models.AccountId, accountId_id)
        accountId_obj = accountId_key.get()

        if not accountId_obj:
            self.abort(404)

        accountBody_obj = None
        if accountId_obj.accountBody_key:
            accountBody_obj = accountId_obj.accountBody_key.get()

        if not accountBody_obj:
            self.abort(404)

        authToken = self.get_authToken(accountBody_obj.key)

        img_key = models.Image(title=self.request.POST['title'].encode('ascii', 'ignore'),
                               full_size_image=self.request.POST['image'].file.read(), parent=accountBody_obj.key).put()
        img_id = urlhash.int_to_base62(img_key.integer_id())

        self.response.headers.add_header('Access-Control-Allow-Origin', '*')
        self.response.headers.add_header('Location', '/accnt/' + urlhash.int_to_base62(accountBody_obj.key.integer_id()) + '/img/' + img_id)
        self.response.status = '201 Created'


class SignUpVerificationHandler(basehandler.BaseHandler):

    def get(self, *ar, **kw):
        user = None
        user_id = ar[0]
        signup_token = ar[1]

        # it should be something more concise like
        # self.auth.get_user_by_token(user_id, signup_token)
        # unfortunately the auth interface does not (yet) allow to manipulate
        # signup tokens concisely
        user, ts = self.user_model.get_by_auth_token(int(user_id), signup_token, 'signup')

        if not user:
            self.abort(404)

        # store user data in the session
        self.auth.set_session(self.auth.store.user_to_dict(user), remember=True)

        # remove signup token, we don't want users to come back with an old link
        self.user_model.delete_signup_token(user.get_id(), signup_token)

        if not user.verified:
            user.verified = True
            user.put()

        # User email address has been verified.

        self.set_response('200 OK')


class LoginHandler(basehandler.BaseHandler):

    def post(self):
        schema = {
            'type': 'object',
            'properties': {
                'account': {
                    'type': 'object',
                    'properties': {
                        'username' : {
                            'type': 'string'
                        },
                        'password': {
                            'type': 'string'
                        }
                    },
                    'required' : [
                        'username',
                        'password'
                    ],
                    'additionalProperties': False
                }
            },
            'required': [
                'account'
            ],
            'additionalProperties': False
        }

        data = self.validate_body(schema)

        username = str(data['account']['username'])
        password = str(data['account']['password'])

        try:
            self.auth.get_user_by_password(username, password, remember=True, save_session=True)
            response_code = '200'
            self.set_response(response_code)
        except (InvalidAuthIdError, InvalidPasswordError) as e:
            #logging.info('Login failed for user %s because of %s', username, type(e))
            self.abort(401)


class LogoutHandler(basehandler.BaseHandler):

    @basehandler.user_required
    def get(self):
        self.auth.unset_session()
        self.set_response('200', data={"message": "Logout successful."})