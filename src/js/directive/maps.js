app.directive('maps', function() {
  return {
      // require: 'ngModel',
      replace: true,
      scope: {
          // ngModel: '=',
          // pickerType: '=?',
          // details: '=?'
      },
      link: function(scope, element, attrs, model) {
        console.log('hey, i loaded the maps');

         // create an object for options
         var options = {
           elt: document.getElementById('map'),           // ID of map element on page
           zoom: 10,                                      // initial zoom level of the map
           latLng: { lat: 39.743943, lng: -105.020089 },  // center of map in latitude/longitude
           mtype: 'map',                                  // map type (map, sat, hyb); defaults to map
           bestFitMargin: 0,                              // margin offset from map viewport when applying a bestfit on shapes
           zoomOnDoubleClick: true                        // enable map to be zoomed in when double-clicking on map
         };

         // construct an instance of MQA.TileMap with the options object
         element.map = new MQA.TileMap(options);
      }
  };
});
