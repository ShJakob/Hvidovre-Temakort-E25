var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_kommuneplan_1 = new ol.format.GeoJSON();
var features_kommuneplan_1 = format_kommuneplan_1.readFeatures(json_kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_1.addFeatures(features_kommuneplan_1);
var lyr_kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_1, 
                style: style_kommuneplan_1,
                popuplayertitle: 'kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/kommuneplan_1.png" /> kommuneplan'
            });
var format_lokalplaner_2 = new ol.format.GeoJSON();
var features_lokalplaner_2 = format_lokalplaner_2.readFeatures(json_lokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_2.addFeatures(features_lokalplaner_2);
var lyr_lokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_2, 
                style: style_lokalplaner_2,
                popuplayertitle: 'lokalplaner',
                interactive: true,
    title: 'lokalplaner<br />\
    <img src="styles/legend/lokalplaner_2_0.png" /> 001<br />\
    <img src="styles/legend/lokalplaner_2_1.png" /> 101-1<br />\
    <img src="styles/legend/lokalplaner_2_2.png" /> 102<br />\
    <img src="styles/legend/lokalplaner_2_3.png" /> 103<br />\
    <img src="styles/legend/lokalplaner_2_4.png" /> 104<br />\
    <img src="styles/legend/lokalplaner_2_5.png" /> 105<br />\
    <img src="styles/legend/lokalplaner_2_6.png" /> 106<br />\
    <img src="styles/legend/lokalplaner_2_7.png" /> 108<br />\
    <img src="styles/legend/lokalplaner_2_8.png" /> 109-1<br />\
    <img src="styles/legend/lokalplaner_2_9.png" /> 112<br />\
    <img src="styles/legend/lokalplaner_2_10.png" /> 115<br />\
    <img src="styles/legend/lokalplaner_2_11.png" /> 116<br />\
    <img src="styles/legend/lokalplaner_2_12.png" /> 118<br />\
    <img src="styles/legend/lokalplaner_2_13.png" /> 119<br />\
    <img src="styles/legend/lokalplaner_2_14.png" /> 120<br />\
    <img src="styles/legend/lokalplaner_2_15.png" /> 121<br />\
    <img src="styles/legend/lokalplaner_2_16.png" /> 122<br />\
    <img src="styles/legend/lokalplaner_2_17.png" /> 124<br />\
    <img src="styles/legend/lokalplaner_2_18.png" /> 126<br />\
    <img src="styles/legend/lokalplaner_2_19.png" /> 127<br />\
    <img src="styles/legend/lokalplaner_2_20.png" /> 128<br />\
    <img src="styles/legend/lokalplaner_2_21.png" /> 131<br />\
    <img src="styles/legend/lokalplaner_2_22.png" /> 132<br />\
    <img src="styles/legend/lokalplaner_2_23.png" /> 133<br />\
    <img src="styles/legend/lokalplaner_2_24.png" /> 134<br />\
    <img src="styles/legend/lokalplaner_2_25.png" /> 135<br />\
    <img src="styles/legend/lokalplaner_2_26.png" /> 137<br />\
    <img src="styles/legend/lokalplaner_2_27.png" /> 139<br />\
    <img src="styles/legend/lokalplaner_2_28.png" /> 140<br />\
    <img src="styles/legend/lokalplaner_2_29.png" /> 141<br />\
    <img src="styles/legend/lokalplaner_2_30.png" /> 142<br />\
    <img src="styles/legend/lokalplaner_2_31.png" /> 143<br />\
    <img src="styles/legend/lokalplaner_2_32.png" /> 144<br />\
    <img src="styles/legend/lokalplaner_2_33.png" /> 147<br />\
    <img src="styles/legend/lokalplaner_2_34.png" /> 148<br />\
    <img src="styles/legend/lokalplaner_2_35.png" /> 149<br />\
    <img src="styles/legend/lokalplaner_2_36.png" /> 150<br />\
    <img src="styles/legend/lokalplaner_2_37.png" /> 151<br />\
    <img src="styles/legend/lokalplaner_2_38.png" /> 152<br />\
    <img src="styles/legend/lokalplaner_2_39.png" /> 154<br />\
    <img src="styles/legend/lokalplaner_2_40.png" /> 202<br />\
    <img src="styles/legend/lokalplaner_2_41.png" /> 203<br />\
    <img src="styles/legend/lokalplaner_2_42.png" /> 206<br />\
    <img src="styles/legend/lokalplaner_2_43.png" /> 207<br />\
    <img src="styles/legend/lokalplaner_2_44.png" /> 208<br />\
    <img src="styles/legend/lokalplaner_2_45.png" /> 209<br />\
    <img src="styles/legend/lokalplaner_2_46.png" /> 210<br />\
    <img src="styles/legend/lokalplaner_2_47.png" /> 211<br />\
    <img src="styles/legend/lokalplaner_2_48.png" /> 216<br />\
    <img src="styles/legend/lokalplaner_2_49.png" /> 220<br />\
    <img src="styles/legend/lokalplaner_2_50.png" /> 221<br />\
    <img src="styles/legend/lokalplaner_2_51.png" /> 225<br />\
    <img src="styles/legend/lokalplaner_2_52.png" /> 226<br />\
    <img src="styles/legend/lokalplaner_2_53.png" /> 228<br />\
    <img src="styles/legend/lokalplaner_2_54.png" /> 229<br />\
    <img src="styles/legend/lokalplaner_2_55.png" /> 230<br />\
    <img src="styles/legend/lokalplaner_2_56.png" /> 231<br />\
    <img src="styles/legend/lokalplaner_2_57.png" /> 232<br />\
    <img src="styles/legend/lokalplaner_2_58.png" /> 233<br />\
    <img src="styles/legend/lokalplaner_2_59.png" /> 234<br />\
    <img src="styles/legend/lokalplaner_2_60.png" /> 236<br />\
    <img src="styles/legend/lokalplaner_2_61.png" /> 237<br />\
    <img src="styles/legend/lokalplaner_2_62.png" /> 238<br />\
    <img src="styles/legend/lokalplaner_2_63.png" /> 239<br />\
    <img src="styles/legend/lokalplaner_2_64.png" /> 240<br />\
    <img src="styles/legend/lokalplaner_2_65.png" /> 241<br />\
    <img src="styles/legend/lokalplaner_2_66.png" /> 301-1<br />\
    <img src="styles/legend/lokalplaner_2_67.png" /> 303<br />\
    <img src="styles/legend/lokalplaner_2_68.png" /> 304<br />\
    <img src="styles/legend/lokalplaner_2_69.png" /> 305<br />\
    <img src="styles/legend/lokalplaner_2_70.png" /> 306<br />\
    <img src="styles/legend/lokalplaner_2_71.png" /> 313<br />\
    <img src="styles/legend/lokalplaner_2_72.png" /> 314<br />\
    <img src="styles/legend/lokalplaner_2_73.png" /> 316<br />\
    <img src="styles/legend/lokalplaner_2_74.png" /> 322<br />\
    <img src="styles/legend/lokalplaner_2_75.png" /> 323<br />\
    <img src="styles/legend/lokalplaner_2_76.png" /> 324<br />\
    <img src="styles/legend/lokalplaner_2_77.png" /> 325<br />\
    <img src="styles/legend/lokalplaner_2_78.png" /> 326<br />\
    <img src="styles/legend/lokalplaner_2_79.png" /> 327<br />\
    <img src="styles/legend/lokalplaner_2_80.png" /> 328<br />\
    <img src="styles/legend/lokalplaner_2_81.png" /> 329<br />\
    <img src="styles/legend/lokalplaner_2_82.png" /> 330<br />\
    <img src="styles/legend/lokalplaner_2_83.png" /> 331<br />\
    <img src="styles/legend/lokalplaner_2_84.png" /> 332<br />\
    <img src="styles/legend/lokalplaner_2_85.png" /> 335<br />\
    <img src="styles/legend/lokalplaner_2_86.png" /> 338<br />\
    <img src="styles/legend/lokalplaner_2_87.png" /> 339<br />\
    <img src="styles/legend/lokalplaner_2_88.png" /> 340<br />\
    <img src="styles/legend/lokalplaner_2_89.png" /> 341<br />\
    <img src="styles/legend/lokalplaner_2_90.png" /> 342<br />\
    <img src="styles/legend/lokalplaner_2_91.png" /> 343<br />\
    <img src="styles/legend/lokalplaner_2_92.png" /> 345<br />\
    <img src="styles/legend/lokalplaner_2_93.png" /> 403-1<br />\
    <img src="styles/legend/lokalplaner_2_94.png" /> 404<br />\
    <img src="styles/legend/lokalplaner_2_95.png" /> 405<br />\
    <img src="styles/legend/lokalplaner_2_96.png" /> 407<br />\
    <img src="styles/legend/lokalplaner_2_97.png" /> 408<br />\
    <img src="styles/legend/lokalplaner_2_98.png" /> 409<br />\
    <img src="styles/legend/lokalplaner_2_99.png" /> 411<br />\
    <img src="styles/legend/lokalplaner_2_100.png" /> 412<br />\
    <img src="styles/legend/lokalplaner_2_101.png" /> 418<br />\
    <img src="styles/legend/lokalplaner_2_102.png" /> 423<br />\
    <img src="styles/legend/lokalplaner_2_103.png" /> 429<br />\
    <img src="styles/legend/lokalplaner_2_104.png" /> 432<br />\
    <img src="styles/legend/lokalplaner_2_105.png" /> 433<br />\
    <img src="styles/legend/lokalplaner_2_106.png" /> 440<br />\
    <img src="styles/legend/lokalplaner_2_107.png" /> 441<br />\
    <img src="styles/legend/lokalplaner_2_108.png" /> 447<br />\
    <img src="styles/legend/lokalplaner_2_109.png" /> 448<br />\
    <img src="styles/legend/lokalplaner_2_110.png" /> 452<br />\
    <img src="styles/legend/lokalplaner_2_111.png" /> 454<br />\
    <img src="styles/legend/lokalplaner_2_112.png" /> 455<br />\
    <img src="styles/legend/lokalplaner_2_113.png" /> 456<br />\
    <img src="styles/legend/lokalplaner_2_114.png" /> 457<br />\
    <img src="styles/legend/lokalplaner_2_115.png" /> 458<br />\
    <img src="styles/legend/lokalplaner_2_116.png" /> 459<br />\
    <img src="styles/legend/lokalplaner_2_117.png" /> 462<br />\
    <img src="styles/legend/lokalplaner_2_118.png" /> 463<br />\
    <img src="styles/legend/lokalplaner_2_119.png" /> 464<br />\
    <img src="styles/legend/lokalplaner_2_120.png" /> 466<br />\
    <img src="styles/legend/lokalplaner_2_121.png" /> 467<br />\
    <img src="styles/legend/lokalplaner_2_122.png" /> 468<br />\
    <img src="styles/legend/lokalplaner_2_123.png" /> 469<br />\
    <img src="styles/legend/lokalplaner_2_124.png" /> 470<br />\
    <img src="styles/legend/lokalplaner_2_125.png" /> 471<br />\
    <img src="styles/legend/lokalplaner_2_126.png" /> 472<br />\
    <img src="styles/legend/lokalplaner_2_127.png" /> 473<br />\
    <img src="styles/legend/lokalplaner_2_128.png" /> 475<br />\
    <img src="styles/legend/lokalplaner_2_129.png" /> 476<br />\
    <img src="styles/legend/lokalplaner_2_130.png" /> 504<br />\
    <img src="styles/legend/lokalplaner_2_131.png" /> 507<br />\
    <img src="styles/legend/lokalplaner_2_132.png" /> 508<br />\
    <img src="styles/legend/lokalplaner_2_133.png" /> 510<br />\
    <img src="styles/legend/lokalplaner_2_134.png" /> 511<br />\
    <img src="styles/legend/lokalplaner_2_135.png" /> 516<br />\
    <img src="styles/legend/lokalplaner_2_136.png" /> 518<br />\
    <img src="styles/legend/lokalplaner_2_137.png" /> 519<br />\
    <img src="styles/legend/lokalplaner_2_138.png" /> A1<br />\
    <img src="styles/legend/lokalplaner_2_139.png" /> A10<br />\
    <img src="styles/legend/lokalplaner_2_140.png" /> A11<br />\
    <img src="styles/legend/lokalplaner_2_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_2_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/lokalplaner_2_143.png" /> A13<br />\
    <img src="styles/legend/lokalplaner_2_144.png" /> A14<br />\
    <img src="styles/legend/lokalplaner_2_145.png" /> A15<br />\
    <img src="styles/legend/lokalplaner_2_146.png" /> A3<br />\
    <img src="styles/legend/lokalplaner_2_147.png" /> A5<br />\
    <img src="styles/legend/lokalplaner_2_148.png" /> A7<br />\
    <img src="styles/legend/lokalplaner_2_149.png" /> A8<br />\
    <img src="styles/legend/lokalplaner_2_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/lokalplaner_2_151.png" /> B17<br />\
    <img src="styles/legend/lokalplaner_2_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_2_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/lokalplaner_2_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/lokalplaner_2_155.png" /> H10<br />\
    <img src="styles/legend/lokalplaner_2_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_2_157.png" /> H11<br />\
    <img src="styles/legend/lokalplaner_2_158.png" /> H12<br />\
    <img src="styles/legend/lokalplaner_2_159.png" /> H13<br />\
    <img src="styles/legend/lokalplaner_2_160.png" /> H14<br />\
    <img src="styles/legend/lokalplaner_2_161.png" /> H15<br />\
    <img src="styles/legend/lokalplaner_2_162.png" /> H16<br />\
    <img src="styles/legend/lokalplaner_2_163.png" /> H17<br />\
    <img src="styles/legend/lokalplaner_2_164.png" /> H18<br />\
    <img src="styles/legend/lokalplaner_2_165.png" /> H20<br />\
    <img src="styles/legend/lokalplaner_2_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/lokalplaner_2_167.png" /> H3<br />\
    <img src="styles/legend/lokalplaner_2_168.png" /> H4<br />\
    <img src="styles/legend/lokalplaner_2_169.png" /> H5<br />\
    <img src="styles/legend/lokalplaner_2_170.png" /> H9<br />\
    <img src="styles/legend/lokalplaner_2_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/lokalplaner_2_172.png" /> <br />' });
var format_frededeomrder_3 = new ol.format.GeoJSON();
var features_frededeomrder_3 = format_frededeomrder_3.readFeatures(json_frededeomrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_3.addFeatures(features_frededeomrder_3);
var lyr_frededeomrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_3, 
                style: style_frededeomrder_3,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />' });
var format_StrandbeskyttelseHvidovreStrandbeskyttelse_4 = new ol.format.GeoJSON();
var features_StrandbeskyttelseHvidovreStrandbeskyttelse_4 = format_StrandbeskyttelseHvidovreStrandbeskyttelse_4.readFeatures(json_StrandbeskyttelseHvidovreStrandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StrandbeskyttelseHvidovreStrandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StrandbeskyttelseHvidovreStrandbeskyttelse_4.addFeatures(features_StrandbeskyttelseHvidovreStrandbeskyttelse_4);
var lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StrandbeskyttelseHvidovreStrandbeskyttelse_4, 
                style: style_StrandbeskyttelseHvidovreStrandbeskyttelse_4,
                popuplayertitle: 'Strandbeskyttelse — Hvidovre Strandbeskyttelse',
                interactive: true,
    title: 'Strandbeskyttelse — Hvidovre Strandbeskyttelse<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_0.png" /> 1<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_1.png" /> 2<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_2.png" /> 3<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_3.png" /> 4<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_4.png" /> 5<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_5.png" /> 6<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_6.png" /> 7<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_7.png" /> 8<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_8.png" /> 9<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_9.png" /> 10<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_10.png" /> 11<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_11.png" /> 12<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_12.png" /> 13<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_13.png" /> 14<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_14.png" /> 15<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_15.png" /> 16<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_16.png" /> 17<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_17.png" /> 18<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_18.png" /> 19<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_19.png" /> 20<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_20.png" /> 21<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_21.png" /> 22<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_22.png" /> 23<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_23.png" /> 24<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_24.png" /> 25<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_25.png" /> 26<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_26.png" /> 27<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_27.png" /> 28<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_28.png" /> 29<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_29.png" /> 30<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_30.png" /> 31<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_31.png" /> 32<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_32.png" /> 33<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_33.png" /> 34<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_34.png" /> 35<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_35.png" /> 36<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_36.png" /> 37<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_37.png" /> 38<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_38.png" /> 39<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_39.png" /> 40<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_40.png" /> 41<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_41.png" /> 42<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_42.png" /> 43<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_43.png" /> 44<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_44.png" /> 45<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_45.png" /> 46<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_46.png" /> 47<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_47.png" /> 48<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_48.png" /> 49<br />\
    <img src="styles/legend/StrandbeskyttelseHvidovreStrandbeskyttelse_4_49.png" /> <br />' });
var format_Erosionsfare_5 = new ol.format.GeoJSON();
var features_Erosionsfare_5 = format_Erosionsfare_5.readFeatures(json_Erosionsfare_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erosionsfare_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosionsfare_5.addFeatures(features_Erosionsfare_5);
var lyr_Erosionsfare_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosionsfare_5, 
                style: style_Erosionsfare_5,
                popuplayertitle: 'Erosionsfare',
                interactive: true,
    title: 'Erosionsfare<br />\
    <img src="styles/legend/Erosionsfare_5_0.png" /> Lille<br />\
    <img src="styles/legend/Erosionsfare_5_1.png" /> Moderat<br />' });
var format_Hospital_layerHospital_6 = new ol.format.GeoJSON();
var features_Hospital_layerHospital_6 = format_Hospital_layerHospital_6.readFeatures(json_Hospital_layerHospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_layerHospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_layerHospital_6.addFeatures(features_Hospital_layerHospital_6);
var lyr_Hospital_layerHospital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_layerHospital_6, 
                style: style_Hospital_layerHospital_6,
                popuplayertitle: 'Hospital_layer — Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_layerHospital_6.png" /> Hospital_layer — Hospital'
            });
var format_folkeskoler_7 = new ol.format.GeoJSON();
var features_folkeskoler_7 = format_folkeskoler_7.readFeatures(json_folkeskoler_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_folkeskoler_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_folkeskoler_7.addFeatures(features_folkeskoler_7);
var lyr_folkeskoler_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_folkeskoler_7, 
                style: style_folkeskoler_7,
                popuplayertitle: 'folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/folkeskoler_7.png" /> folkeskoler'
            });
var format_Togstationer_8 = new ol.format.GeoJSON();
var features_Togstationer_8 = format_Togstationer_8.readFeatures(json_Togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_8.addFeatures(features_Togstationer_8);
var lyr_Togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_8, 
                style: style_Togstationer_8,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_8.png" /> Togstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_kommuneplan_1.setVisible(true);lyr_lokalplaner_2.setVisible(true);lyr_frededeomrder_3.setVisible(true);lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4.setVisible(true);lyr_Erosionsfare_5.setVisible(true);lyr_Hospital_layerHospital_6.setVisible(true);lyr_folkeskoler_7.setVisible(true);lyr_Togstationer_8.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_kommuneplan_1,lyr_lokalplaner_2,lyr_frededeomrder_3,lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4,lyr_Erosionsfare_5,lyr_Hospital_layerHospital_6,lyr_folkeskoler_7,lyr_Togstationer_8];
lyr_kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_lokalplaner_2.set('fieldAliases', {'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Erosionsfare_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'AkutE': 'AkutE', 'Klasse': 'Klasse', 'SHAPE_Length': 'SHAPE_Length', });
lyr_Hospital_layerHospital_6.set('fieldAliases', {'fid': 'fid', 'Hospital n': 'Hospital navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefon nu': 'Telefon nummer', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_folkeskoler_7.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_kommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_lokalplaner_2.set('fieldImages', {'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Erosionsfare_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'AkutE': 'TextEdit', 'Klasse': 'TextEdit', 'SHAPE_Length': 'TextEdit', });
lyr_Hospital_layerHospital_6.set('fieldImages', {'fid': '', 'Hospital n': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefon nu': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_folkeskoler_7.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_kommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'inline label - always visible', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datoforsl': 'no label', 'datovedt': 'inline label - always visible', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_lokalplaner_2.set('fieldLabels', {'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_StrandbeskyttelseHvidovreStrandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Erosionsfare_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'AkutE': 'no label', 'Klasse': 'no label', 'SHAPE_Length': 'no label', });
lyr_Hospital_layerHospital_6.set('fieldLabels', {'fid': 'no label', 'Hospital n': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefon nu': 'no label', });
lyr_folkeskoler_7.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Togstationer_8.set('fieldLabels', {'Name': 'no label', });
lyr_Togstationer_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});