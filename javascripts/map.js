var projection = ol.proj.get('EPSG:3067');
//The extent is used to determine zoom level 0. Recommended values for a
//projection's validity extent can be found at http://epsg.io/.
projection.setExtent([-548576, 6291456, 1548576, 8388608]);


var extent = [20000, 6570000, 788000, 7818000];

var layers = [
new ol.layer.Image({
 extent: extent,
 source: new ol.source.ImageWMS({
   url: 'http://avoindata.maanmittauslaitos.fi/geoserver/ows',
   crossOrigin: 'anonymous',
   params: {
     'SLD': 'http://lkajan.github.io/nls_sld_map/sldstyles/vaalea.sld',
     'FORMAT': 'image/png'
   },
   attributions: [
                  new ol.Attribution({
                    html: 'Kartta-aineistot: ' +
                        '<a href="http://www.maanmittauslaitos.fi/avoindata_lisenssi_versio1_20120501">Maanmittauslaitos</a>'
                  })
   ],
   serverType: /** @type {ol.source.wms.ServerType} */ ('geoserver')
 })
})
];

var view = new ol.View({
	 projection: projection,
	 center: ol.proj.transform([26.05, 64.96], 'EPSG:4326', 'EPSG:3067'),
	 extent: extent,
	 resolutions: [2048, 1024, 512, 256, 128, 64, 32, 16],
	 zoom: 0
});


var map = new ol.Map({
controls: ol.control.defaults().extend([
 new ol.control.ScaleLine()
]),
layers: layers,
target: 'map',
view: view
});

