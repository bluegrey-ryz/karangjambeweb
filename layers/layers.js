ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([109.317113, -7.397159, 109.344821, -7.383861]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_1.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_batasrtrw_2 = new ol.format.GeoJSON();
var features_batasrtrw_2 = format_batasrtrw_2.readFeatures(json_batasrtrw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_batasrtrw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasrtrw_2.addFeatures(features_batasrtrw_2);
var lyr_batasrtrw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasrtrw_2, 
                style: style_batasrtrw_2,
                popuplayertitle: "batas rt rw",
                interactive: true,
    title: 'batas rt rw<br />\
    <img src="styles/legend/batasrtrw_2_0.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/batasrtrw_2_1.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/batasrtrw_2_2.png" /> RT 1 RW 2<br />\
    <img src="styles/legend/batasrtrw_2_3.png" /> RT 1 RW 3<br />\
    <img src="styles/legend/batasrtrw_2_4.png" /> RT 1 RW 4<br />\
    <img src="styles/legend/batasrtrw_2_5.png" /> RT 2  RW 1<br />\
    <img src="styles/legend/batasrtrw_2_6.png" /> RT 2 RW 2<br />\
    <img src="styles/legend/batasrtrw_2_7.png" /> RT 2 RW 3<br />\
    <img src="styles/legend/batasrtrw_2_8.png" /> RT 2 RW 4<br />\
    <img src="styles/legend/batasrtrw_2_9.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/batasrtrw_2_10.png" /> RT 3 RW 2<br />\
    <img src="styles/legend/batasrtrw_2_11.png" /> RT 3 RW 3<br />\
    <img src="styles/legend/batasrtrw_2_12.png" /> RT 3 RW 4<br />\
    <img src="styles/legend/batasrtrw_2_13.png" /> RT 4  RW 1<br />\
    <img src="styles/legend/batasrtrw_2_14.png" /> RT 4 RW 2<br />\
    <img src="styles/legend/batasrtrw_2_15.png" /> RT 4 RW 3<br />\
    <img src="styles/legend/batasrtrw_2_16.png" /> RT 4 RW 4<br />\
    <img src="styles/legend/batasrtrw_2_17.png" /> RT 5 RW 2<br />\
    <img src="styles/legend/batasrtrw_2_18.png" /> RT 5 RW 4<br />\
    <img src="styles/legend/batasrtrw_2_19.png" /> RT 6 RW 1<br />\
    <img src="styles/legend/batasrtrw_2_20.png" /> RT 7 RW 1<br />\
    <img src="styles/legend/batasrtrw_2_21.png" /> <br />'
        });
var format_sawah_3 = new ol.format.GeoJSON();
var features_sawah_3 = format_sawah_3.readFeatures(json_sawah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sawah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sawah_3.addFeatures(features_sawah_3);
var lyr_sawah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sawah_3, 
                style: style_sawah_3,
                popuplayertitle: "sawah",
                interactive: true,
                title: '<img src="styles/legend/sawah_3.png" /> sawah'
            });
var format_sungai_4 = new ol.format.GeoJSON();
var features_sungai_4 = format_sungai_4.readFeatures(json_sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_4.addFeatures(features_sungai_4);
var lyr_sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_4, 
                style: style_sungai_4,
                popuplayertitle: "sungai",
                interactive: true,
                title: '<img src="styles/legend/sungai_4.png" /> sungai'
            });
var format_padamara_line_5 = new ol.format.GeoJSON();
var features_padamara_line_5 = format_padamara_line_5.readFeatures(json_padamara_line_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_padamara_line_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_padamara_line_5.addFeatures(features_padamara_line_5);
var lyr_padamara_line_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_padamara_line_5, 
                style: style_padamara_line_5,
                popuplayertitle: "padamara_line",
                interactive: false,
                title: '<img src="styles/legend/padamara_line_5.png" /> padamara_line'
            });
var format_Karangjambe_poly_6 = new ol.format.GeoJSON();
var features_Karangjambe_poly_6 = format_Karangjambe_poly_6.readFeatures(json_Karangjambe_poly_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Karangjambe_poly_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karangjambe_poly_6.addFeatures(features_Karangjambe_poly_6);
var lyr_Karangjambe_poly_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karangjambe_poly_6, 
                style: style_Karangjambe_poly_6,
                popuplayertitle: "Karangjambe_poly",
                interactive: true,
                title: '<img src="styles/legend/Karangjambe_poly_6.png" /> Karangjambe_poly'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: "Lapangan",
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_padamara_point_8 = new ol.format.GeoJSON();
var features_padamara_point_8 = format_padamara_point_8.readFeatures(json_padamara_point_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_padamara_point_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_padamara_point_8.addFeatures(features_padamara_point_8);
var lyr_padamara_point_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_padamara_point_8, 
                style: style_padamara_point_8,
                popuplayertitle: "padamara_point",
                interactive: false,
                title: '<img src="styles/legend/padamara_point_8.png" /> padamara_point'
            });
var format_sekolah_9 = new ol.format.GeoJSON();
var features_sekolah_9 = format_sekolah_9.readFeatures(json_sekolah_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_sekolah_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_9.addFeatures(features_sekolah_9);
var lyr_sekolah_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_9, 
                style: style_sekolah_9,
                popuplayertitle: "sekolah",
                interactive: true,
                title: '<img src="styles/legend/sekolah_9.png" /> sekolah'
            });
var format_Kesehatan_10 = new ol.format.GeoJSON();
var features_Kesehatan_10 = format_Kesehatan_10.readFeatures(json_Kesehatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Kesehatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kesehatan_10.addFeatures(features_Kesehatan_10);
var lyr_Kesehatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kesehatan_10, 
                style: style_Kesehatan_10,
                popuplayertitle: "Kesehatan",
                interactive: true,
                title: '<img src="styles/legend/Kesehatan_10.png" /> Kesehatan'
            });
var format_masjid_11 = new ol.format.GeoJSON();
var features_masjid_11 = format_masjid_11.readFeatures(json_masjid_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_masjid_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_11.addFeatures(features_masjid_11);
var lyr_masjid_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_11, 
                style: style_masjid_11,
                popuplayertitle: "masjid",
                interactive: true,
                title: '<img src="styles/legend/masjid_11.png" /> masjid'
            });
var format_PT_12 = new ol.format.GeoJSON();
var features_PT_12 = format_PT_12.readFeatures(json_PT_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PT_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_12.addFeatures(features_PT_12);
var lyr_PT_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PT_12, 
                style: style_PT_12,
                popuplayertitle: "PT",
                interactive: true,
                title: '<img src="styles/legend/PT_12.png" /> PT'
            });
var format_pemakaman_13 = new ol.format.GeoJSON();
var features_pemakaman_13 = format_pemakaman_13.readFeatures(json_pemakaman_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_pemakaman_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemakaman_13.addFeatures(features_pemakaman_13);
var lyr_pemakaman_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pemakaman_13, 
                style: style_pemakaman_13,
                popuplayertitle: "pemakaman",
                interactive: true,
                title: '<img src="styles/legend/pemakaman_13.png" /> pemakaman'
            });
var format_Pemerintahan_14 = new ol.format.GeoJSON();
var features_Pemerintahan_14 = format_Pemerintahan_14.readFeatures(json_Pemerintahan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pemerintahan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_14.addFeatures(features_Pemerintahan_14);
var lyr_Pemerintahan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemerintahan_14, 
                style: style_Pemerintahan_14,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_14.png" /> Pemerintahan'
            });
var format_home_15 = new ol.format.GeoJSON();
var features_home_15 = format_home_15.readFeatures(json_home_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_home_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_home_15.addFeatures(features_home_15);
var lyr_home_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_home_15, 
                style: style_home_15,
                popuplayertitle: "home",
                interactive: true,
                title: '<img src="styles/legend/home_15.png" /> home'
            });
var format_Shoop_16 = new ol.format.GeoJSON();
var features_Shoop_16 = format_Shoop_16.readFeatures(json_Shoop_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Shoop_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shoop_16.addFeatures(features_Shoop_16);
var lyr_Shoop_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shoop_16, 
                style: style_Shoop_16,
                popuplayertitle: "Shoop",
                interactive: true,
                title: '<img src="styles/legend/Shoop_16.png" /> Shoop'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);lyr_batasrtrw_2.setVisible(true);lyr_sawah_3.setVisible(true);lyr_sungai_4.setVisible(true);lyr_padamara_line_5.setVisible(true);lyr_Karangjambe_poly_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_padamara_point_8.setVisible(true);lyr_sekolah_9.setVisible(true);lyr_Kesehatan_10.setVisible(true);lyr_masjid_11.setVisible(true);lyr_PT_12.setVisible(true);lyr_pemakaman_13.setVisible(true);lyr_Pemerintahan_14.setVisible(true);lyr_home_15.setVisible(true);lyr_Shoop_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIDESA_AR_25K_1,lyr_batasrtrw_2,lyr_sawah_3,lyr_sungai_4,lyr_padamara_line_5,lyr_Karangjambe_poly_6,lyr_Lapangan_7,lyr_padamara_point_8,lyr_sekolah_9,lyr_Kesehatan_10,lyr_masjid_11,lyr_PT_12,lyr_pemakaman_13,lyr_Pemerintahan_14,lyr_home_15,lyr_Shoop_16];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_batasrtrw_2.set('fieldAliases', {'id': 'id', 'nama rt rw': 'nama rt rw', });
lyr_sawah_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_sungai_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_padamara_line_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'width': 'width', 'highway': 'highway', });
lyr_Karangjambe_poly_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Lapangan_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_padamara_point_8.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'office': 'office', 'place': 'place', 'railway': 'railway', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'population': 'population', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'emergency': 'emergency', 'admin_leve': 'admin_leve', 'highway': 'highway', 'addr_postc': 'addr_postc', 'pump': 'pump', 'surface': 'surface', 'water': 'water', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'addr_house': 'addr_house', 'is_in': 'is_in', 'boundary': 'boundary', });
lyr_sekolah_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Kesehatan_10.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_masjid_11.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_PT_12.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_pemakaman_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pemerintahan_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_home_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Shoop_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_batasrtrw_2.set('fieldImages', {'id': 'TextEdit', 'nama rt rw': 'TextEdit', });
lyr_sawah_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_sungai_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_padamara_line_5.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', });
lyr_Karangjambe_poly_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Lapangan_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_padamara_point_8.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'roof_mater': 'TextEdit', 'rooms': 'TextEdit', 'tourism': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'beds': 'TextEdit', 'covered': 'TextEdit', 'landuse': 'TextEdit', 'diameter': 'TextEdit', 'access_roo': 'TextEdit', 'building_m': 'TextEdit', 'opening_ho': 'TextEdit', 'government': 'TextEdit', 'isced_leve': 'TextEdit', 'population': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'emergency': 'TextEdit', 'admin_leve': 'TextEdit', 'highway': 'TextEdit', 'addr_postc': 'TextEdit', 'pump': 'TextEdit', 'surface': 'TextEdit', 'water': 'TextEdit', 'natural': 'TextEdit', 'oneway': 'TextEdit', 'addr_stree': 'TextEdit', 'layer': 'TextEdit', 'military': 'TextEdit', 'shop': 'TextEdit', 'addr_house': 'TextEdit', 'is_in': 'TextEdit', 'boundary': 'TextEdit', });
lyr_sekolah_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Kesehatan_10.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_masjid_11.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_PT_12.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_pemakaman_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pemerintahan_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_home_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Shoop_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_batasrtrw_2.set('fieldLabels', {'id': 'no label', 'nama rt rw': 'no label', });
lyr_sawah_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_sungai_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_padamara_line_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'name': 'no label', 'width': 'no label', 'highway': 'no label', });
lyr_Karangjambe_poly_6.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_padamara_point_8.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'office': 'no label', 'place': 'no label', 'railway': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'population': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'emergency': 'no label', 'admin_leve': 'no label', 'highway': 'no label', 'addr_postc': 'no label', 'pump': 'no label', 'surface': 'no label', 'water': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'addr_house': 'no label', 'is_in': 'no label', 'boundary': 'no label', });
lyr_sekolah_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Kesehatan_10.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_masjid_11.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_PT_12.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_pemakaman_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pemerintahan_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_home_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Shoop_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Shoop_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});