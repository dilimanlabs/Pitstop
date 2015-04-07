import time
import re

from google.appengine.ext import ndb
from protorpc import message_types
from protorpc import messages
from protorpc import remote

from utils.map_utils import from_coords, get_tiles
from models import models


class Meta(messages.Message):
    timestamp = messages.FloatField(1, required=True)

class Contact(messages.Message):
    formattedPhone = messages.StringField(1)
    phone = messages.StringField(2, required=True)

class Position(messages.Message):
    lat = messages.FloatField(1, required=True)
    lon = messages.FloatField(2, required=True)

class Location(messages.Message):
    address = messages.StringField(1)
    cc = messages.StringField(2, required=True)
    cityOrMunicipality = messages.StringField(3)
    country = messages.StringField(4)
    position = messages.MessageField(Position, 5, required=True)
    slippyPosition = messages.StringField(6)

class Establishment(messages.Message):
    categories = messages.StringField(1, repeated=True)
    contact = messages.MessageField(Contact, 2)
    location = messages.MessageField(Location, 3, required=True)
    name = messages.StringField(4, required=True)
    url = messages.StringField(5)

class ListEstablishmentsFromCoordsRequest(messages.Message):
    lat = messages.FloatField(1, required=True)
    lon = messages.FloatField(2, required=True)
    zoom = messages.IntegerField(3)

class ListEstablishmentsFromCoordsResponse(messages.Message):
    establishments = messages.MessageField(Establishment, 1, repeated=True)

class ListEstablishmentsFromTileRequest(messages.Message):
    zoom = messages.IntegerField(1, required=True)
    x = messages.IntegerField(2, required=True)
    y = messages.IntegerField(3, required=True)

class ListEstablishmentsFromTileResponse(messages.Message):
    establishments = messages.MessageField(Establishment, 1, repeated=True)


class ListEstablishmentsFromTilesRequest(messages.Message):
    tiles = messages.StringField(1, repeated=True)

class ListEstablishmentsFromTilesResponse(messages.Message):
    meta = messages.MessageField(Meta, 1, required=True)
    establishments = messages.MessageField(Establishment, 2, repeated=True)


class ListEstablishmentsFromBoundsRequest(messages.Message):
    class Bounds(messages.Message):
        ne = messages.MessageField(Position, 1, required=True)
        sw = messages.MessageField(Position, 2, required=True)

    bounds = messages.MessageField(Bounds, 1, required=True)

class ListEstablishmentsFromBoundsResponse(messages.Message):
    establishments = messages.MessageField(Establishment, 1, repeated=True)

class PostService(remote.Service):

    @remote.method(ListEstablishmentsFromCoordsRequest, ListEstablishmentsFromCoordsResponse)
    def list_establishments_from_coords(self, request):

        if (request.zoom):
            slippyPosition = from_coords(
                lat=request.lat,
                lon=request.lon,
                zoom=request.zoom)
        else:
            slippyPosition = from_coords(
                lat=request.lat,
                lon=request.lon)

        establishments_model = models.Establishment.query(models.Establishment.location.slippyPosition==slippyPosition)
        establishments = []
        for establishment in establishments_model:
            establishments.append(Establishment(
                categories=establishment.categories,
                contact=Contact(
                    formattedPhone=establishment.contact.formattedPhone,
                    phone=establishment.contact.phone),
                location=Location(
                    address=establishment.location.address,
                    cc=establishment.location.cc,
                    cityOrMunicipality=establishment.location.cityOrMunicipality,
                    country=establishment.location.country,
                    position=Position(
                        lat=establishment.location.position.lat,
                        lon=establishment.location.position.lon),
                    slippyPosition=establishment.location.slippyPosition),
                name=establishment.name,
                url=establishment.url))

        return ListEstablishmentsFromCoordsResponse(establishments=establishments)

    @remote.method(ListEstablishmentsFromTileRequest, ListEstablishmentsFromTileResponse)
    def list_establishments_from_tile(self, request):
        slippyPosition = str(request.zoom) + '/' + str(request.x) + '/' + str(request.y)

        establishments_model = models.Establishment.query(models.Establishment.location.slippyPosition==slippyPosition)
        establishments = []
        for establishment in establishments_model:
            establishments.append(Establishment(
                categories=establishment.categories,
                contact=Contact(
                    formattedPhone=establishment.contact.formattedPhone,
                    phone=establishment.contact.phone),
                location=Location(
                    address=establishment.location.address,
                    cc=establishment.location.cc,
                    cityOrMunicipality=establishment.location.cityOrMunicipality,
                    country=establishment.location.country,
                    position=Position(
                        lat=establishment.location.position.lat,
                        lon=establishment.location.position.lon),
                    slippyPosition=establishment.location.slippyPosition),
                name=establishment.name,
                url=establishment.url))

        return ListEstablishmentsFromTileResponse(establishments=establishments)

    @remote.method(ListEstablishmentsFromTilesRequest, ListEstablishmentsFromTilesResponse)
    def list_establishments_from_tiles(self, request):
        establishments = []
        if request.tiles:
            establishments_model_query = models.Establishment.query(models.Establishment.location.slippyPosition.IN(request.tiles))
            if establishments_model_query:
                keys = establishments_model_query.fetch(100,keys_only=True)
                if keys:
                    for establishment in ndb.get_multi(keys):
                        establishments.append(Establishment(
                            categories=establishment.categories,
                            contact=Contact(
                                formattedPhone=establishment.contact.formattedPhone,
                                phone=establishment.contact.phone),
                            location=Location(
                                address=establishment.location.address,
                                cc=establishment.location.cc,
                                cityOrMunicipality=establishment.location.cityOrMunicipality,
                                country=establishment.location.country,
                                position=Position(
                                    lat=establishment.location.position.lat,
                                    lon=establishment.location.position.lon),
                                slippyPosition=establishment.location.slippyPosition),
                            name=establishment.name,
                            url=establishment.url))

        return ListEstablishmentsFromTilesResponse(meta=Meta(timestamp=time.time()), establishments=establishments)

    @remote.method(ListEstablishmentsFromBoundsRequest, ListEstablishmentsFromBoundsResponse)
    def list_establishments_from_bounds(self, request):
        slippyTiles = get_tiles(
            ne_lat=request.bounds.ne.lat,
            ne_lon=request.bounds.ne.lon,
            sw_lat=request.bounds.sw.lat,
            sw_lon=request.bounds.sw.lon)

        # establishments_model is a Query object
        establishments_model = models.Establishment.query(models.Establishment.location.slippyPosition.IN(slippyTiles))
        establishments = []
        if establishments_model:
            keys = establishments_model.fetch(100,keys_only=True)
            if keys:
                # keys is not empty
                for establishment in ndb.get_multi(keys):
                    establishments.append(Establishment(
                        categories=establishment.categories,
                        contact=Contact(
                            formattedPhone=establishment.contact.formattedPhone,
                            phone=establishment.contact.phone),
                        location=Location(
                            address=establishment.location.address,
                            cc=establishment.location.cc,
                            cityOrMunicipality=establishment.location.cityOrMunicipality,
                            country=establishment.location.country,
                            position=Position(
                                lat=establishment.location.position.lat,
                                lon=establishment.location.position.lon),
                            slippyPosition=establishment.location.slippyPosition),
                        name=establishment.name,
                        url=establishment.url))
        return ListEstablishmentsFromBoundsResponse(establishments=establishments)