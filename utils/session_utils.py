import os, base64


def generate_sessionId():
    return base64.b64encode(os.urandom(16))