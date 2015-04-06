import math
import itertools

def from_coords(lat, lon, zoom=15):
    lat_rad = math.radians(lat)
    n = 2.0 ** zoom
    xtile = int((lon + 180.0) / 360.0 * n)
    ytile = int((1.0 - math.log(math.tan(lat_rad) + (1 / math.cos(lat_rad))) / math.pi) / 2.0 * n)
    
    return str(zoom) + '/' + str(xtile) + '/' + str(ytile)

def get_tiles(ne_lat, ne_lon, sw_lat, sw_lon):
    zoom = 15
    n = 2.0 ** zoom
    left = int((sw_lon + 180.0) / 360.0 * n)
    right = int((ne_lon + 180.0) / 360.0 * n) + 1
    ne_lat_rad = math.radians(ne_lat)
    sw_lat_rad = math.radians(sw_lat)
    top = int((1.0 - math.log(math.tan(ne_lat_rad) + (1 / math.cos(ne_lat_rad))) / math.pi) / 2.0 * n)
    bottom = int((1.0 - math.log(math.tan(sw_lat_rad) + (1 / math.cos(sw_lat_rad))) / math.pi) / 2.0 * n) + 1
    
    tiles = []
    for element in itertools.product(range(left,right), range(top, bottom)):
        tiles.append(str(zoom) + '/' + str(element[0]) + '/' + str(element[1]))
    
    return tiles