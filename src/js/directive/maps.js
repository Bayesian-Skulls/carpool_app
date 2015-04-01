app.directive('maps', function() {
  return {
      replace: true,
      scope: {
          // pickerType: '=?',
          details: '=?'
      },
      controller: ['rideShareService', '$scope', function(rideShareService, $scope) {

        rideShareService.getRideShares().then(function(result){
          var rideShare = result;
          MQA.withModule('new-route', function() {
          // uses the MQA.TileMap.addRoute function to pass in an array
          // of locations as part of the request parameter
            $scope.map.addRoute({
              request: {
                locations: [
                  { latLng: { lat: rideShare.driver.info.latitude, lng: rideShare.driver.info.longitude }},
                  { latLng: { lat: rideShare.passenger.info.latitude, lng: rideShare.passenger.info.longitude }},
                  { latLng: { lat: rideShare.passenger.work.latitude, lng: rideShare.passenger.work.longitude }},
                  { latLng: { lat: rideShare.driver.work.latitude, lng: rideShare.driver.work.longitude }}
                ]
              }
            });
          });
        });
      }],
      link: function(scope, element, attrs, model) {
        //  create an object for options
        var options = {
          elt: element[0],           // ID of map element on page
          zoom: 10,                                      // initial zoom level of the map
          mtype: 'map',                                  // map type (map, sat, hyb); defaults to map
          bestFitMargin: 0,                              // margin offset from map viewport when applying a bestfit on shapes
          zoomOnDoubleClick: true,
        };

        // construct an instance of MQA.TileMap with the options object
        scope.map = new MQA.TileMap(options);
      }
  };
});
