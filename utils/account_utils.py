import hashlib
import random
import string
import re

def make_salt():
    return ''.join(random.choice(string.letters[0: 52]) for x in xrange(5))


def make_pw_hash(name, pw, salt=None):
    if not salt:
        salt = make_salt()
    h = hashlib.sha256(name + pw + salt).hexdigest()
    return '%s,%s' % (h, salt)


def valid_pw(name, pw, h):
    salt = h.split(',')[1]
    return h == make_pw_hash(name, pw, salt)


def check_id(id):
    matchObj = re.match(r'^([a-zA-Z0-9\_\-]+)$', id)

    if not matchObj:
        error = 'Invalid characters in ID. ID must contain only letters, numbers, "-", and "_".'
    elif len(id) < 3:
        error = 'ID too short. ID must be between 3 to 20 characters.'
    elif len(id) > 20:
        error = 'ID too long. ID must be between 3 to 20 characters.'
    else:
        error = None

    return error


def check_password(password):
    matchObj = re.match(r'^([a-zA-Z0-9 ]+)$', password)

    if not matchObj:
        error = 'Invalid characters in Password. Password must contain only letters, numbers and spaces.'
    elif len(password) < 6:
        error = 'Password too short. Password must be between 6 to 30 characters.'
    elif len(password) > 30:
        error = 'Password too long Password must be between 6 to 30 characters.'
    else:
        error = None

    return error


def check_name(name):
    matchObj = re.match(r'^([a-zA-Z0-9 ]+)$', name)

    if not matchObj:
        error = 'Invalid characters in Name. Name must contain only letters, numbers and spaces.'
    elif len(name) > 30:
        error = 'Name too long. Name must not be longer than 30 characters.'
    else:
        error = None

    return error