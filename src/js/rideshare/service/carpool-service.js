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
    resRideSahre: function() {
        return ajaxService.call($http.get('/api/v1/user/carpool'));
    },
    processDates: function(rideshare) {
      // add date objects
      rideshare.driver.arrival = new Date(rideshare.driver.arrival);
      rideshare.driver.departure = new Date(rideshare.driver.departure);
      rideshare.passenger.arrival = new Date(rideshare.passenger.arrival);
      rideshare.passenger.departure = new Date(rideshare.passenger.departure);

      // are we passenger or driver?
      if (result.data.carpool.driver.info.id = currentSpec.user.id){
        currentSpec.role = 'driver';
        currentSpec.rideo = result.data.carpool.passenger;
      } else {
        currentSpec.role = 'passenger';
        currentSpec.rideo = result.data.carpool.driver;
      }
      return rideshare;
    },

    getStatus: function(rideshare) {
      // if( rideshare.driver.accepted === true && rideshare.passenger.accepted = ) {
      //   // rideshare.status =
      // }
    }
  };

}]);
