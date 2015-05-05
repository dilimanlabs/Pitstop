var app = angular.module('App');

var shell = {
    "0": {
        "address": "BRGY 50 BUTTONG LAOAG CITY, 2900 Philippines",
        "city": "LAOAG CITY",
        "country": "Philippines",
        "lat": 18.1873,
        "lng": 120.5783,
        "telephone": "9175477363",
        "text": "SH BRGY 50 BUTTONG LAOAG DOSS"
    },
    "1": {
        "address": "51A NANGALISAN LAOAG CITY, 2900 Philippines",
        "city": "LAOAG CITY",
        "country": "Philippines",
        "lat": 18.182255,
        "lng": 120.589489,
        "telephone": "9098994054",
        "text": "SH NANGALISAN LAOAG CITY COSS."
    },
    "2": {
        "address": "GEN SEGUNDO AVE LAOAG CITY, 2900 Philippines",
        "city": "LAOAG CITY",
        "country": "Philippines",
        "lat": 18.2085,
        "lng": 120.6015,
        "telephone": "777721860",
        "text": "SH SEGUNDO LAOAG ILOCOS DOSS."
    },
    "3": {
        "address": "BARANGAY 3 SALBANG PAOAY, 2902 Philippines",
        "city": "PAOAY",
        "country": "Philippines",
        "lat": 18.0629,
        "lng": 120.5243,
        "telephone": "917571383",
        "text": "SH PAOAY ILOCOS NORTE DOSS."
    },
    "4": {
        "address": "BATAC PAOAY ROAD BRGY 3 SALBANGPAOA ILOCOS NORTE, 2902 Philippines",
        "city": "ILOCOS NORTE",
        "country": "Philippines",
        "lat": 18.0606,
        "lng": 120.529,
        "telephone": "776171017",
        "text": "SH BATAC PAOAY RD ILO NRT DOSS."
    },
    "5": {
        "address": "1 VALDEZ BATAC, 2906 Philippines",
        "city": "BATAC",
        "country": "Philippines",
        "lat": 18.0547,
        "lng": 120.5652,
        "telephone": "9159793246",
        "text": "SH VALDEZ BATAC ILOCOS N DOSS."
    },
    "6": {
        "address": "BARANGAY 2 SAN NICOLAS, 2901 Philippines",
        "city": "SAN NICOLAS",
        "country": "Philippines",
        "lat": 17.994999,
        "lng": 120.502532,
        "telephone": "9189131228",
        "text": "SH SAN NICOLAS ILOCOS DOSS"
    },
    "7": {
        "address": "NATIONAL HIGHWAY BARANGAY RIZAL CABUGAO, 2732 Philippines",
        "city": "CABUGAO",
        "country": "Philippines",
        "lat": 17.791082,
        "lng": 120.456054,
        "telephone": "9175680236",
        "text": "SH CABUGAO ILOCOS SUR DOSS 2"
    },
    "8": {
        "address": "STA MONICA MAGSINGAL, 2730 Philippines",
        "city": "MAGSINGAL",
        "country": "Philippines",
        "lat": 17.6686,
        "lng": 120.4223,
        "telephone": "9175682683",
        "text": "SH MAGSINGAL ILOCOS SUR DOSS."
    },
    "9": {
        "address": "ABOUR NARVACAN, 2704 Philippines",
        "city": "NARVACAN",
        "country": "Philippines",
        "lat": 17.428553,
        "lng": 120.472856,
        "telephone": "9999063119",
        "text": "SH NARVACAN ILOCOS NORTE DOSS"
    },
    "10": {
        "address": "TORRIJOS STREET ZONE 5 BANGUED, 2800 Philippines",
        "city": "BANGUED",
        "country": "Philippines",
        "lat": 17.5932,
        "lng": 120.619,
        "telephone": "9173787140",
        "text": "SH BANGUED ABRA DOSS 2."
    },
    "11": {
        "address": "RIZAL STREET ZONE 7 BANGUED, 2800 Philippines",
        "city": "BANGUED",
        "country": "Philippines",
        "lat": 17.5971,
        "lng": 120.6188,
        "telephone": "9178158081",
        "text": "SH BANGUED ABRA DOSS 1."
    },
    "12": {
        "address": "BALIW LAUD SANTA MARIA, 2705 Philippines",
        "city": "SANTA MARIA",
        "country": "Philippines",
        "lat": 17.3613,
        "lng": 120.4666,
        "telephone": "9284840033",
        "text": "SH STA MARIA ILOCOS SUR DOSS"
    },
    "13": {
        "address": "A BONIFACIO STREET VIGAN CITY, 2700 Philippines",
        "city": "VIGAN CITY",
        "country": "Philippines",
        "lat": 17.5732,
        "lng": 120.3875,
        "telephone": "9175682683",
        "text": "SH BONIFACIO VIGAN I SUR DOSS"
    },
    "14": {
        "address": "POBLACION BARANGAY 5 BANTAY, 2727 Philippines",
        "city": "BANTAY",
        "country": "Philippines",
        "lat": 17.5904,
        "lng": 120.39,
        "telephone": "776742274",
        "text": "SH BANTAY ILOCOS SUR DOSS."
    },
    "15": {
        "address": "NATIONAL HIGHWAY CANDON, 2710 Philippines",
        "city": "CANDON",
        "country": "Philippines",
        "lat": 17.1952,
        "lng": 120.4485,
        "telephone": "9272476717",
        "text": "SH CANDON ILOCOS SUR DOSS."
    },
    "16": {
        "address": "SAN PABLO Santo Domingo, 2729 Philippines",
        "city": "Santo Domingo",
        "country": "Philippines",
        "lat": 17.639677,
        "lng": 120.410196,
        "telephone": "9175393935",
        "text": "SH STO DOMINGO ILOCOS SUR DOSS."
    },
    "17": {
        "address": "30 NATIONAL HIGHWAY SAN JUAN CANDON, 2710 Philippines",
        "city": "CANDON",
        "country": "Philippines",
        "lat": 17.1817,
        "lng": 120.4448,
        "telephone": "9175640914",
        "text": "SH SN JUAN CNDON ILOCOS S DOSS."
    },
    "18": {
        "address": "MAGSAYSAY DISTRICT TAGUDIN, 2714 Philippines",
        "city": "TAGUDIN",
        "country": "Philippines",
        "lat": 16.937,
        "lng": 120.4452,
        "telephone": "9195827207",
        "text": "SH TAGUDIN ILOCOS SUR DOSS."
    },
    "19": {
        "address": "POBLACION ESTE SANTA CRUZ, 2713 Philippines",
        "city": "SANTA CRUZ",
        "country": "Philippines",
        "lat": 17.0849,
        "lng": 120.4588,
        "telephone": "9161685788",
        "text": "SH STA CRUZ ILOCOS SUR DOSS."
    },
    "20": {
        "address": "CARLATAN SAN FERNANDO CITY, 2500 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 16.6353,
        "lng": 120.3126,
        "telephone": "9203789137",
        "text": "SH CARLATAN SN FERNNDO LU COSS"
    },
    "21": {
        "address": "NATIONAL HIGHWAY SEVILLA SAN FERNANDO CITY, 2500 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 16.6033,
        "lng": 120.3195,
        "telephone": "9199389424",
        "text": "SH SEVILLA SFO LA UNION COSS."
    },
    "22": {
        "address": "DIVERSION ROAD SEVILLA SAN FERNANDO CITY, 2500 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 16.603284,
        "lng": 120.319498,
        "telephone": "9209219727",
        "text": "SH SEVILLA SN FERNANDO LU DOSS"
    },
    "23": {
        "address": "SEVILLA SAN FERNANDO CITY, 2500 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 16.5867,
        "lng": 120.3201,
        "telephone": "9228687574",
        "text": "SH SAN FERNANDO LA UNION DOSS"
    },
    "24": {
        "address": "SANTA CRUZ BALLESTEROS, 3516 Philippines",
        "city": "BALLESTEROS",
        "country": "Philippines",
        "lat": 18.406039,
        "lng": 121.518322,
        "telephone": "9397953622",
        "text": "SH BALLESTEROS CAGAYAN DOSS"
    },
    "25": {
        "address": "CENTRO 1 SAN JOSE LASAM, 3524 Philippines",
        "city": "LASAM",
        "country": "Philippines",
        "lat": 18.067,
        "lng": 121.6036,
        "telephone": "0788533065",
        "text": "SH LASAM CAGAYAN DOSS."
    },
    "26": {
        "address": "MAHARLIKA HIGHWAY CENTRO WEST Gattaran, 3508 Philippines",
        "city": "Gattaran",
        "country": "Philippines",
        "lat": 18.0647,
        "lng": 121.6431,
        "telephone": "0788462663",
        "text": "SH CENTRO GATARAN CAGAYAN DOSS"
    },
    "27": {
        "address": "MAHARLIKA HIGHWAY Cagayan, 3518 Philippines",
        "city": "Cagayan",
        "country": "Philippines",
        "lat": 18.5681,
        "lng": 121.2256,
        "telephone": "783730373",
        "text": "SH SANCHEZ MIRA CAGAYAN 1 DOSS."
    },
    "28": {
        "address": "LOGAC LAL LO, 3509 Philippines",
        "city": "LAL LO",
        "country": "Philippines",
        "lat": 18.1913,
        "lng": 121.6627,
        "telephone": "9089095144",
        "text": "SH LAL LO CAGAYAN DOSS 2."
    },
    "29": {
        "address": "104 NATIONAL HIGHWAY BAGUMBAYAN LAL LO, 3509 Philippines",
        "city": "LAL LO",
        "country": "Philippines",
        "lat": 18.239704,
        "lng": 121.682854,
        "telephone": "9173801475",
        "text": "SH LAL LO CAGAYAN DOSS 1."
    },
    "30": {
        "address": "AFUNAN CAMALANIUGAN, 3510 Philippines",
        "city": "CAMALANIUGAN",
        "country": "Philippines",
        "lat": 18.2613,
        "lng": 121.6899,
        "telephone": "",
        "text": "SH CAMALANIUGAN CAGAYAN DOSS."
    },
    "31": {
        "address": "MACANAYA ST APARRI, 3515 Philippines",
        "city": "APARRI",
        "country": "Philippines",
        "lat": 18.355075,
        "lng": 121.641033,
        "telephone": "9175787700",
        "text": "SH MACANAYA ST APARRI COSS."
    },
    "32": {
        "address": "CENTRO SUR ALCALA CAGAYAN Cagayan, 3507 Philippines",
        "city": "Cagayan",
        "country": "Philippines",
        "lat": 17.9025,
        "lng": 121.6557,
        "telephone": "9178251057",
        "text": "SH ALCALA CAGAYAN DOSS."
    },
    "33": {
        "address": "BAYBAYOG ALCALA CAGAYAN VALLEY CAGAYAN VALLEY, 3506 Philippines",
        "city": "CAGAYAN VALLEY",
        "country": "Philippines",
        "lat": 17.8878,
        "lng": 121.6949,
        "telephone": "9175811333",
        "text": "SH BAYBAYOG ALCALA DOSS."
    },
    "34": {
        "address": "BAUNG PIAT CAGAYAN VALLEY, 3527 Philippines",
        "city": "CAGAYAN VALLEY",
        "country": "Philippines",
        "lat": 17.7851,
        "lng": 121.4859,
        "telephone": "9175727252",
        "text": "SH BAUNG PIAT CAGAYAN DOSS."
    },
    "35": {
        "address": "NATIONAL ROAD CARMAY EAST SOLANA, 3503 Philippines",
        "city": "SOLANA",
        "country": "Philippines",
        "lat": 17.640863,
        "lng": 121.681674,
        "telephone": "9175566558",
        "text": "SH SOLANA CAGAYAN DOSS."
    },
    "36": {
        "address": "BUNTUN HIGHWAY TUGUEGARAO CITY CAGAYAN, 3500 Philippines",
        "city": "TUGUEGARAO CITY CAGAYAN",
        "country": "Philippines",
        "lat": 17.6133,
        "lng": 121.7013,
        "telephone": "9175999928",
        "text": "SH BUNTUN HIGHWAY TUGUE DOSS."
    },
    "37": {
        "address": "BUNTUN HI WAY DIVERSION ROAD TUGUEGARAO CITY, 3500 Philippines",
        "city": "TUGUEGARAO CITY",
        "country": "Philippines",
        "lat": 17.6138,
        "lng": 121.7057,
        "telephone": "9175787700",
        "text": "SH BUNTUN HIWAY DIV TUGUE COSS."
    },
    "38": {
        "address": "BONIFACIO CORNER RIZAL STREET TUGUEGARAO CITY, 3500 Philippines",
        "city": "TUGUEGARAO CITY",
        "country": "Philippines",
        "lat": 17.617,
        "lng": 121.7285,
        "telephone": "9175787700",
        "text": "SH BONIFACIO RIZAL TUGUE COSS"
    },
    "39": {
        "address": "CAGGAY TUGUEGARAO CITY, 3500 Philippines",
        "city": "TUGUEGARAO CITY",
        "country": "Philippines",
        "lat": 17.6244,
        "lng": 121.7313,
        "telephone": "9175417979",
        "text": "SH CAGGAY TUGUEGARAO CITY DOSS."
    },
    "40": {
        "address": "MAHARLIKA HIGHWAY CARIG CAGAYAN, 3500 Philippines",
        "city": "CARIG CAGAYAN",
        "country": "Philippines",
        "lat": 17.6244,
        "lng": 121.7313,
        "telephone": "9175999928",
        "text": "SH CARIG MAHARLIKA HIWAY DOSS."
    },
    "41": {
        "address": "69 HIGHWAY BALZAIN STREET CENTRO 11 TUGUEGARAO CITY, 3500 Philippines",
        "city": "TUGUEGARAO CITY",
        "country": "Philippines",
        "lat": 17.62438,
        "lng": 121.731359,
        "telephone": "9178248464",
        "text": "SH BALZAIN TUGUEGRAO CITY DOSS."
    },
    "42": {
        "address": "MAHARLIKA HIGHWAY LIBAG NORTE TUGUEGARAO CITY, 3500 Philippines",
        "city": "TUGUEGARAO CITY",
        "country": "Philippines",
        "lat": 17.609727,
        "lng": 121.749566,
        "telephone": "9175999928",
        "text": "SH MAHRLIKA HWAY TUGUEGRAO DOS."
    },
    "43": {
        "address": "BARANGAY 2 TUMAUINI, 3325 Philippines",
        "city": "TUMAUINI",
        "country": "Philippines",
        "lat": 17.2742,
        "lng": 121.8084,
        "telephone": "9195082095",
        "text": "SH TUMAUINI ISABELA DOSS."
    },
    "44": {
        "address": "CENTRO POBLACION EAST CABATUAN, 3315 Philippines",
        "city": "CABATUAN",
        "country": "Philippines",
        "lat": 16.953684,
        "lng": 121.668745,
        "telephone": "9173972442",
        "text": "SH CABATUAN ISABELA DOSS"
    },
    "45": {
        "address": "NATIONAL HIGHWAY CABARUAN CAUAYAN CITY, 3305 Philippines",
        "city": "CAUAYAN CITY",
        "country": "Philippines",
        "lat": 16.9348,
        "lng": 121.7662,
        "telephone": "9209450804",
        "text": "SH CABARUAN CAUAYN ISBELA DOSS."
    },
    "46": {
        "address": "NATIONAL HIGHWAY SAN FERMIN CAUAYAN CITY, 3305 Philippines",
        "city": "CAUAYAN CITY",
        "country": "Philippines",
        "lat": 16.9348,
        "lng": 121.7661,
        "telephone": "9209450804",
        "text": "SH SAN FERMIN CAUAYAN COSS."
    },
    "47": {
        "address": "165 NATIONAL H WAY BRGY 1 SAN MATEO, 3318 Philippines",
        "city": "SAN MATEO",
        "country": "Philippines",
        "lat": 16.880221,
        "lng": 121.587313,
        "telephone": "9267176750",
        "text": "SH SAN MATEO ISABELA DOSS."
    },
    "48": {
        "address": "MAHARLIKA HIGHWAY MABINI SANTIAGO CITY, 3311 Philippines",
        "city": "SANTIAGO CITY",
        "country": "Philippines",
        "lat": 16.6966,
        "lng": 121.5588,
        "telephone": "9209012252",
        "text": "SH SANTIAGO ISABELA DOSS."
    },
    "49": {
        "address": "SAN MANUEL RIZAL STREET Naguilian, 3302 Philippines",
        "city": "Naguilian",
        "country": "Philippines",
        "lat": 17.0229,
        "lng": 121.861,
        "telephone": "9204766937",
        "text": "SH NAGUILIAN ISABELA DOSS."
    },
    "50": {
        "address": "NATIONAL HIGHWAY BRGY UPI GAMU, 3301 Philippines",
        "city": "GAMU",
        "country": "Philippines",
        "lat": 17.0894,
        "lng": 121.8551,
        "telephone": "783230289",
        "text": "SH UPI GAMU ISABELA DOSS."
    },
    "51": {
        "address": "IPIL ECHAGUE Isabela, 3309 Philippines",
        "city": "Isabela",
        "country": "Philippines",
        "lat": 16.6967,
        "lng": 121.6362,
        "telephone": "783050342",
        "text": "SH IPIL ECHAGUE ISABELA DOSS"
    },
    "52": {
        "address": "MALAPAT CORDON, 3312 Philippines",
        "city": "CORDON",
        "country": "Philippines",
        "lat": 16.6743,
        "lng": 121.4668,
        "telephone": "786823810",
        "text": "SH MALAPAT CORDON ISABELA DOSS"
    },
    "53": {
        "address": "MAHARLIKA HIWAY POBLACION DIADI, 3712 Philippines",
        "city": "DIADI",
        "country": "Philippines",
        "lat": 16.6606,
        "lng": 121.3665,
        "telephone": "9178853753",
        "text": "SH DIADI NUEVA VIZCAYA DOSS"
    },
    "54": {
        "address": "POBLACION WEST LAMUT IFUGAO, 3605 Philippines",
        "city": "IFUGAO",
        "country": "Philippines",
        "lat": 16.6545,
        "lng": 121.213,
        "telephone": "9266595347",
        "text": "SH POB WEST LAMUT IFUGAO CAR DOSS."
    },
    "55": {
        "address": "NATIONAL HIGHWAY SOLANO, 3709 Philippines",
        "city": "SOLANO",
        "country": "Philippines",
        "lat": 16.522,
        "lng": 121.1915,
        "telephone": "9335223111",
        "text": "SH NHWAY SOLANO NUEVA DOSS."
    },
    "56": {
        "address": "POBLACION BAMBANG, 3702 Philippines",
        "city": "BAMBANG",
        "country": "Philippines",
        "lat": 16.3824,
        "lng": 121.108,
        "telephone": "9228506050",
        "text": "SH BAMBANG NUEVA VIZCAYA DOSS."
    },
    "57": {
        "address": "MALASIN SAN JOSE CITY, 3121 Philippines",
        "city": "SAN JOSE CITY",
        "country": "Philippines",
        "lat": 15.8026,
        "lng": 120.9978,
        "telephone": "9274149523",
        "text": "SH MALASIN SAN JOSE N E DOSS"
    },
    "58": {
        "address": "N/A DISSO OR BAUANG, 2501 Philippines",
        "city": "BAUANG",
        "country": "Philippines",
        "lat": 16.5428,
        "lng": 120.3256,
        "telephone": "9173006237",
        "text": "SH BAUANG LA UNION DOSS."
    },
    "59": {
        "address": "BRGY BATO NATIONAL ROAD Naguilian, 2511 Philippines",
        "city": "Naguilian",
        "country": "Philippines",
        "lat": 16.526681,
        "lng": 120.400624,
        "telephone": "0726030333",
        "text": "SH NAT HWAY ORTZ NAGUILIAN DOSS."
    },
    "60": {
        "address": "NATIONAL HIGHWAY STA BARBARA AGOO, 2504 Philippines",
        "city": "AGOO",
        "country": "Philippines",
        "lat": 16.3261,
        "lng": 120.3664,
        "telephone": "9199389424",
        "text": "SH S BARBARA AGOO LU COSS."
    },
    "61": {
        "address": "NAQUILIAN RD BAGUIO CITY, 2600 Philippines",
        "city": "BAGUIO CITY",
        "country": "Philippines",
        "lat": 16.4131,
        "lng": 120.585,
        "telephone": "9228954718",
        "text": "SH NAGUILIAN1 BAGUIO CITY COSS."
    },
    "62": {
        "address": "KM 4 MARCOS HIGHWAY BAGUIO CITY, 2600 Philippines",
        "city": "BAGUIO CITY",
        "country": "Philippines",
        "lat": 16.3936,
        "lng": 120.5796,
        "telephone": "9209700499",
        "text": "SH KM4 MARCOS HWAY BAGUIO COSS."
    },
    "63": {
        "address": "75 ABANAO ROAD BAGUIO CITY, 2600 Philippines",
        "city": "BAGUIO CITY",
        "country": "Philippines",
        "lat": 16.41363,
        "lng": 120.59297,
        "telephone": "9209700499",
        "text": "SH ABANAO RD BAGUIO CITY COSS."
    },
    "64": {
        "address": "KM 4 BALILI LA TRINIDAD, 2601 Philippines",
        "city": "LA TRINIDAD",
        "country": "Philippines",
        "lat": 16.4395,
        "lng": 120.5949,
        "telephone": "9209700499",
        "text": "SH KM4 BALILI LA TRINIDAD COSS."
    },
    "65": {
        "address": "KM 5 LA TRINIDAD, 2601 Philippines",
        "city": "LA TRINIDAD",
        "country": "Philippines",
        "lat": 16.449028,
        "lng": 120.590323,
        "telephone": "9175431753",
        "text": "SH KM5 L TRINIDAD BENGUET COSS."
    },
    "66": {
        "address": "CAMP 1 NATL HIGHWAY ROSARIO, 2506 Philippines",
        "city": "ROSARIO",
        "country": "Philippines",
        "lat": 16.2202,
        "lng": 120.5037,
        "telephone": "9283125109",
        "text": "SH CAMP ONE ROSARIO LU COSS."
    },
    "67": {
        "address": "POZORRUBIO POZORRUBIO, 2435 Philippines",
        "city": "POZORRUBIO",
        "country": "Philippines",
        "lat": 16.1038,
        "lng": 120.541,
        "telephone": "9274631080",
        "text": "SH POZORRUBIO PNGSN DOSS."
    },
    "68": {
        "address": "MANGALDAN DAGUPAN CITY, 2400 Philippines",
        "city": "DAGUPAN CITY",
        "country": "Philippines",
        "lat": 16.0739,
        "lng": 120.4016,
        "telephone": "755157675",
        "text": "SH MANGALDAN DAGUPAN DOSS"
    },
    "69": {
        "address": "AB FERNANDEZ EAST DAGUPAN CITY, 2400 Philippines",
        "city": "DAGUPAN CITY",
        "country": "Philippines",
        "lat": 16.0462,
        "lng": 120.3497,
        "telephone": "9088621522",
        "text": "SH FERNANDEZ DAGUPAN PANG COSS."
    },
    "70": {
        "address": "456 A PANDAN AVENUE POBLACION MAPANDAN, 2429 Philippines",
        "city": "MAPANDAN",
        "country": "Philippines",
        "lat": 16.024868,
        "lng": 120.449998,
        "telephone": "9214819994",
        "text": "SH MAPANDAN PANGASINAN DOSS"
    },
    "71": {
        "address": "TAPUAC DISTRICT DAGUPAN CITY, 2400 Philippines",
        "city": "DAGUPAN CITY",
        "country": "Philippines",
        "lat": 16.0366,
        "lng": 120.3321,
        "telephone": "9175131905",
        "text": "SH TAPUAC DAGUPAN PANG COSS."
    },
    "72": {
        "address": "KM 206 SAN MIGUEL CALASIAO, 2418 Philippines",
        "city": "CALASIAO",
        "country": "Philippines",
        "lat": 16.021,
        "lng": 120.3562,
        "telephone": "9209138826",
        "text": "SH SAN MIGUEL CALASIAO COSS."
    },
    "73": {
        "address": "CARANGLAAN DAGUPAN CITY, 2400 Philippines",
        "city": "DAGUPAN CITY",
        "country": "Philippines",
        "lat": 16.0069,
        "lng": 120.402,
        "telephone": "0755157675",
        "text": "SH CARANGLAAN DISTRICT DOSS."
    },
    "74": {
        "address": "SAN VICENTE ALAMINOS CITY, 2404 Philippines",
        "city": "ALAMINOS CITY",
        "country": "Philippines",
        "lat": 16.144211,
        "lng": 119.989994,
        "telephone": "9331617654",
        "text": "SH TANAYTAY ALAMINOS CITY DOSS."
    },
    "75": {
        "address": "TONTON LINGAYEN PANGASINAN, 2401 Philippines",
        "city": "PANGASINAN",
        "country": "Philippines",
        "lat": 16.0227,
        "lng": 120.2367,
        "telephone": "755295066",
        "text": "SH TONTON LINGAYEN DOSS."
    },
    "76": {
        "address": "LUCAO DISTRICT DAGUPAN CITY, 2400 Philippines",
        "city": "DAGUPAN CITY",
        "country": "Philippines",
        "lat": 16.019,
        "lng": 120.3195,
        "telephone": "9228393290",
        "text": "SH LUCAO DISTRICT DAGUPAN DOSS."
    },
    "77": {
        "address": "39 PALARIS SAN CARLOS CITY, 2420 Philippines",
        "city": "SAN CARLOS CITY",
        "country": "Philippines",
        "lat": 15.923366,
        "lng": 120.344721,
        "telephone": "09239109957",
        "text": "SH SN CARLOS PANGASINAN DOSS."
    },
    "78": {
        "address": "500 ALEXANDER STREET POBLACION URDANETA CITY, 2428 Philippines",
        "city": "URDANETA CITY",
        "country": "Philippines",
        "lat": 15.9757,
        "lng": 120.5639,
        "telephone": "9225289585",
        "text": "SH ALEXANDER LACHICA PANG DOSS."
    },
    "79": {
        "address": "NANCAYASAN URDANETA CITY, 2428 Philippines",
        "city": "URDANETA CITY",
        "country": "Philippines",
        "lat": 15.9677,
        "lng": 120.572,
        "telephone": "9175371962",
        "text": "SH MCARTHUR SBND URDANETA COSS."
    },
    "80": {
        "address": "POBLACION VILLASIS, 2427 Philippines",
        "city": "VILLASIS",
        "country": "Philippines",
        "lat": 15.8994,
        "lng": 120.5886,
        "telephone": "9175371962",
        "text": "SH MCARTHUR VILLASIS PANG COSS."
    },
    "81": {
        "address": "SN ANTONIO STREET ZONE 4 ROSALES, 2441 Philippines",
        "city": "ROSALES",
        "country": "Philippines",
        "lat": 15.8848,
        "lng": 120.5982,
        "telephone": "9175431753",
        "text": "SH CARMEN ROSALES PANG COSS"
    },
    "82": {
        "address": "BRGY TAMBAC MALASIQUI PANGASINAN, 2421 Philippines",
        "city": "PANGASINAN",
        "country": "Philippines",
        "lat": 15.9273,
        "lng": 120.4128,
        "telephone": "755222899",
        "text": "SH TAMBAC MALASIQUI DOSS."
    },
    "83": {
        "address": "8060209 LEGASPI San Manuel, 2309 Philippines",
        "city": "San Manuel",
        "country": "Philippines",
        "lat": 15.8263,
        "lng": 120.6056,
        "telephone": "9322241020",
        "text": "SH LEG SAN MANUEL TARLAC DOSS."
    },
    "84": {
        "address": "BRGY CARMAY EAST ROSALES, 2441 Philippines",
        "city": "ROSALES",
        "country": "Philippines",
        "lat": 15.894579,
        "lng": 120.654168,
        "telephone": "9273331288",
        "text": "SH ROSALES PANGASINAN DOSS."
    },
    "85": {
        "address": "25 TELBANG BAYAMBANG, 2423 Philippines",
        "city": "BAYAMBANG",
        "country": "Philippines",
        "lat": 15.7995,
        "lng": 120.4581,
        "telephone": "09199910106",
        "text": "SH BAYAMBAN PANGASINAN DOSS."
    },
    "86": {
        "address": "QUEZON AVENUE POBLACION CUYAPO, 3117 Philippines",
        "city": "CUYAPO",
        "country": "Philippines",
        "lat": 15.7787,
        "lng": 120.668,
        "telephone": "9228590737",
        "text": "SH CUYAPO NUEVA ECIJA DOSS."
    },
    "87": {
        "address": "229 CACAMILINGAN CAMILING, 2306 Philippines",
        "city": "CAMILING",
        "country": "Philippines",
        "lat": 15.686595,
        "lng": 120.418525,
        "telephone": "9178113966",
        "text": "SH CAMILING TARLAC DOSS"
    },
    "88": {
        "address": "POBLACION EAST SANTA IGNACIA, 2303 Philippines",
        "city": "SANTA IGNACIA",
        "country": "Philippines",
        "lat": 15.6121,
        "lng": 120.4429,
        "telephone": "9163078751",
        "text": "SH STA IGNACIA TARLAC DOSS."
    },
    "89": {
        "address": "VILLA SOLIMAN SALAPUNGAN TARLAC CITY, 2300 Philippines",
        "city": "TARLAC CITY",
        "country": "Philippines",
        "lat": 15.5077,
        "lng": 120.5968,
        "telephone": "09175145523",
        "text": "SH VILLA SOLIMAN TARLAC COSS."
    },
    "90": {
        "address": "VLI MACARTHUR HIGHWAY TARLAC TARLAC CITY, 2300 Philippines",
        "city": "TARLAC CITY",
        "country": "Philippines",
        "lat": 15.4775,
        "lng": 120.5944,
        "telephone": "459822887",
        "text": "SH VLI MCARTHUR TARLAC COSS"
    },
    "91": {
        "address": "F TANEDO ST COR MCARTHUR H WAY TARLAC CITY, 2300 Philippines",
        "city": "TARLAC CITY",
        "country": "Philippines",
        "lat": 15.4957,
        "lng": 120.5966,
        "telephone": "09175145523",
        "text": "SH TANEDO MCARTHUR TARLAC COSS."
    },
    "92": {
        "address": "MALIWALO TARLAC CITY, 2300 Philippines",
        "city": "TARLAC CITY",
        "country": "Philippines",
        "lat": 15.4827,
        "lng": 120.6121,
        "telephone": "09175145523",
        "text": "SH MALIWALO TARLAC TARLAC COSS."
    },
    "93": {
        "address": "SITIO ESTRELLA SAN RAFAEL TARLAC CITY, 2300 Philippines",
        "city": "TARLAC CITY",
        "country": "Philippines",
        "lat": 15.458793,
        "lng": 120.599045,
        "telephone": "9053037182",
        "text": "SH SAN RAFAEL TARLAC COSS."
    },
    "94": {
        "address": "QUEZON STREET BRGY SUKLAYIN BALER, 3200 Philippines",
        "city": "BALER",
        "country": "Philippines",
        "lat": 15.7585,
        "lng": 121.5588,
        "telephone": "9195292993",
        "text": "SH BALER AURORA DOSS."
    },
    "95": {
        "address": "CASTING STREET EAST POBLACION PANTABANGAN, 3124 Philippines",
        "city": "PANTABANGAN",
        "country": "Philippines",
        "lat": 15.805607,
        "lng": 121.143665,
        "telephone": "09178811493",
        "text": "SH PANTABANGAN NUEVA ECJA DOSS"
    },
    "96": {
        "address": "POBLACION SUR Rizal, 3127 Philippines",
        "city": "Rizal",
        "country": "Philippines",
        "lat": 15.7056,
        "lng": 121.0994,
        "telephone": "9228595833",
        "text": "SH RIZAL NUEVA ECIJA DOSS"
    },
    "97": {
        "address": "BONIFACIO STREET F E MARCOS SAN JOSE CITY, 3121 Philippines",
        "city": "SAN JOSE CITY",
        "country": "Philippines",
        "lat": 15.791777,
        "lng": 120.990381,
        "telephone": "9176290120",
        "text": "SH SAN JOSE CITY N ECIJA DOSS"
    },
    "98": {
        "address": "MAHARLIKA HIGHWAY MARCOS DISTRICT TALAVERA, 3114 Philippines",
        "city": "TALAVERA",
        "country": "Philippines",
        "lat": 15.587369,
        "lng": 120.919502,
        "telephone": "9175665502",
        "text": "SH MAHARLIKA TALAVERA N E DOSS."
    },
    "99": {
        "address": "BO VALDE FUENTE CABANATUAN CITY, 3100 Philippines",
        "city": "CABANATUAN CITY",
        "country": "Philippines",
        "lat": 15.506107,
        "lng": 120.970164,
        "telephone": "9189592061",
        "text": "SH VALDEFUENTE CABANATUAN COSS."
    },
    "100": {
        "address": "MAHARLIKA HIGHWAY COR DEL PILAR ST CABANATUAN CITY, 3100 Philippines",
        "city": "CABANATUAN CITY",
        "country": "Philippines",
        "lat": 15.4931,
        "lng": 120.9754,
        "telephone": "9189592061",
        "text": "SH MHARLIKA DEL PILAR CAB COSS"
    },
    "101": {
        "address": "MAHARLIKA HIGHWAY BERNARDO DISTRICT CABANATUAN CITY, 3100 Philippines",
        "city": "CABANATUAN CITY",
        "country": "Philippines",
        "lat": 15.481,
        "lng": 120.9607,
        "telephone": "9279628251",
        "text": "SH MAHRLIKA CABANATUAN NE COSS."
    },
    "102": {
        "address": "NUEVA ECIJA AURORA ROAD CABANATUAN CITY, 3100 Philippines",
        "city": "CABANATUAN CITY",
        "country": "Philippines",
        "lat": 15.491602,
        "lng": 120.985506,
        "telephone": "9279628251",
        "text": "SH SAN ISIDRO CABANATUAN DOSS."
    },
    "103": {
        "address": "MACABUCOD ALIAGA, 3111 Philippines",
        "city": "ALIAGA",
        "country": "Philippines",
        "lat": 15.4749,
        "lng": 120.8519,
        "telephone": "9228093902",
        "text": "SH MACABUCOD ALIAGA DOSS."
    },
    "104": {
        "address": "MAHARLIKA HIGHWAY SUMACAB ESTE CABANATUAN CITY, 3100 Philippines",
        "city": "CABANATUAN CITY",
        "country": "Philippines",
        "lat": 15.4565,
        "lng": 120.9487,
        "telephone": "9053207528",
        "text": "SH SUMACAB CABANATUAN N E DOSS"
    },
    "105": {
        "address": "BRGY ISLA STA ROSA NUEVA ECIJA, 3101 Philippines",
        "city": "NUEVA ECIJA",
        "country": "Philippines",
        "lat": 15.429,
        "lng": 120.9263,
        "telephone": "9175661146",
        "text": "SH STA ROSA NUEVA ECIJA DOSS 3."
    },
    "106": {
        "address": "LA FUENTE SANTA ROSA, 3101 Philippines",
        "city": "SANTA ROSA",
        "country": "Philippines",
        "lat": 15.428191,
        "lng": 120.927871,
        "telephone": "9054438458",
        "text": "SH STA ROSA NUEVA ECIJA DOSS 2."
    },
    "107": {
        "address": "SOUTH POBLACION GABALDON, 3131 Philippines",
        "city": "GABALDON",
        "country": "Philippines",
        "lat": 15.4543,
        "lng": 121.3388,
        "telephone": "9184186801",
        "text": "SH GABALDON NUEVA ECIJA DOSS."
    },
    "108": {
        "address": "A MABINI SAN JOSE CONCEPCION, 2316 Philippines",
        "city": "CONCEPCION",
        "country": "Philippines",
        "lat": 15.3247,
        "lng": 120.659,
        "telephone": "9284367297",
        "text": "SH SN JOSE CONCEPCION TAR DOSS"
    },
    "109": {
        "address": "PROVINCIAL ROAD SAN ISIDRO ZARAGOZA, 3110 Philippines",
        "city": "ZARAGOZA",
        "country": "Philippines",
        "lat": 15.4487,
        "lng": 120.7952,
        "telephone": "9228446407",
        "text": "SH ZARAGOZA NUEVA ECIJA DOSS."
    },
    "110": {
        "address": "LOT 25 # 1 MCARTHUR HIWAY POBLACION MABALACAT CITY, 2010 Philippines",
        "city": "MABALACAT CITY",
        "country": "Philippines",
        "lat": 15.2271,
        "lng": 120.5728,
        "telephone": "9176257228",
        "text": "SH MCARTHUR MABALACAT PAM DOSS."
    },
    "111": {
        "address": "113 MAMBANGNAN SAN LEONARDO, 3102 Philippines",
        "city": "SAN LEONARDO",
        "country": "Philippines",
        "lat": 15.358486,
        "lng": 120.959001,
        "telephone": "9178162682",
        "text": "SH SN LEONARDO NUEVA ECJA DOSS"
    },
    "112": {
        "address": "CASTELLANO MAHARLIKA HIWAY SAN LEONARDO, 3102 Philippines",
        "city": "SAN LEONARDO",
        "country": "Philippines",
        "lat": 15.3633,
        "lng": 120.9616,
        "telephone": "9264662526",
        "text": "SH CASTELLANO SN LEONARDO DOSS."
    },
    "113": {
        "address": "TIKIW San Antonio, 3108 Philippines",
        "city": "San Antonio",
        "country": "Philippines",
        "lat": 15.322888,
        "lng": 120.880036,
        "telephone": "909285015634",
        "text": "SH SAN ANTONIO NUEVA ECJA DOSS."
    },
    "114": {
        "address": "BUCAYAO CALAPAN CITY, 5200 Philippines",
        "city": "CALAPAN CITY",
        "country": "Philippines",
        "lat": 13.3153,
        "lng": 121.1834,
        "telephone": "432867030",
        "text": "SH BUCAYAO CALAPAN DOSS"
    },
    "115": {
        "address": "CAMILMIL CALAPAN CITY, 5200 Philippines",
        "city": "CALAPAN CITY",
        "country": "Philippines",
        "lat": 13.4046,
        "lng": 121.1735,
        "telephone": "9175253540",
        "text": "SH CAMILMIL CALAPAN DOSS"
    },
    "116": {
        "address": "JP RIZAL STREET SAN VICENTE EAST CALAPAN CITY, 5200 Philippines",
        "city": "CALAPAN CITY",
        "country": "Philippines",
        "lat": 13.409538,
        "lng": 121.178708,
        "telephone": "9178430208",
        "text": "SH SAN VICENTE CALAPAN DOSS"
    },
    "117": {
        "address": "ROXAS DRIVE HIGHWAY COR IGNACIO ST LUMANGBAYAN CALAPAN CITY, 5200 Philippines",
        "city": "LUMANGBAYAN CALAPAN CITY",
        "country": "Philippines",
        "lat": 13.4019,
        "lng": 121.182,
        "telephone": "432867030",
        "text": "SH LUMANG BAYAN CALAPAN DOSS"
    },
    "118": {
        "address": "POBLACION 1 VICTORIA, 5205 Philippines",
        "city": "VICTORIA",
        "country": "Philippines",
        "lat": 13.1529,
        "lng": 121.272,
        "telephone": "9228620108",
        "text": "SH VICTORIA OR MINDORO DOSS."
    },
    "119": {
        "address": "MARFRANCISCO PINAMALAYAN, 5208 Philippines",
        "city": "PINAMALAYAN",
        "country": "Philippines",
        "lat": 13.038478,
        "lng": 121.480331,
        "telephone": "9292700485",
        "text": "SH PINAMALAYAN OR MINDORO DOSS."
    },
    "120": {
        "address": "NATIONAL HIGHWAY BULAKLAKAN GLORIA, 5209 Philippines",
        "city": "GLORIA",
        "country": "Philippines",
        "lat": 12.9836,
        "lng": 121.4781,
        "telephone": "9212818103",
        "text": "SH GLORIA ORIENTAL MNDORO DOSS."
    },
    "121": {
        "address": "DJPMM ACCESS ROAD 2 CUTA BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.752907,
        "lng": 121.05232,
        "telephone": "9175240179",
        "text": "SH CUTA BATANGAS CITY COSS."
    },
    "122": {
        "address": "POBLACION MABINI, 4202 Philippines",
        "city": "MABINI",
        "country": "Philippines",
        "lat": 13.7617,
        "lng": 121.058,
        "telephone": "9326034893",
        "text": "SH MABINI BATANGAS DOSS."
    },
    "123": {
        "address": "PUERTO GALERA Puerto Galera, 5203 Philippines",
        "city": "Puerto Galera",
        "country": "Philippines",
        "lat": 12.673,
        "lng": 121.354,
        "telephone": "434410346",
        "text": "SH PUERTO GALERA OR MIN DOSS"
    },
    "124": {
        "address": "A QUEZON STREET BARANGAY 8 San Jose, 5100 Philippines",
        "city": "San Jose",
        "country": "Philippines",
        "lat": 12.65,
        "lng": 121.07,
        "telephone": "9285048622",
        "text": "SH SAN JOSE OCC MINDORO DOSS"
    },
    "125": {
        "address": "POOKAN POBLACION MANSALAY, 5213 Philippines",
        "city": "MANSALAY",
        "country": "Philippines",
        "lat": 12.5238,
        "lng": 121.4118,
        "telephone": "9189443496",
        "text": "SH MANSALAY OR MINDORO DOSS"
    },
    "126": {
        "address": "NATIONAL HIGHWAY BARANGAY MABINI ABORLAN, 5302 Philippines",
        "city": "ABORLAN",
        "country": "Philippines",
        "lat": 9.4338,
        "lng": 118.5498,
        "telephone": "9997727025",
        "text": "SH ABORLAN PALAWAN DOSS."
    },
    "127": {
        "address": "SANDOVAL COR QUEZON ST BGY MATIYAGA PUERTO PRINCESA CITY, 5300 Philippines",
        "city": "PUERTO PRINCESA CITY",
        "country": "Philippines",
        "lat": 9.7412,
        "lng": 118.731,
        "telephone": "917799162",
        "text": "SH PUERTO PRINCESA PLAWAN DOSS."
    },
    "128": {
        "address": "MALVAR STREET BARANGAY MATAHIMIK PUERTO PRINCESA CITY, 5300 Philippines",
        "city": "PUERTO PRINCESA CITY",
        "country": "Philippines",
        "lat": 9.7444,
        "lng": 118.7397,
        "telephone": "917799162",
        "text": "SH MATAHIMIK P PRINCESA COSS."
    },
    "129": {
        "address": "NATIONAL HIGHWAY BRGY SAN PEDRO PUERTO PRINCESA CITY, 5300 Philippines",
        "city": "PUERTO PRINCESA CITY",
        "country": "Philippines",
        "lat": 9.7557,
        "lng": 118.7479,
        "telephone": "9208718676",
        "text": "SH SAN PEDRO P PRINCESA COSS"
    },
    "130": {
        "address": "NEW MARKET ROAD PALAWAN, 5300 Philippines",
        "city": "PALAWAN",
        "country": "Philippines",
        "lat": 9.7832,
        "lng": 118.748,
        "telephone": "9209533546",
        "text": "SH SAN JOSE PUERTO PRIN DOSS."
    },
    "131": {
        "address": "BARANGAY PANACAN NARRA, 5303 Philippines",
        "city": "NARRA",
        "country": "Philippines",
        "lat": 9.263424,
        "lng": 118.403306,
        "telephone": "9277187088",
        "text": "SH PANACAN NARRA PALAWAN DOSS"
    },
    "132": {
        "address": "BRGY ABO ABO AND IPILAN NARRA, 5303 Philippines",
        "city": "NARRA",
        "country": "Philippines",
        "lat": 9.1568,
        "lng": 118.1321,
        "telephone": "9195154949",
        "text": "SH IPILAN NARRA PALAWAN DOSS."
    },
    "133": {
        "address": "NATIONAL HIGHWAY BRGY ALFONSO XIII QUEZON, 5304 Philippines",
        "city": "QUEZON",
        "country": "Philippines",
        "lat": 9.238,
        "lng": 117.9951,
        "telephone": "9063237241",
        "text": "SH QUEZON PALAWAN DOSS."
    },
    "134": {
        "address": "SANDOVAL ST BRGY 3 Roxas, 5308 Philippines",
        "city": "Roxas",
        "country": "Philippines",
        "lat": 10.3072,
        "lng": 119.2571,
        "telephone": "9209005818",
        "text": "SH SANDOVAL ROXAS PALAWAN DOSS"
    },
    "135": {
        "address": "RIZAL ST PALANGINAN IBA CITY, 2201 Philippines",
        "city": "IBA CITY",
        "country": "Philippines",
        "lat": 15.32108,
        "lng": 119.986866,
        "telephone": "9158856085",
        "text": "SH IBA ZAMBALES DOSS"
    },
    "136": {
        "address": "NATIONAL HIGHWAY CALAPANDAYAN SUBIC, 2209 Philippines",
        "city": "SUBIC",
        "country": "Philippines",
        "lat": 14.8754,
        "lng": 120.2353,
        "telephone": "9202398663",
        "text": "SH SUBIC ZAMBALES DOSS."
    },
    "137": {
        "address": "2656 RIZAL AVENUE EAST BAJAC BAJAC OLONGAPO CITY, 2200 Philippines",
        "city": "OLONGAPO CITY",
        "country": "Philippines",
        "lat": 14.8444,
        "lng": 120.2904,
        "telephone": "9209524205",
        "text": "SH EAST BAJAC OLONGAPO COSS."
    },
    "138": {
        "address": "JOSE ABAD SANTOS ST CANGATBA PORAC, 2008 Philippines",
        "city": "PORAC",
        "country": "Philippines",
        "lat": 15.0744,
        "lng": 120.5433,
        "telephone": "9178336559",
        "text": "SH CANGATBA PORAC PMPANGA DOSS."
    },
    "139": {
        "address": "MANIBAUG PARALAYA PORAC, 2008 Philippines",
        "city": "PORAC",
        "country": "Philippines",
        "lat": 15.1164,
        "lng": 120.5686,
        "telephone": "9175841203",
        "text": "SH PARALAYA PORAC DOSS"
    },
    "140": {
        "address": "1ST BALIBAGO ANGELES CITY, 2009 Philippines",
        "city": "ANGELES CITY",
        "country": "Philippines",
        "lat": 15.1701,
        "lng": 120.5888,
        "telephone": "9188081964",
        "text": "SH BALIBAGO ANGELES PAMP COSS."
    },
    "141": {
        "address": "CLARKFIELD FREEPORT ZONE ANGELES CITY, 2009 Philippines",
        "city": "ANGELES CITY",
        "country": "Philippines",
        "lat": 15.1639,
        "lng": 120.5484,
        "telephone": "9185067961",
        "text": "SH CLRKFILD FP ZNE PMPNGA COSS"
    },
    "142": {
        "address": "MCARTHUR HIGHWAY DAU MABALACAT, 2010 Philippines",
        "city": "MABALACAT",
        "country": "Philippines",
        "lat": 15.1882,
        "lng": 120.5842,
        "telephone": "9189859321",
        "text": "SH MCARTHUR DAU MABALACAT COSS."
    },
    "143": {
        "address": "HENZON ST ANGELES CITY, 2009 Philippines",
        "city": "ANGELES CITY",
        "country": "Philippines",
        "lat": 15.1458,
        "lng": 120.589,
        "telephone": "9223603011",
        "text": "SH HENZON ANGELES PMPANGA DOSS."
    },
    "144": {
        "address": "MAHARLIKA HIGHWAY STO NINO GAPAN CITY, 3105 Philippines",
        "city": "GAPAN CITY",
        "country": "Philippines",
        "lat": 15.3053,
        "lng": 120.9461,
        "telephone": "9088855337",
        "text": "SH GAPAN NUEVA ECIJA DOSS"
    },
    "145": {
        "address": "GAPAN OLONGAPO ROAD SAN NICOLAS GAPAN CITY, 3105 Philippines",
        "city": "GAPAN CITY",
        "country": "Philippines",
        "lat": 15.3036,
        "lng": 120.9374,
        "telephone": "9278076031",
        "text": "SH OG RD GAPAN NUEVA ECJA COSS."
    },
    "146": {
        "address": "POBLACION CENTRAL General Tinio, 3104 Philippines",
        "city": "General Tinio",
        "country": "Philippines",
        "lat": 15.349867,
        "lng": 121.043528,
        "telephone": "9475228672",
        "text": "SH GEN TINIO NUEVA ECIJA DOSS"
    },
    "147": {
        "address": "44 TECSON STREET San Miguel, 3011 Philippines",
        "city": "San Miguel",
        "country": "Philippines",
        "lat": 15.1423,
        "lng": 120.9756,
        "telephone": "9273863286",
        "text": "SH TECSON SMIGUEL BULACAN DOSS."
    },
    "148": {
        "address": "OLD STA RITA San Miguel, 3011 Philippines",
        "city": "San Miguel",
        "country": "Philippines",
        "lat": 15.1316,
        "lng": 120.962,
        "telephone": "9273863286",
        "text": "SH OLD STA RITA SN MIGUEL DOSS."
    },
    "149": {
        "address": "BRGY SAN JUAN SAN ILDEFONSO, 3010 Philippines",
        "city": "SAN ILDEFONSO",
        "country": "Philippines",
        "lat": 15.0821,
        "lng": 120.9397,
        "telephone": "9076419551",
        "text": "SH SAN JUAN SAN ILDEFONSO DOSS."
    },
    "150": {
        "address": "CAGAYAN VALLEY ROAD SAPANG PUTOL SAN ILDEFONSO, 3010 Philippines",
        "city": "SAN ILDEFONSO",
        "country": "Philippines",
        "lat": 15.0723,
        "lng": 120.9429,
        "telephone": "9076419551",
        "text": "SH SAN IDELFONSO BULACAN DOSS"
    },
    "151": {
        "address": "POBLACION EAST SAN ILDEFONSO, 2728 Philippines",
        "city": "SAN ILDEFONSO",
        "country": "Philippines",
        "lat": 15.072253,
        "lng": 120.942886,
        "telephone": "9175393935",
        "text": "SH SAN ILDEFONSO ILCS SUR DOSS."
    },
    "152": {
        "address": "KM 61 CAGAYAN VALLEY ROAD SAN RAFAEL, 3008 Philippines",
        "city": "SAN RAFAEL",
        "country": "Philippines",
        "lat": 15.036395,
        "lng": 120.937194,
        "telephone": "448157942",
        "text": "SH MAASIM SN RAFAEL BULCN DOSS."
    },
    "153": {
        "address": "BUAS CANDABA, 2013 Philippines",
        "city": "CANDABA",
        "country": "Philippines",
        "lat": 15.092,
        "lng": 120.8287,
        "telephone": "9228621177",
        "text": "SH BUAS CANDABA PAMPANGA DOSS."
    },
    "154": {
        "address": "DRT HIGHWAY TANGOS Baliuag, 3006 Philippines",
        "city": "Baliuag",
        "country": "Philippines",
        "lat": 14.9638,
        "lng": 120.8975,
        "telephone": "9175774355",
        "text": "SH DRT TANGOS BALIWAG BUL COSS."
    },
    "155": {
        "address": "POBLACION BUSTOS, 3007 Philippines",
        "city": "BUSTOS",
        "country": "Philippines",
        "lat": 14.9498,
        "lng": 120.9158,
        "telephone": "447662279",
        "text": "SH POBLACION BUSTOS BULCN DOSS"
    },
    "156": {
        "address": "OLONGAPO GAPAN ROAD BRGY MESULO ARAYAT, 2012 Philippines",
        "city": "ARAYAT",
        "country": "Philippines",
        "lat": 15.1458,
        "lng": 120.7682,
        "telephone": "9228361809",
        "text": "SH OG RD ARAYAT PAMPANGA DOSS"
    },
    "157": {
        "address": "OLONGAPO GAPAN HIGHWAY MEXICO PAMPANGA, 2021 Philippines",
        "city": "PAMPANGA",
        "country": "Philippines",
        "lat": 15.0694,
        "lng": 120.7375,
        "telephone": "9228281609",
        "text": "SH OLONGAPO GAPAN ROAD DOSS."
    },
    "158": {
        "address": "OLONGAPO GAPAN ROAD MEXICO, 2021 Philippines",
        "city": "MEXICO",
        "country": "Philippines",
        "lat": 15.0509,
        "lng": 120.7035,
        "telephone": "",
        "text": "SH MEXICO PAMPANGA COSS"
    },
    "159": {
        "address": "01 SAN MATIAS STO TOMAS PAMPANGA, 2020 Philippines",
        "city": "PAMPANGA",
        "country": "Philippines",
        "lat": 14.9856,
        "lng": 120.7497,
        "telephone": "9228281609",
        "text": "SH STO TOMAS PAMPANGA DOSS."
    },
    "160": {
        "address": "MAC ARTHUR HIWAY DEL PILAR SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.0348,
        "lng": 120.6862,
        "telephone": "459618818",
        "text": "SH DEL PILAR SN FERNANDO DOSS."
    },
    "161": {
        "address": "OLONGAPO GAPAN ROAD DOLORES SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.0428,
        "lng": 120.6851,
        "telephone": "9223603011",
        "text": "SH OG1 SAN FERNANDO PAMP COSS."
    },
    "162": {
        "address": "GD CANLAS SHELL CROSSING DOLORES SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.0428,
        "lng": 120.6851,
        "telephone": "9223603011",
        "text": "SH DOLORES SFO PAMPANGA DOSS."
    },
    "163": {
        "address": "OLONGAPO GAPAN ROAD DOLORES SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.0428,
        "lng": 120.685,
        "telephone": "9223603011",
        "text": "SH OG2 SAN FERNANDO CITY COSS."
    },
    "164": {
        "address": "NORTH EXPRESSWAY DAU MABALACAT, 2010 Philippines",
        "city": "MABALACAT",
        "country": "Philippines",
        "lat": 15.1791,
        "lng": 120.5896,
        "telephone": "9185067961",
        "text": "SH N EXPRESSWAY DAU PAMP COSS."
    },
    "165": {
        "address": "MCARTHUR HIGHWAY PULONG BULU ANGELES CITY, 2009 Philippines",
        "city": "ANGELES CITY",
        "country": "Philippines",
        "lat": 15.1341,
        "lng": 120.5977,
        "telephone": "9185067961",
        "text": "SH MCARTHUR PULUNG BULU COSS."
    },
    "166": {
        "address": "237 PUROK 4 SAN FRANCISCO MAGALANG, 2011 Philippines",
        "city": "MAGALANG",
        "country": "Philippines",
        "lat": 15.203424,
        "lng": 120.645053,
        "telephone": "9175841203",
        "text": "SH MAGALANG PAMPANGA DOSS"
    },
    "167": {
        "address": "MCARTHUR HIGHWAY TELABASTAGAN SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.1197,
        "lng": 120.6017,
        "telephone": "9192281668",
        "text": "SH TELEBASTAGAN SFO CITY COSS."
    },
    "168": {
        "address": "MC ARTHUR HI-WAY DE LA PAZ NORTE San Fernando, 2000 Philippines",
        "city": "San Fernando",
        "country": "Philippines",
        "lat": 15.084389,
        "lng": 120.634303,
        "telephone": "459717557",
        "text": "SH DELA PAZ NRTE PAMPANGA DOSS."
    },
    "169": {
        "address": "KM 77 NORTH LUZON EXPRESSWAY MEXICO, 2021 Philippines",
        "city": "MEXICO",
        "country": "Philippines",
        "lat": 15.1294,
        "lng": 120.6436,
        "telephone": "9175145523",
        "text": "SH NLT2 SBND MEXICO PAMP COSS."
    },
    "170": {
        "address": "STA MARIA STREET POBLACION FLORIDA BLANCA, 2006 Philippines",
        "city": "FLORIDA BLANCA",
        "country": "Philippines",
        "lat": 14.9752,
        "lng": 120.527,
        "telephone": "9995587328",
        "text": "SH FLORIDABLANCA PAMPANGA DOSS."
    },
    "171": {
        "address": "SAN ROQUE GUAGUA, 2003 Philippines",
        "city": "GUAGUA",
        "country": "Philippines",
        "lat": 14.975,
        "lng": 120.6176,
        "telephone": "9228288629",
        "text": "SH SN ROQUE GUAGUA PMPNGA DOSS"
    },
    "172": {
        "address": "OLD PROVINCIAL HIGHWAY BACOLOR PAMPANGA, 2001 Philippines",
        "city": "PAMPANGA",
        "country": "Philippines",
        "lat": 14.9969,
        "lng": 120.6529,
        "telephone": "",
        "text": "SH BACOLOR PAMPANGA DOSS."
    },
    "173": {
        "address": "SITIO BANLIC CABALANTIAN BACOLOR PAMPANGA, 2001 Philippines",
        "city": "PAMPANGA",
        "country": "Philippines",
        "lat": 15.0159,
        "lng": 120.6629,
        "telephone": "9175620903",
        "text": "SH CABALANTIAN BACOLOR DOSS."
    },
    "174": {
        "address": "MCARTHUR HIGHWAY SAN AGUSTIN SAN FERNANDO CITY, 2000 Philippines",
        "city": "SAN FERNANDO CITY",
        "country": "Philippines",
        "lat": 15.0482,
        "lng": 120.6681,
        "telephone": "9326680692",
        "text": "SH SAN AGUSTIN SFO PMPNGA COSS."
    },
    "175": {
        "address": "SASMUAN Sasmuan, 2004 Philippines",
        "city": "Sasmuan",
        "country": "Philippines",
        "lat": 14.936715,
        "lng": 120.622507,
        "telephone": "9228288629",
        "text": "SH SASMUAN PAMPANGA DOSS."
    },
    "176": {
        "address": "STA CRUZ LUBAO, 2005 Philippines",
        "city": "LUBAO",
        "country": "Philippines",
        "lat": 14.9007,
        "lng": 120.5477,
        "telephone": "9475041552",
        "text": "SH STA CRUZ LUBAO PMPANGA DOSS."
    },
    "177": {
        "address": "MCARTHUR HIGHWAY SAN VICENTE APALIT, 2016 Philippines",
        "city": "APALIT",
        "country": "Philippines",
        "lat": 14.947,
        "lng": 120.7583,
        "telephone": "9235226026",
        "text": "SH APALIT SOUTHBOUND PAMP COSS."
    },
    "178": {
        "address": "189 MCARTHUR HIGHWAY APALIT PAMPANGA, 2016 Philippines",
        "city": "PAMPANGA",
        "country": "Philippines",
        "lat": 14.9572,
        "lng": 120.7585,
        "telephone": "9089590741",
        "text": "SH SAN VICENTE APALIT DOSS"
    },
    "179": {
        "address": "NATIONAL ROAD DAMPOL 1ST PULILAN BULACAN, 3005 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.9082,
        "lng": 120.8191,
        "telephone": "",
        "text": "SH NAT RD DAMPOL PUL BUL DOSS"
    },
    "180": {
        "address": "SAN GABRIEL MACABEBE, 2018 Philippines",
        "city": "MACABEBE",
        "country": "Philippines",
        "lat": 14.9095,
        "lng": 120.7171,
        "telephone": "9228093902",
        "text": "SH SAN GABRIEL MACABEBE DOSS"
    },
    "181": {
        "address": "MCARTHUR HIGHWAY BULIHAN MALOLOS CITY, 3000 Philippines",
        "city": "MALOLOS CITY",
        "country": "Philippines",
        "lat": 14.863682,
        "lng": 120.806469,
        "telephone": "9224376811",
        "text": "SH MCARTHUR HWAY MALOLOS COSS"
    },
    "182": {
        "address": "PUROK 1 MCARTHUR HIGHWAY BRGY TIKAY MALOLOS CITY, 3000 Philippines",
        "city": "MALOLOS CITY",
        "country": "Philippines",
        "lat": 14.863687,
        "lng": 120.80649,
        "telephone": "9063357568",
        "text": "SH TABANG MALOLOS DOSS"
    },
    "183": {
        "address": "BRGY PALTAO PULILAN, 3005 Philippines",
        "city": "PULILAN",
        "country": "Philippines",
        "lat": 14.902,
        "lng": 120.8546,
        "telephone": "9178497747",
        "text": "SH PALTAO PULILAN DOSS"
    },
    "184": {
        "address": "DRT HIGHWAY SANTO CRISTO PULILAN, 3005 Philippines",
        "city": "PULILAN",
        "country": "Philippines",
        "lat": 14.9025,
        "lng": 120.8681,
        "telephone": "9175166934",
        "text": "SH DRT HWAY S CRISTO PUL COSS."
    },
    "185": {
        "address": "LAYAC DINALUPIHAN, 2110 Philippines",
        "city": "DINALUPIHAN",
        "country": "Philippines",
        "lat": 14.8639,
        "lng": 120.4694,
        "telephone": "9209524205",
        "text": "SH LAYAC DINALUPIHAN BAT COSS."
    },
    "186": {
        "address": "NATIONAL ROAD MORONG, 2108 Philippines",
        "city": "MORONG",
        "country": "Philippines",
        "lat": 14.741,
        "lng": 120.2839,
        "telephone": "9287856522",
        "text": "SH MORONG BATAAN DOSS."
    },
    "187": {
        "address": "ROMAN HIGHWAY BALANGA, 2100 Philippines",
        "city": "BALANGA",
        "country": "Philippines",
        "lat": 14.675,
        "lng": 120.5226,
        "telephone": "9175498906",
        "text": "SH BALANGA ROMAN HIGHWAY DOSS."
    },
    "188": {
        "address": "DIVERSION ROAD TALISAY BALANGA CITY, 2100 Philippines",
        "city": "BALANGA CITY",
        "country": "Philippines",
        "lat": 14.6801,
        "lng": 120.5421,
        "telephone": "9295661111",
        "text": "SH BALANGA BATAAN COSS."
    },
    "189": {
        "address": "BALAGTAS ORION ORION, 2102 Philippines",
        "city": "ORION",
        "country": "Philippines",
        "lat": 14.6167,
        "lng": 120.5833,
        "telephone": "9175498906",
        "text": "SH BALAGTAS ORION BATAAN DOSS."
    },
    "190": {
        "address": "ROMAN HIGHWAY ALANGAN LIMAY, 2103 Philippines",
        "city": "LIMAY",
        "country": "Philippines",
        "lat": 14.527772,
        "lng": 120.593995,
        "telephone": "9228879945",
        "text": "SH ALANGAN LIMAY BATAAN DOSS."
    },
    "191": {
        "address": "NATIONAL HIGHWAY A RICARDO BAGAC, 2107 Philippines",
        "city": "BAGAC",
        "country": "Philippines",
        "lat": 14.602376,
        "lng": 120.396359,
        "telephone": "9094001995",
        "text": "SH PAG ASA BAGAC BATAAN DOSS"
    },
    "192": {
        "address": "ROMAN HIGHWAY ALAS ASIN Mariveles, 2105 Philippines",
        "city": "Mariveles",
        "country": "Philippines",
        "lat": 14.4634,
        "lng": 120.5382,
        "telephone": "",
        "text": "SH MARIVELES BATAAN DOSS."
    },
    "193": {
        "address": "BALSAHAN BINAKAYAN KAWIT, 4104 Philippines",
        "city": "KAWIT",
        "country": "Philippines",
        "lat": 14.450135,
        "lng": 120.925714,
        "telephone": "9237126774",
        "text": "SH BINAKAYAN KAWIT COSS"
    },
    "194": {
        "address": "A SORIANO HIWAY BRGY TABON KAWIT, 4104 Philippines",
        "city": "KAWIT",
        "country": "Philippines",
        "lat": 14.4383,
        "lng": 120.9081,
        "telephone": "9228880235",
        "text": "SH SORIANO TABON CAVITE COSS"
    },
    "195": {
        "address": "GEN CASTANEDA STREET POBLACION II A IMUS, 4103 Philippines",
        "city": "IMUS",
        "country": "Philippines",
        "lat": 14.4297,
        "lng": 120.9374,
        "telephone": "9175027858",
        "text": "SH CASTANEDA BELLA IMUS COSS."
    },
    "196": {
        "address": "12 MALVAR STREET POBLACION 38 INFANTA, 4336 Philippines",
        "city": "INFANTA",
        "country": "Philippines",
        "lat": 14.7454,
        "lng": 121.6485,
        "telephone": "9159917220",
        "text": "SH INFANTA QUEZON DOSS."
    },
    "197": {
        "address": "8 JP RIZAL STREET PAGSANJAN, 4006 Philippines",
        "city": "PAGSANJAN",
        "country": "Philippines",
        "lat": 14.2729,
        "lng": 121.4551,
        "telephone": "9176205513",
        "text": "SH PAGSANJAN LAGUNA DOSS."
    },
    "198": {
        "address": "MANILA EAST COR SAMPALOC BRGY ALDEA TANAY, 1980 Philippines",
        "city": "TANAY",
        "country": "Philippines",
        "lat": 14.5005,
        "lng": 121.2955,
        "telephone": "9178545681",
        "text": "SH ALDEA TANAY DOSS."
    },
    "199": {
        "address": "BRGY BINAN PAGSANJAN, 4008 Philippines",
        "city": "PAGSANJAN",
        "country": "Philippines",
        "lat": 14.2653,
        "lng": 121.4376,
        "telephone": "9178289006",
        "text": "SH BINAN PAGSANJAN LAGUNA DOSS"
    },
    "200": {
        "address": "F CATAPUSAN ROAD RIZAL CITY, 1980 Philippines",
        "city": "RIZAL CITY",
        "country": "Philippines",
        "lat": 14.4956,
        "lng": 121.2889,
        "telephone": "9428855",
        "text": "SH CATAPUSAN TANAY RIZAL DOSS."
    },
    "201": {
        "address": "CIRCUMFERENTIAL ROAD BARANGAY DALIG ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.5782,
        "lng": 121.1856,
        "telephone": "9275988583",
        "text": "SH CIRCUMFERENTIAL ANTPLO COSS"
    },
    "202": {
        "address": "BRGY PARUNGAN NATIONAL RD ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.5783,
        "lng": 121.1856,
        "telephone": "9183662440",
        "text": "SH RODRIGUEZ PASEO DE PAZ COSS"
    },
    "203": {
        "address": "ML QUEZON AVE EXT BRGY DALIG ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.575,
        "lng": 121.177,
        "telephone": "9196898756",
        "text": "SH ML QUEZON SUNFLOWER COSS."
    },
    "204": {
        "address": "MARCOS HI WAY COGEO ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.6238,
        "lng": 121.1636,
        "telephone": "9238582802",
        "text": "SH MARCOS HIGHWAY COGEO COSS"
    },
    "205": {
        "address": "188 M A FERNANDO ST SAN ROQUE ANGAT, 3012 Philippines",
        "city": "ANGAT",
        "country": "Philippines",
        "lat": 14.935,
        "lng": 121.0234,
        "telephone": "9228571958",
        "text": "SH FERNANDO ANGAT BULACAN DOSS."
    },
    "206": {
        "address": "365 MARUNGKO ANGAT, 3012 Philippines",
        "city": "ANGAT",
        "country": "Philippines",
        "lat": 14.9504,
        "lng": 121.0081,
        "telephone": "9228040762",
        "text": "SH MARUNGKO ANGAT BULACAN DOSS."
    },
    "207": {
        "address": "ALTUNIN ROAD NORZAGARAY, 3013 Philippines",
        "city": "NORZAGARAY",
        "country": "Philippines",
        "lat": 14.9061,
        "lng": 121.0387,
        "telephone": "9088642962",
        "text": "SH NORZAGARAY BULACAN DOSS."
    },
    "208": {
        "address": "MAPULANG LUPA PANDI BULACAN, 3014 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.884,
        "lng": 120.9653,
        "telephone": "09175247171",
        "text": "SH PANDI BULACAN DOSS."
    },
    "209": {
        "address": "PROVINCIAL ROAD GUYONG STA MARIA BULACAN, 3022 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.8416,
        "lng": 120.9798,
        "telephone": "442882770",
        "text": "SH GUYONG STA MARIA BUL DOSS."
    },
    "210": {
        "address": "SN JOSE DEL MONTE SAN JOSE DEL MONTE CITY, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE CITY",
        "country": "Philippines",
        "lat": 14.795656,
        "lng": 121.026871,
        "telephone": "9175160166",
        "text": "SH SAN JOSE DELMONTE DOSS."
    },
    "211": {
        "address": "DRT HIGHWAY PINAGBARILAN Baliuag, 3006 Philippines",
        "city": "Baliuag",
        "country": "Philippines",
        "lat": 14.948882,
        "lng": 120.883352,
        "telephone": "9175470927",
        "text": "SH DRT BALIUAG BULACAN DOSS"
    },
    "212": {
        "address": "CAGAYAN VALLEY ROAD TABANG PLARIDEL, 3004 Philippines",
        "city": "PLARIDEL",
        "country": "Philippines",
        "lat": 14.8774,
        "lng": 120.8639,
        "telephone": "9175850503",
        "text": "SH CAGAYAN RD 1 PLARIDEL COSS."
    },
    "213": {
        "address": "AGNAYA PLARIDEL, 3004 Philippines",
        "city": "PLARIDEL",
        "country": "Philippines",
        "lat": 14.8843,
        "lng": 120.8556,
        "telephone": "447945035",
        "text": "SH AGNAYA PLARIDEL BUL DOSS."
    },
    "214": {
        "address": "CAGAYAN VALLEY RD TABANG PLARIDEL, 3004 Philippines",
        "city": "PLARIDEL",
        "country": "Philippines",
        "lat": 14.8713,
        "lng": 120.861,
        "telephone": "9175850503",
        "text": "SH CAGAYAN RD 2 PLARIDEL COSS."
    },
    "215": {
        "address": "BYPASS ROAD SANTA CLARA SANTA MARIA, 3022 Philippines",
        "city": "SANTA MARIA",
        "country": "Philippines",
        "lat": 14.8207,
        "lng": 120.9521,
        "telephone": "9228622055",
        "text": "SH BYPASS STA MARIA BUL COSS"
    },
    "216": {
        "address": "BRGY DULONG BAYAN POBLACION STA MARIA, 3022 Philippines",
        "city": "STA MARIA",
        "country": "Philippines",
        "lat": 14.82363,
        "lng": 120.967884,
        "telephone": "9228622055",
        "text": "SH DULONG BAYAN STA MARIA DOSS."
    },
    "217": {
        "address": "GOV F HALILI AVE TURO BOCAUE, 3018 Philippines",
        "city": "BOCAUE",
        "country": "Philippines",
        "lat": 14.8082,
        "lng": 120.9432,
        "telephone": "9228622055",
        "text": "SH GOV HALILI TURO BOCAUE COSS"
    },
    "218": {
        "address": "NATIONAL ROAD BGY PARADA STA MARIA BULACAN, 3022 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.8135,
        "lng": 120.9762,
        "telephone": "09175363264",
        "text": "SH PARADA STA MARIA BUL DOSS."
    },
    "219": {
        "address": "PLARIDEL BYPASS ROAD BULACAN PLARIDEL, 3004 Philippines",
        "city": "PLARIDEL",
        "country": "Philippines",
        "lat": 14.8606,
        "lng": 120.8909,
        "telephone": "447940059",
        "text": "SH PLARIDEL BYPASS ROAD COSS"
    },
    "220": {
        "address": "BRGY MALIS BULACAN, 3017 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.8516,
        "lng": 120.8748,
        "telephone": "9232524755",
        "text": "SH NLT3 GUIGUINTO BULACAN COSS."
    },
    "221": {
        "address": "CAGAYAN VALLEY ROAD STA CRUZ GUIGUINTO, 3015 Philippines",
        "city": "GUIGUINTO",
        "country": "Philippines",
        "lat": 14.8424,
        "lng": 120.8612,
        "telephone": "9175850503",
        "text": "SH STA CRUZ GUIGUINTO BUL COSS."
    },
    "222": {
        "address": "TABANG TOLL PLAZA SANTA CRUZ GUIGUINTO, 3015 Philippines",
        "city": "GUIGUINTO",
        "country": "Philippines",
        "lat": 14.8374,
        "lng": 120.8664,
        "telephone": "9175850503",
        "text": "SH TABANG TOLL GUIGUINTO COSS."
    },
    "223": {
        "address": "PUROK 6 BARANGAY STO NINO PAOMBONG, 3001 Philippines",
        "city": "PAOMBONG",
        "country": "Philippines",
        "lat": 14.837,
        "lng": 120.7894,
        "telephone": "0446651092",
        "text": "SH PAOMBONG BULACAN DOSS."
    },
    "224": {
        "address": "234 BINAN II MC ARTHUR HWAY BGY BIN BOCAUE, 3018 Philippines",
        "city": "BOCAUE",
        "country": "Philippines",
        "lat": 14.795326,
        "lng": 120.930457,
        "telephone": "9228622055",
        "text": "SH BINAN II MCARTHUR HWAY COSS"
    },
    "225": {
        "address": "MCARTHUR HGHWAY BGY WAKAS BOCAUE BU BULACAN, 3018 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.8055,
        "lng": 120.9187,
        "telephone": "9175165287",
        "text": "SH WAKAS CAINGIN BOCAUE DOSS."
    },
    "226": {
        "address": "MCARTHUR HIGHWAY SAN JUAN BALAGTAS, 3016 Philippines",
        "city": "BALAGTAS",
        "country": "Philippines",
        "lat": 14.8208,
        "lng": 120.9033,
        "telephone": "9237039319",
        "text": "SH SAN JUAN BALAGTAS BUL COSS."
    },
    "227": {
        "address": "SAN JOSE BALIWAG BULACAN BULACAN, 3006 Philippines",
        "city": "BULACAN",
        "country": "Philippines",
        "lat": 14.796,
        "lng": 120.8767,
        "telephone": "9175274773",
        "text": "SH SN JOSE BLIWAG BULACAN DOSS"
    },
    "228": {
        "address": "T 002 TABING ILOG MARILAO, 3019 Philippines",
        "city": "MARILAO",
        "country": "Philippines",
        "lat": 14.7677,
        "lng": 120.9526,
        "telephone": "9175160191",
        "text": "SH MARILAO BULACAN DOSS."
    },
    "229": {
        "address": "MINUYAN PROPER SAN JOSE DEL MONTE, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE",
        "country": "Philippines",
        "lat": 14.79,
        "lng": 121.0729,
        "telephone": "9178220620",
        "text": "SH MINUYAN SJDM DOSS"
    },
    "230": {
        "address": "QUIRINO HIGHWAY TUNGKONG MANGGA SAN JOSE DEL MONTE CITY, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE CITY",
        "country": "Philippines",
        "lat": 14.79,
        "lng": 121.0748,
        "telephone": "9213005783",
        "text": "SH TUNGKONG MANGGA SJDM COSS."
    },
    "231": {
        "address": "MUZON SAN JOSE DEL MONTE CITY, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE CITY",
        "country": "Philippines",
        "lat": 14.79222,
        "lng": 121.07318,
        "telephone": "9336944358",
        "text": "SH MUZON DEL MONTE BULACN DOSS."
    },
    "232": {
        "address": "QUIRINO HIWAY TUNGKONG MANGGA SAN JOSE DEL MONTE CITY, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE CITY",
        "country": "Philippines",
        "lat": 14.778,
        "lng": 121.0742,
        "telephone": "9231679578",
        "text": "SH PLEASNT HILLS SJDM BUL COSS."
    },
    "233": {
        "address": "130 SUSANO ROAD ZABARTE CAMARIN CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.7528,
        "lng": 121.0444,
        "telephone": "9393536832",
        "text": "SH SUSANO RD CAMARIN CAL COSS."
    },
    "234": {
        "address": "130 COR EDEN ST SAN AGUSTIN NOVALIC QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7311,
        "lng": 121.0363,
        "telephone": "9234679234",
        "text": "SH SUSANO EDEN NOVALICHES COSS."
    },
    "235": {
        "address": "207 GENERAL LUIS STREET NOVALICHES QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7215,
        "lng": 121.0351,
        "telephone": "9322726187",
        "text": "SH GEN LUIS ST NOVALICHES COSS."
    },
    "236": {
        "address": "IBA ROAD BARNAGY IBA MEYCAUAYAN CITY, 3020 Philippines",
        "city": "MEYCAUAYAN CITY",
        "country": "Philippines",
        "lat": 14.7542,
        "lng": 120.9786,
        "telephone": "9178400343",
        "text": "SH IBA MEYCAUAYAN BULACAN COSS"
    },
    "237": {
        "address": "ROSAS NORTE MCARTHUR HWAY SALUYSOY MEYCAUAYAN CITY, 3020 Philippines",
        "city": "MEYCAUAYAN CITY",
        "country": "Philippines",
        "lat": 14.7504,
        "lng": 120.9559,
        "telephone": "9178400343",
        "text": "SH ROSASNORTE SALUYSOY COSS"
    },
    "238": {
        "address": "KM 17 BARRIO BANGA MCARTHUR HIGHWAY MEYCAUAYAN CITY, 3020 Philippines",
        "city": "MEYCAUAYAN CITY",
        "country": "Philippines",
        "lat": 14.725299,
        "lng": 120.960725,
        "telephone": "9178400343",
        "text": "SH BANGA MCARTHUR HWAY COSS"
    },
    "239": {
        "address": "KM 15 MCARTHUR DALANDANAN MALANDAY VALENZUELA CITY, 1444 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.710709,
        "lng": 120.959634,
        "telephone": "9178400343",
        "text": "SH MCARTHUR DALNDANAN VAL COSS"
    },
    "240": {
        "address": "EAST CANUMAY SERVICE ROAD VALENZUELA CITY, 1447 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.7109,
        "lng": 120.992,
        "telephone": "9062438687",
        "text": "SH EAST CANUMAY VLENZUELA COSS"
    },
    "241": {
        "address": "65 PASO DE BLAS ROAD VALENZUELA CITY, 1440 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.7058,
        "lng": 120.9894,
        "telephone": "9228300779",
        "text": "SH PASO D BLAS VALENZUELA COSS"
    },
    "242": {
        "address": "300 T SANTIAGO ST PALTOK VALENZUELA CITY, 1440 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.7126,
        "lng": 120.9679,
        "telephone": "9292595390",
        "text": "SH T SANTIAGO PALTOK DOSS."
    },
    "243": {
        "address": "L SUMULONG MEMORIAL CIRCLE ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.5902,
        "lng": 121.1822,
        "telephone": "27016843",
        "text": "SH SUMULONG ANTIPOLO CITY DOSS."
    },
    "244": {
        "address": "KM 20 ORTIGAS AVE EXT KAYTIKLING TAYTAY, 1920 Philippines",
        "city": "TAYTAY",
        "country": "Philippines",
        "lat": 14.5793,
        "lng": 121.1369,
        "telephone": "9088848798",
        "text": "SH ORTIGAS EXT TAYTAY COSS."
    },
    "245": {
        "address": "SHELL STATION ORTIGAS EXT SAN JUAN TAYTAY, 1900 Philippines",
        "city": "TAYTAY",
        "country": "Philippines",
        "lat": 14.5793,
        "lng": 121.1369,
        "telephone": "9189072171",
        "text": "SH ORTIGAS EX CAINTA EAST COSS"
    },
    "246": {
        "address": "MANILA EAST ROAD DOLORES TAYTAY, 1920 Philippines",
        "city": "TAYTAY",
        "country": "Philippines",
        "lat": 14.5667,
        "lng": 121.1415,
        "telephone": "9192223536",
        "text": "SH MANILA EAST TAYTAY COSS."
    },
    "247": {
        "address": "A BONIFACIO AVE SAN JUAN CAINTA, 1900 Philippines",
        "city": "CAINTA",
        "country": "Philippines",
        "lat": 14.5747,
        "lng": 121.1231,
        "telephone": "9192223536",
        "text": "SH A BONIFACIO SAMONTE COSS."
    },
    "248": {
        "address": "LOT 11637 MANILA EAST ROAD Rizal, 1940 Philippines",
        "city": "Rizal",
        "country": "Philippines",
        "lat": 14.4858,
        "lng": 121.1867,
        "telephone": "9178519455",
        "text": "SH DARANGAN BINANGONAN DOSS."
    },
    "249": {
        "address": "QUARY ROAD BARANGAY PANTOK BINANGONAN, 1940 Philippines",
        "city": "BINANGONAN",
        "country": "Philippines",
        "lat": 14.4952,
        "lng": 121.1807,
        "telephone": "9267457117",
        "text": "SH PANTOK BINANGONAN DOSS."
    },
    "250": {
        "address": "M L QUEZON COR RODRIGUEZ SAN ISIDRO ANGONO, 1930 Philippines",
        "city": "ANGONO",
        "country": "Philippines",
        "lat": 14.5382,
        "lng": 121.1487,
        "telephone": "9192223536",
        "text": "SH RODRGUEZ QUEZON ANGONO COSS."
    },
    "251": {
        "address": "MANILA EAST ROAD SAN JUAN TAYTAY, 1920 Philippines",
        "city": "TAYTAY",
        "country": "Philippines",
        "lat": 14.5512,
        "lng": 121.1395,
        "telephone": "9192223536",
        "text": "SH MANILA EAST RD N BOUND COSS"
    },
    "252": {
        "address": "LOT 5 HIWAY 2000 BRGY SAN JUAN TAYTAY, 1920 Philippines",
        "city": "TAYTAY",
        "country": "Philippines",
        "lat": 14.555,
        "lng": 121.128,
        "telephone": "27016843",
        "text": "SH BRGY SAN JUAN TAYTAY DOSS"
    },
    "253": {
        "address": "428 M H DEL PILAR ST MAYSILO MALABON CITY, 1477 Philippines",
        "city": "MALABON CITY",
        "country": "Philippines",
        "lat": 14.6834,
        "lng": 120.9593,
        "telephone": "9185215049",
        "text": "SH MH DEL PILAR MAYSILO COSS."
    },
    "254": {
        "address": "230 MC ARTHUR HIGHWAY KARUHATAN VALENZUELA CITY, 1441 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.687,
        "lng": 120.976,
        "telephone": "9203158816",
        "text": "SH MCARTHUR KARUHATAN COSS"
    },
    "255": {
        "address": "GENERAL T DE LEON STREET VALENZUELA CITY, 1440 Philippines",
        "city": "VALENZUELA CITY",
        "country": "Philippines",
        "lat": 14.6863,
        "lng": 120.9957,
        "telephone": "9328922511",
        "text": "SH GEN TDE LEON VLENZUELA COSS"
    },
    "256": {
        "address": "LUKARIA ST BRGY TALIPAPA QUEZON CIT QUEZON CITY, 1116 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6925,
        "lng": 121.0268,
        "telephone": "",
        "text": "SH LUKARIA QUEZON CITY DOSS"
    },
    "257": {
        "address": "372 NOVALICHES QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6801,
        "lng": 121.0193,
        "telephone": "9204159648",
        "text": "SH TANDANG SORA QUIRINO COSS."
    },
    "258": {
        "address": "190 BO BAHAY TORO TANDANG SORA QUEZON CITY, 1116 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6755,
        "lng": 121.031,
        "telephone": "9237294392",
        "text": "SH MINDANAO TANDANG SORA COSS."
    },
    "259": {
        "address": "COR MWSS TALIPAPA NOVALICHES QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.68498,
        "lng": 121.032174,
        "telephone": "9334725177",
        "text": "SH MINDANAO COR SSS RD COSS."
    },
    "260": {
        "address": "BLK 2 LOT OCEANA PARK AVENUE SAUYO QUEZON CITY, 1116 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6944,
        "lng": 121.0438,
        "telephone": "4555594",
        "text": "SH SAUYO NOVALICHES QC DOSS"
    },
    "261": {
        "address": "847 QUIRINO HWAY GULOD NOVALICHES QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.712772,
        "lng": 121.03973,
        "telephone": "9178278827",
        "text": "SH QUIRINO GULOD NOVLCHES COSS."
    },
    "262": {
        "address": "1081 QUIRINO HWAY KALIGAYAHAN NOVAL QUEZON CITY, 1123 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7286,
        "lng": 121.0425,
        "telephone": "9393536832",
        "text": "SH QUIRINO HIGHWAY IPO QC COSS."
    },
    "263": {
        "address": "DMMA COMMONWEALTH AVE N FAIRVIEW QUEZON CITY, 1121 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7095,
        "lng": 121.0613,
        "telephone": "9062438687",
        "text": "SH DMMA NORTH FAIRVIEW QC COSS."
    },
    "264": {
        "address": "DON M MARCOS COR REGALADO FAIRVIEW QUEZON CITY, 1118 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7061,
        "lng": 121.0703,
        "telephone": "9994034586",
        "text": "SH DMMA REGALADO FAIRVIEW COSS"
    },
    "265": {
        "address": "BRGY PASONG PUTIK FAIRVIEW QUEZON CITY, 1118 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.7256,
        "lng": 121.0615,
        "telephone": "9224998591",
        "text": "SH REGALADO PASONG PUTIK COSS."
    },
    "266": {
        "address": "BRGY HOLY SPIRIT DILIMAN QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.675,
        "lng": 121.0806,
        "telephone": "09178397551",
        "text": "SH COMONWEALTH HOLY SPIRT COSS."
    },
    "267": {
        "address": "122 GEN LUNA AMPID SAN MATEO, 1850 Philippines",
        "city": "SAN MATEO",
        "country": "Philippines",
        "lat": 14.6812,
        "lng": 121.1149,
        "telephone": "9287892473",
        "text": "SH GEN LUNA AMPID COSS."
    },
    "268": {
        "address": "519 JP RIZAL ST LAMUAN MARIKINA CITY, 1800 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6633,
        "lng": 121.1065,
        "telephone": "9228187146",
        "text": "SH JP RIZAL LAMUAN MRIKNA COSS."
    },
    "269": {
        "address": "DON MARIANO AVE DON ANTONIO DILIMAN QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6773,
        "lng": 121.0836,
        "telephone": "9166459415",
        "text": "SH DMMA DON ANTONIO QC COSS."
    },
    "270": {
        "address": "ISIDORA HILLS SUBD DILIMAN QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6772,
        "lng": 121.0838,
        "telephone": "9491414393",
        "text": "SH POOK LIGAYA DILIMAN QC COSS."
    },
    "271": {
        "address": "DON MARIANO MARCOS AVE DILIMAN QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6636,
        "lng": 121.0669,
        "telephone": "9178397551",
        "text": "SH DMMA IGLESIA NI KRISTO COSS."
    },
    "272": {
        "address": "RODRIGUEZ HIGHWAY RODRIGUEZ MONTALBAN, 1860 Philippines",
        "city": "MONTALBAN",
        "country": "Philippines",
        "lat": 14.732262,
        "lng": 121.132303,
        "telephone": "29481851",
        "text": "SH MONTALBAN RIZAL DOSS"
    },
    "273": {
        "address": "A MABINI ST BURGOS RODRIGUEZ RIZAL Rizal, 1860 Philippines",
        "city": "Rizal",
        "country": "Philippines",
        "lat": 14.7128,
        "lng": 121.1341,
        "telephone": "24512756",
        "text": "SH BURGOS RODRIGUEZ RIZAL DOSS."
    },
    "274": {
        "address": "E RODRIGUEZ AVE STO NINO MARIKINA CITY, 1800 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6438,
        "lng": 121.1002,
        "telephone": "9228187146",
        "text": "SH E RODRIGUEZ STO NINO COSS."
    },
    "275": {
        "address": "J P RIZAL COR SPAIN ST CONCEPCION MARIKINA CITY, 1807 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6461,
        "lng": 121.0964,
        "telephone": "9214286003",
        "text": "SH JPRIZAL SPAIN MARIKINA COSS."
    },
    "276": {
        "address": "COR MOLAVE ST MARIKINA HEIGHTS MARIKINA CITY, 1810 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6504,
        "lng": 121.1121,
        "telephone": "9994864504",
        "text": "SH BAYANBAYAN MOLAVE COSS."
    },
    "277": {
        "address": "TINAJEROS POTRERO MALABON CITY, 1475 Philippines",
        "city": "MALABON CITY",
        "country": "Philippines",
        "lat": 14.6694,
        "lng": 120.9751,
        "telephone": "9155874777",
        "text": "SH MCARTHUR TINAJEROS COSS."
    },
    "278": {
        "address": "705 PASCUAL AVENUE BARANGAY POTRERO MALABON CITY, 1475 Philippines",
        "city": "MALABON CITY",
        "country": "Philippines",
        "lat": 14.6694,
        "lng": 120.9752,
        "telephone": "9178823328",
        "text": "SH GOV PASCUAL POTRERO COSS."
    },
    "279": {
        "address": "C 4 COR DAGAT DAGATAN AVE CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6573,
        "lng": 120.9621,
        "telephone": "9175845997",
        "text": "SH C4 DAGAT DAGATAN CAL COSS"
    },
    "280": {
        "address": "161 QUIRINO HIGHWAY BAESA QUEZON CITY, 1106 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6686,
        "lng": 121.0088,
        "telephone": "9178278827",
        "text": "SH QUIRINO HWAY BAESA QC COSS."
    },
    "281": {
        "address": "BRGY BAHAY TORO PROJECT 8 QUEZON CITY, 1106 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6658,
        "lng": 121.032,
        "telephone": "9185215049",
        "text": "SH CONGRESIONL BAHAY TORO COSS"
    },
    "282": {
        "address": "52 VISAYAS AVENUE VASRA QUEZON CITY, 1128 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6621,
        "lng": 121.0445,
        "telephone": "9166459415",
        "text": "SH VISAYAS AVE QC COSS."
    },
    "283": {
        "address": "CONGRESSIONAL EXT WEST BOUND QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.673068,
        "lng": 121.060798,
        "telephone": "29510955",
        "text": "SH CONGRESSIONAL EXT QC COSS."
    },
    "284": {
        "address": "L17 18 SOLIVEN AVE GREENHEIGHTS NEW ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.6331,
        "lng": 121.1217,
        "telephone": "9178562705",
        "text": "SH SOLIVEN ANTIPOLO CITY DOSS."
    },
    "285": {
        "address": "C 3 ROAD DAGAT DAGATAN CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6453,
        "lng": 120.9629,
        "telephone": "9175845997",
        "text": "SH C3 DAGAT DAGATAN CAL DOSS"
    },
    "286": {
        "address": "10TH AVE COR D AQUINO ST GRACE PARK CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6515,
        "lng": 120.9796,
        "telephone": "9192226445",
        "text": "SH 10TH AVE COR D AQUINO COSS"
    },
    "287": {
        "address": "69 HONORIO LOPEZ BOULEVARD NBBS NAVOTAS CITY, 1485 Philippines",
        "city": "NAVOTAS CITY",
        "country": "Philippines",
        "lat": 14.6373,
        "lng": 120.9597,
        "telephone": "9178471308",
        "text": "SH LOPEZ BLVD NAVOTAS COSS."
    },
    "288": {
        "address": "472 EDSA CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6569,
        "lng": 120.9892,
        "telephone": "9062726299",
        "text": "SH EDSA CALOOCAN QC BOUND COSS."
    },
    "289": {
        "address": "249 RIZAL AVE EXT BARANGAY 58 CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.647514,
        "lng": 120.983452,
        "telephone": "9086546692",
        "text": "SH RAE COR 7TH AVE CAL COSS."
    },
    "290": {
        "address": "67 8TH AND 9TH AVE B SERRANO ST CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.649405,
        "lng": 120.987907,
        "telephone": "9172477432",
        "text": "SH 8TH 9TH AVE B SERRANO COSS."
    },
    "291": {
        "address": "EDSA COR LIBERTY OIL BALINTAWAK QUEZON CITY, 1106 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6578,
        "lng": 121.0076,
        "telephone": "9175625648",
        "text": "SH EDSA BALINTAWAK QC COSS"
    },
    "292": {
        "address": "BIGNAY ST BRGY BALINGASA BALINTAWAK QUEZON CITY, 1106 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.652911,
        "lng": 120.997909,
        "telephone": "9167807316",
        "text": "SH A BONIFACIO BALINTAWAK COSS"
    },
    "293": {
        "address": "EDSA KAINGIN EDSA SOUTHBOUND QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6573,
        "lng": 121.0116,
        "telephone": "",
        "text": "SH EDSA KAINGIN SBOUND QC COSS."
    },
    "294": {
        "address": "30 CONGRESSIONAL AVE BRGY R MAGSAYS QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6608,
        "lng": 121.0197,
        "telephone": "9308893938",
        "text": "SH CONGRESIONL BAGO BNTAY COSS"
    },
    "295": {
        "address": "MINDANAO AVENUE QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6614,
        "lng": 121.0369,
        "telephone": "24185819",
        "text": "SH MINDANAO VETERANS QC COSS."
    },
    "296": {
        "address": "131 KALAYAAN AVE BRGY CENTRAL DILIM QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6458,
        "lng": 121.0526,
        "telephone": "9178545821",
        "text": "SH KALAYAAN MAKATARUNGAN COSS."
    },
    "297": {
        "address": "78 KALAYAAN AVE BRGY TEACHERS VILLA QUEZON CITY, 1101 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6416,
        "lng": 121.0549,
        "telephone": "9178545821",
        "text": "SH KALAYAAN TEACHERS VILL COSS."
    },
    "298": {
        "address": "KATIPUNAN COR ESCALER ST LOYOLA HTS QUEZON CITY, 1108 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6459,
        "lng": 121.074,
        "telephone": "9228532728",
        "text": "SH KATIPUNAN LA VISTA QC COSS."
    },
    "299": {
        "address": "BRGY KRUS NA LIGAS QUEZON CITY, 1104 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6568,
        "lng": 121.0584,
        "telephone": "9228532728",
        "text": "SH DMMA UP DILIMAN QC COSS."
    },
    "300": {
        "address": "125 A BONIFACIO AVE TANONG MARIKINA CITY, 1803 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6339,
        "lng": 121.0858,
        "telephone": "9216290246",
        "text": "SH A BONIFACIO TANONG MAR COSS."
    },
    "301": {
        "address": "282 JP RIZAL STREET SAN ROQUE MARIKINA CITY, 1801 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6295,
        "lng": 121.0967,
        "telephone": "9204159648",
        "text": "SH JP RIZAL SAN ROQUE COSS."
    },
    "302": {
        "address": "A TUAZON AVE SAN ROQUE MARIKINA CITY, 1801 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6302,
        "lng": 121.1015,
        "telephone": "9226819533",
        "text": "SH A TUAZON SAN ROQUE MAR COSS."
    },
    "303": {
        "address": "ANGEL TUAZON AVE SAN ROQUE MARIKINA CITY, 1801 Philippines",
        "city": "MARIKINA CITY",
        "country": "Philippines",
        "lat": 14.6275,
        "lng": 121.1024,
        "telephone": "9227831727",
        "text": "SH ANGEL TUAZON SANROQUE COSS."
    },
    "304": {
        "address": "SUMULONG HIGHWAY BRGY MAMBUGAN ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.6186,
        "lng": 121.1309,
        "telephone": "9173652606",
        "text": "SH SUMULONG HWAY MAMBUGAN COSS"
    },
    "305": {
        "address": "163 HONORIO LOPEZ BLVD BALUT TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6324,
        "lng": 120.9637,
        "telephone": "9175335952",
        "text": "SH H LOPEZ BLVD BALUT COSS."
    },
    "306": {
        "address": "RADIAL ROAD 10 TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6254,
        "lng": 120.9596,
        "telephone": "9175845997",
        "text": "SH R10 TONDO MANILA COSS."
    },
    "307": {
        "address": "2225 E JACINTO ST COR R10 ROAD TONDO, 1013 Philippines",
        "city": "TONDO",
        "country": "Philippines",
        "lat": 14.623098,
        "lng": 120.960248,
        "telephone": "23618990",
        "text": "SH R10 NBOUND TONDO MLA COSS."
    },
    "308": {
        "address": "RIZAL AVE EXT GRACE PARK CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6391,
        "lng": 120.9837,
        "telephone": "9355003167",
        "text": "SH 1ST & 2ND AVE RAE CAL COSS"
    },
    "309": {
        "address": "BINUANG ST LALOMA QUEZON CITY, 1114 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.634673,
        "lng": 120.992845,
        "telephone": "9493956622",
        "text": "SH A BONIFACIO BINUANG COSS"
    },
    "310": {
        "address": "C3 SGT RIVERA QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.645334,
        "lng": 121.004062,
        "telephone": "27319302",
        "text": "SH C3 SGT RIVERA QC COSS."
    },
    "311": {
        "address": "419 COR D TUAZON QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6314,
        "lng": 120.9986,
        "telephone": "9279144586",
        "text": "SH RETIRO COR D TUAZON QC COSS."
    },
    "312": {
        "address": "DEL MONTE AVE CORNER TALAYAN ST QUEZON CITY, 1105 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6395,
        "lng": 121.0115,
        "telephone": "9156047628",
        "text": "SH DEL MONTE AVE TALAYAN COSS."
    },
    "313": {
        "address": "BALER ST SAN FRANCISCO DEL MONTE QUEZON CITY, 1105 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6449,
        "lng": 121.0174,
        "telephone": "9394619206",
        "text": "SH ROOSEVELT COR BALER QC COSS"
    },
    "314": {
        "address": "1015 EDSA COR BANSALANGIN PROJECT 7 QUEZON CITY, 1105 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6565,
        "lng": 121.0243,
        "telephone": "9175235355",
        "text": "SH EDSA BANSALANGIN QC COSS."
    },
    "315": {
        "address": "ARANETA AVE COR MARIA CLARA TALAYAN QUEZON CITY, 1104 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6305,
        "lng": 121.0106,
        "telephone": "9289313468",
        "text": "SH ARANETA COR MA CLARA COSS."
    },
    "316": {
        "address": "WEST AVE COR BALER ST BRGY BUNGAD QUEZON CITY, 1105 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6481,
        "lng": 121.0281,
        "telephone": "9183872290",
        "text": "SH WEST AVE BALER QZN AVE COSS."
    },
    "317": {
        "address": "1609 QUEZON AVE WEST TRIANGLE QUEZON CITY, 1104 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6426,
        "lng": 121.0341,
        "telephone": "9183872290",
        "text": "SH QUEZON AVE W TRIANGLE COSS."
    },
    "318": {
        "address": "QUEZON AVE COR GEN LIM STREET QUEZON CITY, 1104 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6376,
        "lng": 121.0413,
        "telephone": "9183872290",
        "text": "SH QUEZON AVE WESTBOUND COSS"
    },
    "319": {
        "address": "815 EDSA SOUTH TRIANGLE QUEZON CITY, 1103 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6376,
        "lng": 121.0413,
        "telephone": "9178872387",
        "text": "SH EDSA S TRIANGLE GMA COSS."
    },
    "320": {
        "address": "QUEZON AVE NEAR COR SCT ALBANO QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6412,
        "lng": 121.0336,
        "telephone": "27992399",
        "text": "SH QUEZON AVE IBANK QC COSS."
    },
    "321": {
        "address": "EDSA COR NIA QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6383,
        "lng": 121.0418,
        "telephone": "9185215049",
        "text": "SH EDSA NIA PINAHAN QC COSS"
    },
    "322": {
        "address": "110 KAMIAS RD COR KASING KASING QUEZON CITY, 1102 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6336,
        "lng": 121.0564,
        "telephone": "9178545821",
        "text": "SH KAMIAS COR KASINGKSING COSS."
    },
    "323": {
        "address": "109 20TH AVE COR P TUAZON BLVD CUBA QUEZON CITY, 1109 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6213,
        "lng": 121.0626,
        "telephone": "29131518",
        "text": "SH 20TH AVE PTUAZON CUBAO COSS"
    },
    "324": {
        "address": "SITIO DAAN CAINTA BRGY DELAPAZ PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.6205,
        "lng": 121.0987,
        "telephone": "9325265778",
        "text": "SH MARCOS HIGHWAY DELAPAZ COSS."
    },
    "325": {
        "address": "MARCOS HIGHWAY MAYAMOT ANTIPOLO CITY, 1870 Philippines",
        "city": "ANTIPOLO CITY",
        "country": "Philippines",
        "lat": 14.6249,
        "lng": 121.138,
        "telephone": "9228547951",
        "text": "SH MARCOS HWAY ANTIPOLO COSS"
    },
    "326": {
        "address": "MORRIONES COR JUAN NOLASCO TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6097,
        "lng": 120.9662,
        "telephone": "9175845997",
        "text": "SH MORIONES TONDO MANILA COSS."
    },
    "327": {
        "address": "1205 TAYUMAN ST COR ABAD SANTOS TON MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.617,
        "lng": 120.9776,
        "telephone": "9177923493",
        "text": "SH TAYUMAN A SANTOS TONDO COSS."
    },
    "328": {
        "address": "V DEL FIERRO ST GAGALANGIN TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.626415,
        "lng": 120.973163,
        "telephone": "9185215049",
        "text": "SH JUAN LUNA DEL FIERRO COSS."
    },
    "329": {
        "address": "JOSE ABAD SANTOS COR TECSON TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6255,
        "lng": 120.9789,
        "telephone": "022540284",
        "text": "SH J ABAD SANTOS TECSON COSS"
    },
    "330": {
        "address": "2630 RIZAL AVE SANTA CRUZ MANILA CITY, 1003 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.626148,
        "lng": 120.983186,
        "telephone": "9178471308",
        "text": "SH RIZAL AVE STA CRUZ MLA COSS."
    },
    "331": {
        "address": "LAON LAAN COR M DELAFUENTE SAMPALOC MANILA, 1008 Philippines",
        "city": "MANILA",
        "country": "Philippines",
        "lat": 14.6155,
        "lng": 120.9907,
        "telephone": "9192221674",
        "text": "SH LAONG LAAN DELA FUENTE COSS"
    },
    "332": {
        "address": "ANDALUCIA COR REQUESENS TONDO MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6096,
        "lng": 120.9859,
        "telephone": "9208572575",
        "text": "SH ANDALUCIA REQUESENS COSS."
    },
    "333": {
        "address": "883 ARANETA AVENUE BRGY TATALON QUEZON CITY, 1113 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6262,
        "lng": 121.0148,
        "telephone": "9293358946",
        "text": "SH ARANETA BRGY TATALON COSS."
    },
    "334": {
        "address": "ESPANA EXT COR D TUAZON QUEZON AVE QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6244,
        "lng": 121.0095,
        "telephone": "9206338609",
        "text": "SH QUEZON AVE EDSA BOUND COSS."
    },
    "335": {
        "address": "ESPANA EXT COR D TUAZON QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6183,
        "lng": 121.005,
        "telephone": "9206338609",
        "text": "SH ESPANA EXT D TUAZON COSS."
    },
    "336": {
        "address": "218 G ARANETA AVE COR LANDERGON ST QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6113,
        "lng": 121.0172,
        "telephone": "9493956622",
        "text": "SH ARANETA LANDERGON QC COSS."
    },
    "337": {
        "address": "43 TIMOG COR SCT TUAZON SOUTH TRIAN QUEZON CITY, 1103 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6357,
        "lng": 121.0332,
        "telephone": "9216991056",
        "text": "SH TIMOG AVE SCT TUAZON COSS"
    },
    "338": {
        "address": "3 TOMAS MORATO AVENUE KRISTONG HARI QUEZON CITY, 1112 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6246,
        "lng": 121.0326,
        "telephone": "9188214568",
        "text": "SH T MORATO E RODRIGUEZ COSS."
    },
    "339": {
        "address": "93 TIMONG AVE/SCT YBARDOLOZA L HAND QUEZON CITY, 1103 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6336,
        "lng": 121.0397,
        "telephone": "9216991056",
        "text": "SH TIMOG SCT YBARDALOZA COSS."
    },
    "340": {
        "address": "616 DONA AMPARO STREET QUIRINO HIGH CALOOCAN CITY, 1400 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.6249,
        "lng": 121.0398,
        "telephone": "09153044334",
        "text": "SH DONA AMPARO CALOOCAN COSS"
    },
    "341": {
        "address": "1555 E RODRIQUEZ AVE COR JUDGE JIME QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6249,
        "lng": 121.0398,
        "telephone": "9188214568",
        "text": "SH E RODRIGUEZ J JIMENEZ COSS."
    },
    "342": {
        "address": "NEW YORK COR WEST POINT ST CUBAO QUEZON CITY, 1109 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.627,
        "lng": 121.0509,
        "telephone": "9266565962",
        "text": "SH NEW YORK WEST PT CUBAO COSS"
    },
    "343": {
        "address": "184 KATIPUNAN RD BLUERIDGE PROJECT QUEZON CITY, 1109 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6163,
        "lng": 121.0713,
        "telephone": "9228532728",
        "text": "SH KATIPUNAN BLUERIDGE QC COSS."
    },
    "344": {
        "address": "COR 1ST ST SAINT IGNACIUS VILLAGE QUEZON CITY, 1110 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6113,
        "lng": 121.0711,
        "telephone": "9175651965",
        "text": "SH KATIPUNAN 1ST IGNATIUS COSS"
    },
    "345": {
        "address": "MARCOS HIGHWAY COR SANTOLAN PASIG CITY, 1610 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.6193,
        "lng": 121.0887,
        "telephone": "9228187105",
        "text": "SH MARCOS HWAY MH D PILAR COSS."
    },
    "346": {
        "address": "7 TM KALAW COR MH DEL PILAR ST ERMI MANILA CITY, 1000 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5802,
        "lng": 120.9787,
        "telephone": "9178471308",
        "text": "SH KALAW DEL PILAR COSS"
    },
    "347": {
        "address": "UN AVE COR PEREZ ST PACO MANILA CITY, 1007 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5836,
        "lng": 120.9894,
        "telephone": "9178471308",
        "text": "SH UNITED NATIONS PEREZ COSS."
    },
    "348": {
        "address": "3350 R MAGSAYSAY COR FORTUNA ST STA MANILA CITY, 1016 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6015,
        "lng": 121.006,
        "telephone": "9175263207",
        "text": "SH MAGSAYSAY COR FORTUNA COSS"
    },
    "349": {
        "address": "3995 R MAGSAYSAY COR V MAPA STA MES MANILA CITY, 1016 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.6031,
        "lng": 121.0155,
        "telephone": "9189052072",
        "text": "SH MAGSAYSAY COR V MAPA COSS"
    },
    "350": {
        "address": "P SANCHEZ ST COR 3RD ST SANTA MESA MANILA CITY, 1016 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5956,
        "lng": 121.0214,
        "telephone": "9209405758",
        "text": "SH SANCHEZ 3RD STA MESA COSS."
    },
    "351": {
        "address": "153 J RUIZ STREET CORNER AURORA BLV SAN JUAN CITY, 1500 Philippines",
        "city": "SAN JUAN CITY",
        "country": "Philippines",
        "lat": 14.6101,
        "lng": 121.0255,
        "telephone": "9178912311",
        "text": "SH AURORA RUIZ SAN JUAN COSS."
    },
    "352": {
        "address": "F BLUMENTRITT CORNER VALENZUELA ST SAN JUAN CITY, 1500 Philippines",
        "city": "SAN JUAN CITY",
        "country": "Philippines",
        "lat": 14.602,
        "lng": 121.0277,
        "telephone": "9219969026",
        "text": "SH BLUMENTRITT VALENZUELA COSS"
    },
    "353": {
        "address": "N DOMINGO ST COR LT ARTIAGA ST SAN JUAN CITY, 1500 Philippines",
        "city": "SAN JUAN CITY",
        "country": "Philippines",
        "lat": 14.6094,
        "lng": 121.0297,
        "telephone": "9178912311",
        "text": "SH N DOMINGO ARTIAGA COSS."
    },
    "354": {
        "address": "ORTIGAS AVE COR CONNECTICUT SAN JUAN CITY, 1502 Philippines",
        "city": "SAN JUAN CITY",
        "country": "Philippines",
        "lat": 14.5996,
        "lng": 121.0493,
        "telephone": "9324641722",
        "text": "SH ORTIGAS CONNECTICUT COSS."
    },
    "355": {
        "address": "ORTIGAS AVE GILMORE BOUND SAN JUAN CITY, 1503 Philippines",
        "city": "SAN JUAN CITY",
        "country": "Philippines",
        "lat": 14.5995,
        "lng": 121.0493,
        "telephone": "9324641722",
        "text": "SH ORTIGAS GILMORE BND SJ COSS"
    },
    "356": {
        "address": "EDSA COR MAIN AVE QUEZON CITY, 1100 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6135,
        "lng": 121.0542,
        "telephone": "9276392771",
        "text": "SH EDSA MAIN CUBAO QC COSS"
    },
    "357": {
        "address": "EDSA FLORIDA STREET MANDALUYONG CITY, 1550 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.5988,
        "lng": 121.0593,
        "telephone": "09194882191",
        "text": "SH EDSA FLORIDA MNDALUYNG COSS."
    },
    "358": {
        "address": "BAGUMBAYAN LIBIS QUEZON CITY, 1110 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6055,
        "lng": 121.0787,
        "telephone": "9173260151",
        "text": "SH E RODRIGUEZ BAGUMBAYAN COSS"
    },
    "359": {
        "address": "5 E RODRIGUEZ AVE BAGUMBAYAN LIBIS QUEZON CITY, 1110 Philippines",
        "city": "QUEZON CITY",
        "country": "Philippines",
        "lat": 14.6025,
        "lng": 121.0799,
        "telephone": "9299533043",
        "text": "SH C5 EASTWOOD NORTHBOUND COSS."
    },
    "360": {
        "address": "AMANG RODRIGUEZ SANTOLAN PASIG CITY, 1610 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.6116,
        "lng": 121.0923,
        "telephone": "9189072171",
        "text": "SH AMANG RODRIGUEZ NORTH COSS"
    },
    "361": {
        "address": "COR DONA JULIANA ST ROSARIO PASIG CITY, 1609 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5899,
        "lng": 121.099,
        "telephone": "09228752782",
        "text": "SH ORTIGAS EXT PEARL COSS"
    },
    "362": {
        "address": "C5 ROAD CORJULIA VARGAS AVE PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5832,
        "lng": 121.0767,
        "telephone": "9324641722",
        "text": "SH C5 JULIA VARGAS COSS."
    },
    "363": {
        "address": "FELIX AVE CORNER CYPRESS ST CAINTA, 1900 Philippines",
        "city": "CAINTA",
        "country": "Philippines",
        "lat": 14.5927,
        "lng": 121.1127,
        "telephone": "9106998558",
        "text": "SH FELIX CYPRESS COSS."
    },
    "364": {
        "address": "1040 GEN LUNA COR APACIBLE ST PACO MANILA CITY, 1007 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.58,
        "lng": 120.99,
        "telephone": "9209471002",
        "text": "SH APACIBLE LUNA COSS."
    },
    "365": {
        "address": "2195 TAFT AVENUE MALATE MANILA CITY, 1004 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5684,
        "lng": 120.9923,
        "telephone": "9209471002",
        "text": "SH TFT DLSU MALATE KUTING COSS."
    },
    "366": {
        "address": "1883 PRES QUIRINO AVE KAHILOM 3 PANDACAN, 1011 Philippines",
        "city": "PANDACAN",
        "country": "Philippines",
        "lat": 14.5834,
        "lng": 121.0017,
        "telephone": "28040377",
        "text": "SH KAHILOM 3 PANDACAN COSS"
    },
    "367": {
        "address": "1942 A LINAO ST COR QUIRINO AVE PAC MANILA CITY, 1007 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5742,
        "lng": 120.995,
        "telephone": "9183662440",
        "text": "SH PRES QUIRINO LINAO COSS."
    },
    "368": {
        "address": "2340 TAFT AVENUE COR DAGONOY ST MAL MANILA CITY, 1004 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5663,
        "lng": 120.9938,
        "telephone": "9088203043",
        "text": "SH TAFT DAGONOY DLSU COSS."
    },
    "369": {
        "address": "PRES QUIRINO AVE COR JORGE ST PACO MANILA CITY, 1007 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5911,
        "lng": 121.002,
        "telephone": "9183662440",
        "text": "SH PRES QUIRINO MENOZA COSS."
    },
    "370": {
        "address": "2201 PEDRO GIL CORNER TEJERON ST ST MANILA CITY, 1007 Philippines",
        "city": "MANILA CITY",
        "country": "Philippines",
        "lat": 14.5799,
        "lng": 121.0073,
        "telephone": "09194882191",
        "text": "SH PEDRO GIL TEJERON COSS."
    },
    "371": {
        "address": "331 SHAW BOULEVARD GOMEZVILLE MANDALUYONG CITY, 1552 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.5896,
        "lng": 121.0363,
        "telephone": "9178912311",
        "text": "SH SHAW GOMEZVILLE COSS."
    },
    "372": {
        "address": "131 BONI AVE COR P CRUZ ST NEW ZANI MANDALUYONG CITY, 1550 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.5817,
        "lng": 121.0294,
        "telephone": "9228237303",
        "text": "SH BONI CRUZ NEW ZANIGA COSS."
    },
    "373": {
        "address": "SHAW BOULEVARD COR MABINI ST MANDALUYONG CITY, 1552 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.5893,
        "lng": 121.0419,
        "telephone": "9175263207",
        "text": "SH SHAW PILAR MABINI COSS"
    },
    "374": {
        "address": "131 SAN FRANCISCO ST PLAINVIEW MANDALUYONG CITY, 1550 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.575,
        "lng": 121.0317,
        "telephone": "9228237303",
        "text": "SH SAN FRANCISCO NBOUND COSS."
    },
    "375": {
        "address": "EDSA BARANGAY BARRANCA MANDALUYONG CITY, 1550 Philippines",
        "city": "MANDALUYONG CITY",
        "country": "Philippines",
        "lat": 14.5778,
        "lng": 121.0507,
        "telephone": "9228540035",
        "text": "SH EDSA BARANGAY BARRANCA COSS."
    },
    "376": {
        "address": "18 SHAW BLVD WEST KAPITOLYO PASIG CITY, 1603 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5743,
        "lng": 121.0614,
        "telephone": "9228540035",
        "text": "SH SHAW CAPITOL DRIVE COSS."
    },
    "377": {
        "address": "ORTIGAS CENTER BO SAN ANTONIO PASIG CITY, 1605 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.589,
        "lng": 121.0629,
        "telephone": "9324641722",
        "text": "SH ORTIGAS F ORTIGAS COSS"
    },
    "378": {
        "address": "MABABANG KALSADA ROSARIO PASIG CITY, 1609 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5901,
        "lng": 121.09,
        "telephone": "9216646080",
        "text": "SH ORTIGAS AVE C RAYMUNDO COSS."
    },
    "379": {
        "address": "71 C RAYMUNDO AVE CANIOGAN PASIG CITY, 1606 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5736,
        "lng": 121.0834,
        "telephone": "9216805271",
        "text": "SH C RAYMUNDO MELENDREZ COSS."
    },
    "380": {
        "address": "C RAYMUNDO AVENUE SAGAD PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.568,
        "lng": 121.0811,
        "telephone": "9216805271",
        "text": "SH C RAYMUNDO ASUNCION COSS."
    },
    "381": {
        "address": "MERCEDES AVENUE PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5677,
        "lng": 121.0896,
        "telephone": "9216805271",
        "text": "SH MERCEDES AVE PASIG COSS"
    },
    "382": {
        "address": "GIL PUYAT AVE BRGY SAN RAFAEL PASAY CITY, 1302 Philippines",
        "city": "PASAY CITY",
        "country": "Philippines",
        "lat": 14.5522,
        "lng": 120.9905,
        "telephone": "9209471002",
        "text": "SH BUENDIA STA MONICA COSS."
    },
    "383": {
        "address": "PASONG TAMO COR MOLA ST VITO CRUZ MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5673,
        "lng": 121.0129,
        "telephone": "9222762806",
        "text": "SH CHINO ROCES METROPLITN COSS."
    },
    "384": {
        "address": "241 VITO CRUZ EXT EUREKA STREET LA MAKATI CITY, 1204 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5671,
        "lng": 121.0086,
        "telephone": "9183662440",
        "text": "SH VITO CRUZ EUREKA COSS."
    },
    "385": {
        "address": "EDSA CORNER MCKINLEY RD FORBES PARK MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.550103,
        "lng": 121.029983,
        "telephone": "9194120477",
        "text": "SH EDSA MCKINLEY COSS"
    },
    "386": {
        "address": "EDSA CORNER SEN GIL PUYAT BEL AIR MAKATI CITY, 1209 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5556,
        "lng": 121.035,
        "telephone": "9228432527",
        "text": "SH EDSA BUENDIA COSS."
    },
    "387": {
        "address": "JP RIZAL STREET GUADALUPE MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5677,
        "lng": 121.0423,
        "telephone": "09175249559",
        "text": "SH JP RIZAL TRINIDAD COSS."
    },
    "388": {
        "address": "EDSA COR ESCUELA ST GUADALUPE MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5599,
        "lng": 121.0414,
        "telephone": "9193565155",
        "text": "SH EDSA ESTRELLA COSS."
    },
    "389": {
        "address": "PASIG BOULEVARD BAGONG ILOG PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5661,
        "lng": 121.0661,
        "telephone": "9228540035",
        "text": "SH PASIG BLVD KAWILIHAN COSS."
    },
    "390": {
        "address": "CIRCUMFERENTIAL ROAD 5 PASIG CITY, 1600 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5733,
        "lng": 121.0725,
        "telephone": "9178001262",
        "text": "SH C5 VALLE VERDE COSS."
    },
    "391": {
        "address": "URBANO VELASCO AVE COR CALIWAG ST PASIG CITY, 1602 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5567,
        "lng": 121.0871,
        "telephone": "9209202813",
        "text": "SH URBANO VELASCO PASIG DOSS."
    },
    "392": {
        "address": "2405 FB HARRISON COR LIBERTAD PASAY CITY, 1300 Philippines",
        "city": "PASAY CITY",
        "country": "Philippines",
        "lat": 14.5459,
        "lng": 120.9938,
        "telephone": "9218051504",
        "text": "SH ARNAIZ HARRISON COSS."
    },
    "393": {
        "address": "DIOSDADO MACAPAGAL AVENUE PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.5302,
        "lng": 120.9894,
        "telephone": "9178222868",
        "text": "SH DMA BRADCO PARANAQUE COSS"
    },
    "394": {
        "address": "TAFT AVE COR LIONS ROAD PASAY CITY, 1300 Philippines",
        "city": "PASAY CITY",
        "country": "Philippines",
        "lat": 14.5429,
        "lng": 120.9995,
        "telephone": "28319291",
        "text": "SH TAFT LIONS PASAY COSS."
    },
    "395": {
        "address": "EDSA CORNER LEVERIZA PASAY CITY, 1300 Philippines",
        "city": "PASAY CITY",
        "country": "Philippines",
        "lat": 14.5377,
        "lng": 120.9937,
        "telephone": "9161134472",
        "text": "SH EDSA HERITAGE COSS"
    },
    "396": {
        "address": "448 QUIRINO COR T CLAUDIO ST BACLAR PARANAQUE CITY, 1702 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.5259,
        "lng": 120.9969,
        "telephone": "9208260739",
        "text": "SH QUIRINO CLAUDIO COSS."
    },
    "397": {
        "address": "MACAPAGAL AVE BARANGAY TAMBO PARANAQUE CITY, 1701 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.523,
        "lng": 120.9911,
        "telephone": "9292128650",
        "text": "SH MACAPAGAL BELLA PQUE COSS."
    },
    "398": {
        "address": "ROXAS BOULEVARD PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.5231,
        "lng": 120.9941,
        "telephone": "9178222868",
        "text": "SH ROXAS BLVD NB COSS."
    },
    "399": {
        "address": "PRES OSMENA HWAY COR MAGALLANES AVE MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.53176,
        "lng": 121.020976,
        "telephone": "9228362741",
        "text": "SH SOUTH SUPER MAGALLANES COSS."
    },
    "400": {
        "address": "32ND ST FORT BONIFACIO GLOBAL CITY TAGUIG CITY, 1630 Philippines",
        "city": "TAGUIG CITY",
        "country": "Philippines",
        "lat": 14.5548,
        "lng": 121.0458,
        "telephone": "9178001249",
        "text": "SH 32ND ST EASTBOUND COSS"
    },
    "401": {
        "address": "PASONG TAMO COR HERRERA STS MAKATI CITY, 1200 Philippines",
        "city": "MAKATI CITY",
        "country": "Philippines",
        "lat": 14.5365,
        "lng": 121.0205,
        "telephone": "9233694375",
        "text": "SH PASONG TAMO HERERA COSS."
    },
    "402": {
        "address": "C5 ROAD LOGCOM BRGY USUSAN TAGUIG CITY, 1630 Philippines",
        "city": "TAGUIG CITY",
        "country": "Philippines",
        "lat": 14.540917,
        "lng": 121.056054,
        "telephone": "9178001250",
        "text": "SH C5 LOGCOM NORTHBOUND COSS."
    },
    "403": {
        "address": "M CONCEPCION ST SAN JOAQUIN PASIG CITY, 1601 Philippines",
        "city": "PASIG CITY",
        "country": "Philippines",
        "lat": 14.5533,
        "lng": 121.0726,
        "telephone": "9228540035",
        "text": "SH M CONCEPCION PASIG COSS."
    },
    "404": {
        "address": "2 GENERAL LUNA ST USUSAN PATEROS TAGUIG CITY, 1630 Philippines",
        "city": "TAGUIG CITY",
        "country": "Philippines",
        "lat": 14.538,
        "lng": 121.0677,
        "telephone": "9178001251",
        "text": "SH PATEROS USUSAN TAGUIG COSS"
    },
    "405": {
        "address": "ANDREW AVE COR TRAMO PASAY CITY, 1300 Philippines",
        "city": "PASAY CITY",
        "country": "Philippines",
        "lat": 14.5281,
        "lng": 121.0053,
        "telephone": "9228989269",
        "text": "SH AURORA ANDREWS COSS"
    },
    "406": {
        "address": "280 SITIO HULO SAPANG PALAY PROPER SAN JOSE DEL MONTE, 3023 Philippines",
        "city": "SAN JOSE DEL MONTE",
        "country": "Philippines",
        "lat": 14.5048,
        "lng": 121.0232,
        "telephone": "",
        "text": "SH SAPANG PALAY SJDM DOSS"
    },
    "407": {
        "address": "DBP AVE FTI COMPLEX TAGUIG CITY, 1630 Philippines",
        "city": "TAGUIG CITY",
        "country": "Philippines",
        "lat": 14.5061,
        "lng": 121.0369,
        "telephone": "9228235307",
        "text": "SH DPB FTI TAGUIG COSS"
    },
    "408": {
        "address": "WEST SERVICE ROAD BRGY SUN VALLEY PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4966,
        "lng": 121.0401,
        "telephone": "9175836088",
        "text": "SH WST SERVICE RD CIELITO COSS."
    },
    "409": {
        "address": "BETTER LIVING SUBD DON BOSCO PARANAQUE CITY, 1711 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4868,
        "lng": 121.0268,
        "telephone": "9175836088",
        "text": "SH DONA SOLEDAD RUSSIA COSS."
    },
    "410": {
        "address": "DONA SOLEDAD BETTER LIVING SUB PARANAQUE, 1711 Philippines",
        "city": "PARANAQUE",
        "country": "Philippines",
        "lat": 14.483872,
        "lng": 121.03314,
        "telephone": "27762288",
        "text": "SH DONA SOLEDAD PARANAQUE COSS."
    },
    "411": {
        "address": "DR A SANTOS AVENUE SUCAT PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4557,
        "lng": 121.0371,
        "telephone": "9062569355",
        "text": "SH SUCAT STA RITA COSS."
    },
    "412": {
        "address": "DR ANTONIO SANTOS AVE SUCAT RD PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4557,
        "lng": 121.0371,
        "telephone": "9062569355",
        "text": "SH SUCAT RD PARANAQUE COSS"
    },
    "413": {
        "address": "MLA CAVITE RD., BRGY 8, DALAHICAN CAVITE CITY, 4100 Philippines",
        "city": "CAVITE CITY",
        "country": "Philippines",
        "lat": 14.4682,
        "lng": 120.8852,
        "telephone": "9178166009",
        "text": "SH MLA CVITE RD DALAHICAN DOSS."
    },
    "414": {
        "address": "MAGDIWANG HI WAY NOVELETA, 4105 Philippines",
        "city": "NOVELETA",
        "country": "Philippines",
        "lat": 14.4288,
        "lng": 120.8823,
        "telephone": "9228880235",
        "text": "SH MAGDIWANG NOVELETA COSS."
    },
    "415": {
        "address": "TEJERO DIVERSION ROAD BRGY TEJERO General Trias, 4107 Philippines",
        "city": "General Trias",
        "country": "Philippines",
        "lat": 14.3999,
        "lng": 120.8719,
        "telephone": "9228880237",
        "text": "SH TEJERO GEN TRIAS COSS."
    },
    "416": {
        "address": "P-2 BRGY TEJERO GEN TRIAS Cavite, 4107 Philippines",
        "city": "Cavite",
        "country": "Philippines",
        "lat": 14.3958,
        "lng": 120.8612,
        "telephone": "09228382124",
        "text": "SH TEJERO GEN TRIAS DOSS."
    },
    "417": {
        "address": "415 ANTERO HWY DAANG AMAYA I TANZA, 4108 Philippines",
        "city": "TANZA",
        "country": "Philippines",
        "lat": 14.3928,
        "lng": 120.854,
        "telephone": "9328500892",
        "text": "SH ANTERO TANZA CAVITE DOSS."
    },
    "418": {
        "address": "TIRONA HIGHWAY HABAY Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.4471,
        "lng": 120.9453,
        "telephone": "9237126774",
        "text": "SH TIRONA HABAY BACOOR COSS."
    },
    "419": {
        "address": "POSTEMA SAHUD ULAN TANZA, 4108 Philippines",
        "city": "TANZA",
        "country": "Philippines",
        "lat": 14.3733,
        "lng": 120.8267,
        "telephone": "9209119180",
        "text": "SH SAHUD ULAN TANZA CAVTE DOSS."
    },
    "420": {
        "address": "SAN JUAN GENERAL TRIAS CAVITE CITY, 4107 Philippines",
        "city": "CAVITE CITY",
        "country": "Philippines",
        "lat": 14.3833,
        "lng": 120.8833,
        "telephone": "4353532",
        "text": "SH SAN JUAN GEN TRIAS DOSS."
    },
    "421": {
        "address": "BUCANDALA I, IMUS CITY Cavite, 4103 Philippines",
        "city": "Cavite",
        "country": "Philippines",
        "lat": 14.4493,
        "lng": 120.9548,
        "telephone": "9188888991",
        "text": "SH BUCANDALA IMUS DOSS."
    },
    "422": {
        "address": "AGUINALDO HIGHWAY IMUS, 4103 Philippines",
        "city": "IMUS",
        "country": "Philippines",
        "lat": 14.4064,
        "lng": 120.9405,
        "telephone": "464715190",
        "text": "SH AGUINALDO IMUS CAVITE COSS."
    },
    "423": {
        "address": "33 BUHAY NA TUBIG IMUS, 4103 Philippines",
        "city": "IMUS",
        "country": "Philippines",
        "lat": 14.4164,
        "lng": 120.9484,
        "telephone": "464723758",
        "text": "SH BUHAY NA TUBIG CAVITE DOSS."
    },
    "424": {
        "address": "GOVERNORS DRIVE BRGY IBAYO SILANGAN NAIC, 4110 Philippines",
        "city": "NAIC",
        "country": "Philippines",
        "lat": 14.3224,
        "lng": 120.7686,
        "telephone": "9209082558",
        "text": "SH IBAYO SILANGAN NAIC COSS"
    },
    "425": {
        "address": "GOVERNORS DRIVE Cavite, 4109 Philippines",
        "city": "Cavite",
        "country": "Philippines",
        "lat": 14.2804,
        "lng": 120.8867,
        "telephone": "9188888991",
        "text": "SH HUGO TRECE MARTIRES DOSS."
    },
    "426": {
        "address": "BRGY SAN FRANCISCO GEN TRIAS CAVITE CITY, 4107 Philippines",
        "city": "CAVITE CITY",
        "country": "Philippines",
        "lat": 14.2818,
        "lng": 120.9016,
        "telephone": "9175135818",
        "text": "SH BROOKESIDE GEN TRIAS DOSS"
    },
    "427": {
        "address": "GOVERNORS DRIVE MANGGAHAN General Trias, 4107 Philippines",
        "city": "General Trias",
        "country": "Philippines",
        "lat": 14.2925,
        "lng": 120.9124,
        "telephone": "9189017004",
        "text": "SH MANGGAHAN GEN TRIAS COSS."
    },
    "428": {
        "address": "GOVERNORS DRIVE PALA PALA DASMARINAS, 4114 Philippines",
        "city": "DASMARINAS",
        "country": "Philippines",
        "lat": 14.2997,
        "lng": 120.9616,
        "telephone": "9175035222",
        "text": "SH PALA PALA DASMARINAS COSS."
    },
    "429": {
        "address": "KM 29 E AGUINALDO HIWAY SALITRAN II DASMARINAS, 4114 Philippines",
        "city": "DASMARINAS",
        "country": "Philippines",
        "lat": 14.3444,
        "lng": 120.9369,
        "telephone": "9175027858",
        "text": "SH AGUINALDO SALITRAN DAS COSS"
    },
    "430": {
        "address": "GOVERNORS DRIVE PALIPARAN DASMARINAS, 4114 Philippines",
        "city": "DASMARINAS",
        "country": "Philippines",
        "lat": 14.2864,
        "lng": 120.9901,
        "telephone": "9175035222",
        "text": "SH PALIPARAN DASMARINAS COSS."
    },
    "431": {
        "address": "DBB DASMARINAS, 4114 Philippines",
        "city": "DASMARINAS",
        "country": "Philippines",
        "lat": 14.3288,
        "lng": 120.9591,
        "telephone": "9228529310",
        "text": "SH BUROL DBB DASAMARINAS COSS."
    },
    "432": {
        "address": "BLK C2 CONGRESSIONAL ROAD Cavite, 4117 Philippines",
        "city": "Cavite",
        "country": "Philippines",
        "lat": 14.2845,
        "lng": 121.0,
        "telephone": "09175135818",
        "text": "SH GAVINO MADERAN GMA DOSS."
    },
    "433": {
        "address": "GOVERNORS DRIVE COR MAGUYAM RD CARMONA, 4116 Philippines",
        "city": "CARMONA",
        "country": "Philippines",
        "lat": 14.2808,
        "lng": 121.0052,
        "telephone": "9175035222",
        "text": "SH BANCAL CARMONA COSS."
    },
    "434": {
        "address": "SAN VICENTE II SILANG, 4118 Philippines",
        "city": "SILANG",
        "country": "Philippines",
        "lat": 14.2286,
        "lng": 120.9718,
        "telephone": "9185943989",
        "text": "SH SAN VICENTE SILANG COSS"
    },
    "435": {
        "address": "85 AGUINALDO HIGHWAY BUHO SILANG, 4118 Philippines",
        "city": "SILANG",
        "country": "Philippines",
        "lat": 14.2269,
        "lng": 120.9706,
        "telephone": "9205333323",
        "text": "SH BUHO SILANG CAVITE DOSS."
    },
    "436": {
        "address": "238 JP RIZAL STREET BARANGAY 5 SILANG, 4118 Philippines",
        "city": "SILANG",
        "country": "Philippines",
        "lat": 14.2277,
        "lng": 120.9703,
        "telephone": "9189304371",
        "text": "SH POBLACION SILANG CAVTE DOSS."
    },
    "437": {
        "address": "GOVERNORS DRIVE BANCAL CARMONA, 4116 Philippines",
        "city": "CARMONA",
        "country": "Philippines",
        "lat": 14.2897,
        "lng": 121.0127,
        "telephone": "9175035222",
        "text": "SH BANCAL CARMONA CAVITE COSS."
    },
    "438": {
        "address": "BRGY STO DOMINGO SILANG RD STA ROSA CITY, 4026 Philippines",
        "city": "STA ROSA CITY",
        "country": "Philippines",
        "lat": 14.2367,
        "lng": 121.0548,
        "telephone": "9189794573",
        "text": "SH NUVALI STA ROSA CITY COSS"
    },
    "439": {
        "address": "BGY DON JOSE SILANG ROAD SANTA ROSA CITY, 4026 Philippines",
        "city": "SANTA ROSA CITY",
        "country": "Philippines",
        "lat": 14.2611,
        "lng": 121.0726,
        "telephone": "9178178678",
        "text": "SH DON JOSE STA ROSA COSS"
    },
    "440": {
        "address": "PULO DIEZMO ROAD PULO CABUYAO, 4025 Philippines",
        "city": "CABUYAO",
        "country": "Philippines",
        "lat": 14.2433,
        "lng": 121.1157,
        "telephone": "9209691363",
        "text": "SH PULO CABUYAO COSS."
    },
    "441": {
        "address": "DILA SANTA ROSA CITY, 4026 Philippines",
        "city": "SANTA ROSA CITY",
        "country": "Philippines",
        "lat": 14.2947,
        "lng": 121.1078,
        "telephone": "9282538610",
        "text": "SH STA ROSA LAGUNA DOSS."
    },
    "442": {
        "address": "NORTHBOUND SLT BARRIO STO TOMAS BINAN, 4024 Philippines",
        "city": "BINAN",
        "country": "Philippines",
        "lat": 14.3107,
        "lng": 121.0724,
        "telephone": "9178178678",
        "text": "SH NB SLT STO TOMAS BINAN COSS"
    },
    "443": {
        "address": "BARANGAY DILA SANTA ROSA CITY, 4026 Philippines",
        "city": "SANTA ROSA CITY",
        "country": "Philippines",
        "lat": 14.2894,
        "lng": 121.1084,
        "telephone": "9178178678",
        "text": "SH DILA STA ROSA COSS"
    },
    "444": {
        "address": "NATL HWAY STO NINO BINAN, 4024 Philippines",
        "city": "BINAN",
        "country": "Philippines",
        "lat": 14.329588,
        "lng": 121.087937,
        "telephone": "9178178678",
        "text": "SH SAN ANTONIO BINAN COSS"
    },
    "445": {
        "address": "NATIONAL HIGHWAY BRGY TAGAPO SANTA ROSA CITY, 4026 Philippines",
        "city": "SANTA ROSA CITY",
        "country": "Philippines",
        "lat": 14.318519,
        "lng": 121.097644,
        "telephone": "9178178678",
        "text": "SH TAGAPO STA ROSA COSS"
    },
    "446": {
        "address": "NATL RD BRGY MACABLING SANTA ROSA CITY, 4026 Philippines",
        "city": "SANTA ROSA CITY",
        "country": "Philippines",
        "lat": 14.3005,
        "lng": 121.1038,
        "telephone": "9178178678",
        "text": "SH MACABLING STA ROSA COSS"
    },
    "447": {
        "address": "PACIANO RIZAL CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.2154,
        "lng": 121.1374,
        "telephone": "9209691363",
        "text": "SH PACIANO CALAMBA COSS"
    },
    "448": {
        "address": "NATIONAL HIGHWAY SAN CRISTOBAL CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.223489,
        "lng": 121.140157,
        "telephone": "9209691363",
        "text": "SH SAN CRISTOBAL CALAMBA COSS."
    },
    "449": {
        "address": "NATIONAL HIGHWAY BARANGAY PARIAN CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.214919,
        "lng": 121.149185,
        "telephone": "9228556139",
        "text": "SH PARIAN CALAMBA LAGUNA DOSS."
    },
    "450": {
        "address": "CECILIA AVE COR JOSE YULO AVE CANLUBANG, 4028 Philippines",
        "city": "CANLUBANG",
        "country": "Philippines",
        "lat": 14.2117,
        "lng": 121.1176,
        "telephone": "9228982124",
        "text": "SH CANLUBANG LAGUNA DOSS"
    },
    "451": {
        "address": "COR PABALAN ST BRGY 3  CALAMBA CITY, 4027 Philippines",
        "city": " CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.2095,
        "lng": 121.1606,
        "telephone": "495455515",
        "text": "SH CHIPECO AVE CALAMBA DOSS."
    },
    "452": {
        "address": "BACNOTAN DR BRGY REAL CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.1957,
        "lng": 121.1555,
        "telephone": "9154005512",
        "text": "SH BACNOTAN DRVE REAL CAL COSS"
    },
    "453": {
        "address": "NATL RD BO TURBINA CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.1891,
        "lng": 121.1415,
        "telephone": "9154005512",
        "text": "SH TURBINA CALAMBA COSS"
    },
    "454": {
        "address": "NATIONAL HIGHWAY BRGY REAL CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.1976,
        "lng": 121.1464,
        "telephone": "9209691363",
        "text": "SH REAL CALAMBA COSS"
    },
    "455": {
        "address": "NATIONAL HIGHWAY PUROK 1 BUCAL CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.1907,
        "lng": 121.1676,
        "telephone": "9228077743",
        "text": "SH BUCAL CALAMBA COSS"
    },
    "456": {
        "address": "BARANGAY PALINGON CALAMBA CITY, 4027 Philippines",
        "city": "CALAMBA CITY",
        "country": "Philippines",
        "lat": 14.2165,
        "lng": 121.1819,
        "telephone": "9063628400",
        "text": "SH LINGA CALAMBA LAGUNA DOSS."
    },
    "457": {
        "address": "LOT 1902 A BRGY DILA BAY, 4033 Philippines",
        "city": "BAY",
        "country": "Philippines",
        "lat": 14.1783,
        "lng": 121.2737,
        "telephone": "9235972033",
        "text": "SH BRGY DILA BAY LAGUNA DOSS"
    },
    "458": {
        "address": "BARANGAY ANOS LOS BANOS, 4030 Philippines",
        "city": "LOS BANOS",
        "country": "Philippines",
        "lat": 14.1812,
        "lng": 121.229,
        "telephone": "9234982812",
        "text": "SH ANOS LOS BANOS COSS."
    },
    "459": {
        "address": "17 M MARFORI STREET BARANGAY KANLUR CALAUAN, 4012 Philippines",
        "city": "CALAUAN",
        "country": "Philippines",
        "lat": 14.1463,
        "lng": 121.3148,
        "telephone": "9175003606",
        "text": "SH CALAUAN LAGUNA DOSS"
    },
    "460": {
        "address": "LT CISCO AVE BRGY DEL REMEDIO SAN PABLO CITY, 4000 Philippines",
        "city": "SAN PABLO CITY",
        "country": "Philippines",
        "lat": 14.0855,
        "lng": 121.3098,
        "telephone": "9228388531",
        "text": "SH SN REMEDIO SN PABLO DOSS"
    },
    "461": {
        "address": "MAHARLIKA HIWAY SAN ROQUE. SAN PABLO CITY, 4000 Philippines",
        "city": "SAN PABLO CITY",
        "country": "Philippines",
        "lat": 14.0718,
        "lng": 121.3123,
        "telephone": "495671111",
        "text": "SH SAN ROQUE SAN PABLO DOSS"
    },
    "462": {
        "address": "NATIONAL HWAY BRGY GATID SANTA CRUZ, 4009 Philippines",
        "city": "SANTA CRUZ",
        "country": "Philippines",
        "lat": 14.2547,
        "lng": 121.3917,
        "telephone": "9475728493",
        "text": "SH GATID STA CRUZ COSS"
    },
    "463": {
        "address": "BARANGAY PAGSAWITAN SANTA CRUZ, 4009 Philippines",
        "city": "SANTA CRUZ",
        "country": "Philippines",
        "lat": 14.268,
        "lng": 121.427,
        "telephone": "9228807876",
        "text": "SH PAGSAWITAN STA CRUZ DOSS"
    },
    "464": {
        "address": "BARANGAY BAMBANG NAGCARLAN, 4002 Philippines",
        "city": "NAGCARLAN",
        "country": "Philippines",
        "lat": 14.137242,
        "lng": 121.417809,
        "telephone": "9178870890",
        "text": "SH NAGCARLAN LAGUNA DOSS."
    },
    "465": {
        "address": "NATIONAL HWAY SAN FRANCISCO CALIJAN SAN PABLO CITY, 4000 Philippines",
        "city": "SAN PABLO CITY",
        "country": "Philippines",
        "lat": 14.0572,
        "lng": 121.332,
        "telephone": "9997252546",
        "text": "SH FRANCISCO CALIHAN DOSS."
    },
    "466": {
        "address": "SAN IGNACIO SAN PABLO CITY, 4000 Philippines",
        "city": "SAN PABLO CITY",
        "country": "Philippines",
        "lat": 14.047292,
        "lng": 121.341805,
        "telephone": "9285006407",
        "text": "SH SAN IGNACIO SAN PABLO COSS."
    },
    "467": {
        "address": "MAHARLIKA HIWAY BRGY SAN JUAN Alaminos, 4001 Philippines",
        "city": "Alaminos",
        "country": "Philippines",
        "lat": 14.065984,
        "lng": 121.251984,
        "telephone": "7820218",
        "text": "SH SAN JUAN ALAMINOS DOSS."
    },
    "468": {
        "address": "MAHARLIKA HIGHWAY BARANGAY LALIG TIAONG, 4325 Philippines",
        "city": "TIAONG",
        "country": "Philippines",
        "lat": 13.963,
        "lng": 121.3203,
        "telephone": "9209029908",
        "text": "SH LALIG TIAONG QUEZON COSS."
    },
    "469": {
        "address": "47 DON VROBLES ST POBLACION III TIAONG, 4325 Philippines",
        "city": "TIAONG",
        "country": "Philippines",
        "lat": 13.9577,
        "lng": 121.3383,
        "telephone": "9273663544",
        "text": "SH TIAONG QUEZON DOSS."
    },
    "470": {
        "address": "KM101 MAHARLIKA HIWAY BRGY TALISAY TIAONG, 4325 Philippines",
        "city": "TIAONG",
        "country": "Philippines",
        "lat": 13.9542,
        "lng": 121.3373,
        "telephone": "9056188177",
        "text": "SH TALISAY TIAONG DOSS"
    },
    "471": {
        "address": "LLAMADO ST BGY V MENDEZ, 4121 Philippines",
        "city": "MENDEZ",
        "country": "Philippines",
        "lat": 14.1329,
        "lng": 120.9031,
        "telephone": "9189304371",
        "text": "SH P BURGOS MENDEZ CAVITE DOSS"
    },
    "472": {
        "address": "GEN AGUINALDO H WAY TAGAYTAY CITY, 4120 Philippines",
        "city": "TAGAYTAY CITY",
        "country": "Philippines",
        "lat": 14.1163,
        "lng": 120.9619,
        "telephone": "9163722076",
        "text": "SH TAGAYTAY KAYBGAL SOUTH COSS."
    },
    "473": {
        "address": "LUKSUHIN IBABA ALFONSO, 4123 Philippines",
        "city": "ALFONSO",
        "country": "Philippines",
        "lat": 14.1057,
        "lng": 120.8771,
        "telephone": "9174204191",
        "text": "SH LUCSUHIN ALFONSO CAVTE DOSS."
    },
    "474": {
        "address": "NATIONAL HIGHWAY PUTING BATO EAST CALACA, 4212 Philippines",
        "city": "CALACA",
        "country": "Philippines",
        "lat": 13.9662,
        "lng": 120.8505,
        "telephone": "0432235169",
        "text": "SH CALACA BATANGAS DOSS 2"
    },
    "475": {
        "address": "SAGBAT LUMBANGAN NASUGBU, 4231 Philippines",
        "city": "NASUGBU",
        "country": "Philippines",
        "lat": 14.052,
        "lng": 120.6502,
        "telephone": "9178132752",
        "text": "SH LUMBANGAN NASUGBU COSS"
    },
    "476": {
        "address": "BRGY GUMAMELA Balayan, 4213 Philippines",
        "city": "Balayan",
        "country": "Philippines",
        "lat": 13.9492,
        "lng": 120.7284,
        "telephone": "9175041785",
        "text": "SH GUMAMELA BALAYAN BATS COSS"
    },
    "477": {
        "address": "POBLACION Balayan, 4213 Philippines",
        "city": "Balayan",
        "country": "Philippines",
        "lat": 13.9476,
        "lng": 120.7398,
        "telephone": "9285208375",
        "text": "SH BALAYAN BATANGAS DOSS 2"
    },
    "478": {
        "address": "MARASIGAN ST BRGY POBLACION 5 CALACA, 4212 Philippines",
        "city": "CALACA",
        "country": "Philippines",
        "lat": 13.9287,
        "lng": 120.8147,
        "telephone": "9164439859",
        "text": "SH CALACA BATANGAS DOSS 1."
    },
    "479": {
        "address": "BRGY MALINIS LEMERY, 4209 Philippines",
        "city": "LEMERY",
        "country": "Philippines",
        "lat": 13.8972,
        "lng": 120.9043,
        "telephone": "9194671199",
        "text": "SH MALINIS LEMERY BATNGAS DOSS."
    },
    "480": {
        "address": "BRGY POB ZONE II STA TERESITA BATANGAS, 4206 Philippines",
        "city": "BATANGAS",
        "country": "Philippines",
        "lat": 13.8881,
        "lng": 120.9692,
        "telephone": "9173296921",
        "text": "SH POBLACION STA TERESITA DOSS."
    },
    "481": {
        "address": "NATIONAL HWAY BARANGAY SAN FELIPE CUENCA, 4222 Philippines",
        "city": "CUENCA",
        "country": "Philippines",
        "lat": 13.89516,
        "lng": 121.045486,
        "telephone": "9196908369",
        "text": "SH CUENCA BATANGAS DOSS"
    },
    "482": {
        "address": "46 F MANGOBOS ST POBLACION BAUAN, 4201 Philippines",
        "city": "BAUAN",
        "country": "Philippines",
        "lat": 13.79351,
        "lng": 121.005628,
        "telephone": "9228107260",
        "text": "SH PANDAYAN BAUAN BATNGAS DOSS."
    },
    "483": {
        "address": "BRGY SAN ANTONIO SAN PASCUAL, 4204 Philippines",
        "city": "SAN PASCUAL",
        "country": "Philippines",
        "lat": 13.7864,
        "lng": 121.0239,
        "telephone": "9228049028",
        "text": "SH SAN PASCUAL BATANGAS COSS."
    },
    "484": {
        "address": "BARANGAY SANTO CRISTO San Jose, 4227 Philippines",
        "city": "San Jose",
        "country": "Philippines",
        "lat": 13.8767,
        "lng": 121.0992,
        "telephone": "9176144021",
        "text": "SH SAN JOSE BATANGAS DOSS."
    },
    "485": {
        "address": "PORT DIVERSION ROAD BO BOLBOK BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.7728,
        "lng": 121.0482,
        "telephone": "9228049028",
        "text": "SH PORT DIVERSION BATNGAS COSS."
    },
    "486": {
        "address": "BRGY PANGAO IBAAN, 4230 Philippines",
        "city": "IBAAN",
        "country": "Philippines",
        "lat": 13.822245,
        "lng": 121.134766,
        "telephone": "9189081078",
        "text": "SH IBAAN BATANGAS DOSS"
    },
    "487": {
        "address": "BANAY BANAY LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.9428,
        "lng": 121.127,
        "telephone": "9175055095",
        "text": "SH BANAY BANAY LIPA CITY DOSS."
    },
    "488": {
        "address": "JP LAUREL HIGHWAY TAMBO LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.9436,
        "lng": 121.135,
        "telephone": "9175253540",
        "text": "SH JP LAUREL HWAY TAMBO COSS."
    },
    "489": {
        "address": "ANTIPOLO DEL NORTE LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.9337,
        "lng": 121.1671,
        "telephone": "9228891688",
        "text": "SH ANTIPOLO D NORTE LIPA COSS."
    },
    "490": {
        "address": "AYALA HIGHWAY BALINTAWAK LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.9512,
        "lng": 121.1592,
        "telephone": "9175253540",
        "text": "SH AYALA HWAY BALINTAWAK COSS"
    },
    "491": {
        "address": "BRGY KUMINTANG ILAYA BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.7708,
        "lng": 121.0579,
        "telephone": "9228049028",
        "text": "SH KUMINTANG LLAYA BATS COSS."
    },
    "492": {
        "address": "P BURGOS ST CALICANTO BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.7637,
        "lng": 121.0569,
        "telephone": "9228049028",
        "text": "SH CALICANTO BATNGAS CITY COSS."
    },
    "493": {
        "address": "PASTOR VILLAGE PALLOCAN WEST BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.7537,
        "lng": 121.0666,
        "telephone": "9175240179",
        "text": "SH PALLOCAN WEST BATANGAS COSS"
    },
    "494": {
        "address": "SOROSORO BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.808,
        "lng": 121.09,
        "telephone": "9175040604",
        "text": "SH SOROSORO BATANGAS CITY DOSS"
    },
    "495": {
        "address": "PAHARANG EAST BATANGAS CITY, 4200 Philippines",
        "city": "BATANGAS CITY",
        "country": "Philippines",
        "lat": 13.7518,
        "lng": 121.1396,
        "telephone": "9285033300",
        "text": "SH PAHARANG BATANGAS CITY DOSS."
    },
    "496": {
        "address": "N SUANEZ ST COR PROVINCIAL ROAD ROSARIO, 4225 Philippines",
        "city": "ROSARIO",
        "country": "Philippines",
        "lat": 13.8399,
        "lng": 121.2035,
        "telephone": "9285294125",
        "text": "SH ROSARIO BATANGAS DOSS"
    },
    "497": {
        "address": "BARANGAY SAN JOSE ROSARIO, 4225 Philippines",
        "city": "ROSARIO",
        "country": "Philippines",
        "lat": 13.862,
        "lng": 121.2064,
        "telephone": "9285006407",
        "text": "SH SAN JOSE ROSARIO BATS COSS"
    },
    "498": {
        "address": "SAMBAT POBLACION PADRE GARCIA, 4224 Philippines",
        "city": "PADRE GARCIA",
        "country": "Philippines",
        "lat": 13.8769,
        "lng": 121.2113,
        "telephone": "9085979677",
        "text": "SH PADRE GARCIA BATANGAS DOSS."
    },
    "499": {
        "address": "GEN LUNA STREET BRGY SABANG LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.94726,
        "lng": 121.166078,
        "telephone": "9178531248",
        "text": "SH GEN LUNA SABANG LIPA DOSS"
    },
    "500": {
        "address": "POBLACION San Antonio, 4324 Philippines",
        "city": "San Antonio",
        "country": "Philippines",
        "lat": 13.8986,
        "lng": 121.295,
        "telephone": "0425454148",
        "text": "SH SAN ANTONIO QUEZON DOSS."
    },
    "501": {
        "address": "PUROK 1 B BARANGAY MASIN NORTE Candelaria, 4323 Philippines",
        "city": "Candelaria",
        "country": "Philippines",
        "lat": 13.9378,
        "lng": 121.383,
        "telephone": "9189443972",
        "text": "SH MASIN CANDELARIA QZN COSS."
    },
    "502": {
        "address": "KM 114 NATIONAL ROAD San Juan, 4226 Philippines",
        "city": "San Juan",
        "country": "Philippines",
        "lat": 13.8296,
        "lng": 121.3584,
        "telephone": "435755589",
        "text": "SH CALICANTO SJUAN BTNGAS DOSS"
    },
    "503": {
        "address": "BRG SAMPALOC 11 SARIAYA, 4322 Philippines",
        "city": "SARIAYA",
        "country": "Philippines",
        "lat": 13.9432,
        "lng": 121.452,
        "telephone": "9189443972",
        "text": "SH SAMAPALOC2 SARIAYA QZN COSS."
    },
    "504": {
        "address": "MAHARLIKA HIWAY BRGY GULANG GULANG LUCENA CITY, 4301 Philippines",
        "city": "LUCENA CITY",
        "country": "Philippines",
        "lat": 13.9607,
        "lng": 121.607,
        "telephone": "23594331",
        "text": "SH GULANG GULANG LUCENA DOSS."
    },
    "505": {
        "address": "MAHARLIKA HIGHWAY BRGY CALUMPANG TAYABAS CITY, 4327 Philippines",
        "city": "TAYABAS CITY",
        "country": "Philippines",
        "lat": 14.0206,
        "lng": 121.62,
        "telephone": "9189443972",
        "text": "SH CALUMPANG TAYABAS QZN COSS."
    },
    "506": {
        "address": "MAHARLIKA HIWAY BRGY IKIRIN PAGBILAO, 4302 Philippines",
        "city": "PAGBILAO",
        "country": "Philippines",
        "lat": 13.9756,
        "lng": 121.6931,
        "telephone": "9228861628",
        "text": "SH PAGBILAO QUEZON DOSS."
    },
    "507": {
        "address": "MAKARLIKA HWAY BRGY KANLURANG MAYAO LUCENA CITY, 4301 Philippines",
        "city": "LUCENA CITY",
        "country": "Philippines",
        "lat": 13.9527,
        "lng": 121.6067,
        "telephone": "9228775693",
        "text": "SH MAHARLIKA SM LUCENA COSS."
    },
    "508": {
        "address": "MAHARLIKA HIGHWAY BRGY ALUPAYE PAGBILAO, 4302 Philippines",
        "city": "PAGBILAO",
        "country": "Philippines",
        "lat": 13.9619,
        "lng": 121.6532,
        "telephone": "9228775693",
        "text": "SH ALUPAYE PAGBILAO COSS."
    },
    "509": {
        "address": "102 P GOMEZ STREET LUCENA CITY, 4301 Philippines",
        "city": "LUCENA CITY",
        "country": "Philippines",
        "lat": 13.937863,
        "lng": 121.613268,
        "telephone": "9175011301",
        "text": "SH P GOMEZ LUCENA QUEZON DOSS."
    },
    "510": {
        "address": "MAHARLIKA HIGHWAY BRGY IYAM LUCENA CITY, 4301 Philippines",
        "city": "LUCENA CITY",
        "country": "Philippines",
        "lat": 13.9375,
        "lng": 121.615,
        "telephone": "9175011301",
        "text": "SH IYAM LUCENA DOSS."
    },
    "511": {
        "address": "AVE SOL TOURIST COMPLEX ROSARIO GUMACA, 4307 Philippines",
        "city": "GUMACA",
        "country": "Philippines",
        "lat": 13.922,
        "lng": 122.0986,
        "telephone": "9094014960",
        "text": "SH GUMACA QUEZON DOSS"
    },
    "512": {
        "address": "REAL ST BARANGAY GOMEZ LOPEZ, 4316 Philippines",
        "city": "LOPEZ",
        "country": "Philippines",
        "lat": 13.8843,
        "lng": 122.2639,
        "telephone": "9186042919",
        "text": "SH LOPEZ QUEZON DOSS."
    },
    "513": {
        "address": "MAHARLIKA HIGHWAY BRGY SANTA MARIA CALAUAG, 4318 Philippines",
        "city": "CALAUAG",
        "country": "Philippines",
        "lat": 14.0358,
        "lng": 122.3396,
        "telephone": "9175252535",
        "text": "SH STA MARIA CALAUAG COSS."
    },
    "514": {
        "address": "MAHARLIKA HIWAY BRGY POBLACION STA ELENA 2, 4611 Philippines",
        "city": "STA ELENA 2",
        "country": "Philippines",
        "lat": 14.1845,
        "lng": 122.3945,
        "telephone": "542013681",
        "text": "SH STA ELENA CAM NORTE DOSS 2"
    },
    "515": {
        "address": "MAHARLIKA HIGHWAY POBLACION Santa Elena, 4611 Philippines",
        "city": "Santa Elena",
        "country": "Philippines",
        "lat": 14.194664,
        "lng": 122.396836,
        "telephone": "9209134267",
        "text": "SH STA ELENA CAM NORTE DOSS."
    },
    "516": {
        "address": "ROLANDO ANDAYA JR HWAY PANAYTAYAN RAGAY, 4410 Philippines",
        "city": "RAGAY",
        "country": "Philippines",
        "lat": 13.8158,
        "lng": 122.7664,
        "telephone": "9285522211",
        "text": "SH RAGAY CAMARINES SUR DOSS."
    },
    "517": {
        "address": "MAKARLIKA HIGHWAY KALAMUNDING LABO, 4604 Philippines",
        "city": "LABO",
        "country": "Philippines",
        "lat": 14.1601,
        "lng": 122.83,
        "telephone": "9175011301",
        "text": "SH LABO CAMARINES NORTE DOSS."
    },
    "518": {
        "address": "DEL ROSARIO STREET POBLACION SUR PARACALE, 4605 Philippines",
        "city": "PARACALE",
        "country": "Philippines",
        "lat": 14.2809,
        "lng": 122.7869,
        "telephone": "9189294255",
        "text": "SH PARACALE CAMARINES N DOSS"
    },
    "519": {
        "address": "VINZONS AVENUE MANTAGBAC DAET, 4600 Philippines",
        "city": "DAET",
        "country": "Philippines",
        "lat": 14.1145,
        "lng": 122.957,
        "telephone": "9175011301",
        "text": "SH MANTAGBAC DAET CAM N DOSS"
    },
    "520": {
        "address": "SAN JUAN LIBMANAN, 4407 Philippines",
        "city": "LIBMANAN",
        "country": "Philippines",
        "lat": 13.694942,
        "lng": 123.065023,
        "telephone": "9464043658",
        "text": "SH SN JUAN LBMANAN CAMSUR DOSS."
    },
    "521": {
        "address": "NATIONAL HIGHWAY TAMBO PAMPLONA, 4416 Philippines",
        "city": "PAMPLONA",
        "country": "Philippines",
        "lat": 13.5851,
        "lng": 123.0587,
        "telephone": "9107437064",
        "text": "SH BRGY PMPLONA NAGA CITY DOSS."
    },
    "522": {
        "address": "26 SAN VICENTE MILAOR, 4413 Philippines",
        "city": "MILAOR",
        "country": "Philippines",
        "lat": 13.5798,
        "lng": 123.1624,
        "telephone": "9189242896",
        "text": "SH MILAOR CAMARINES SUR DOSS."
    },
    "523": {
        "address": "NATIONAL HI WAY ROAD MABOLO NAGA CITY, 4400 Philippines",
        "city": "NAGA CITY",
        "country": "Philippines",
        "lat": 13.6158,
        "lng": 123.1837,
        "telephone": "9189277138",
        "text": "SH MABOLO DRIVE NAGA COSS"
    },
    "524": {
        "address": "ROXAS AVENUE DIVERSION ROAD NAGA CITY, 4400 Philippines",
        "city": "NAGA CITY",
        "country": "Philippines",
        "lat": 13.6153,
        "lng": 123.1923,
        "telephone": "9178290524",
        "text": "SH ROXAS TRIANGULO NAGA DOSS"
    },
    "525": {
        "address": "MAHARLIKA HWAY CONCEPCION PEQUENA NAGA CITY, 4400 Philippines",
        "city": "NAGA CITY",
        "country": "Philippines",
        "lat": 13.6206,
        "lng": 123.2092,
        "telephone": "0524834415",
        "text": "SH CONCEPCION PEQUENIA 1 COSS"
    },
    "526": {
        "address": "CONCEPCION PEQUENA NAGA CITY, 4400 Philippines",
        "city": "NAGA CITY",
        "country": "Philippines",
        "lat": 13.6234,
        "lng": 123.204,
        "telephone": "9228964822",
        "text": "SH CONCEPCION PEQUENA 2 COSS"
    },
    "527": {
        "address": "MAGSAYSAY AVE COR DAYANGYANG ST NAGA CITY, 4400 Philippines",
        "city": "NAGA CITY",
        "country": "Philippines",
        "lat": 13.6314,
        "lng": 123.1964,
        "telephone": "9189277138",
        "text": "SH MAGSAYSAY AVE NAGA COSS"
    },
    "528": {
        "address": "RIZAL STREET SAN RAFAEL LAGUNOY, 4425 Philippines",
        "city": "LAGUNOY",
        "country": "Philippines",
        "lat": 13.7299,
        "lng": 123.5204,
        "telephone": "9228376166",
        "text": "SH LAGONOY CAMARINES SUR DOSS."
    },
    "529": {
        "address": "PAWILI BULA, 4430 Philippines",
        "city": "BULA",
        "country": "Philippines",
        "lat": 13.515515,
        "lng": 123.299953,
        "telephone": "0542663239",
        "text": "SH PAWILI BULA CAM SUR DOSS."
    },
    "530": {
        "address": "502 SAN JUAN PILI, 4418 Philippines",
        "city": "PILI",
        "country": "Philippines",
        "lat": 13.5534,
        "lng": 123.2754,
        "telephone": "9175803880",
        "text": "SH SAN JUAN PILI CAM SUR DOSS."
    },
    "531": {
        "address": "ZONE 5 SAN NICOLAS PALESTINA PILI, 4418 Philippines",
        "city": "PILI",
        "country": "Philippines",
        "lat": 13.5548,
        "lng": 123.277,
        "telephone": "9399046964",
        "text": "SH PILI CAMARINES SUR DOSS"
    },
    "532": {
        "address": "BRGY CADLAN PILI CAMARINES SUR, 4418 Philippines",
        "city": "CAMARINES SUR",
        "country": "Philippines",
        "lat": 13.5899,
        "lng": 123.2633,
        "telephone": "524777644",
        "text": "SH CADLAN PILI CAM SUR  DOSS."
    },
    "533": {
        "address": "SAN ANTONIO BAAO, 4432 Philippines",
        "city": "BAAO",
        "country": "Philippines",
        "lat": 13.4717,
        "lng": 123.3514,
        "telephone": "9331712834",
        "text": "SH SN ANTONIO BAAO CAMSUR COSS."
    },
    "534": {
        "address": "NATIONAL ROAD TIGBI TIWI, 4513 Philippines",
        "city": "TIWI",
        "country": "Philippines",
        "lat": 13.4572,
        "lng": 123.6793,
        "telephone": "9174824693",
        "text": "SH TIWI ALBAY DOSS."
    },
    "535": {
        "address": "F PIMENTEL ST DAET, 4600 Philippines",
        "city": "DAET",
        "country": "Philippines",
        "lat": 13.64,
        "lng": 123.25,
        "telephone": "9228933999",
        "text": "SH MAGANG DAET CAM NORTE DOSS"
    },
    "536": {
        "address": "SAN AGUSTIN CANAMAN, 4402 Philippines",
        "city": "CANAMAN",
        "country": "Philippines",
        "lat": 13.6455,
        "lng": 123.1855,
        "telephone": "9464011323",
        "text": "SH S AGUSTN CNAMAN CAMSUR DOSS."
    },
    "537": {
        "address": "SAN VICENTE CALABANGA, 4405 Philippines",
        "city": "CALABANGA",
        "country": "Philippines",
        "lat": 13.7062,
        "lng": 123.205,
        "telephone": "9194100910",
        "text": "SH CALABANGA CAM SUR DOSS I."
    },
    "538": {
        "address": "PROVINCIAL ROAD SAGRADA BULA, 4430 Philippines",
        "city": "BULA",
        "country": "Philippines",
        "lat": 13.4676,
        "lng": 123.2752,
        "telephone": "9164420477",
        "text": "SH BULA CAMARINES SUR DOSS"
    },
    "539": {
        "address": "ROADSIDE STO DOMINGO NABUA, 4434 Philippines",
        "city": "NABUA",
        "country": "Philippines",
        "lat": 13.403,
        "lng": 123.3734,
        "telephone": "9292303485",
        "text": "SH SDOMINGO NABUA CAM SUR DOSS"
    },
    "540": {
        "address": "BRGY SAN JOSE IRIGA CITY, 4431 Philippines",
        "city": "IRIGA CITY",
        "country": "Philippines",
        "lat": 13.4211,
        "lng": 123.414,
        "telephone": "9209382118",
        "text": "SH SAN JOSE IRIGA CAM SUR DOSS."
    },
    "541": {
        "address": "NATIONAL RD BRGY SAN ROQUE IRIGA CITY, 4431 Philippines",
        "city": "IRIGA CITY",
        "country": "Philippines",
        "lat": 13.4211,
        "lng": 123.414,
        "telephone": "9209382118",
        "text": "SH SAN ROQUE IRIGA CITY COSS."
    },
    "542": {
        "address": "ALFELOR HIGHWAY BUHI, 4433 Philippines",
        "city": "BUHI",
        "country": "Philippines",
        "lat": 13.4198,
        "lng": 123.5171,
        "telephone": "9178120855",
        "text": "SH BUHI CAM SUR DOSS."
    },
    "543": {
        "address": "NATIONAL ROAD LIGAO, 4504 Philippines",
        "city": "LIGAO",
        "country": "Philippines",
        "lat": 13.2406,
        "lng": 123.5397,
        "telephone": "9209382118",
        "text": "SH LIGAO ALBAY COSS."
    },
    "544": {
        "address": "ZIGA AVENUE TABACO CITY, 4511 Philippines",
        "city": "TABACO CITY",
        "country": "Philippines",
        "lat": 13.3562,
        "lng": 123.7302,
        "telephone": "9228665816",
        "text": "SH TABACO ALBAY DOSS."
    },
    "545": {
        "address": "ARIMBAY LEGASPI CITY, 4500 Philippines",
        "city": "LEGASPI CITY",
        "country": "Philippines",
        "lat": 13.1833,
        "lng": 123.7504,
        "telephone": "09228582382",
        "text": "SH ARIMBAY LEGASPI ALBAY DOSS."
    },
    "546": {
        "address": "RIZAL ST BRGY 24 LEGASPI CITY, 4500 Philippines",
        "city": "LEGASPI CITY",
        "country": "Philippines",
        "lat": 13.145,
        "lng": 123.7528,
        "telephone": "9175997981",
        "text": "SH RIZAL BRGY 24 LEGASPI DOSS"
    },
    "547": {
        "address": "RIZAL ST LEGASPI CITY, 4500 Philippines",
        "city": "LEGASPI CITY",
        "country": "Philippines",
        "lat": 13.145,
        "lng": 123.752,
        "telephone": "9063241934",
        "text": "SH RIZAL ST LEGASPI COSS"
    },
    "548": {
        "address": "LEGAZPI DARAGA DIVERSION RD DARAGA, 4501 Philippines",
        "city": "DARAGA",
        "country": "Philippines",
        "lat": 13.156,
        "lng": 123.7178,
        "telephone": "9175584725",
        "text": "SH DARAGA ALBAY DOSS"
    },
    "549": {
        "address": "1 RIZAL ST SAN ROQUE DARAGA, 4501 Philippines",
        "city": "DARAGA",
        "country": "Philippines",
        "lat": 13.1474,
        "lng": 123.7215,
        "telephone": "9184597597",
        "text": "SH SAN ROQUE DARAGA ALBAY DOSS"
    },
    "550": {
        "address": "PUROK 6 BRGY BUSAY DARAGA, 4501 Philippines",
        "city": "DARAGA",
        "country": "Philippines",
        "lat": 13.167,
        "lng": 123.6942,
        "telephone": "9294788188",
        "text": "SH BUSAY DARAGA ALBAY COSS"
    },
    "551": {
        "address": "PAVIA BOULEVARD PIO DURAN, 4516 Philippines",
        "city": "PIO DURAN",
        "country": "Philippines",
        "lat": 13.0303,
        "lng": 123.4486,
        "telephone": "9178507721",
        "text": "SH PIO DURAN ALBAY DOSS."
    },
    "552": {
        "address": "MAHARLIKA HIGHWAY PANGPANG SORSOGON CITY, 4700 Philippines",
        "city": "SORSOGON CITY",
        "country": "Philippines",
        "lat": 12.9751,
        "lng": 124.0095,
        "telephone": "9063241934",
        "text": "SH PAMPANG SORSOGON COSS"
    },
    "553": {
        "address": "COR GATE 2 SEABREEZE SUBD CABID AN SORSOGON CITY, 4700 Philippines",
        "city": "SORSOGON CITY",
        "country": "Philippines",
        "lat": 12.9732,
        "lng": 124.0168,
        "telephone": "0562114268",
        "text": "SH CABID-AN SORSOGON DOSS"
    },
    "554": {
        "address": "SAN PEDRO IROSIN, 4707 Philippines",
        "city": "IROSIN",
        "country": "Philippines",
        "lat": 12.7115,
        "lng": 124.0301,
        "telephone": "9272736036",
        "text": "SH SN JUAN IROSN SORSOGON DOSS"
    },
    "555": {
        "address": "ZONE 4 MAGSAYSAY ST COR QUEZON ST BULAN, 4706 Philippines",
        "city": "BULAN",
        "country": "Philippines",
        "lat": 12.6715,
        "lng": 123.8781,
        "telephone": "9272736036",
        "text": "SH BULAN SORSOGON DOSS."
    },
    "556": {
        "address": "QUEZON STREET MASBATE CITY, 5400 Philippines",
        "city": "MASBATE CITY",
        "country": "Philippines",
        "lat": 12.3611,
        "lng": 123.6246,
        "telephone": "9193545733",
        "text": "SH CROSSING TUGBO MASBATE COSS."
    },
    "557": {
        "address": "PIER SITE BAPOR MASBATE CITY, 5400 Philippines",
        "city": "MASBATE CITY",
        "country": "Philippines",
        "lat": 12.368083,
        "lng": 123.617369,
        "telephone": "9175229947",
        "text": "SH PIER SITE MASBATE DOSS."
    },
    "558": {
        "address": "388 ARIZALA ST POBLACION CATAINGAN, 5405 Philippines",
        "city": "CATAINGAN",
        "country": "Philippines",
        "lat": 12.1916,
        "lng": 123.8583,
        "telephone": "9175300726",
        "text": "SH CATAINGAN MASBATE DOSS."
    },
    "559": {
        "address": "BANAHAO DIMASALANG, 5403 Philippines",
        "city": "DIMASALANG",
        "country": "Philippines",
        "lat": 12.1916,
        "lng": 123.8583,
        "telephone": "9154848042",
        "text": "SH DIMASALANG MASBATE DOSS"
    },
    "560": {
        "address": "BRGY DALAKIT CATARMAN NORTHERN Samar, 6400 Philippines",
        "city": "Samar",
        "country": "Philippines",
        "lat": 12.5051,
        "lng": 124.6228,
        "telephone": "9209211792",
        "text": "SH DALAKIT NORTHERN SAMAR DOSS."
    },
    "561": {
        "address": "BARANGAY MOLAVE CATARMAN, 6400 Philippines",
        "city": "CATARMAN",
        "country": "Philippines",
        "lat": 12.4946,
        "lng": 124.6363,
        "telephone": "9285075564",
        "text": "SH CATARMAN NORTHRN SAMAR DOSS."
    },
    "562": {
        "address": "SAN JOSE STREET POBLACION AROROY, 5414 Philippines",
        "city": "AROROY",
        "country": "Philippines",
        "lat": 12.5127,
        "lng": 123.3969,
        "telephone": "9212720446",
        "text": "SH AROROY MASBATE DOSS"
    },
    "563": {
        "address": "FONTILAR ST POBLACION WEST MILAGROS, 5410 Philippines",
        "city": "MILAGROS",
        "country": "Philippines",
        "lat": 12.2253,
        "lng": 123.5081,
        "telephone": "9052839382",
        "text": "SH MILAGROS MASBATE DOSS."
    },
    "564": {
        "address": "BARANGAY NABANGIG PALANAS, 5404 Philippines",
        "city": "PALANAS",
        "country": "Philippines",
        "lat": 12.101,
        "lng": 123.9554,
        "telephone": "9178878312",
        "text": "SH NABANGIG MASBATE DOSS"
    },
    "565": {
        "address": "JD AVELINO ST COR GOMEZ EXT CALBAYOG CITY, 6710 Philippines",
        "city": "CALBAYOG CITY",
        "country": "Philippines",
        "lat": 12.067325,
        "lng": 124.593142,
        "telephone": "9282223499",
        "text": "SH CALBAYOG WESTRN SAMAR DOSS."
    },
    "566": {
        "address": "DEL ROSARIO EXTENSION CATBALOGAN CITY, 6700 Philippines",
        "city": "CATBALOGAN CITY",
        "country": "Philippines",
        "lat": 11.7766,
        "lng": 124.881,
        "telephone": "9189180197",
        "text": "SH CATBALOGAN W SAMAR DOSS."
    },
    "567": {
        "address": "BRGY TIGBAO TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.255637,
        "lng": 124.971376,
        "telephone": "9173064733",
        "text": "SH BRGY TIGBAO TACLOBAN DOSS."
    },
    "568": {
        "address": "CONG ARTEMIO MATE AVE TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.2355,
        "lng": 124.9916,
        "telephone": "9173060233",
        "text": "SH ABUCAY TACLOBAN COSS."
    },
    "569": {
        "address": "IMELDA AVE EXTENSION TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.2451,
        "lng": 124.9984,
        "telephone": "9163577975",
        "text": "SH IMELDA EXT TCLOBN CITY DOSS."
    },
    "570": {
        "address": "TAGAWAN ORAS, 6818 Philippines",
        "city": "ORAS",
        "country": "Philippines",
        "lat": 12.1346,
        "lng": 125.4365,
        "telephone": "9173063501",
        "text": "SH T ORAS EASTERN SAMAR DOSS."
    },
    "571": {
        "address": "REAL ST BRGY SONGCO BORONGAN CITY, 6800 Philippines",
        "city": "BORONGAN CITY",
        "country": "Philippines",
        "lat": 11.6099,
        "lng": 125.4327,
        "telephone": "9189912886",
        "text": "SH BORONGAN EASTERN SAMAR DOSS."
    },
    "572": {
        "address": "DIVERSION ROAD TACLOBAN., 6500 Philippines",
        "city": "TACLOBAN.",
        "country": "Philippines",
        "lat": 11.2277,
        "lng": 124.9903,
        "telephone": "535234102",
        "text": "SH MAHARLIKA NB TACLOBAN DOSS"
    },
    "573": {
        "address": "REAL STREET TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.238,
        "lng": 125.0041,
        "telephone": "9173064733",
        "text": "SH REAL NORTH TACLOBAN COSS"
    },
    "574": {
        "address": "REAL STREET TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.235,
        "lng": 125.0027,
        "telephone": "9173086693",
        "text": "SH REAL TACLOBAN CITY DOSS."
    },
    "575": {
        "address": "BRGY 91 ABUCAY TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.1777,
        "lng": 125.0016,
        "telephone": "533217888",
        "text": "SH ABUCAY TACLOBAN LEYTE DOSS"
    },
    "576": {
        "address": "NATIONAL HIGHWAY NAVAL, 6543 Philippines",
        "city": "NAVAL",
        "country": "Philippines",
        "lat": 11.559616,
        "lng": 124.400961,
        "telephone": "9189276792",
        "text": "SH NAVAL BILIRAN LEYTE DOSS."
    },
    "577": {
        "address": "BRGY ESPINOSA CALUBIAN LEYTE, 6534 Philippines",
        "city": "LEYTE",
        "country": "Philippines",
        "lat": 11.4484,
        "lng": 124.4289,
        "telephone": "9173086695",
        "text": "SH ESPINOSA CALUBIAN DOSS"
    },
    "578": {
        "address": "NATIONAL HIGHWAY NORTHBOUND EXIT ORMOC CITY, 6541 Philippines",
        "city": "ORMOC CITY",
        "country": "Philippines",
        "lat": 11.0566,
        "lng": 124.6009,
        "telephone": "9209004448",
        "text": "SH NORTHBOUND BANTIGUE DOSS."
    },
    "579": {
        "address": "BARANGAY SUBA VILLABA, 6537 Philippines",
        "city": "VILLABA",
        "country": "Philippines",
        "lat": 11.2037,
        "lng": 124.4276,
        "telephone": "9213701469",
        "text": "SH SUBA VILLABA LEYTE DOSS."
    },
    "580": {
        "address": "LILIA AVENUE COGON ORMOC CITY, 6541 Philippines",
        "city": "ORMOC CITY",
        "country": "Philippines",
        "lat": 11.0178,
        "lng": 124.6065,
        "telephone": "9225980886",
        "text": "SH COGON ORMOC CITY DOSS."
    },
    "581": {
        "address": "VELOSO ST BRGY TOOG ORMOC CITY LEYTE, 6541 Philippines",
        "city": "LEYTE",
        "country": "Philippines",
        "lat": 11.0128,
        "lng": 124.6008,
        "telephone": "9209004441",
        "text": "SH VELOSO TOOG LEYTE DOSS"
    },
    "582": {
        "address": "REAL ST ORMOC CITY, 6541 Philippines",
        "city": "ORMOC CITY",
        "country": "Philippines",
        "lat": 11.0118,
        "lng": 124.6083,
        "telephone": "535611059",
        "text": "SH REAL ST ORMOC DOSS"
    },
    "583": {
        "address": "COR AVILES STREET ORMOC CITY, 6541 Philippines",
        "city": "ORMOC CITY",
        "country": "Philippines",
        "lat": 11.0058,
        "lng": 124.6084,
        "telephone": "9399045502",
        "text": "SH ORMOC LEYTE DOSS 1."
    },
    "584": {
        "address": "NATIONAL HIGHWAY BRGY BANTIGUE ORMOC CITY, 6541 Philippines",
        "city": "ORMOC CITY",
        "country": "Philippines",
        "lat": 10.9934,
        "lng": 124.6203,
        "telephone": "9228225205",
        "text": "SH BANTIGUE ORMOC LEYTE DOSS."
    },
    "585": {
        "address": "RIZAL ST POBLACION TABANGO, 6536 Philippines",
        "city": "TABANGO",
        "country": "Philippines",
        "lat": 11.30535,
        "lng": 124.37853,
        "telephone": "535529282",
        "text": "SH TABANGO LEYTE DOSS"
    },
    "586": {
        "address": "1451 SANTA ANA STREET BURAUEN, 6516 Philippines",
        "city": "BURAUEN",
        "country": "Philippines",
        "lat": 10.9746,
        "lng": 124.8944,
        "telephone": "9202823461",
        "text": "SH BURAUEN LEYTE DOSS"
    },
    "587": {
        "address": "ZONE 1 POBLACION MAYORGA, 6507 Philippines",
        "city": "MAYORGA",
        "country": "Philippines",
        "lat": 10.9505,
        "lng": 125.028899,
        "telephone": "9064603740",
        "text": "SH MAYORGA LEYTE DOSS."
    },
    "588": {
        "address": "MARKET SITE Dulag, 6505 Philippines",
        "city": "Dulag",
        "country": "Philippines",
        "lat": 10.9537,
        "lng": 125.0331,
        "telephone": "9182635399",
        "text": "SH MARKT SITE DULAG LEYTE DOSS."
    },
    "589": {
        "address": "BRGY MOHON TANAUAN LEYTE, 6502 Philippines",
        "city": "LEYTE",
        "country": "Philippines",
        "lat": 11.1296,
        "lng": 125.0076,
        "telephone": "9177050050",
        "text": "SH MOHON TANAUAN LEYTE DOSS."
    },
    "590": {
        "address": "GUINDAPUNAN PALO, 6501 Philippines",
        "city": "PALO",
        "country": "Philippines",
        "lat": 11.1633,
        "lng": 124.9949,
        "telephone": "9205887870",
        "text": "SH PALO LEYTE DOSS"
    },
    "591": {
        "address": "PAWING PALO, 6501 Philippines",
        "city": "PALO",
        "country": "Philippines",
        "lat": 11.1777,
        "lng": 125.0016,
        "telephone": "9173064733",
        "text": "SH PAWING PALO LEYTE DOSS."
    },
    "592": {
        "address": "MAHARLIKA HI WAY BRGY BITO ABUYOG, 6510 Philippines",
        "city": "ABUYOG",
        "country": "Philippines",
        "lat": 10.7503,
        "lng": 125.0084,
        "telephone": "9057042232",
        "text": "SH ABUYOG LEYTE DOSS."
    },
    "593": {
        "address": "BRGY 88 SAN JOSE TACLOBAN CITY, 6500 Philippines",
        "city": "TACLOBAN CITY",
        "country": "Philippines",
        "lat": 11.2217,
        "lng": 125.0263,
        "telephone": "9173212598",
        "text": "SH SAN JOSE TACLOBAN CITY DOSS."
    },
    "594": {
        "address": "BAGARES ST COR RIZAL ST ZONE IV SOGOD, 6606 Philippines",
        "city": "SOGOD",
        "country": "Philippines",
        "lat": 10.3909,
        "lng": 124.9818,
        "telephone": "9198091404",
        "text": "SH SOGOD SOUTHERN LEYTE DOSS"
    },
    "595": {
        "address": "BRGY SAN JUAN NATIONAL HIGHWAY HILONGOS, 6524 Philippines",
        "city": "HILONGOS",
        "country": "Philippines",
        "lat": 10.3858,
        "lng": 124.7448,
        "telephone": "9393673415",
        "text": "SH HILONGOS LEYTE DOSS"
    },
    "596": {
        "address": "363 KANGLEON MAASIN CITY, 6600 Philippines",
        "city": "MAASIN CITY",
        "country": "Philippines",
        "lat": 10.1348,
        "lng": 124.8409,
        "telephone": "9194594516",
        "text": "SH MAASIN CITY SO LEYTE DOSS."
    },
    "597": {
        "address": "BRGY BANGCAS HINUNANGAN., 6608 Philippines",
        "city": "HINUNANGAN.",
        "country": "Philippines",
        "lat": 10.4013,
        "lng": 125.1948,
        "telephone": "552515808",
        "text": "SH BANGCAS HINUNANGAN DOSS"
    },
    "598": {
        "address": "BORROMEO STREET WASHINGTON SURIGAO CITY, 8400 Philippines",
        "city": "SURIGAO CITY",
        "country": "Philippines",
        "lat": 9.7908,
        "lng": 125.4952,
        "telephone": "9177174948",
        "text": "SH BORROMEO SURIGAO COSS"
    },
    "599": {
        "address": "COASTAL LONGOS Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.467641,
        "lng": 120.963002,
        "telephone": "9178178678",
        "text": "SH COASTAL BACOOR COSS"
    },
    "600": {
        "address": "ALMANZA 2 LAS PINAS CITY, 1740 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4657,
        "lng": 120.969,
        "telephone": "028021582",
        "text": "SH PARKLNE DAANGHARI COSS"
    },
    "601": {
        "address": "ZAPOTE FORKS ZAPOTE LAS PINAS CITY, 1742 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.466913,
        "lng": 120.968769,
        "telephone": "9278398689",
        "text": "SH QUIRINO ZAPOTE FLYOVER COSS."
    },
    "602": {
        "address": "KM 18 AGUINALDO H WAY REAL Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.4337,
        "lng": 120.9485,
        "telephone": "9175027858",
        "text": "SH AGUINALDO REAL II COSS"
    },
    "603": {
        "address": "290TO292 P DIEGO CERA AVE PULANG LU LAS PINAS CITY, 1742 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4732,
        "lng": 120.9762,
        "telephone": "9178734573",
        "text": "SH QUIRINO NAGA RD COSS"
    },
    "604": {
        "address": "MOLINO BLVD BRGY NIOG Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.4426,
        "lng": 120.9669,
        "telephone": "464770387",
        "text": "SH NIOG MOLINO BACOOR COSS"
    },
    "605": {
        "address": "ALABANG ZAPOTE TALON UNO LAS PINAS CITY, 1747 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4474,
        "lng": 120.9857,
        "telephone": "028745761",
        "text": "SH ALABNG ZAPOTE TALON 1 COSS"
    },
    "606": {
        "address": "NAGA ROAD PULANG LUPA II LAS PINAS CITY, 1742 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4622,
        "lng": 120.9916,
        "telephone": "9175325501",
        "text": "SH NAGA RD PULANG LUPA COSS"
    },
    "607": {
        "address": "CAA RD PULANG LUPA LAS PINAS CITY, 1742 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4553,
        "lng": 120.9941,
        "telephone": "09175325501",
        "text": "SH CAA CITADELLA LS PINAS COSS"
    },
    "608": {
        "address": "ALABANG ZAPOTE ROAD LAS PINAS CITY, 1742 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4425,
        "lng": 120.9974,
        "telephone": "9278398689",
        "text": "SH ALABANG ZAPOTE COSS"
    },
    "609": {
        "address": "BRGY 168 DEPARO CALOOCAN CITY, 1420 Philippines",
        "city": "CALOOCAN CITY",
        "country": "Philippines",
        "lat": 14.4423,
        "lng": 121.0133,
        "telephone": "6582349",
        "text": "SH DEPARO RD CALOOCAN DOSS."
    },
    "610": {
        "address": "36 MARCOS ALVAREZ TALON V LAS PINAS, 1747 Philippines",
        "city": "LAS PINAS",
        "country": "Philippines",
        "lat": 14.43,
        "lng": 121.0032,
        "telephone": "028021582",
        "text": "SH MARCOS ALVAREZ TALON DOSS"
    },
    "611": {
        "address": "DR A SANTOS AVE COR SAN ANTONIO AVE PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4648,
        "lng": 121.0201,
        "telephone": "9205514132",
        "text": "SH SUCAT SAN ANTONIO COSS"
    },
    "612": {
        "address": "8113 DOCTOR A SANTOS AVE SAN DIONIS PARANAQUE CITY, 1700 Philippines",
        "city": "PARANAQUE CITY",
        "country": "Philippines",
        "lat": 14.4648,
        "lng": 121.0201,
        "telephone": "9228989269",
        "text": "SH SUCAT SAN DIONISIO COSS."
    },
    "613": {
        "address": "KM 21 EAST SERVICE ROAD SUCAT MUNTINLUPA CITY, 1770 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.4461,
        "lng": 121.0459,
        "telephone": "4430221",
        "text": "SH EAST SERVICE RD SUCAT COSS."
    },
    "614": {
        "address": "WEST SERVICE ROAD CUPANG MUNTINLUPA CITY, 1771 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.4431,
        "lng": 121.0449,
        "telephone": "9062569355",
        "text": "SH WEST SERVICE RD CUPANG COSS."
    },
    "615": {
        "address": "ALABANG ZAPOTE ROAD PACIFIC VILLAGE MUNTINLUPA CITY, 1770 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.4268,
        "lng": 121.0279,
        "telephone": "28076097",
        "text": "SH ALABANG ZAPOTE MDRIGAL COSS"
    },
    "616": {
        "address": "MOLINO BLVD Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.4187,
        "lng": 120.968,
        "telephone": "9217808210",
        "text": "SH MOLINO BLVD BACOOR COSS"
    },
    "617": {
        "address": "M ALVAREZ AVE COR VENICE ST TALON LAS PINAS CITY, 1747 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.43,
        "lng": 121.0031,
        "telephone": "028067183",
        "text": "SH MARCOS ALVAREZ VENICE COSS"
    },
    "618": {
        "address": "REAL ST B F ALMANZA LAS PINAS CITY, 1750 Philippines",
        "city": "LAS PINAS CITY",
        "country": "Philippines",
        "lat": 14.4294,
        "lng": 121.0161,
        "telephone": "9278398689",
        "text": "SH ALABANG ZAP ALMNZA UNO COSS."
    },
    "619": {
        "address": "DAANG HARI PASONG BUAYA II IMUS CITY, 4103 Philippines",
        "city": "IMUS CITY",
        "country": "Philippines",
        "lat": 14.4159,
        "lng": 121.0182,
        "telephone": "9188888991",
        "text": "SH DAANGHARI IMUS CAVITE DOSS."
    },
    "620": {
        "address": "NATIONAL HIWAY PUTATAN MUNTINLUPA CITY, 1772 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.4041,
        "lng": 121.0468,
        "telephone": "9185050598",
        "text": "SH NATIONAL HWAY PUTATAN COSS"
    },
    "621": {
        "address": "AGUINALDO HIGHWAY ANABU II C IMUS, 4103 Philippines",
        "city": "IMUS",
        "country": "Philippines",
        "lat": 14.3782,
        "lng": 120.9377,
        "telephone": "9175027858",
        "text": "SH ANABU 2 IMUS COSS."
    },
    "622": {
        "address": "MOLINO ROAD COR PAG ASA MOLINO 3 Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.3986,
        "lng": 120.978,
        "telephone": "9217808210",
        "text": "SH MOLINO PAG ASA BACOOR COSS"
    },
    "623": {
        "address": "MOLINO RD COR ELISA HOMES MOLINO 4 Bacoor, 4102 Philippines",
        "city": "Bacoor",
        "country": "Philippines",
        "lat": 14.3799,
        "lng": 120.9793,
        "telephone": "9217808210",
        "text": "SH MOLINO SM BACOOR COSS"
    },
    "624": {
        "address": "OLD NATIONAL HIGHWAY ALABANG MUNTINLUPA CITY, 1780 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.4138,
        "lng": 121.046,
        "telephone": "9178593518",
        "text": "SH NAT L HWAY ALABANG VIA COSS."
    },
    "625": {
        "address": "SOUTH LUZON TOLLWAY PUTATAN MUNTINLUPA CITY, 1772 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.3936,
        "lng": 121.0383,
        "telephone": "9178272781",
        "text": "SH OSMENA HWAY ESTANISLAO COSS"
    },
    "626": {
        "address": "ANABU I-A IMUS CITY Cavite, 4103 Philippines",
        "city": "Cavite",
        "country": "Philippines",
        "lat": 14.3697,
        "lng": 120.9386,
        "telephone": "9188888991",
        "text": "SH ANABU 1A IMUS CAVITE DOSS."
    },
    "627": {
        "address": "SALAWAG DASMARINAS, 4114 Philippines",
        "city": "DASMARINAS",
        "country": "Philippines",
        "lat": 14.3522,
        "lng": 120.9809,
        "telephone": "9228529310",
        "text": "SH SALAWAG DASMARINAS COSS."
    },
    "628": {
        "address": "OLD NATIONAL HIGHWAY TUNASAN MUNTINLUPA CITY, 1773 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.3811,
        "lng": 121.0446,
        "telephone": "9391995229",
        "text": "SH PEPSI TUNASAN COSS."
    },
    "629": {
        "address": "NATIONAL HIGHWAY TUNASAN MUNTINLUPA CITY, 1773 Philippines",
        "city": "MUNTINLUPA CITY",
        "country": "Philippines",
        "lat": 14.3704,
        "lng": 121.0502,
        "telephone": "9391995229",
        "text": "SH NAT L HIGHWAY TUNASAN COSS."
    },
    "630": {
        "address": "BRGY NUEVA NATL HIGHWAY SAN PEDRO, 4023 Philippines",
        "city": "SAN PEDRO",
        "country": "Philippines",
        "lat": 14.3566,
        "lng": 121.0604,
        "telephone": "9082206687",
        "text": "SH NUEVA SAN PEDRO COSS"
    },
    "631": {
        "address": "LOT 2769 A SAN FRANCISCO BINAN Laguna, 4024 Philippines",
        "city": "Laguna",
        "country": "Philippines",
        "lat": 14.3342,
        "lng": 121.0592,
        "telephone": "4353532",
        "text": "SH HALANG RD BINAN LAGUNA DOSS."
    },
    "632": {
        "address": "WESTBOUND LANE CARMONA BINAN ROAD BINAN, 4024 Philippines",
        "city": "BINAN",
        "country": "Philippines",
        "lat": 14.3306,
        "lng": 121.0749,
        "telephone": "9178178678",
        "text": "SH CARMONA BINAN COSS"
    },
    "633": {
        "address": "P1 SOUTH PLAINS 1 BRGY STO TOMAS BINAN CITY, 4024 Philippines",
        "city": "BINAN CITY",
        "country": "Philippines",
        "lat": 14.3255,
        "lng": 121.0783,
        "telephone": "437575597",
        "text": "SH BRGY STO TOMAS BINAN DOSS."
    },
    "634": {
        "address": "PRESIDENT LAUREL HIGHWAY TANAUAN CITY, 4232 Philippines",
        "city": "TANAUAN CITY",
        "country": "Philippines",
        "lat": 14.0878,
        "lng": 121.1478,
        "telephone": "9228773405",
        "text": "SH LAUREL HWAY TANAUAN COSS"
    },
    "635": {
        "address": "A MABINI AVENUE BRGY 6 TANAUAN CITY, 4232 Philippines",
        "city": "TANAUAN CITY",
        "country": "Philippines",
        "lat": 14.083775,
        "lng": 121.144014,
        "telephone": "9228773405",
        "text": "SH A MABINI TANAUAN COSS"
    },
    "636": {
        "address": "J P LAUREL HIGHWAY POBLACION MALVAR, 4233 Philippines",
        "city": "MALVAR",
        "country": "Philippines",
        "lat": 14.0477,
        "lng": 121.1577,
        "telephone": "9285006407",
        "text": "SH JP LAUREL HWAY MALVAR COSS."
    },
    "637": {
        "address": "KM 601 2 MAHARLIKA BRGY SAN ANTONIO SANTO TOMAS, 4234 Philippines",
        "city": "SANTO TOMAS",
        "country": "Philippines",
        "lat": 14.1107,
        "lng": 121.1451,
        "telephone": "9178538808",
        "text": "SH STO TOMAS BATANGAS DOSS."
    },
    "638": {
        "address": "NATIONAL HIGHWAY INOSLOBAN LIPA CITY, 4217 Philippines",
        "city": "LIPA CITY",
        "country": "Philippines",
        "lat": 13.991625,
        "lng": 121.168393,
        "telephone": "9175253540",
        "text": "SH INOSLUBAN LIPA COSS."
    },
    "639": {
        "address": "LACSON COR STA CIARA AVE MANDALAGAN BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6945,
        "lng": 122.96,
        "telephone": "9235895739",
        "text": "SH LACSON SANTA CLARA COSS"
    },
    "640": {
        "address": "18TH AND LACSON STS BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6814,
        "lng": 122.9551,
        "telephone": "09238567157",
        "text": "SH LACSON 18TH BACOLOD COSS"
    },
    "641": {
        "address": "100 B S AQUINO DRIVE BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.677346,
        "lng": 122.960492,
        "telephone": "9183881597",
        "text": "SH AQUINO DR BACOLOD CITY DOSS."
    },
    "642": {
        "address": "PHHC RD BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6702,
        "lng": 122.97,
        "telephone": "9105817878",
        "text": "SH CIRCUMFERNTIAL BACOLOD DOSS."
    },
    "643": {
        "address": "4TH RD COR BURGOS ST VILLAMONTE BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6661,
        "lng": 122.9637,
        "telephone": "9328700499",
        "text": "SH 4TH RD BURGOS BACOLOD COSS."
    },
    "644": {
        "address": "MABINI RIZAL ST TALISAY CITY, 6115 Philippines",
        "city": "TALISAY CITY",
        "country": "Philippines",
        "lat": 10.7355,
        "lng": 122.966,
        "telephone": "9173006237",
        "text": "SH MABINI RIZAL TALISAY DOSS"
    },
    "645": {
        "address": "LACSON HERNAEZ STS BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.661536,
        "lng": 122.947306,
        "telephone": "0344330925",
        "text": "SH LACSON HERNAEZ BACOLOD DOSS"
    },
    "646": {
        "address": "ARANETA CORNER RODRIGUEZ STREET BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6619,
        "lng": 122.9423,
        "telephone": "09325949469",
        "text": "SH ARANETA RODRIGUEZ COSS"
    },
    "647": {
        "address": "ARANETA COR MAGSAYSAY AVE SINGCANG BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6543,
        "lng": 122.9383,
        "telephone": "9093226111",
        "text": "SH ARANETA MAGSAYSAY COSS."
    },
    "648": {
        "address": "ROXAS AVE MAHAYAHAY ILIGAN CITY, 9200 Philippines",
        "city": "ILIGAN CITY",
        "country": "Philippines",
        "lat": 8.2217,
        "lng": 124.2411,
        "telephone": "9198980386",
        "text": "SH MAHAYAHAY ILIGAN COSS"
    },
    "649": {
        "address": "NATIONAL HIGHWAY BAROY LANAO DEL NORTE, 9210 Philippines",
        "city": "LANAO DEL NORTE",
        "country": "Philippines",
        "lat": 8.2292,
        "lng": 124.2376,
        "telephone": "633415225",
        "text": "SH NATIONAL HIGHWAY BAROY DOSS"
    },
    "650": {
        "address": "BAGONG SILANG TIBANGA ILIGAN, 9200 Philippines",
        "city": "ILIGAN",
        "country": "Philippines",
        "lat": 8.2423,
        "lng": 124.2488,
        "telephone": "9177120688",
        "text": "SH BAGONG SILANG TIBANGA ILIGAN DOS"
    },
    "651": {
        "address": "NATIONAL HIGHWAY TUBOD CAMAGUE ILIGAN CITY, 9200 Philippines",
        "city": "ILIGAN CITY",
        "country": "Philippines",
        "lat": 8.2125,
        "lng": 124.2308,
        "telephone": "9199164599",
        "text": "SH CAMAGUE ILIGAN CITY DOSS"
    },
    "652": {
        "address": "A BONIFACIO AVE TIBANGA ILIGAN CITY, 9200 Philippines",
        "city": "ILIGAN CITY",
        "country": "Philippines",
        "lat": 8.2434,
        "lng": 124.2527,
        "telephone": "9198980386",
        "text": "SH TIBANGA GAISANO COSS"
    },
    "653": {
        "address": "STO ROSARIO TAMBO ILIGAN CITY, 9200 Philippines",
        "city": "ILIGAN CITY",
        "country": "Philippines",
        "lat": 8.243431,
        "lng": 124.2527,
        "telephone": "9198980386",
        "text": "SH TAMBO S ROSARIO ILIGAN COSS"
    },
    "654": {
        "address": "NATIONAL HIGHWAY EL SALVADOR CITY, 9017 Philippines",
        "city": "EL SALVADOR CITY",
        "country": "Philippines",
        "lat": 8.2435,
        "lng": 124.2527,
        "telephone": "9177260688",
        "text": "SH EL SALVADOR MISAMIS OR DOSS."
    },
    "655": {
        "address": "NATIONAL HIGHWAY TOMAS CABILI ILIGAN, 9200 Philippines",
        "city": "ILIGAN",
        "country": "Philippines",
        "lat": 8.2116,
        "lng": 124.2254,
        "telephone": "09155411777",
        "text": "SH NAT HWY TOMAS CABILI DOSS"
    },
    "656": {
        "address": "TOMINOBO TOMAS CABILI ILIGAN CITY, 9200 Philippines",
        "city": "ILIGAN CITY",
        "country": "Philippines",
        "lat": 8.2094,
        "lng": 124.219,
        "telephone": "9198980386",
        "text": "SH TOMINOBO ILIGAN COSS"
    },
    "657": {
        "address": "DIVERSION COR MAMAY RD DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.1182,
        "lng": 125.6269,
        "telephone": "9105140003",
        "text": "SH DIVERSION MAMAY COSS."
    },
    "658": {
        "address": "BRGY CABANTIAN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.1272,
        "lng": 125.62,
        "telephone": "9177175838",
        "text": "SH CABANTIAN DAVAO CITY DOSS."
    },
    "659": {
        "address": "SOUTHBOUND DIVERSION ROAD DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.1144,
        "lng": 125.6225,
        "telephone": "9126588467",
        "text": "SH SBOUND DVERSION RD DVO COSS."
    },
    "660": {
        "address": "DIVERSION ROAD BUHANGIN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.107,
        "lng": 125.6092,
        "telephone": "822218129",
        "text": "SH BUHANGIN DAVAO DOSS"
    },
    "661": {
        "address": "KM 5 BUHANGIN ROAD BUHANGIN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.099308,
        "lng": 125.614424,
        "telephone": "9336357675",
        "text": "SH SAN PEDRO BUHANGIN COSS"
    },
    "662": {
        "address": "JP LAUREL AVE BAJADA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0931,
        "lng": 125.6125,
        "telephone": "22913537",
        "text": "SH ABREEZA MALL BAJADA COSS"
    },
    "663": {
        "address": "DAVAO AGUSAN HWAY PAMPANGA LANANG DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.1103,
        "lng": 125.649,
        "telephone": "9336357675",
        "text": "SH PAMPANGA SASA DAVAO COSS"
    },
    "664": {
        "address": "R CASTILLO ST AGDAO DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.100182,
        "lng": 125.640479,
        "telephone": "9498490908",
        "text": "SH R CASTILLO ST DVO CITY DOSS."
    },
    "665": {
        "address": "JP LAUREL AVENUE BAJADA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0979,
        "lng": 125.6218,
        "telephone": "9434694561",
        "text": "SH JP LAUREL LANANG GOLF COSS"
    },
    "666": {
        "address": "FATIMA LILOY, 7115 Philippines",
        "city": "LILOY",
        "country": "Philippines",
        "lat": 8.120779,
        "lng": 122.677932,
        "telephone": "9184432080",
        "text": "SH LILOY ZAMBOANGA DN DOSS."
    },
    "667": {
        "address": "ZAMORA ST POBLACION SINDANGAN ZAMBOANGA DEL NORTE, 7112 Philippines",
        "city": "ZAMBOANGA DEL NORTE",
        "country": "Philippines",
        "lat": 8.2309,
        "lng": 123.0036,
        "telephone": "652242286",
        "text": "SH SINDANGAN ZAMBO DN DOSS 2."
    },
    "668": {
        "address": "DISUD SINDANGAN, 7112 Philippines",
        "city": "SINDANGAN",
        "country": "Philippines",
        "lat": 8.244503,
        "lng": 122.999668,
        "telephone": "9194148802",
        "text": "SH SINDANGAN ZAMBOANGA DN DOSS."
    },
    "669": {
        "address": "NATIONAL HIGHWAY SANITO IPIL ZAMBOANGA SIBUGAY, 7001 Philippines",
        "city": "ZAMBOANGA SIBUGAY",
        "country": "Philippines",
        "lat": 7.7884,
        "lng": 122.5923,
        "telephone": "",
        "text": "SH SANITO IPIL ZAMBOANGA DOSS."
    },
    "670": {
        "address": "POBLACION IMELDA, 7007 Philippines",
        "city": "IMELDA",
        "country": "Philippines",
        "lat": 7.59518,
        "lng": 122.931,
        "telephone": "9212055759",
        "text": "SH IMELDA ZAMBOANGA DS DOSS."
    },
    "671": {
        "address": "NATIONAL HIGHWAY BRGY MIARE BUUG, 7009 Philippines",
        "city": "BUUG",
        "country": "Philippines",
        "lat": 7.730968,
        "lng": 123.06638,
        "telephone": "9192260525",
        "text": "SH BUUG ZAMBO DEL SUR DOSS."
    },
    "672": {
        "address": "NATIONAL HIGHWAY KATIPUNAN, 7109 Philippines",
        "city": "KATIPUNAN",
        "country": "Philippines",
        "lat": 8.51079,
        "lng": 123.284685,
        "telephone": "9994273446",
        "text": "SH KATIPUNAN ZAMBO DN DOSS."
    },
    "673": {
        "address": "NATIONAL HIGHWAY MINAOG DIPOLOG CITY, 7100 Philippines",
        "city": "DIPOLOG CITY",
        "country": "Philippines",
        "lat": 8.5745,
        "lng": 123.3391,
        "telephone": "9192431385",
        "text": "SH MINAOG DIPOLOG CITY DOSS."
    },
    "674": {
        "address": "NATIONAL HIGHWAY TURNO DIPOLOG CITY, 7100 Philippines",
        "city": "DIPOLOG CITY",
        "country": "Philippines",
        "lat": 8.574571,
        "lng": 123.339107,
        "telephone": "9107837329",
        "text": "SH TURNO DIPOLOG CITY DOSS."
    },
    "675": {
        "address": "MAGSAYSAY PLACER, 8405 Philippines",
        "city": "PLACER",
        "country": "Philippines",
        "lat": 9.658144,
        "lng": 125.601808,
        "telephone": "9204458238",
        "text": "SH PLACER SURIGAO D NORTE DOSS"
    },
    "676": {
        "address": "OJEDA AVENUE CABADBARAN CITY, 8605 Philippines",
        "city": "CABADBARAN CITY",
        "country": "Philippines",
        "lat": 9.121965,
        "lng": 125.537488,
        "telephone": "9189347901",
        "text": "SH CABADBARAN AGUSAN DN DOSS."
    },
    "677": {
        "address": "KM 6 BRGY AMPAYON BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.95918,
        "lng": 125.592356,
        "telephone": "9189003312",
        "text": "SH AMPAYON BUTUAN DOSS."
    },
    "678": {
        "address": "KM 4 BAAN BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.9566,
        "lng": 125.5809,
        "telephone": "9399399476",
        "text": "SH KM4 BAAN BUTUAN CITY DOSS"
    },
    "679": {
        "address": "LEMON BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.9382,
        "lng": 125.5775,
        "telephone": "9177169500",
        "text": "SH BUTUAN DIVERSION DOSS."
    },
    "680": {
        "address": "JC AQUINO AVE BAYANIHAN BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.9441,
        "lng": 125.5252,
        "telephone": "9209097938",
        "text": "SH AQUINO AVE BUTUAN 2 COSS."
    },
    "681": {
        "address": "KM 3 LIBERTAD JC AQUINO AVENUE BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.942525,
        "lng": 125.517254,
        "telephone": "9189284655",
        "text": "SH JC AQUINO MALL BUTUAN COSS"
    },
    "682": {
        "address": "BARANGAY POBLACION NORALA, 9508 Philippines",
        "city": "NORALA",
        "country": "Philippines",
        "lat": 6.5232,
        "lng": 124.6562,
        "telephone": "9265150314",
        "text": "SH NORALA SOUTH COTABATO DOSS."
    },
    "683": {
        "address": "NATIONAL HIGHWAY SANTO NINO, 9509 Philippines",
        "city": "SANTO NINO",
        "country": "Philippines",
        "lat": 6.4349,
        "lng": 124.6771,
        "telephone": "0832351060",
        "text": "SH STO NINO SO COTABATO DOSS"
    },
    "684": {
        "address": "NATIONAL HIGHWAY BRGY KENRAM ISULAN, 9805 Philippines",
        "city": "ISULAN",
        "country": "Philippines",
        "lat": 6.6553,
        "lng": 124.6186,
        "telephone": "9177140550",
        "text": "SH KENRAM SULTAN KUDARAT DOSS."
    },
    "685": {
        "address": "1 ALLAH VALLEY DRIVE LIBERTAD SURALLAH, 9512 Philippines",
        "city": "SURALLAH",
        "country": "Philippines",
        "lat": 6.372736,
        "lng": 124.746103,
        "telephone": "9107803284",
        "text": "SH SURALLAH SO COTABATO DOSS 2."
    },
    "686": {
        "address": "NATIONAL HIGHWAY POBLACION TACURONG CITY, 9800 Philippines",
        "city": "TACURONG CITY",
        "country": "Philippines",
        "lat": 6.69315,
        "lng": 124.67632,
        "telephone": "9189196543",
        "text": "SH TACURONG SULTN KDRT 1 DOSS."
    },
    "687": {
        "address": "COR ZULUETA ST BRGY ZONE 1 KORONADAL CITY, 9506 Philippines",
        "city": "KORONADAL CITY",
        "country": "Philippines",
        "lat": 6.5016,
        "lng": 124.8427,
        "telephone": "9189087079",
        "text": "SH MARBEL KORONADL CITY DOSS 2."
    },
    "688": {
        "address": "GEN PAULINO SANTOS ST BARRIO 1 KORONADAL CITY, 9506 Philippines",
        "city": "KORONADAL CITY",
        "country": "Philippines",
        "lat": 6.507583,
        "lng": 124.835672,
        "telephone": "9177161100",
        "text": "SH PAULINO KORONADAL DOSS."
    },
    "689": {
        "address": "GENERAL SANTOS DRIVE ZONE 1 KORONADAL CITY, 9506 Philippines",
        "city": "KORONADAL CITY",
        "country": "Philippines",
        "lat": 6.507593,
        "lng": 124.835705,
        "telephone": "9228167263",
        "text": "SH GEN SAN DRIVE KORONDAL COSS."
    },
    "690": {
        "address": "GEN SANTOS DRIVE MARBEL KORONADAL CITY, 9506 Philippines",
        "city": "KORONADAL CITY",
        "country": "Philippines",
        "lat": 6.494007,
        "lng": 124.850419,
        "telephone": "9177161100",
        "text": "SH MARBEL KORONADL CITY DOSS 1."
    },
    "691": {
        "address": "ALMONTE STREET COTABATO CITY, 9600 Philippines",
        "city": "COTABATO CITY",
        "country": "Philippines",
        "lat": 7.2218,
        "lng": 124.2513,
        "telephone": "9177261457",
        "text": "SH ALMONTE COTABATO COSS."
    },
    "692": {
        "address": "COR DON RABAGO ST ROSARY HEIGHTS COTABATO CITY, 9600 Philippines",
        "city": "COTABATO CITY",
        "country": "Philippines",
        "lat": 7.2107,
        "lng": 124.2431,
        "telephone": "9177007233",
        "text": "SH SINSUAT DON RABAGO COSS."
    },
    "693": {
        "address": "SINSUAT AVENUE COTABATO CITY, 9600 Philippines",
        "city": "COTABATO CITY",
        "country": "Philippines",
        "lat": 7.2029,
        "lng": 124.24,
        "telephone": "644250016",
        "text": "SH SINSUAT COTABATO DOSS."
    },
    "694": {
        "address": "CORNER MOLAVE POBLACION PARANG, 9604 Philippines",
        "city": "PARANG",
        "country": "Philippines",
        "lat": 7.3712,
        "lng": 124.2675,
        "telephone": "9177266532",
        "text": "SH POB PARANG MAGUINDANAO DOSS"
    },
    "695": {
        "address": "QUEZON AVE MIDSAYAP, 9410 Philippines",
        "city": "MIDSAYAP",
        "country": "Philippines",
        "lat": 7.1894,
        "lng": 124.5372,
        "telephone": "9212164276",
        "text": "SH MIDSAYAP NO COTABATO DOSS."
    },
    "696": {
        "address": "NATIONAL HIGHWAY POBLACION PIKIT, 9409 Philippines",
        "city": "PIKIT",
        "country": "Philippines",
        "lat": 7.075,
        "lng": 124.671478,
        "telephone": "9215975818",
        "text": "SH PIKIT NO COTABATO DOSS II."
    },
    "697": {
        "address": "SALIAO ESPERANZA, 9806 Philippines",
        "city": "ESPERANZA",
        "country": "Philippines",
        "lat": 6.7229,
        "lng": 124.5204,
        "telephone": "9172431880",
        "text": "SH SALIAO ESP SULTAN KUD DOSS."
    },
    "698": {
        "address": "NATIONAL HIGHWAY KABACAN, 9407 Philippines",
        "city": "KABACAN",
        "country": "Philippines",
        "lat": 7.1201,
        "lng": 124.8061,
        "telephone": "9285025387",
        "text": "SH KABACAN NORTH COTABATO DOSS."
    },
    "699": {
        "address": "RIZAL AVENUE BRGY POBLACION KABACAN NORTH COTABATO, 9407 Philippines",
        "city": "NORTH COTABATO",
        "country": "Philippines",
        "lat": 7.1066,
        "lng": 124.829,
        "telephone": "642682183",
        "text": "SH KABACAN NRTH COTABATO DOSS."
    },
    "700": {
        "address": "NATIONAL HIGHWAY KISOLON SUMILAO, 8701 Philippines",
        "city": "SUMILAO",
        "country": "Philippines",
        "lat": 8.3385,
        "lng": 124.9741,
        "telephone": "9177246144",
        "text": "SH KISOLON SUMLAO BUKDNON DOSS."
    },
    "701": {
        "address": "FORTICH ST SUMPONG MALAYBALAY CITY, 8700 Philippines",
        "city": "MALAYBALAY CITY",
        "country": "Philippines",
        "lat": 8.1478,
        "lng": 125.132,
        "telephone": "9177246144",
        "text": "SH MALAYBLAY CITY BUKDNON DOSS."
    },
    "702": {
        "address": "SAYRE HIGHWAY BARANGAY 7 MALAYBALAY CITY, 8700 Philippines",
        "city": "MALAYBALAY CITY",
        "country": "Philippines",
        "lat": 8.147347,
        "lng": 125.131531,
        "telephone": "9206454712",
        "text": "SH MALAYBALAY BUKIDNON COSS"
    },
    "703": {
        "address": "ALAE CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.424871,
        "lng": 124.81164,
        "telephone": "9177246144",
        "text": "SH ALAE CDO CITY MISAMIS DOSS."
    },
    "704": {
        "address": "DAMILAG MANOLO FORTICH, 8703 Philippines",
        "city": "MANOLO FORTICH",
        "country": "Philippines",
        "lat": 8.320892,
        "lng": 124.812241,
        "telephone": "9189157596",
        "text": "SH MANOLO FORTICH BUKDNON DOSS."
    },
    "705": {
        "address": "NATIONAL HIGHWAY PUERTO CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.50063,
        "lng": 124.750174,
        "telephone": "9175490813",
        "text": "SH PUERTO CAGAYAN DE ORO COSS"
    },
    "706": {
        "address": "MAHARLIKA HIGHWAY TAGOLOAN, 9001 Philippines",
        "city": "TAGOLOAN",
        "country": "Philippines",
        "lat": 8.534506,
        "lng": 124.753756,
        "telephone": "9057258749",
        "text": "SH TAGOLOAN MISAMIS OR DOSS"
    },
    "707": {
        "address": "NATL HWAY BALOY TABLON CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.472988,
        "lng": 124.712816,
        "telephone": "09177262112",
        "text": "SH BALOY TABLON CDO COSS."
    },
    "708": {
        "address": "CUGMAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.4688,
        "lng": 124.699,
        "telephone": "9178071189",
        "text": "SH CUGMAN CAGAYAN DE ORO COSS"
    },
    "709": {
        "address": "NATIONAL HIGHWAY POBLACION PITOGO, 7033 Philippines",
        "city": "PITOGO",
        "country": "Philippines",
        "lat": 7.75319,
        "lng": 123.20392,
        "telephone": "9212120925",
        "text": "SH PITOGO ZAMBOANGA DS DOSS."
    },
    "710": {
        "address": "POBLACION Dumalinao, 7015 Philippines",
        "city": "Dumalinao",
        "country": "Philippines",
        "lat": 7.817562,
        "lng": 123.363901,
        "telephone": "9164312116",
        "text": "SH DUMALINAO ZAMBOANGA DS DOSS"
    },
    "711": {
        "address": "BAHADA DAO PAGADIAN CITY, 7016 Philippines",
        "city": "PAGADIAN CITY",
        "country": "Philippines",
        "lat": 7.837018,
        "lng": 123.427121,
        "telephone": "9174449020",
        "text": "SH BAHADA DAO PAGADIAN DOSS"
    },
    "712": {
        "address": "SALER STREET COR RIZAL STREET PAGADIAN CITY, 7016 Philippines",
        "city": "PAGADIAN CITY",
        "country": "Philippines",
        "lat": 7.82369,
        "lng": 123.440103,
        "telephone": "9173210914",
        "text": "SH RIZAL ST PAGADIAN CITY DOSS."
    },
    "713": {
        "address": "RIZAL AVE PAGADIAN CITY, 7016 Philippines",
        "city": "PAGADIAN CITY",
        "country": "Philippines",
        "lat": 7.823716,
        "lng": 123.440114,
        "telephone": "9177337938",
        "text": "SH RIZAL AVE PAGADIAN COSS."
    },
    "714": {
        "address": "RIZAL CAMP ABELON LUMBIA DISTRICT PAGADIAN CITY, 7016 Philippines",
        "city": "PAGADIAN CITY",
        "country": "Philippines",
        "lat": 7.828693,
        "lng": 123.444217,
        "telephone": "9177337938",
        "text": "SH LUMBIA PAGADIAN DOSS."
    },
    "715": {
        "address": "AIRPORT ROAD TIGUMA PAGADIAN CITY, 7016 Philippines",
        "city": "PAGADIAN CITY",
        "country": "Philippines",
        "lat": 7.840361,
        "lng": 123.463658,
        "telephone": "9237248636",
        "text": "SH TIGUMA PAGADIAN CITY DOSS."
    },
    "716": {
        "address": "JP LAUREL AND F TORRES STS BAJADA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0826,
        "lng": 125.6123,
        "telephone": "9176219487",
        "text": "SH JP LAUREL F TORRES COSS."
    },
    "717": {
        "address": "CARPENTER LEON GARCIA ST AGDAO DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0801,
        "lng": 125.6246,
        "telephone": "9336357675",
        "text": "SH LEON GARCIA AGDAO COSS"
    },
    "718": {
        "address": "R CASTILLO ST AGDAO DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0865,
        "lng": 125.6279,
        "telephone": "9176219487",
        "text": "SH R CASTILLO NB DAVAO COSS"
    },
    "719": {
        "address": "QUIRINO AVE DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.074952,
        "lng": 125.610139,
        "telephone": "9167443574",
        "text": "SH QUIRINO CENTRAL BANK COSS"
    },
    "720": {
        "address": "BRGY 19 B BACACA ROAD ROLLING HILLS DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0951,
        "lng": 125.6032,
        "telephone": "822441055",
        "text": "SH BACACA DAVAO CITY DOSS."
    },
    "721": {
        "address": "SAINT ANTHONY STREET POBLACION Kiamba, 9514 Philippines",
        "city": "Kiamba",
        "country": "Philippines",
        "lat": 5.989997,
        "lng": 124.626031,
        "telephone": "9209018948",
        "text": "SH POB KIAMBA SARANGANI DOSS."
    },
    "722": {
        "address": "NATIONAL HIGHWAY POBLACION MAITUM, 9515 Philippines",
        "city": "MAITUM",
        "country": "Philippines",
        "lat": 6.05972,
        "lng": 124.496188,
        "telephone": "9297044060",
        "text": "SH POB MAITUM SARANGANI DOSS."
    },
    "723": {
        "address": "NATIONAL HIGHWAY LABANGAL GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.1039,
        "lng": 125.1506,
        "telephone": "9168338270",
        "text": "SH NATL HWAY LABANGAL GSC DOSS."
    },
    "724": {
        "address": "P ACHARON BOULEVARD DADIANGAS SOUTH GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.10705,
        "lng": 125.173121,
        "telephone": "9176358289",
        "text": "SH P ACHARON MAGSAYSAY COSS."
    },
    "725": {
        "address": "APOPONG GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.12417,
        "lng": 125.143805,
        "telephone": "9173047452",
        "text": "SH APOPONG GSC DOSS."
    },
    "726": {
        "address": "NATIONAL HIGHWAY GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.119028,
        "lng": 125.160402,
        "telephone": "9177175199",
        "text": "SH NAT HWAY MABUHAY COSS."
    },
    "727": {
        "address": "NATL HWAY TAMBLER GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.119038,
        "lng": 125.160402,
        "telephone": "9173047452",
        "text": "SH TAMBLER GSC DOSS."
    },
    "728": {
        "address": "PUROK MASIKAP POBLACION POLOMOLOK., 9504 Philippines",
        "city": "POLOMOLOK.",
        "country": "Philippines",
        "lat": 6.2269,
        "lng": 125.0715,
        "telephone": "9228167260",
        "text": "SH POLOMOLOK DOSS."
    },
    "729": {
        "address": "NATIONAL HIGHWAY PROBLACION TUPI, 9505 Philippines",
        "city": "TUPI",
        "country": "Philippines",
        "lat": 6.333698,
        "lng": 124.950133,
        "telephone": "9209016633",
        "text": "SH POB TUPI SO COTABATO DOSS"
    },
    "730": {
        "address": "PUROK 22 POBLACION BAYUGAN CITY, 8502 Philippines",
        "city": "BAYUGAN CITY",
        "country": "Philippines",
        "lat": 8.7145,
        "lng": 125.7482,
        "telephone": "9177230907",
        "text": "SH P22 POBLACION BAYUGAN DOSS."
    },
    "731": {
        "address": "BRGY 5 NATIONAL HIWAY San Francisco, 8501 Philippines",
        "city": "San Francisco",
        "country": "Philippines",
        "lat": 8.5069,
        "lng": 125.9767,
        "telephone": "9177042214",
        "text": "SH SANFRANCISCO AGUSAN DS DOSS"
    },
    "732": {
        "address": "J C AQUINO AVENUE BUTUAN CITY, 8600 Philippines",
        "city": "BUTUAN CITY",
        "country": "Philippines",
        "lat": 8.9424,
        "lng": 125.5167,
        "telephone": "9173088362",
        "text": "SH OCHOA BUTUAN CITY DOSS."
    },
    "733": {
        "address": "OUANO NORTH RECLAMATION AREA TIPOLO MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3216,
        "lng": 123.9318,
        "telephone": "9153625641",
        "text": "SH OUANO AVE SOUTH COSS"
    },
    "734": {
        "address": "MC BRIONES AVE BRGY TIPOLO MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3264,
        "lng": 123.9288,
        "telephone": "9153625641",
        "text": "SH NB MCBRIONES MANDAUE COSS"
    },
    "735": {
        "address": "COR B CENIZA ST POBLACION MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3286,
        "lng": 123.9414,
        "telephone": "9173269800",
        "text": "SH A DEL ROSARIO CENIZA COSS."
    },
    "736": {
        "address": "OUANO HI WAYNORTH RECLAMATION AREA MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3161,
        "lng": 123.928855,
        "telephone": "9173269800",
        "text": "SH OUANO AVE NORTH COSS."
    },
    "737": {
        "address": "MC BRIONES AVE BRGY MAGUIKAY MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.337,
        "lng": 123.942,
        "telephone": "9176221221",
        "text": "SH SB MCBRIONES MANDAUE COSS"
    },
    "738": {
        "address": "AC CORTES AVE MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3279,
        "lng": 123.9509,
        "telephone": "9175119945",
        "text": "SH AC CORTES EAST MANDAUE COSS."
    },
    "739": {
        "address": "ML QUEZON ST MAGUIKAY MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3403,
        "lng": 123.9351,
        "telephone": "9175119945",
        "text": "SH QUEZON MGUIKAY MANDAUE COSS."
    },
    "740": {
        "address": "AS FORTUNA ST BANILAD MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3395,
        "lng": 123.9256,
        "telephone": "9175119945",
        "text": "SH A S FORTUNA WEST COSS."
    },
    "741": {
        "address": "PLARIDEL STREET BRGY UMAPAD MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3377,
        "lng": 123.9543,
        "telephone": "9173269800",
        "text": "SH PLARIDEL MANDAUE COSS."
    },
    "742": {
        "address": "NATL HI WAY TRENTO, 8505 Philippines",
        "city": "TRENTO",
        "country": "Philippines",
        "lat": 8.071042,
        "lng": 126.042795,
        "telephone": "9189400341",
        "text": "SH TRENTO AGUSAN DEL SUR DOSS."
    },
    "743": {
        "address": "NATIONAL HIGHWAY MONKAYO, 8805 Philippines",
        "city": "MONKAYO",
        "country": "Philippines",
        "lat": 7.8295,
        "lng": 126.056,
        "telephone": "9177004695",
        "text": "SH MONGKAYO DAVAO D NORTE DOSS"
    },
    "744": {
        "address": "P3 POBLACION MONTEVISTA, 8801 Philippines",
        "city": "MONTEVISTA",
        "country": "Philippines",
        "lat": 7.7048,
        "lng": 125.9904,
        "telephone": "9199142367",
        "text": "SH POB MONTEVISTA DVAO DN DOSS."
    },
    "745": {
        "address": "A SORIANO AVE COR JB MANGAGOY BISLIG CITY, 8311 Philippines",
        "city": "BISLIG CITY",
        "country": "Philippines",
        "lat": 8.1835,
        "lng": 126.3564,
        "telephone": "9189070289",
        "text": "SH MANGAGOY BISLIG CITY DOSS."
    },
    "746": {
        "address": "A BONIFACIO ST POBLACION NABUNTURAN, 8800 Philippines",
        "city": "NABUNTURAN",
        "country": "Philippines",
        "lat": 7.606106,
        "lng": 125.965837,
        "telephone": "9212630344",
        "text": "SH NABUNTURAN COMPOSTELA DOSS."
    },
    "747": {
        "address": "JP LAUREL STREET POBLACION Compostela, 8109 Philippines",
        "city": "Compostela",
        "country": "Philippines",
        "lat": 7.672333,
        "lng": 126.085399,
        "telephone": "9176235724",
        "text": "SH POB COMPOSTELA COMVAL DOSS."
    },
    "748": {
        "address": "NATL HWAY COR MONTERO ST POBLACION BISLIG CITY, 8311 Philippines",
        "city": "BISLIG CITY",
        "country": "Philippines",
        "lat": 8.2128,
        "lng": 126.3169,
        "telephone": "9189070289",
        "text": "SH BISLIG SURIGAO DEL SUR DOSS."
    },
    "749": {
        "address": "QUIRANTE II TAGUM CITY, 8100 Philippines",
        "city": "TAGUM CITY",
        "country": "Philippines",
        "lat": 7.4486,
        "lng": 125.8076,
        "telephone": "9327828627",
        "text": "SH QUIRANTE PIONEER COSS."
    },
    "750": {
        "address": "AIRPORT RD XAVIER ESTATES CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.450724,
        "lng": 124.623156,
        "telephone": "9189256864",
        "text": "SH AIRPORT RD XAVIER EST DOSS."
    },
    "751": {
        "address": "VAMENTA BOULEVARD CARMEN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.478798,
        "lng": 124.638047,
        "telephone": "9177191121",
        "text": "SH VAMENTA CARMEN CAGAYAN COSS."
    },
    "752": {
        "address": "COGON MARKET CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.478044,
        "lng": 124.652188,
        "telephone": "9195659614",
        "text": "SH COGON MARKET CDO DOSS."
    },
    "753": {
        "address": "CM RECTO NATL HWAY LICOAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.486613,
        "lng": 124.648604,
        "telephone": "9178071189",
        "text": "SH CM RECTO LICOAN COSS"
    },
    "754": {
        "address": "LIMKETKAI CENTER LAPASAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.478474,
        "lng": 124.655621,
        "telephone": "9276821014",
        "text": "SH LIMKETKAI CDO COSS."
    },
    "755": {
        "address": "NHA HWAY KAUSWAGAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.497214,
        "lng": 124.630408,
        "telephone": "9177066226",
        "text": "SH KAUSWAGAN CDO COSS"
    },
    "756": {
        "address": "NATIONAL HIGHWAY BRGY IPONAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.497219,
        "lng": 124.630376,
        "telephone": "9177066226",
        "text": "SH IPONAN CAGAYAN DE ORO COSS"
    },
    "757": {
        "address": "CM RECTO HWAY COR AGORA RD LAPASAN CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.484342,
        "lng": 124.658829,
        "telephone": "09177262112",
        "text": "SH LAPASAN AGORA CDO COSS."
    },
    "758": {
        "address": "JR BORJA EXT GUSA CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.4759,
        "lng": 124.6643,
        "telephone": "8586104",
        "text": "SH JR BORJA GUSA CDO DOSS."
    },
    "759": {
        "address": "ESCARIO ST CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3177,
        "lng": 123.894281,
        "telephone": "9173269800",
        "text": "SH ESCARIO CAPITOL CHURCH COSS."
    },
    "760": {
        "address": "R DUTERTE ST BANAWA CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3136,
        "lng": 123.8798,
        "telephone": "9196256740",
        "text": "SH DUTERTE LOMBOY CEBU COSS"
    },
    "761": {
        "address": "82 V RAMA AVENUE CALAMBA CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.2988,
        "lng": 123.8872,
        "telephone": "09179164055",
        "text": "SH V RAMA CALAMBA CEBU COSS."
    },
    "762": {
        "address": "OR JONES AVE COR UYTENGSU ST CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.304,
        "lng": 123.896,
        "telephone": "322536279",
        "text": "SH PRES OSMENA CEBU CITY DOSS"
    },
    "763": {
        "address": "NATALIO BACALSO AVE LABANGON CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.2967,
        "lng": 123.8849,
        "telephone": "9054363783",
        "text": "SH BACALSO SIT LABANGON COSS."
    },
    "764": {
        "address": "FRONTING NFA BANILAD CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3281,
        "lng": 123.909,
        "telephone": "9175119945",
        "text": "SH GOV CUENCO CROSSROADS COSS."
    },
    "765": {
        "address": "SALINAS DRIVE COR EDISON ST LAHUG CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3304,
        "lng": 123.8996,
        "telephone": "9176221221",
        "text": "SH SALINAS EDISON CEBU COSS."
    },
    "766": {
        "address": "C PADILLA STREET DULJO FATIMA CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.2939,
        "lng": 123.8832,
        "telephone": "9175119945",
        "text": "SH C PADILLA DULJO COSS."
    },
    "767": {
        "address": "H ABELLANA ST CANDUMAN MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3303,
        "lng": 123.9002,
        "telephone": "9176221221",
        "text": "SH H ABELLANA SUICO COSS."
    },
    "768": {
        "address": "NATIONAL HIGHWAY POBLACION BACOLOD CITY, 9205 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 8.193433,
        "lng": 124.049858,
        "telephone": "9184121473",
        "text": "SH POB BACOLOD LANAO DN DOSS."
    },
    "769": {
        "address": "NATIONAL HIGHWAY Pinan, 7105 Philippines",
        "city": "Pinan",
        "country": "Philippines",
        "lat": 8.425355,
        "lng": 123.389769,
        "telephone": "9994273446",
        "text": "SH PINAN ZAMBOANGA DNORTE DOSS."
    },
    "770": {
        "address": "QUEZON AVE DIPOLOG CITY, 7100 Philippines",
        "city": "DIPOLOG CITY",
        "country": "Philippines",
        "lat": 8.578486,
        "lng": 123.337837,
        "telephone": "9196351510",
        "text": "SH QUEZON AVE DIPOLOG COSS."
    },
    "771": {
        "address": "RIZAL AVE DIPOLOG CITY, 7100 Philippines",
        "city": "DIPOLOG CITY",
        "country": "Philippines",
        "lat": 8.586957,
        "lng": 123.341956,
        "telephone": "9186759539",
        "text": "SH RIZAL AVE DIPOLOG COSS."
    },
    "772": {
        "address": "BRGY BAGTING DAPITAN CITY, 7101 Philippines",
        "city": "DAPITAN CITY",
        "country": "Philippines",
        "lat": 8.6586,
        "lng": 123.4208,
        "telephone": "652128819",
        "text": "SH BRGY BAGTING DAPITAN DOSS"
    },
    "773": {
        "address": "RIZAL AVENUE MAHAYAG, 7026 Philippines",
        "city": "MAHAYAG",
        "country": "Philippines",
        "lat": 8.094411,
        "lng": 123.45191,
        "telephone": "9189206476",
        "text": "SH MAHAYAG ZAMBOANGA DS DOSS."
    },
    "774": {
        "address": "RIZAL AVENUE BRGY MADASIGON MOLAVE, 7023 Philippines",
        "city": "MOLAVE",
        "country": "Philippines",
        "lat": 8.0676,
        "lng": 123.54,
        "telephone": "9177079888",
        "text": "SH MOLAVE ZAMBOANGA DS DOSS."
    },
    "775": {
        "address": "KM 24 BUNAWAN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.241366,
        "lng": 125.647311,
        "telephone": "9277980802",
        "text": "SH BUNAWAN DAVAO CITY DOSS."
    },
    "776": {
        "address": "NATIONAL HIGHWAY PANABO, 8105 Philippines",
        "city": "PANABO",
        "country": "Philippines",
        "lat": 7.2828,
        "lng": 125.6735,
        "telephone": "9285025387",
        "text": "SH PANABO DAVAO DOSS."
    },
    "777": {
        "address": "DAVAO AGUSAN HIWAY COR MALAGAMOT RD DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.157422,
        "lng": 125.657179,
        "telephone": "9173047452",
        "text": "SH PANACAN DAVAO CITY DOSS."
    },
    "778": {
        "address": "PRK TAMBIS STO NINO PANABO CITY, 8105 Philippines",
        "city": "PANABO CITY",
        "country": "Philippines",
        "lat": 7.3085,
        "lng": 125.6857,
        "telephone": "9177141015",
        "text": "SH PANABO CENTRO DDNRTH DOSS"
    },
    "779": {
        "address": "NATIONAL HIWAY PANABO CITY, 8105 Philippines",
        "city": "PANABO CITY",
        "country": "Philippines",
        "lat": 7.3104,
        "lng": 125.6845,
        "telephone": "9177045288",
        "text": "SH PANABO SB DAVAO DOSS."
    },
    "780": {
        "address": "NATIONAL HIGHWAY CARMEN, 8101 Philippines",
        "city": "CARMEN",
        "country": "Philippines",
        "lat": 7.3237,
        "lng": 125.6903,
        "telephone": "9176226979",
        "text": "SH CARMEN DAVAO DEL NORTE DOSS."
    },
    "781": {
        "address": "TADECO ROAD PANABO WHARF PANABO CITY, 8105 Philippines",
        "city": "PANABO CITY",
        "country": "Philippines",
        "lat": 7.2989,
        "lng": 125.707,
        "telephone": "",
        "text": "SH PANABO WHARF DVO DNRTH DOSS."
    },
    "782": {
        "address": "KM 10 SASA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.1222,
        "lng": 125.659,
        "telephone": "9209248159",
        "text": "SH SASA DEPOT COSS."
    },
    "783": {
        "address": "CABAGTUCAN RD COR NAT'L HIWAY KINABJANGAN NASIPIT, 8602 Philippines",
        "city": "KINABJANGAN NASIPIT",
        "country": "Philippines",
        "lat": 8.977206,
        "lng": 125.370152,
        "telephone": "853426409",
        "text": "SH KINABJANGAN NASIPIT DOSS."
    },
    "784": {
        "address": "CORNER JUAN LUNA ST NATIONAL HWAY Buenavista, 8601 Philippines",
        "city": "Buenavista",
        "country": "Philippines",
        "lat": 8.9683,
        "lng": 125.4205,
        "telephone": "9209511749",
        "text": "SH BUENAVISTA AGUSAN DS DOSS."
    },
    "785": {
        "address": "QUEZON COR TOTING REYES ST ESTANCIA KALIBO, 5600 Philippines",
        "city": "KALIBO",
        "country": "Philippines",
        "lat": 11.7014,
        "lng": 122.3685,
        "telephone": "9228590545",
        "text": "SH QUEZON REYES KALIBO COSS."
    },
    "786": {
        "address": "NATIONAL HIGHWAY BANGA, 5601 Philippines",
        "city": "BANGA",
        "country": "Philippines",
        "lat": 11.6338,
        "lng": 122.3527,
        "telephone": "9326470205",
        "text": "SH BANGA AKLAN DOSS."
    },
    "787": {
        "address": "LAGUINBANUA EAST NUMANCIA, 5604 Philippines",
        "city": "NUMANCIA",
        "country": "Philippines",
        "lat": 11.708353,
        "lng": 122.347682,
        "telephone": "9178183818",
        "text": "SH NUMANCIA AKLAN DOSS."
    },
    "788": {
        "address": "LAGUINBANUA IBAJAY, 5613 Philippines",
        "city": "IBAJAY",
        "country": "Philippines",
        "lat": 11.8179,
        "lng": 122.1739,
        "telephone": "9194593803",
        "text": "SH IBAJAY AKLAN DOSS."
    },
    "789": {
        "address": "VILLAREAL HIGHWAY POBLACION TABUC MAMBUSAO, 5807 Philippines",
        "city": "MAMBUSAO",
        "country": "Philippines",
        "lat": 11.4286,
        "lng": 122.5991,
        "telephone": "9215212159",
        "text": "SH MAMBUSAO CAPIZ DOSS."
    },
    "790": {
        "address": "CATICLAN MALAY, 5608 Philippines",
        "city": "MALAY",
        "country": "Philippines",
        "lat": 11.9117,
        "lng": 121.9537,
        "telephone": "9499634720",
        "text": "SH CATICLAN MALAY AKLAN DOSS."
    },
    "791": {
        "address": "SITIO ANGOL BGY MANOC MANOC BORACAY MALAY, 5608 Philippines",
        "city": "MALAY",
        "country": "Philippines",
        "lat": 11.947094,
        "lng": 121.941805,
        "telephone": "9204477505",
        "text": "SH MANOC MANOC BORACAY DOSS."
    },
    "792": {
        "address": "BANICA ROXAS CITY, 5800 Philippines",
        "city": "ROXAS CITY",
        "country": "Philippines",
        "lat": 11.5794,
        "lng": 122.7532,
        "telephone": "9209049489",
        "text": "SH BANICA ROXAS CITY DOSS."
    },
    "793": {
        "address": "BARANGAY ANHAWON PANAY, 5801 Philippines",
        "city": "PANAY",
        "country": "Philippines",
        "lat": 11.3245,
        "lng": 122.5374,
        "telephone": "9193951732",
        "text": "SH BGY ANHAWON PANAY CAPZ DOSS."
    },
    "794": {
        "address": "BANDOLA STREET BARANGAY AQUINO HINATUAN, 8310 Philippines",
        "city": "HINATUAN",
        "country": "Philippines",
        "lat": 8.3659,
        "lng": 126.3385,
        "telephone": "9208717041",
        "text": "SH HINATUAN SURIGAO D SUR DOSS"
    },
    "795": {
        "address": "POBLACION Talibon, 6325 Philippines",
        "city": "Talibon",
        "country": "Philippines",
        "lat": 10.129,
        "lng": 124.300861,
        "telephone": "9282059227",
        "text": "SH POB TALIBON BOHOL DOSS 2."
    },
    "796": {
        "address": "POBLACION Talibon, 6325 Philippines",
        "city": "Talibon",
        "country": "Philippines",
        "lat": 10.1456,
        "lng": 124.3229,
        "telephone": "9186871795",
        "text": "SH POB TALIBON BOHOL DOSS"
    },
    "797": {
        "address": "TAGBILARAN EAST ROAD UBAY, 6315 Philippines",
        "city": "UBAY",
        "country": "Philippines",
        "lat": 10.0583,
        "lng": 124.4698,
        "telephone": "9189854844",
        "text": "SH TAGBILARAN UBAY BOHOL DOSS."
    },
    "798": {
        "address": "YATI LILOAN SAN MIGUEL CORDOVA Cebu, 6002 Philippines",
        "city": "Cebu",
        "country": "Philippines",
        "lat": 10.262,
        "lng": 123.9472,
        "telephone": "",
        "text": "SH SAN MIGUEL CORDOVA DOSS."
    },
    "799": {
        "address": "BASAK MARIGONDON ROAD HUMAY HUMAY LAPU LAPU CITY, 6015 Philippines",
        "city": "LAPU LAPU CITY",
        "country": "Philippines",
        "lat": 10.3087,
        "lng": 123.9613,
        "telephone": "9173269800",
        "text": "SH BASAK MARIGONDON HUMAY COSS."
    },
    "800": {
        "address": "BASAK LAPU LAPU, 6015 Philippines",
        "city": "LAPU LAPU",
        "country": "Philippines",
        "lat": 10.3087,
        "lng": 123.9613,
        "telephone": "9285051281",
        "text": "SH BASAK LAPU LAPU DOSS"
    },
    "801": {
        "address": "ML QUEZON HIGHWAY PUSOK LAPU LAPU CITY, 6015 Philippines",
        "city": "LAPU LAPU CITY",
        "country": "Philippines",
        "lat": 10.324535,
        "lng": 123.973468,
        "telephone": "9173269800",
        "text": "SH QUEZON NATL HWAY PUSOK COSS."
    },
    "802": {
        "address": "QUEZON AVENUE POBLACION TUBOD, 9209 Philippines",
        "city": "TUBOD",
        "country": "Philippines",
        "lat": 8.04645,
        "lng": 123.794873,
        "telephone": "9177200045",
        "text": "SH TUBOD LANAO DEL NORTE DOSS."
    },
    "803": {
        "address": "MARANDING LALA LANAO DEL NORTE, 9211 Philippines",
        "city": "LANAO DEL NORTE",
        "country": "Philippines",
        "lat": 7.928792,
        "lng": 123.7734,
        "telephone": "633415225",
        "text": "SH MARANDING LALA LDN DOSS."
    },
    "804": {
        "address": "POBLACION KAPATAGAN LANAO DEL NORTE, 9214 Philippines",
        "city": "LANAO DEL NORTE",
        "country": "Philippines",
        "lat": 7.8986,
        "lng": 123.771,
        "telephone": "633828266",
        "text": "SH POB KAPATAGAN LDN DOSS."
    },
    "805": {
        "address": "POBLACION KAPATAGAN, 9214 Philippines",
        "city": "KAPATAGAN",
        "country": "Philippines",
        "lat": 7.8959,
        "lng": 123.7726,
        "telephone": "9168617619",
        "text": "SH KAPATAGAN LANAO DNORTE DOSS."
    },
    "806": {
        "address": "42F RIZAL AVENUE LAM AN OZAMIS CITY, 7200 Philippines",
        "city": "OZAMIS CITY",
        "country": "Philippines",
        "lat": 8.1488,
        "lng": 123.8379,
        "telephone": "9222644818",
        "text": "SH LAM AN OZAMIS CITY DOSS."
    },
    "807": {
        "address": "CIRCUMFERENTIAL DRIVE AGUADA OZAMIS CITY, 7200 Philippines",
        "city": "OZAMIS CITY",
        "country": "Philippines",
        "lat": 8.1548,
        "lng": 123.8431,
        "telephone": "9177221227",
        "text": "SH CIRCUFERENCIAL IBT DOSS."
    },
    "808": {
        "address": "POBLACION SULTAN NAGA DIMAPORO, 9223 Philippines",
        "city": "SULTAN NAGA DIMAPORO",
        "country": "Philippines",
        "lat": 7.789923,
        "lng": 123.726783,
        "telephone": "9173106503",
        "text": "SH DIMAPORO LANAO D NORTE DOSS."
    },
    "809": {
        "address": "BONGBONGON QUEZON, 8715 Philippines",
        "city": "QUEZON",
        "country": "Philippines",
        "lat": 7.7238,
        "lng": 125.1058,
        "telephone": "9177187138",
        "text": "SH BONGBONGON QUEZON BKD DOSS."
    },
    "810": {
        "address": "NORTH POBLACION MARAMAG, 8714 Philippines",
        "city": "MARAMAG",
        "country": "Philippines",
        "lat": 7.764525,
        "lng": 125.005252,
        "telephone": "9353154480",
        "text": "SH NO PO MARAMAG BUKIDNON DOSS."
    },
    "811": {
        "address": "SAYRE HIGHWAY POBLACION VALENCIA CITY, 8709 Philippines",
        "city": "VALENCIA CITY",
        "country": "Philippines",
        "lat": 7.903065,
        "lng": 125.091705,
        "telephone": "9178561800",
        "text": "SH VALENCIA BUKIDNON DOSS"
    },
    "812": {
        "address": "SAYRE HIGHWAY POBLACION HAGKOL VALENCIA CITY, 8709 Philippines",
        "city": "VALENCIA CITY",
        "country": "Philippines",
        "lat": 7.903033,
        "lng": 125.09178,
        "telephone": "9164228710",
        "text": "SH HAGKOL VALENCIA COSS."
    },
    "813": {
        "address": "SAYRE HIGHWAY POBLACION CARMEN, 9408 Philippines",
        "city": "CARMEN",
        "country": "Philippines",
        "lat": 7.207862,
        "lng": 124.795665,
        "telephone": "9285025387",
        "text": "SH POB CARMEN COTABATO DOSS"
    },
    "814": {
        "address": "655 ABUCAYAN BALAMBAN, 6041 Philippines",
        "city": "BALAMBAN",
        "country": "Philippines",
        "lat": 10.4781,
        "lng": 123.7055,
        "telephone": "9173260300",
        "text": "SH ABUCAYAN BALAMBAN DOSS."
    },
    "815": {
        "address": "LURAY II TOLEDO CITY, 6038 Philippines",
        "city": "TOLEDO CITY",
        "country": "Philippines",
        "lat": 10.3834,
        "lng": 123.6474,
        "telephone": "9173260300",
        "text": "SH LURAY II TOLEDO CEBU DOSS."
    },
    "816": {
        "address": "F CABAHUG STREET CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3249,
        "lng": 123.9155,
        "telephone": "322312696",
        "text": "SH F CABAHUG CEBU CITY COSS."
    },
    "817": {
        "address": "NASIPIT TALAMBAN ROAD CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3527,
        "lng": 123.9142,
        "telephone": "9176221221",
        "text": "SH J PANIS USC COSS"
    },
    "818": {
        "address": "BARANGAY BOLONG OESTE SANTA BARBARA, 5002 Philippines",
        "city": "SANTA BARBARA",
        "country": "Philippines",
        "lat": 10.8106,
        "lng": 122.531,
        "telephone": "9286241954",
        "text": "SH STA BARBARA ILOILO DOSS"
    },
    "819": {
        "address": "BRGY UNGKA II PAVIA, 5001 Philippines",
        "city": "PAVIA",
        "country": "Philippines",
        "lat": 10.7497,
        "lng": 122.5389,
        "telephone": "9173050818",
        "text": "SH UNGKA II PAVIA ILOILO DOSS"
    },
    "820": {
        "address": "NATIONAL HIWAY LEGANES, 5003 Philippines",
        "city": "LEGANES",
        "country": "Philippines",
        "lat": 10.7848,
        "lng": 122.5877,
        "telephone": "333384708",
        "text": "SH LEGANES HIWAY ILOILO DOSS"
    },
    "821": {
        "address": "LOPEZ JAENA COR STA ISABEL ST ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.7268,
        "lng": 122.5563,
        "telephone": "9228775802",
        "text": "SH LOPEZ JAENA STA ISABEL COSS."
    },
    "822": {
        "address": "MC AURTHUR HIGHWAY BRGY TAGBAC JARO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.74679,
        "lng": 122.567328,
        "telephone": "9126142350",
        "text": "SH BGY BUHANG JARO ILOILO DOSS."
    },
    "823": {
        "address": "TAFT NORTH MANDURRIAO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.714,
        "lng": 122.5444,
        "telephone": "9228262898",
        "text": "SH NORTH MANDURIAO ILOILO DOSS"
    },
    "824": {
        "address": "MANDURRIAO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.7204,
        "lng": 122.5342,
        "telephone": "9189214086",
        "text": "SH MANDURRIAO ILOILO CITY DOSS."
    },
    "825": {
        "address": "BRGY SAN RAFAEL MANDURRIAO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.71,
        "lng": 122.5511,
        "telephone": "9173026801",
        "text": "SH BENIGNO AQUINO SM COSS."
    },
    "826": {
        "address": "BURGOS CORNER MAGDALO ST LA PAZ ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.7131,
        "lng": 122.5683,
        "telephone": "9228775802",
        "text": "SH BURGOS MAGDALO LA PAZ COSS."
    },
    "827": {
        "address": "106 POBLACION ORIENTAL Consolacion, 6001 Philippines",
        "city": "Consolacion",
        "country": "Philippines",
        "lat": 10.3744,
        "lng": 123.9557,
        "telephone": "09158947352",
        "text": "SH CONSOLACION CEBU DOSS."
    },
    "828": {
        "address": "JOSE RIZAL BASAK MANDAUE CITY, 6014 Philippines",
        "city": "MANDAUE CITY",
        "country": "Philippines",
        "lat": 10.3494,
        "lng": 123.9486,
        "telephone": "9176221221",
        "text": "SH JOSE RIZAL NORTH COSS."
    },
    "829": {
        "address": "NATIONAL HIGHWAY BRGY TAYUD CONSOLA Cebu, 6001 Philippines",
        "city": "Cebu",
        "country": "Philippines",
        "lat": 10.3518,
        "lng": 123.9712,
        "telephone": "322732145",
        "text": "SH TAYUD CONSOLACION CEBU COSS."
    },
    "830": {
        "address": "CORNER COLON AND PERDICES STREETS DUMAGUETE CITY, 6200 Philippines",
        "city": "DUMAGUETE CITY",
        "country": "Philippines",
        "lat": 9.304308,
        "lng": 123.307664,
        "telephone": "352254451",
        "text": "SH PERDICES DUMAGUETE DOSS"
    },
    "831": {
        "address": "SOUTH RD BRGY CALINDAGAN DUMAGUETE CITY, 6200 Philippines",
        "city": "DUMAGUETE CITY",
        "country": "Philippines",
        "lat": 9.3001,
        "lng": 123.3069,
        "telephone": "335097949",
        "text": "SH CALINDAGAN DUMAGUETE DOSS"
    },
    "832": {
        "address": "BRGY DARO REAL ST DUMAGUETE CITY, 6200 Philippines",
        "city": "DUMAGUETE CITY",
        "country": "Philippines",
        "lat": 9.319,
        "lng": 123.3005,
        "telephone": "354198900",
        "text": "SH REAL DUMAGUETE CITY COSS"
    },
    "833": {
        "address": "SOUTH ROAD MANGNAO DUMAGUETE CITY, 6200 Philippines",
        "city": "DUMAGUETE CITY",
        "country": "Philippines",
        "lat": 9.2923,
        "lng": 123.2978,
        "telephone": "9209539800",
        "text": "SH DUMAGUETE SO RD MAGNAO COSS."
    },
    "834": {
        "address": "AIRPORT AREA SIBULAN, 6201 Philippines",
        "city": "SIBULAN",
        "country": "Philippines",
        "lat": 9.3327,
        "lng": 123.2944,
        "telephone": "9209539800",
        "text": "SH SIBULAN AIRPORT COSS."
    },
    "835": {
        "address": "SAN MIGUEL BACONG NEGROS ORIENTAL, 6216 Philippines",
        "city": "NEGROS ORIENTAL",
        "country": "Philippines",
        "lat": 9.2179,
        "lng": 123.283,
        "telephone": "352258868",
        "text": "SH BACONG NEGROS OR DOSS."
    },
    "836": {
        "address": "NATIONAL HIGHWAY SANTA CATALINA, 6220 Philippines",
        "city": "SANTA CATALINA",
        "country": "Philippines",
        "lat": 9.336,
        "lng": 122.8608,
        "telephone": "9261446207",
        "text": "SH STA CATALINA NEGROS OR DOSS."
    },
    "837": {
        "address": "NATIONAL HIGHWAY BAYAWAN CITY, 6221 Philippines",
        "city": "BAYAWAN CITY",
        "country": "Philippines",
        "lat": 9.3649,
        "lng": 122.8061,
        "telephone": "9261446207",
        "text": "SH BAYAWAN NEGROS ORIENTL DOSS."
    },
    "838": {
        "address": "AVANCENA STREET SOUTH FUNDIDOR MOLO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.6892,
        "lng": 122.5295,
        "telephone": "9285049243",
        "text": "SH N FUNDIDOR MOLO ILOILO DOSS"
    },
    "839": {
        "address": "OSMENA ST MOHON AREVALO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.6933,
        "lng": 122.501378,
        "telephone": "0333378048",
        "text": "SH VILLA ILOILO DOSS."
    },
    "840": {
        "address": "AVANCENA CORNER LOCSIN STREET MOLO ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.6974,
        "lng": 122.5429,
        "telephone": "9173026801",
        "text": "SH AVANCENA LOCSIN MOLO COSS."
    },
    "841": {
        "address": "JALANDONI CORNER DELGADO ST ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.697018,
        "lng": 122.561446,
        "telephone": "9188777999",
        "text": "SH JALANDONI DELGADO COSS."
    },
    "842": {
        "address": "MABINI CORNER LEDESMA STREET ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.6947,
        "lng": 122.5644,
        "telephone": "9228775802",
        "text": "SH LEDESMA MABINI ILOILO COSS."
    },
    "843": {
        "address": "MATIAO MATI, 8200 Philippines",
        "city": "MATI",
        "country": "Philippines",
        "lat": 6.944618,
        "lng": 126.237245,
        "telephone": "822911688",
        "text": "SH MATI DAVAO ORIENTAL DOSS."
    },
    "844": {
        "address": "RIZAL ST CENTRAL MATI, 8200 Philippines",
        "city": "MATI",
        "country": "Philippines",
        "lat": 6.951237,
        "lng": 126.218534,
        "telephone": "9177175199",
        "text": "SH RIZAL CENTRAL MATI COSS."
    },
    "845": {
        "address": "PUROK MALINAWON LUPON, 8207 Philippines",
        "city": "LUPON",
        "country": "Philippines",
        "lat": 6.901,
        "lng": 126.014,
        "telephone": "9177143580",
        "text": "SH LUPON DAVAO ORIENTAL DOSS"
    },
    "846": {
        "address": "PUROK ROSE TIBANBAN Governor Generoso, 8210 Philippines",
        "city": "Governor Generoso",
        "country": "Philippines",
        "lat": 6.628918,
        "lng": 126.077857,
        "telephone": "9399076557",
        "text": "SH GOV GENEROSO DAVAO OR DOSS."
    },
    "847": {
        "address": "FUENTES STREET KINGKING PANTUKAN, 8809 Philippines",
        "city": "PANTUKAN",
        "country": "Philippines",
        "lat": 7.130718,
        "lng": 125.895038,
        "telephone": "9262034773",
        "text": "SH KINGKING PNTUKAN DAVAO DOSS"
    },
    "848": {
        "address": "APOKON RD VISAYAN VILL TAGUM CITY, 8100 Philippines",
        "city": "TAGUM CITY",
        "country": "Philippines",
        "lat": 7.416389,
        "lng": 125.822682,
        "telephone": "9285038319",
        "text": "SH APOKON VISAYAN TAGUM DOSS."
    },
    "849": {
        "address": "BARANGAY IGTUBA MIAG AO, 5023 Philippines",
        "city": "MIAG AO",
        "country": "Philippines",
        "lat": 10.6444,
        "lng": 122.2441,
        "telephone": "9487476445",
        "text": "SH IGTUBA MIAG AO ILOILO DOSS."
    },
    "850": {
        "address": "NATIONAL HIGHWAY GUSA CAGAYAN DE ORO CITY, 9000 Philippines",
        "city": "CAGAYAN DE ORO CITY",
        "country": "Philippines",
        "lat": 8.4768,
        "lng": 124.677,
        "telephone": "9178071189",
        "text": "SH NAT HWAY GUSA EB COSS"
    },
    "851": {
        "address": "DAO DISTRICT TAGBILARAN CITY, 6300 Philippines",
        "city": "TAGBILARAN CITY",
        "country": "Philippines",
        "lat": 9.6695,
        "lng": 123.87,
        "telephone": "9176168845",
        "text": "SH DAO TAGBILARAN BOHOL DOSS"
    },
    "852": {
        "address": "J A CLARIN AVENUE TAGBILARAN CITY, 6300 Philippines",
        "city": "TAGBILARAN CITY",
        "country": "Philippines",
        "lat": 9.6496,
        "lng": 123.8658,
        "telephone": "",
        "text": "SH JA CA TAGBILARAN BOHOL COSS."
    },
    "853": {
        "address": "CARLOS P GARCIA AVE COR E CALCETA TAGBILARAN CITY, 6300 Philippines",
        "city": "TAGBILARAN CITY",
        "country": "Philippines",
        "lat": 9.6534,
        "lng": 123.8556,
        "telephone": "9109265595",
        "text": "SH CPG CALCETA TAGBILARAN COSS."
    },
    "854": {
        "address": "BRGY UPPER DELA PAZ CORTES BOHOL, 6341 Philippines",
        "city": "BOHOL",
        "country": "Philippines",
        "lat": 9.7105,
        "lng": 123.8717,
        "telephone": "385018878",
        "text": "SH CORTES BOHOL DOSS."
    },
    "855": {
        "address": "NATIONAL HIGHWAY POTOHAN TUBIGON, 6329 Philippines",
        "city": "TUBIGON",
        "country": "Philippines",
        "lat": 9.944,
        "lng": 123.95542,
        "telephone": "9178001860",
        "text": "SH POTOHAN TUBIGON BOHOL DOSS."
    },
    "856": {
        "address": "J A CLARIN STREET Jagna, 6308 Philippines",
        "city": "Jagna",
        "country": "Philippines",
        "lat": 9.6503,
        "lng": 124.364548,
        "telephone": "9208731473",
        "text": "SH JAGNA BOHOL DOSS."
    },
    "857": {
        "address": "NATIONAL HIGHWAY AWAYAN CARCAR CITY, 6019 Philippines",
        "city": "CARCAR CITY",
        "country": "Philippines",
        "lat": 10.1092,
        "lng": 123.649,
        "telephone": "322723400",
        "text": "SH CARCAR CITY CEBU COSS."
    },
    "858": {
        "address": "CEBU SOUTH ROAD BASAK PARDO CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.288134,
        "lng": 123.863972,
        "telephone": "9173210203",
        "text": "SH CEBU SOUTH BASAK PARDO COSS."
    },
    "859": {
        "address": "BRGY SAN ROQUE TALISAY CITY, 6045 Philippines",
        "city": "TALISAY CITY",
        "country": "Philippines",
        "lat": 10.2577,
        "lng": 123.8689,
        "telephone": "9173269800",
        "text": "SH SAN ROQUE TALISAY CEBU COSS."
    },
    "860": {
        "address": "NATIONAL HIGHWAY LABO ALORAN, 7206 Philippines",
        "city": "ALORAN",
        "country": "Philippines",
        "lat": 8.414043,
        "lng": 123.815938,
        "telephone": "9156791971",
        "text": "SH ALORAN MISAMIS OCC DOSS."
    },
    "861": {
        "address": "MCKINLEY STREET POBLACION 2 OROQUIETA CITY, 7207 Philippines",
        "city": "OROQUIETA CITY",
        "country": "Philippines",
        "lat": 8.458797,
        "lng": 123.801284,
        "telephone": "9296771514",
        "text": "SH MCKINLEY OROQUIETA DOSS."
    },
    "862": {
        "address": "MJ CUENCO AVE COR PALMA ST TINAGO CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.2977,
        "lng": 123.9062,
        "telephone": "9176225475",
        "text": "SH MJCUENCO TINAGO CEBU DOSS."
    },
    "863": {
        "address": "1226 CEBU SOUTH ROAD BASAK PARDO Cebu, 6000 Philippines",
        "city": "Cebu",
        "country": "Philippines",
        "lat": 10.2527,
        "lng": 123.8552,
        "telephone": "",
        "text": "SH BASAK PARDO CEBU DOSS."
    },
    "864": {
        "address": "NATIONAL HIGHWAY CANOCOTAN TAGUM CITY, 8100 Philippines",
        "city": "TAGUM CITY",
        "country": "Philippines",
        "lat": 7.423751,
        "lng": 125.810697,
        "telephone": "9209538366",
        "text": "SH CANOCOTAN TAGUM CITY DOSS."
    },
    "865": {
        "address": "NATIONAL HIGHWAY MAGUGPO TAGUM CITY, 8100 Philippines",
        "city": "TAGUM CITY",
        "country": "Philippines",
        "lat": 7.445752,
        "lng": 125.808091,
        "telephone": "9228900631",
        "text": "SH TAGUM NAT HWAY SB COSS."
    },
    "866": {
        "address": "PIONEER AVENUE MAGUGPO SOUTH TAGUM CITY, 8100 Philippines",
        "city": "TAGUM CITY",
        "country": "Philippines",
        "lat": 7.4528,
        "lng": 125.8004,
        "telephone": "9327828627",
        "text": "SH PAGSABANGA TAGUM COSS."
    },
    "867": {
        "address": "MABUA TANDAG CITY, 8300 Philippines",
        "city": "TANDAG CITY",
        "country": "Philippines",
        "lat": 9.063555,
        "lng": 126.204618,
        "telephone": "9209281585",
        "text": "SH TANDAG SURIGAO DEL SUR DOSS."
    },
    "868": {
        "address": "NATIONAL HIGHWAY QUIRINO MADRID, 8316 Philippines",
        "city": "MADRID",
        "country": "Philippines",
        "lat": 9.256914,
        "lng": 125.968997,
        "telephone": "862134043",
        "text": "SH QUIRINO MADRID SDS DOSS"
    },
    "869": {
        "address": "TRINIDAD GUINDULMAN, 6310 Philippines",
        "city": "GUINDULMAN",
        "country": "Philippines",
        "lat": 9.7718,
        "lng": 124.4894,
        "telephone": "9154356039",
        "text": "SH TRINIDAD GUINDULMAN DOSS"
    },
    "870": {
        "address": "BARANGAY TUPSAN MAMBAJAO, 9100 Philippines",
        "city": "MAMBAJAO",
        "country": "Philippines",
        "lat": 9.2068,
        "lng": 124.7753,
        "telephone": "9088730388",
        "text": "SH MAMBAJAO CAMIGUIN DOSS"
    },
    "871": {
        "address": "BRGY SAN ROQUE MAHINOG, 9101 Philippines",
        "city": "MAHINOG",
        "country": "Philippines",
        "lat": 9.2066,
        "lng": 124.775,
        "telephone": "883874043",
        "text": "SH BENONI CAMIGUIN DOSS"
    },
    "872": {
        "address": "MAMBAJAO MAASIN CITY, 6600 Philippines",
        "city": "MAASIN CITY",
        "country": "Philippines",
        "lat": 9.2067,
        "lng": 124.7753,
        "telephone": "9176322526",
        "text": "SH MAMBAJAO MAASIN DOSS"
    },
    "873": {
        "address": "SHANGHAI II BRGY 75 A MATINA APLAYA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.04064,
        "lng": 125.576123,
        "telephone": "9228609820",
        "text": "SH MATINA APLAYA DVO CITY DOSS."
    },
    "874": {
        "address": "QUIMPO BLVD ECOLAND DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0501,
        "lng": 125.5824,
        "telephone": "9209701275",
        "text": "SH QUIMPO ECOLAND SM COSS."
    },
    "875": {
        "address": "MCARTHUR HIGHWAY MATINA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.059584,
        "lng": 125.584847,
        "telephone": "9176219487",
        "text": "SH MATINA DC GOLF CLUB COSS."
    },
    "876": {
        "address": "MCARTHUR HIGHWAY MATINA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0622,
        "lng": 125.5958,
        "telephone": "0822977602",
        "text": "SH MATINA ATENEO COSS."
    },
    "877": {
        "address": "QUIMPO BOULEVARD ECOLAND MATINA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0544,
        "lng": 125.5989,
        "telephone": "9209248159",
        "text": "SH ECOLAND SANDAWA COSS."
    },
    "878": {
        "address": "MC ARTHUR HIGHWAY MATINA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.063529,
        "lng": 125.599366,
        "telephone": "9228900631",
        "text": "SH MATINA UM DAVAO COSS."
    },
    "879": {
        "address": "NATIONAL HIGHWAY BRGY AGLAYAN MALAYBALAY CITY, 8700 Philippines",
        "city": "MALAYBALAY CITY",
        "country": "Philippines",
        "lat": 7.0636,
        "lng": 125.5993,
        "telephone": "0882215098",
        "text": "SH BGY AGLAYAN MALAYBALAY DOSS."
    },
    "880": {
        "address": "MAGALLANES CORNER LEGASPI STS DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.065973,
        "lng": 125.604917,
        "telephone": "9336357675",
        "text": "SH MAGALLANES DC DAVAO COSS"
    },
    "881": {
        "address": "KM 8 MAC ARTHUR HIGHWAY ULAS TALOMO DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0554,
        "lng": 125.5465,
        "telephone": "9177175199",
        "text": "SH ULAS TALOMO DAVAO COSS."
    },
    "882": {
        "address": "SOUTH POBLACION NAGA, 6037 Philippines",
        "city": "NAGA",
        "country": "Philippines",
        "lat": 10.2045,
        "lng": 123.7547,
        "telephone": "9177160300",
        "text": "SH SO POBLACION NAGA CEBU DOSS."
    },
    "883": {
        "address": "CEBU SOUTH ROAD MINGLANILLA, 6046 Philippines",
        "city": "MINGLANILLA",
        "country": "Philippines",
        "lat": 10.2425,
        "lng": 123.786,
        "telephone": "",
        "text": "SH NATL HIWAY MINGLANILLA COSS."
    },
    "884": {
        "address": "NATALIO BACALSO AVE BULACAO TALISAY CITY, 6045 Philippines",
        "city": "TALISAY CITY",
        "country": "Philippines",
        "lat": 10.269,
        "lng": 123.8447,
        "telephone": "9175119945",
        "text": "SH BACALSO SIGA BULACAO COSS."
    },
    "885": {
        "address": "CEBU SOUTH ROAD LAWAAN TALISAY CITY, 6045 Philippines",
        "city": "TALISAY CITY",
        "country": "Philippines",
        "lat": 10.2598,
        "lng": 123.8305,
        "telephone": "9177249028",
        "text": "SH LLAMAS LAWAAN TALISAY COSS"
    },
    "886": {
        "address": "CEBU SOUTH COASTAL ROAD CANSOJONG TALISAY CITY, 6045 Philippines",
        "city": "TALISAY CITY",
        "country": "Philippines",
        "lat": 10.2512,
        "lng": 123.849456,
        "telephone": "9173269800",
        "text": "SH CSC ROAD CONSOJONG COSS."
    },
    "887": {
        "address": "173 LIPATA MINGLANILLA, 6046 Philippines",
        "city": "MINGLANILLA",
        "country": "Philippines",
        "lat": 10.2557,
        "lng": 123.8126,
        "telephone": "9175119945",
        "text": "SH N BACALSO MINGLANILLA COSS."
    },
    "888": {
        "address": "ISABELA BINALBAGAN ROAD BINALBAGAN, 6107 Philippines",
        "city": "BINALBAGAN",
        "country": "Philippines",
        "lat": 10.2066,
        "lng": 122.8675,
        "telephone": "9235895739",
        "text": "SH BINALBAGAN WEST COSS"
    },
    "889": {
        "address": "MABINI STREET BARANGAY TALABAN HIMAMAYLAN CITY, 6108 Philippines",
        "city": "HIMAMAYLAN CITY",
        "country": "Philippines",
        "lat": 10.1294,
        "lng": 122.8676,
        "telephone": "9177188616",
        "text": "SH HIMAMAYLAN NEGROS OCC DOSS"
    },
    "890": {
        "address": "COR RIZAL LOPEZ JAENA STS BRGY 3 HINIGARAN, 6106 Philippines",
        "city": "HINIGARAN",
        "country": "Philippines",
        "lat": 10.2758,
        "lng": 122.8523,
        "telephone": "9294149423",
        "text": "SH HINIGARAN NORTH DOSS."
    },
    "891": {
        "address": "GUANZON COR TAN LORENZO STS KABANKALAN CITY, 6111 Philippines",
        "city": "KABANKALAN CITY",
        "country": "Philippines",
        "lat": 9.9941,
        "lng": 122.8147,
        "telephone": "0347090275",
        "text": "SH GUANZON TAN LORENZO COSS."
    },
    "892": {
        "address": "TABAO PROPER Valladolid, 6103 Philippines",
        "city": "Valladolid",
        "country": "Philippines",
        "lat": 10.4611,
        "lng": 122.8237,
        "telephone": "9198813875",
        "text": "SH VALLADOLID NEGROS OCC DOSS."
    },
    "893": {
        "address": "12 101 ST GREENPLAIN SUBD VALLADOLI BACOLOD CITY, 6103 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.5074,
        "lng": 122.8318,
        "telephone": "9088873919",
        "text": "SH M VALLADOLID NEG OCC DOSS."
    },
    "894": {
        "address": "BRGY II POBLACION SIPALAY, 6113 Philippines",
        "city": "SIPALAY",
        "country": "Philippines",
        "lat": 9.9772,
        "lng": 122.6671,
        "telephone": "9195549639",
        "text": "SH SIPALAY CITY NEGROS OC DOSS."
    },
    "895": {
        "address": "ARANETA NATIONAL HIGHWAY BAGO CITY, 6101 Philippines",
        "city": "BAGO CITY",
        "country": "Philippines",
        "lat": 10.5389,
        "lng": 122.8378,
        "telephone": "9088873919",
        "text": "SH ARANETA NATL HWAY BAGO COSS"
    },
    "896": {
        "address": "RIZAL ST BRGY MAAO BAGO CITY, 6101 Philippines",
        "city": "BAGO CITY",
        "country": "Philippines",
        "lat": 10.4899,
        "lng": 122.9856,
        "telephone": "9063700025",
        "text": "SH MA AO BAGO CITY DOSS."
    },
    "897": {
        "address": "PUROK 4 TORIL CROSSING BAYABAS DAVAO CITY, 8012 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0237,
        "lng": 125.4958,
        "telephone": "9189012709",
        "text": "SH CROSSING BAYABAS TORIL DOSS."
    },
    "898": {
        "address": "CROSSING BAYABAS TORIL DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0246,
        "lng": 125.5024,
        "telephone": "9189012709",
        "text": "SH TORIL DAVAO CITY DOSS"
    },
    "899": {
        "address": "CORNER AGTON STREET TORIL DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0152,
        "lng": 125.4982,
        "telephone": "9176219487",
        "text": "SH AGTON TORIL DAVAO COSS."
    },
    "900": {
        "address": "KM 11 MCARTHUR HWAY BAGO APLAYA TAL DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.036487,
        "lng": 125.52073,
        "telephone": "9209701275",
        "text": "SH DUMOY DAVAO CITY DOSS."
    },
    "901": {
        "address": "BAGO APLAYA TALOMO DISTRICT DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0426,
        "lng": 125.5286,
        "telephone": "9209701275",
        "text": "SH BAGO APLAYA TALOMO COSS."
    },
    "902": {
        "address": "KILOMETER7 NATIONAL HIGHWAY CATALUN DAVAO CITY, 8012 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0597,
        "lng": 125.5381,
        "telephone": "",
        "text": "SH CATALUNAN PEQUENO DOSS."
    },
    "903": {
        "address": "NATIONAL  HIGHWAY MINTAL DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.0897,
        "lng": 125.5031,
        "telephone": "9167443574",
        "text": "SH MINTAL DAVAO CITY DOSS"
    },
    "904": {
        "address": "NATIONAL HIGHWAY TABOC OPOL CITY, 9016 Philippines",
        "city": "OPOL CITY",
        "country": "Philippines",
        "lat": 8.3059,
        "lng": 124.3451,
        "telephone": "9177111959",
        "text": "SH TABOC OPOL MIS OR DOSS"
    },
    "905": {
        "address": "PUROK MASILAKON LUGAIT, 9025 Philippines",
        "city": "LUGAIT",
        "country": "Philippines",
        "lat": 8.3447,
        "lng": 124.2603,
        "telephone": "9177120688",
        "text": "SH NATIONL HIGHWAY LUGAIT DOSS"
    },
    "906": {
        "address": "YUMANG ST CITYHEIGHTS GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.1328,
        "lng": 125.171496,
        "telephone": "0835522267",
        "text": "SH CITY HEIGHTS GSC DOSS."
    },
    "907": {
        "address": "PACHECO SUBD APARENTE ST CITY HEIGH GEN SANTOS CITY, 9500 Philippines",
        "city": "GEN SANTOS CITY",
        "country": "Philippines",
        "lat": 6.1304,
        "lng": 125.1717,
        "telephone": "",
        "text": "SH PACHECO GEN SAN CITY DOSS"
    },
    "908": {
        "address": "BO ISIDRO PUROK MALAKAS GENE GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.152091,
        "lng": 125.1671,
        "telephone": "9177161100",
        "text": "SH PUROK MALAKAS GSC DOSS."
    },
    "909": {
        "address": "COR CAMIAS ST DIDIANGAS EAST GENERAL SANTOS CITY, 9005 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.1185,
        "lng": 125.1766,
        "telephone": "835524418",
        "text": "SH CAMIAS N HWAY GEN SAN COSS."
    },
    "910": {
        "address": "COR LAUREL ST DADIANGAS EAST GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.116206,
        "lng": 125.179135,
        "telephone": "0835547234",
        "text": "SH DADIANGAS EAST GEN SAN DOSS."
    },
    "911": {
        "address": "NATIONAL HIGHWAY LAGAO GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.125311,
        "lng": 125.194219,
        "telephone": "0833801380",
        "text": "SH LAGAO GENERAL SANTOS DOSS."
    },
    "912": {
        "address": "NATIONAL HIGHWAY LAGAO GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.1253,
        "lng": 125.194225,
        "telephone": "9176358289",
        "text": "SH NAT HWAY LAGAO COSS."
    },
    "913": {
        "address": "M J CUENCO AVENUE CARRETA CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.309657,
        "lng": 123.908191,
        "telephone": "9173269800",
        "text": "SH MJ CUENCO CARRETA COSS."
    },
    "914": {
        "address": "MCARTHUR AVE COR T PADILLA ST CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3021,
        "lng": 123.9103,
        "telephone": "9175119945",
        "text": "SH S OSMENA T PADILLA COSS."
    },
    "915": {
        "address": "JUAN LUNA AVE CORNER ARCA STREET CEBU CITY, 6000 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.31817,
        "lng": 123.912064,
        "telephone": "9228318882",
        "text": "SH JUAN LUNA ARCA CEBU DOSS."
    },
    "916": {
        "address": "NATIONAL HIGHWAY NORTHERN POBLACION Calamba, 7210 Philippines",
        "city": "Calamba",
        "country": "Philippines",
        "lat": 8.603783,
        "lng": 123.650694,
        "telephone": "9228678918",
        "text": "SH CALAMBA MISAMIS OCC DOSS"
    },
    "917": {
        "address": "QUEZON STREET NEW SAGAY, 6122 Philippines",
        "city": "NEW SAGAY",
        "country": "Philippines",
        "lat": 10.897521,
        "lng": 123.416658,
        "telephone": "9272804573",
        "text": "SH NEW SAGAY NEGROS OC DOSS."
    },
    "918": {
        "address": "BARANGAY BATO SAGAY CITY, 6122 Philippines",
        "city": "SAGAY CITY",
        "country": "Philippines",
        "lat": 10.809943,
        "lng": 123.379721,
        "telephone": "9198044969",
        "text": "SH BATO SAGAY NEGROS OC DOSS."
    },
    "919": {
        "address": "BACOLOD NORTH ROAD CORNER GOMEZ ST ESCALANTE CITY, 6124 Philippines",
        "city": "ESCALANTE CITY",
        "country": "Philippines",
        "lat": 10.8408,
        "lng": 123.4978,
        "telephone": "9177012219",
        "text": "SH GOMEZ ESCALANTE COSS."
    },
    "920": {
        "address": "VILLENA STREET CADIZ CITY, 6121 Philippines",
        "city": "CADIZ CITY",
        "country": "Philippines",
        "lat": 10.954435,
        "lng": 123.306318,
        "telephone": "9173009223",
        "text": "SH CADIZ CITY NEGROS OCC DOSS"
    },
    "921": {
        "address": "CUAYCONG MAGALONA STS BARANGAY II EB MAGALONA, 6118 Philippines",
        "city": "EB MAGALONA",
        "country": "Philippines",
        "lat": 10.8772,
        "lng": 122.9796,
        "telephone": "9204234280",
        "text": "SH E B MAGALONA NEGROS OC DOSS."
    },
    "922": {
        "address": "RIZAL CORNER MANAUL STREET SILAY CITY, 6116 Philippines",
        "city": "SILAY CITY",
        "country": "Philippines",
        "lat": 10.7933,
        "lng": 122.9729,
        "telephone": "9209890166",
        "text": "SH RIZAL MANAUL SILAY COSS."
    },
    "923": {
        "address": "BRGY BULA GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.107069,
        "lng": 125.187868,
        "telephone": "9177161100",
        "text": "SH BULA GSC DOSS."
    },
    "924": {
        "address": "P ACHARON BLVD CORNER MANSENITAS ST GENERAL SANTOS CITY, 9500 Philippines",
        "city": "GENERAL SANTOS CITY",
        "country": "Philippines",
        "lat": 6.107549,
        "lng": 125.17656,
        "telephone": "9176358289",
        "text": "SH ACHARON MARKETSIDE GSC DOSS."
    },
    "925": {
        "address": "BRGY MALUNANG ZARRAGA, 5004 Philippines",
        "city": "ZARRAGA",
        "country": "Philippines",
        "lat": 10.8233,
        "lng": 122.6098,
        "telephone": "9189214086",
        "text": "SH ZARRAGA ILOILO  DOSS"
    },
    "926": {
        "address": "BRGY ILAYA POBLACION BAROTAC NUEVO ILOILO, 5007 Philippines",
        "city": "ILOILO",
        "country": "Philippines",
        "lat": 10.8959,
        "lng": 122.7001,
        "telephone": "335017838",
        "text": "SH BAROTAC NUEVO ILOILO DOSS."
    },
    "927": {
        "address": "NATIONAL HIGHWAY BARANGAY 3 GINGOOG CITY, 9014 Philippines",
        "city": "GINGOOG CITY",
        "country": "Philippines",
        "lat": 8.824477,
        "lng": 125.106726,
        "telephone": "9177063111",
        "text": "SH GINGOOG CITY MISMIS OR DOSS"
    },
    "928": {
        "address": "POBLACION SALAY, 9007 Philippines",
        "city": "SALAY",
        "country": "Philippines",
        "lat": 8.860251,
        "lng": 124.789308,
        "telephone": "9216529141",
        "text": "SH SALAY MISAMIS ORIENTAL DOSS."
    },
    "929": {
        "address": "NATIONAL HIGHWAY Villanueva, 9002 Philippines",
        "city": "Villanueva",
        "country": "Philippines",
        "lat": 8.5944,
        "lng": 124.7722,
        "telephone": "9177188009",
        "text": "SH VLLANUEVA MIS ORIENTAL DOSS"
    },
    "930": {
        "address": "BACUYANGAN HINOBA AN, 6114 Philippines",
        "city": "HINOBA AN",
        "country": "Philippines",
        "lat": 9.5465,
        "lng": 122.5195,
        "telephone": "9999977287",
        "text": "SH HINOBAAN NEGROS OCC DOSS."
    },
    "931": {
        "address": "177 CALINOG ILOILO ILOILO, 5040 Philippines",
        "city": "ILOILO",
        "country": "Philippines",
        "lat": 11.1223,
        "lng": 122.5402,
        "telephone": "9207151926",
        "text": "SH CALINOG PASSI ILOILO DOSS"
    },
    "932": {
        "address": "POBLACION ILAWOD LADRIDO ST LAMBUNAO, 5042 Philippines",
        "city": "LAMBUNAO",
        "country": "Philippines",
        "lat": 11.0566,
        "lng": 122.477,
        "telephone": "9203347558",
        "text": "SH LAMBUNAO ILOILO DOSS."
    },
    "933": {
        "address": "NATIONAL HIGHWAY NORTHBOUND PASSI CITY, 5037 Philippines",
        "city": "PASSI CITY",
        "country": "Philippines",
        "lat": 11.1059,
        "lng": 122.6469,
        "telephone": "333378048",
        "text": "SH NAT HWAY NB PASSI ILO DOSS."
    },
    "934": {
        "address": "NATIONAL HIGHWAY SOUTHBOUND PASSI CITY, 5037 Philippines",
        "city": "PASSI CITY",
        "country": "Philippines",
        "lat": 11.0973,
        "lng": 122.6351,
        "telephone": "333297576",
        "text": "SH NAT HWAY STH PASSI ILO DOSS."
    },
    "935": {
        "address": "894 AQUINO NOBLEZA STREET WEST JANIUAY, 5034 Philippines",
        "city": "WEST JANIUAY",
        "country": "Philippines",
        "lat": 10.9502,
        "lng": 122.5009,
        "telephone": "9167826177",
        "text": "SH AQUINO JANIUAY ILOILO DOSS."
    },
    "936": {
        "address": "BRGY CARIT AN PATNONGON, 5702 Philippines",
        "city": "PATNONGON",
        "country": "Philippines",
        "lat": 10.917,
        "lng": 121.9832,
        "telephone": "9178183818",
        "text": "SH PATNONGON ANTIQUE DOSS."
    },
    "937": {
        "address": "ILAUOD BUGASONG ANTIQUE, 5704 Philippines",
        "city": "ANTIQUE",
        "country": "Philippines",
        "lat": 11.0429,
        "lng": 122.0611,
        "telephone": "333384033",
        "text": "SH ILAUOD BUGASONG DOSS."
    },
    "938": {
        "address": "CUBAY SOUTH Bugasong, 5704 Philippines",
        "city": "Bugasong",
        "country": "Philippines",
        "lat": 11.0489,
        "lng": 122.069296,
        "telephone": "9178183818",
        "text": "SH BUGASONG ANTIQUE DOSS."
    },
    "939": {
        "address": "POBLACION Sibalom, 5713 Philippines",
        "city": "Sibalom",
        "country": "Philippines",
        "lat": 10.7861,
        "lng": 122.0154,
        "telephone": "0333378507",
        "text": "SH SIBALOM ANTIQUE DOSS."
    },
    "940": {
        "address": "TOBIAS FORNIER San Jose, 5700 Philippines",
        "city": "San Jose",
        "country": "Philippines",
        "lat": 10.7497,
        "lng": 121.941478,
        "telephone": "9178183818",
        "text": "SH SJD BUENAVISTA ANTIQUE DOSS."
    },
    "941": {
        "address": "ZONE 6 BARRA OPOL, 9016 Philippines",
        "city": "OPOL",
        "country": "Philippines",
        "lat": 8.5043,
        "lng": 124.5938,
        "telephone": "9278830078",
        "text": "SH BARRA OPOL MIS OR DOSS"
    },
    "942": {
        "address": "BRGY IGPIT OPOL, 9016 Philippines",
        "city": "OPOL",
        "country": "Philippines",
        "lat": 8.510212,
        "lng": 124.587359,
        "telephone": "9177112949",
        "text": "SH OPOL MISAMIS ORIENTAL DOSS."
    },
    "943": {
        "address": "NATIONAL HIGHWAY KORONADAL CITY, 9506 Philippines",
        "city": "KORONADAL CITY",
        "country": "Philippines",
        "lat": 6.5215,
        "lng": 124.8652,
        "telephone": "9177140655",
        "text": "SH N HIWAY KORONADAL CITY DOSS"
    },
    "944": {
        "address": "NATIONAL HIGHWAY CADAYONAN MARAWI CITY, 9700 Philippines",
        "city": "MARAWI CITY",
        "country": "Philippines",
        "lat": 7.993479,
        "lng": 124.2664,
        "telephone": "9052726666",
        "text": "SH CADAYONAN MARAWI CITY DOSS."
    },
    "945": {
        "address": "MANTAPOLI Marantao, 9711 Philippines",
        "city": "Marantao",
        "country": "Philippines",
        "lat": 7.987247,
        "lng": 124.266465,
        "telephone": "632217148",
        "text": "SH MANTAPOLI MARANTAO LDS DOSS."
    },
    "946": {
        "address": "MALABANG NATIONAL HWAY BRGY MARAWI MARAWI CITY, 9700 Philippines",
        "city": "MARAWI CITY",
        "country": "Philippines",
        "lat": 8.003934,
        "lng": 124.278685,
        "telephone": "9263570281",
        "text": "SH BGY MARAWI MARAWI CITY DOSS."
    },
    "947": {
        "address": "BARANGAY BANGON MARAWI CITY, 9700 Philippines",
        "city": "MARAWI CITY",
        "country": "Philippines",
        "lat": 8.00367,
        "lng": 124.280831,
        "telephone": "9352063930",
        "text": "SH BANGON MARAWI CITY DOSS."
    },
    "948": {
        "address": "GADONGAN MARAWI CITY, 9700 Philippines",
        "city": "MARAWI CITY",
        "country": "Philippines",
        "lat": 8.006202,
        "lng": 124.289172,
        "telephone": "9478966895",
        "text": "SH GADONGAN MARAWI LDS DOSS"
    },
    "949": {
        "address": "OSMENA ST PANGARUNGAN VILLAGE MARAWI CITY, 9700 Philippines",
        "city": "MARAWI CITY",
        "country": "Philippines",
        "lat": 8.002947,
        "lng": 124.289344,
        "telephone": "9177168544",
        "text": "SH PANGARUNGAN MARAWI DOSS."
    },
    "950": {
        "address": "GOV CAMINS RD CANELAR, 7000 Philippines",
        "city": "CANELAR",
        "country": "Philippines",
        "lat": 6.9197,
        "lng": 122.0691,
        "telephone": "629260008",
        "text": "SH CAMINS CANELAR ZMBOANG DOSS"
    },
    "951": {
        "address": "MAYOR JALDON STREET CANELAR ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.9166,
        "lng": 122.0726,
        "telephone": "9179029017",
        "text": "SH CANELAR ST ZAMB CITY DOSS."
    },
    "952": {
        "address": "VETERANS AVENUE ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.914605,
        "lng": 122.07974,
        "telephone": "9177248728",
        "text": "SH VETERANS ZAMBOANGA COSS."
    },
    "953": {
        "address": "GOV ALVAREZ ST COR VETERANS AVE ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.913241,
        "lng": 122.079461,
        "telephone": "9173053161",
        "text": "SH ALVAREZ ZAMBOANGA CITY DOSS."
    },
    "954": {
        "address": "SAN JOSE GUSA ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.908954,
        "lng": 122.070417,
        "telephone": "9293963816",
        "text": "SH SAN JOSE GUSA ZAMBO COSS."
    },
    "955": {
        "address": "SANGALI HIGHWAY ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.90897,
        "lng": 122.070417,
        "telephone": "9228601818",
        "text": "SH SANGALI ZAMBOANGA CITY DOSS."
    },
    "956": {
        "address": "COR SAN JOSE AND ALVAREZ STS ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.908965,
        "lng": 122.070411,
        "telephone": "9293963816",
        "text": "SH SAN JOSE ALVAREZ COSS."
    },
    "957": {
        "address": "NUNEZ EXT CAMINO NUEVO ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.915912,
        "lng": 122.076098,
        "telephone": "9177248728",
        "text": "SH NUNEZ CAMINO NUEVO COSS."
    },
    "958": {
        "address": "MAGAY COR CARMEN ST BRGY ZONE 1 ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.904891,
        "lng": 122.07157,
        "telephone": "9177107670",
        "text": "SH MAGAY ZAMBOANGA DOSS."
    },
    "959": {
        "address": "LABU AN ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.919408,
        "lng": 122.054715,
        "telephone": "0629260029",
        "text": "SH LABUAN ZAMBOANGA CITY DOSS."
    },
    "960": {
        "address": "PUROK 10 B NATIONAL HIGHWAY MANIKI KAPALONG, 8113 Philippines",
        "city": "KAPALONG",
        "country": "Philippines",
        "lat": 7.5818,
        "lng": 125.7078,
        "telephone": "9077072744",
        "text": "SH KAPALONG DAVAO D NORTE DOSS."
    },
    "961": {
        "address": "NATIONAL HIWAY MANIKI KAPALONG, 8113 Philippines",
        "city": "KAPALONG",
        "country": "Philippines",
        "lat": 7.590947,
        "lng": 125.70713,
        "telephone": "843710268",
        "text": "SH KAPALONG DAVAO DN DOSS"
    },
    "962": {
        "address": "FD ROAD 1 TIBAL OG SANTO TOMAS, 8112 Philippines",
        "city": "SANTO TOMAS",
        "country": "Philippines",
        "lat": 7.524421,
        "lng": 125.623384,
        "telephone": "09177035022",
        "text": "SH STO TOMAS DAVAO DNORTE DOSS"
    },
    "963": {
        "address": "LANAO KIDAPAWAN CITY, 9400 Philippines",
        "city": "KIDAPAWAN CITY",
        "country": "Philippines",
        "lat": 7.022059,
        "lng": 125.088851,
        "telephone": "9285025387",
        "text": "SH KIDAPAWAN CITY DOSS."
    },
    "964": {
        "address": "NATIONAL HIGHWAY KIDAPAWAN CITY, 9400 Philippines",
        "city": "KIDAPAWAN CITY",
        "country": "Philippines",
        "lat": 7.0168,
        "lng": 125.0925,
        "telephone": "9236598218",
        "text": "SH KIDAPAWAN NEW COTABATO COSS."
    },
    "965": {
        "address": "NATIONAL HIGHWAY KIDAPAWAN CITY, 9400 Philippines",
        "city": "KIDAPAWAN CITY",
        "country": "Philippines",
        "lat": 7.0243,
        "lng": 125.083,
        "telephone": "9178118439",
        "text": "SH KIDAPAWAN NORTH COTABATO DOSS"
    },
    "966": {
        "address": "RIZAL AVE COR NATIONAL HIGHWAY DIGOS CITY, 8002 Philippines",
        "city": "DIGOS CITY",
        "country": "Philippines",
        "lat": 6.7635,
        "lng": 125.3569,
        "telephone": "9168547264",
        "text": "SH DIGOS ORIGINAL DAVAO COSS."
    },
    "967": {
        "address": "RIZAL AVE DIGOS CITY, 8002 Philippines",
        "city": "DIGOS CITY",
        "country": "Philippines",
        "lat": 6.748042,
        "lng": 125.355037,
        "telephone": "9166835933",
        "text": "SH DIGOS TRICYCLE DAVAO COSS"
    },
    "968": {
        "address": "TABUC SUR PANITAN, 5815 Philippines",
        "city": "PANITAN",
        "country": "Philippines",
        "lat": 11.4633,
        "lng": 122.774,
        "telephone": "9194670499",
        "text": "SH PANIT AN CAPIZ DOSS."
    },
    "969": {
        "address": "BAILAN Pontevedra, 5802 Philippines",
        "city": "Pontevedra",
        "country": "Philippines",
        "lat": 11.4561,
        "lng": 122.8278,
        "telephone": "9489828937",
        "text": "SH BAILAN PONTEVDRA CAPIZ DOSS"
    },
    "970": {
        "address": "ISAGANI STREET ILAWOD Pontevedra, 5802 Philippines",
        "city": "Pontevedra",
        "country": "Philippines",
        "lat": 11.4811,
        "lng": 122.8355,
        "telephone": "9209177204",
        "text": "SH PONTEVEDRA CAPIZ DOSS."
    },
    "971": {
        "address": "KM1 ROXAS CITY, 5800 Philippines",
        "city": "ROXAS CITY",
        "country": "Philippines",
        "lat": 11.5679,
        "lng": 122.7545,
        "telephone": "9178183818",
        "text": "SH KM1 ROXAS CITY CAPIZ DOSS."
    },
    "972": {
        "address": "ROXAS AVENUE ROXAS CITY, 5800 Philippines",
        "city": "ROXAS CITY",
        "country": "Philippines",
        "lat": 11.5794,
        "lng": 122.7541,
        "telephone": "9237095127",
        "text": "SH ROXAS AVE BAYOR COSS."
    },
    "973": {
        "address": "CALLE SAN MIGUEL AYALA ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.919419,
        "lng": 122.054704,
        "telephone": "9177235118",
        "text": "SH AYALA ZAMBOANGA CITY DOSS."
    },
    "974": {
        "address": "DELA VINA STREET CANTECSON GAIRAN BOGO, 6010 Philippines",
        "city": "BOGO",
        "country": "Philippines",
        "lat": 11.0532,
        "lng": 124.0118,
        "telephone": "9262367275",
        "text": "SH C GAIRAN BOGO CEBU DOSS"
    },
    "975": {
        "address": "TAYTAY DANAO CITY, 6004 Philippines",
        "city": "DANAO CITY",
        "country": "Philippines",
        "lat": 10.5325,
        "lng": 124.0254,
        "telephone": "9053451355",
        "text": "SH TAYTAY DANAO CITY DOSS"
    },
    "976": {
        "address": "HIKA POBLACION Compostela, 6003 Philippines",
        "city": "Compostela",
        "country": "Philippines",
        "lat": 10.449298,
        "lng": 124.011161,
        "telephone": "9234435111",
        "text": "SH COMPOSTELA CEBU DOSS."
    },
    "977": {
        "address": "KATIPUNAN TISA LABANGON CEBU CITY, 6045 Philippines",
        "city": "CEBU CITY",
        "country": "Philippines",
        "lat": 10.3005,
        "lng": 123.8744,
        "telephone": "322390622",
        "text": "SH TISA LABANGON CEBU DOSS"
    },
    "978": {
        "address": "15 DE SEPTIEMBRE STREET BARANGAY 1 BALINGASAG, 9005 Philippines",
        "city": "BALINGASAG",
        "country": "Philippines",
        "lat": 8.745028,
        "lng": 124.777849,
        "telephone": "9198492534",
        "text": "SH BALINGASAG MISAMIS OR DOSS"
    },
    "979": {
        "address": "J M BASA CORNER ORTIZ STREET ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.692764,
        "lng": 122.57243,
        "telephone": "9397610418",
        "text": "SH J M BASA ORTIZ COSS."
    },
    "980": {
        "address": "COR ZAMORA AND GEN HUGHES STS ILOILO CITY, 5000 Philippines",
        "city": "ILOILO CITY",
        "country": "Philippines",
        "lat": 10.6918,
        "lng": 122.5742,
        "telephone": "9157264757",
        "text": "SH ZAMORA HUGHES ILOILO DOSS."
    },
    "981": {
        "address": "RIVERSIDE CALINAN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.173318,
        "lng": 125.470266,
        "telephone": "09228805025",
        "text": "SH SN ROQUE CALINAN DAVAO DOSS."
    },
    "982": {
        "address": "LIBERTAD EXT CORDONA JULIANA SUBD BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.654274,
        "lng": 122.957804,
        "telephone": "9235895739",
        "text": "SH LIBERTAD DONA JULIANA COSS."
    },
    "983": {
        "address": "LOPEZ JAENA STREET POBLACION MARGOSATUBIG, 7035 Philippines",
        "city": "MARGOSATUBIG",
        "country": "Philippines",
        "lat": 7.5664,
        "lng": 123.168,
        "telephone": "9187159688",
        "text": "SH MARGOSATUBIG ZAMB DS DOSS."
    },
    "984": {
        "address": "NATIONAL HIGHWAY BAGANGA, 8204 Philippines",
        "city": "BAGANGA",
        "country": "Philippines",
        "lat": 7.567645,
        "lng": 126.566105,
        "telephone": "9209141880",
        "text": "SH BAGANGA DAVAO ORIENTAL DOSS"
    },
    "985": {
        "address": "TAMPAKAN Tampakan, 9507 Philippines",
        "city": "Tampakan",
        "country": "Philippines",
        "lat": 6.442336,
        "lng": 124.926615,
        "telephone": "9209016633",
        "text": "SH TAMPAKAN DOSS."
    },
    "986": {
        "address": "BACOLOD MURCIA ROAD BRGY ALIJIS BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.6387,
        "lng": 122.9521,
        "telephone": "9178800300",
        "text": "SH ALIJIS BACOLOD CITY DOSS."
    },
    "987": {
        "address": "ARANETA ST VILLA MILAGROS TANGUB BACOLOD CITY, 6100 Philippines",
        "city": "BACOLOD CITY",
        "country": "Philippines",
        "lat": 10.627,
        "lng": 122.9277,
        "telephone": "09292849618",
        "text": "SH ARANETA TANGUB BACOLOD COSS"
    },
    "988": {
        "address": "PUROK 16 NATIONAL HIGHWAY CALINAN DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.192856,
        "lng": 125.453521,
        "telephone": "9284821740",
        "text": "SH CALINAN DAVAO CITY DOSS."
    },
    "989": {
        "address": "ALMENDRAS DISTRICT Padada, 8007 Philippines",
        "city": "Padada",
        "country": "Philippines",
        "lat": 6.63471,
        "lng": 125.346467,
        "telephone": "9176219594",
        "text": "SH ALMENDRAS PADADA DEL SUR DOSS"
    },
    "990": {
        "address": "DIVERSION ROAD BRGY COGON DIGOS CITY, 8002 Philippines",
        "city": "DIGOS CITY",
        "country": "Philippines",
        "lat": 6.7602,
        "lng": 125.3749,
        "telephone": "9487969147",
        "text": "SH DIGOS DAVAO DEL SUR DOSS"
    },
    "991": {
        "address": "MAA ROAD DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.080068,
        "lng": 125.582748,
        "telephone": "9209248159",
        "text": "SH MAA DAVAO CITY COSS."
    },
    "992": {
        "address": "BARANGAY 4 TALAKAG, 8708 Philippines",
        "city": "TALAKAG",
        "country": "Philippines",
        "lat": 8.231374,
        "lng": 124.601741,
        "telephone": "9215689546",
        "text": "SH TALAKAG BUKIDNON DOSS."
    },
    "993": {
        "address": "SAN CARLOS TUKURAN, 7019 Philippines",
        "city": "TUKURAN",
        "country": "Philippines",
        "lat": 7.0697,
        "lng": 122.2117,
        "telephone": "9192210327",
        "text": "SH TUKURAN ZAMBOANGA DS DOSS."
    },
    "994": {
        "address": "MERCEDES HIGH WAY ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.962712,
        "lng": 122.133556,
        "telephone": "9056405624",
        "text": "SH MERCEDES ZMBOANGA CITY DOSS."
    },
    "995": {
        "address": "MARIA CLARA LORENZO ZAMBOANGA CITY, 7000 Philippines",
        "city": "ZAMBOANGA CITY",
        "country": "Philippines",
        "lat": 6.962691,
        "lng": 122.133551,
        "telephone": "9177248616",
        "text": "SH MCLL DIVSORIA ZAMB CTY DOSS."
    },
    "996": {
        "address": "MAHAYAHAY S DIVERSION RD LANGUB MAA DAVAO CITY, 8000 Philippines",
        "city": "DAVAO CITY",
        "country": "Philippines",
        "lat": 7.098689,
        "lng": 125.575222,
        "telephone": "9177045288",
        "text": "SH DIVERSION TIGATTO MA A DOSS"
    },
    "997": {
        "address": "SHUDOH JYUKU BLDG BUAYA LAPU LAPU CITY, 6015 Philippines",
        "city": "LAPU LAPU CITY",
        "country": "Philippines",
        "lat": 10.3148,
        "lng": 124.0024,
        "telephone": "9228432169",
        "text": "SH BUAYA LAPULAPU DOSS."
    },
    "998": {
        "address": "POBLACION MALITA, 8012 Philippines",
        "city": "MALITA",
        "country": "Philippines",
        "lat": 6.412415,
        "lng": 125.612459,
        "telephone": "9209137992",
        "text": "SH POB MALITA DVO DEL SUR DOSS."
    },
    "999": {
        "address": "POBLACION LAGUINDINGAN, 9019 Philippines",
        "city": "LAGUINDINGAN",
        "country": "Philippines",
        "lat": 8.573038,
        "lng": 124.441323,
        "telephone": "9275677086",
        "text": "SH LAGUINDINGN MISAMIS OR DOSS"
    },
    "1000": {
        "address": "NATIONAL HIGHWAY LAGUINDINGAN, 9019 Philippines",
        "city": "LAGUINDINGAN",
        "country": "Philippines",
        "lat": 8.5737,
        "lng": 124.4385,
        "telephone": "888568571",
        "text": "SH NATL HWAY LAGUINDINGAN COSS."
    }
}

app.controller('BusinessEstablishmentsCntrlr', ['$scope', '$window', '$http', '$modal', '$state', 'businessId',
    function($scope, $window, $http, $modal, $state, businessId) {

        $scope.establishments = {};
        $scope.establishmentsCursor = null;

        $scope.createEstablishment = function() {
            var modalInstance = $modal.open({
                templateUrl: 'EstablishmentModal.html',
                controller: 'CreateEstablishmentModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    categories: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/?limit=100'
                            })
                            .then(function(result) {
                                result.data.response.categories.forEach(function(category) {
                                    category.id = new RegExp('^.*/categories/([a-zA-Z0-9]{11})/?$').exec(category.url)[1];
                                });

                                return result.data.response.categories;
                            });
                    },
                    businessId: function() {
                        return businessId;
                    },
                    businessImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(establishment) {
                $scope.establishments[establishment.url] = establishment;
            }, function() {

            });
        };

        var getEstablishments = function(url) {
            $http({
                    method: 'GET',
                    url: url
                })
                .success(function(data, status, headers, config) {
                    data.response.establishments.forEach(function(establishment) {
                        $scope.establishments[establishment.url] = establishment;
                    });

                    $scope.establishmentsCursor = data.meta.next_cursor;
                })
                .error(function(data, status, headers, config) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.listEstablishments = function() {
            $scope.establishments = {};
            $scope.establishmentsCursor = null;

            getEstablishments('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/');
        };

        $scope.listMoreEstablishments = function() {
            if ($scope.establishmentsCursor !== null) {
                getEstablishments('http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + '?' + 'cursor=' + $scope.establishmentsCursor);
            }
        };

        $scope.onEstablishmentClick = function(obj) {
            var establishmentId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/establishments/([a-zA-Z0-9]{11})/?$')
                .exec(obj.url)[1];

            var modalInstance = $modal.open({
                templateUrl: 'EstablishmentModal.html',
                controller: 'EditEstablishmentModalInstanceCtrlr',
                backdrop: 'static',
                size: '',
                resolve: {
                    categories: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/categories/?limit=100'
                            })
                            .then(function(result) {
                                return result.data.response.categories;
                            });
                    },
                    businessId: function() {
                        return businessId;
                    },
                    establishmentId: function() {
                        return establishmentId;
                    },
                    establishment: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId
                            })
                            .then(function(result) {
                                return result.data.response.establishment;
                            });
                    },
                    businessImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    },
                    establishmentImages: function($http) {
                        return $http({
                                method: 'GET',
                                url: 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId + '/images/'
                            })
                            .then(function(result) {
                                return result.data.response.images;
                            });
                    }
                }
            });

            modalInstance.result.then(function(establishment) {
                $scope.establishments[establishment.url] = establishment;
            }, function() {

            });
        };

    }
]);

app.controller('CreateEstablishmentModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'categories', 'businessId', 'businessImages',
    function($scope, $window, $http, $modalInstance, categories, businessId, businessImages) {
        $scope.mode = 'CREATE';

        $scope.categories = categories;
        $scope.images = businessImages;

        $scope.establishment = {};

        $scope.load = function() {
            var something = shell[$scope.index];

            $scope.establishment = {
                'categories': [],
                'contact': {
                    'phone': something.telephone,
                    'formattedPhone': ''
                },
                'location': {
                    'address': something.address,
                    'cc': 'PHL',
                    'cityOrMunicipality': something.city,
                    'position': {
                        'lat': something.lat,
                        'lon': something.lng
                    }
                },
                'name': something.text,
                'primaryImage': ''
            }
        }

        $scope.onImageClick = function(image) {
            if ($scope.establishment.primaryImage === image.url) {
                $scope.establishment.primaryImage = '';
            } else {
                $scope.establishment.primaryImage = image.url;
            }
        };

        $scope.create = function() {
            var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/';
            var data = {
                'establishment': {
                    'categories': $scope.establishment.categories,
                    'contact': $scope.establishment.contact,
                    'location': $scope.establishment.location,
                    'name': $scope.establishment.name,
                    'primaryImage': $scope.establishment.primaryImage
                }
            };

            $http({
                    method: 'POST',
                    url: url,
                    data: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .success(function(data, status, headers, config) {
                    var establishmentId = new RegExp('^.*/businesses/[a-zA-Z0-9]{11}/establishments/([a-zA-Z0-9]{11})/?$').exec(headers('Location'))[1];
                    var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;

                    $http({
                            method: 'GET',
                            url: url
                        })
                        .success(function(data, status, headers, config) {
                            $modalInstance.close(data.response.establishment);
                        })
                        .error(function(data, status, headers, config) {
                            $window.alert(status + '\n' + JSON.stringify(data));
                        });
                })
                .error(function(data, status, headers, confi) {
                    $window.alert(status + '\n' + JSON.stringify(data));
                });
        };

        $scope.cancel = function() {
            $modalInstance.dismiss('cancel');
        };

    }
]);

app.controller('EditEstablishmentModalInstanceCtrlr', ['$scope', '$window', '$http', '$modalInstance', 'categories', 'businessId', 'establishmentId', 'establishment', 'businessImages', 'establishmentImages', function($scope, $window, $http, $modalInstance, categories, businessId, establishmentId, establishment, businessImages, establishmentImages) {
    $scope.mode = 'EDIT';

    $scope.categories = categories;
    $scope.establishment = establishment;
    $scope.images = businessImages.concat(establishmentImages);
    $scope.uploader = {};

    $scope.onImageClick = function(image) {
        if ($scope.establishment.primaryImage === image.url) {
            $scope.establishment.primaryImage = '';
        } else {
            $scope.establishment.primaryImage = image.url;
        }
    };

    $scope.upload = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId + '/images/';

        var formData = new FormData();
        formData.append('title', $scope.uploader.flow.files[0].name);
        formData.append('image', $scope.uploader.flow.files[0].file);

        $http({
                method: 'POST',
                url: url,
                data: formData,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            })
            .success(function(data, status, headers, config) {
                var newImage = {
                    'url': headers('Location'),
                    'title': $scope.uploader.flow.files[0].name
                };

                $scope.images.push(newImage);
                $scope.uploader.flow.files[0].cancel();
            })
            .error(function(data, status, headers, config) {
                $window.alert(status + '\n' + JSON.stringify(data));
            });
    };

    $scope.save = function() {
        var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;
        var data = {
            'establishment': {
                'categories': $scope.establishment.categories,
                'contact': $scope.establishment.contact,
                'location': {
                    'address': $scope.establishment.location.address,
                    'cc': $scope.establishment.location.cc,
                    'cityOrMunicipality': $scope.establishment.location.cityOrMunicipality,
                    'position': {
                        'lat': $scope.establishment.location.position.lat,
                        'lon': $scope.establishment.location.position.lon
                    }
                },
                'name': $scope.establishment.name,
                'primaryImage': $scope.establishment.primaryImage
            }
        };

        $http({
                method: 'PUT',
                url: url,
                data: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function(data, status, headers, config) {
                var url = 'http://pitstop.dilimanlabs.com/admin/api/businesses/' + businessId + '/establishments/' + establishmentId;

                $http({
                        method: 'GET',
                        url: url
                    })
                    .success(function(data, status, headers, config) {
                        $modalInstance.close(data.response.establishment);
                    })
                    .error(function(data, status, headers, config) {
                        $window.alert(status + '\n' + JSON.stringify(data));
                    });
            })
            .error(function(data, status, headers, config) {
                $window.alert(status + '\n' + JSON.stringify(data));
            });
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

}]);
