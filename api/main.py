from protorpc.wsgi import service as wsgi_service

from api import maps

service = wsgi_service.service_mappings([
    ('/api/maps', maps.PostService),
    ])