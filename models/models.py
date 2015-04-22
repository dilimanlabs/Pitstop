from datetime import datetime

from google.appengine.ext import ndb
from google.net.proto.ProtocolBuffer import ProtocolBufferDecodeError

from utils import account_utils, session_utils, urlhash
from utils.country_utils import CountryCodeList, CountryList

import webapp2_extras.appengine.auth.models as auth_models


class Image(ndb.Expando):
    full_size_image = ndb.BlobProperty(indexed=False, required=True)
    title = ndb.StringProperty(indexed=True, required=False)
    url = ndb.StringProperty(indexed=True, required=False)  # unique
    parent_key = ndb.ComputedProperty(lambda self: self.key.parent())

    @classmethod
    def fetch_keys(cls, limit, start_cursor, ancestor):
        return cls.query(cls.parent_key==ancestor).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    @classmethod
    def get(cls, image_key):
        image = ''
        try:
            image_model = image_key.get()
            image = image_model.url
        except:
            pass

        return image

    def build(self):
        return {
            'title': self.title,
            'url': self.url
        }


class Business(ndb.Model):
    adminUsers = ndb.StringProperty(repeated=True, indexed=False)
    description = ndb.StringProperty(indexed=False, required=False)
    name = ndb.StringProperty(indexed=True, required=False)
    primaryImage = ndb.KeyProperty(kind=Image, indexed=False, required=False)
    registeredName = ndb.StringProperty(indexed=True, required=True)  # unique
    url = ndb.StringProperty(indexed=True, required=False)  # unique

    @classmethod
    def fetch_by_registeredName(cls, registeredName):
        return cls.query(cls.registeredName == registeredName).order(cls.registeredName).fetch(keys_only=True)

    @classmethod
    def fetch_keys(cls, limit, start_cursor):
        return cls.query().order(cls.registeredName).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    def build(self):
        return {
            'adminUsers': self.adminUsers,
            'description': self.description,
            'name': self.name,
            'primaryImage': Image.get(self.primaryImage),
            'registeredName': self.registeredName,
            'url': self.url
        }


class Category(ndb.Model):
    description = ndb.StringProperty(indexed=False, required=False)
    name = ndb.StringProperty(indexed=True, required=True)  # unique
    pluralName = ndb.StringProperty(indexed=False, required=True)
    url = ndb.StringProperty(indexed=True, required=False)  # unique
    primaryImage = ndb.KeyProperty(kind=Image, indexed=False, required=False)

    @classmethod
    def fetch_by_name(cls, name):
        return cls.query(cls.name == name).order(cls.name).fetch(keys_only=True)

    @classmethod
    def fetch_keys(cls, limit, start_cursor):
        return cls.query().order(cls.name).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    def build(self):
        return {
            'description': self.description,
            'name': self.name,
            'pluralName': self.pluralName,
            'primaryImage': Image.get(self.primaryImage),
            'url': self.url
        }


class Intent(ndb.Model):
    action = ndb.StringProperty(indexed=False, required=True)
    name = ndb.StringProperty(indexed=False, required=True)
    value = ndb.StringProperty(indexed=False, required=True)

    def build(self):
        return {
            'action': self.action,
            'name': self.name,
            'value': self.value
        }


class Product(ndb.Model):
    description = ndb.StringProperty(indexed=False, required=False)
    intents = ndb.StructuredProperty(Intent, repeated=True, indexed=False)
    isPromo = ndb.BooleanProperty(indexed=False, required=True)  # flag
    isVisible = ndb.BooleanProperty(indexed=False, required=True)  # flag
    name = ndb.StringProperty(indexed=True, required=True)  # unique for parent
    order = ndb.IntegerProperty(indexed=True, required=False)  # used as sort order in json
    primaryImage = ndb.KeyProperty(kind=Image, indexed=False, required=False)
    url = ndb.StringProperty(indexed=True, required=False)  # unique for parent

    @classmethod
    def fetch_by_name(cls, name, ancestor):
        return cls.query(cls.name == name, ancestor=ancestor).order(cls.name).fetch(keys_only=True)

    @classmethod
    def fetch_keys(cls, limit, start_cursor, ancestor):
        return cls.query(ancestor=ancestor).order(cls.name).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    def build(self):
        intents = []
        for intent_model in self.intents:
            intents.append(intent_model.build())

        return {
                'description': self.description,
                'intents': intents,
                'isPromo': self.isPromo,
                'isVisible': self.isVisible,
                'name': self.name,
                'order': self.order,
                'primaryImage': Image.get(self.primaryImage),
                'url': self.url
            }


class Page(ndb.Model):
    description = ndb.StringProperty(indexed=False, required=False)
    order = ndb.IntegerProperty(indexed=True, required=False)  # used as sort order in json
    primaryImage = ndb.KeyProperty(kind=Image, indexed=False, required=False)
    products = ndb.KeyProperty(kind=Product, repeated=True, indexed=False)
    title = ndb.StringProperty(indexed=True, required=True)  # unique for parent
    url = ndb.StringProperty(indexed=True, required=False)  # unique for parent
    parent_key = ndb.ComputedProperty(lambda self: self.key.parent())

    @classmethod
    def fetch_by_title(cls, title, ancestor):
        return cls.query(cls.title == title, ancestor=ancestor).order(cls.title).fetch(keys_only=True)

    @classmethod
    def fetch_keys(cls, limit, start_cursor, parent):
        return cls.query(cls.parent_key == parent.key).order(cls.title).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    @classmethod
    def fetch_all_keys(cls, parent):
        return cls.query(cls.parent_key == parent.key).order(cls.order).fetch(keys_only=True)

    def build(self, resolved=False):
        products = []
        for product_model in ndb.get_multi(self.products):
            if resolved:
                products.append(product_model.build())
            else:
                products.append(product_model.url)

        return {
            'description': self.description,
            'order': self.order,
            'primaryImage': Image.get(self.primaryImage),
            'products': products,
            'title': self.title,
            'url': self.url
        }


class Contact(ndb.Model):
    formattedPhone = ndb.StringProperty(indexed=False)
    phone = ndb.StringProperty(indexed=False, required=True)


class Location(ndb.Model):
    address = ndb.StringProperty(indexed=True, required=True)
    cc = ndb.StringProperty(indexed=True, choices=CountryCodeList, required=True)  # ISO_3166-1_alpha-3
    cityOrMunicipality = ndb.StringProperty(indexed=True, required=True)
    country = ndb.StringProperty(indexed=True, choices=CountryList, required=True)
    position = ndb.GeoPtProperty(indexed=False, required=True)
    slippyPosition = ndb.StringProperty(indexed=True, required=True)


class Establishment(ndb.Model):
    categories = ndb.KeyProperty(kind=Category, repeated=True, indexed=False)
    contact = ndb.StructuredProperty(Contact, required=False)
    location = ndb.StructuredProperty(Location, required=True)
    name = ndb.StringProperty(indexed=True, required=True)  # unique for parent
    primaryImage = ndb.KeyProperty(kind=Image, indexed=False, required=False)
    url = ndb.StringProperty(indexed=True, required=False)  # unique for parent

    @classmethod
    def fetch_by_name(cls, name, ancestor):
        return cls.query(cls.name == name, ancestor=ancestor).order(cls.name).fetch(keys_only=True)

    @classmethod
    def fetch_keys(cls, limit, start_cursor, ancestor):
        return cls.query(ancestor=ancestor).order(cls.name).fetch_page(limit, start_cursor=start_cursor, keys_only=True)

    def build(self, resolved=False):
        categories = []
        for category_model in ndb.get_multi(self.categories):
            if resolved:
                categories.append(category_model.build())
            else:
                categories.append(category_model.url)

        contact = {
            'formattedPhone': self.contact.formattedPhone,
            'phone': self.contact.phone
        }

        location = {
            'address': self.location.address,
            'cc': self.location.cc,
            'cityOrMunicipality': self.location.cityOrMunicipality,
            'country': self.location.country,
            'position': {
                'lat': self.location.position.lat,
                'lon': self.location.position.lon
            },
            'slippyPosition': self.location.slippyPosition
        }

        return {
            'categories': categories,
            'contact': contact,
            'location': location,
            'name': self.name,
            'primaryImage': Image.get(self.primaryImage),
            'url': self.url
        }


class User(auth_models.User):
    email = ndb.StringProperty()


class AccountId(ndb.Model):
    accountBody_key = ndb.KeyProperty(indexed=False, required=True)

    @classmethod
    @ndb.transactional
    def check_if_exists(cls, id):
        accountId_key = ndb.Key(cls, id)
        accountId_obj = accountId_key.get()

        return accountId_obj is not None

    @classmethod
    @ndb.transactional(xg=True)
    def create(cls, id, name, password):
        authToken = None

        id_error = account_utils.check_id(id)
        name_error = account_utils.check_name(name)
        password_error = account_utils.check_password(password)

        if not (id_error and name_error and password_error):
            accountId_key = ndb.Key(cls, id)
            accountId_obj = accountId_key.get()

            if not accountId_obj:
                accountBody_key = AccountBody().put()
                accountBody_obj = accountBody_key.get()

                accountBody_obj.name = name
                accountBody_id = urlhash.int_to_base62(accountBody_key.integer_id())
                accountBody_obj.passwordHash = account_utils.make_pw_hash(accountBody_id, password)
                accountBody_obj.put()

                cls(key=accountId_key, accountBody_key=accountBody_key).put()

                authToken = Session.create(accountBody_key=accountBody_key)

        return authToken

    @classmethod
    @ndb.transactional(xg=True)
    def authenticate(cls, id, password):
        authToken = None

        accountId_key = ndb.Key(cls, id)
        accountId_obj = accountId_key.get()

        if accountId_obj:
            accountBody_obj = accountId_obj.accountBody_key.get()

            if accountBody_obj:
                accountBody_key = accountId_obj.accountBody_key
                accountBody_id = urlhash.int_to_base62(accountBody_key.integer_id())

                if account_utils.valid_pw(accountBody_id, password, accountBody_obj.passwordHash):
                    authToken = Session.create(accountBody_key=accountBody_key)
                    message = 'Login successful.'
                else:
                    message = 'Incorrect account id or password.'
            else:
                message = 'Account does not exist.'
        else:
            message = 'Account does not exist.'

        return authToken, message


class AccountBody(ndb.Model):
    name = ndb.StringProperty(indexed=True, required=False) # is actually required
    passwordHash = ndb.StringProperty(indexed=False, required=False) # is actually required


class Session(ndb.Model):
    startDatetime = ndb.DateTimeProperty(auto_now_add=True, indexed=True, required=True)

    @classmethod
    @ndb.transactional
    def create(cls, accountBody_key):
        while True:
            session_key = ndb.Key(cls, session_utils.generate_sessionId(), parent=accountBody_key)
            session_obj = session_key.get()
            if not session_obj:
                cls(key=session_key).put()
                return session_key.urlsafe()

    @classmethod
    @ndb.transactional
    def validate(cls, authToken, parent=None):
        is_valid = False

        try:
            session_key = ndb.Key(urlsafe=authToken)
            session_obj = session_key.get()

            if parent and session_key.parent() != parent:
                session_obj = None

        except Exception as e: #except ProtocolBufferDecodeError:
            session_obj = None

        if session_obj:
            if (datetime.now() - session_obj.startDatetime).days >= 2:
                session_obj.key.delete()
            else:
                is_valid = True

        return is_valid


class BusinessPageForm(ndb.Model):
    BusinessSizeList = ['Small Business', 'National Chain/Brand', 'Franchise']

    fullName = ndb.StringProperty(indexed=True, required=True)
    position = ndb.StringProperty(indexed=True, required=True)
    phoneNumber = ndb.StringProperty(indexed=True, required=True)
    emailAddress = ndb.StringProperty(indexed=True, required=True)
    businessSize = ndb.StringProperty(indexed=True, choices=BusinessSizeList, required=True)
    businessName = ndb.StringProperty(indexed=True, required=True)
    businessType = ndb.StringProperty(indexed=True, required=True)
    businessAddress = ndb.StringProperty(indexed=True, required=True)
    businessWebsite = ndb.StringProperty(indexed=True, required=True)


class FeedbackPageForm(ndb.Model):
    fullName = ndb.StringProperty(indexed=True, required=True)
    phoneNumber = ndb.StringProperty(indexed=True, required=True)
    emailAddress = ndb.StringProperty(indexed=True, required=True)
    comments = ndb.StringProperty(indexed=True, required=True)
    businessName = ndb.StringProperty(indexed=True, required=True)