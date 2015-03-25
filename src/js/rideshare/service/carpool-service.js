app.factory('rideShareService', ['ajaxService', '$http', '$q', function(ajaxService, $http, $q) {

  return {

    getRideShares: function() {
        return ajaxService.call($http.get('/api/v1/user/carpool')).then(function(results) {
          return $q(function(resolve, reject) {
            results.data.carpool.driver.arrival = new Date(results.data.carpool.driver.arrival);
            results.data.carpool.driver.departure = new Date(results.data.carpool.driver.departure);
            results.data.carpool.passenger.arrival = new Date(results.data.carpool.passenger.arrival);
            results.data.carpool.passenger.departure = new Date(results.data.carpool.passenger.departure);
            resolve(results);
          });
        });
    },
    resCarpool: function() {
        return ajaxService.call($http.get('/api/v1/users/'));
    }
  };

}]);
