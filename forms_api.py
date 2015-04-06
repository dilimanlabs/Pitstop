from protorpc.wsgi import service as wsgi_service

import businesspageforms_service
import feedbackpageforms_service

service = wsgi_service.service_mappings([
    ('/forms/businesspage', businesspageforms_service.PostService),
    ('/forms/feedbackpage', feedbackpageforms_service.PostService)
])