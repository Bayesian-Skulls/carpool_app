app.factory('rideShareService', ['ajaxService', '$http', '$q', function(ajaxService, $http, $q) {
  var rideShare;

  return {
    getRideShares: function() {
      if (rideShare) {
        return $q(function(resolve) {
          resolve(rideShare);
        });
      }
      return ajaxService.call($http.get('/api/v1/user/carpool')).then(function(results) {
        return $q(function(resolve, reject) {
          resolve(results);
        });
      });
    },
    res: function(res) {
        return ajaxService.call($http.post('/api/v1/user/carpool', res));
    },
    processRole: function(result) {
      // are we passenger or driver?
      if (result.data.carpool.driver.info.id === currentSpec.user.id){
        currentSpec.role = 'driver';
        currentSpec.rideo = result.data.carpool.passenger;
      } else {
        currentSpec.role = 'passenger';
        currentSpec.rideo = result.data.carpool.driver;
      }
      return result;
    },

    getStatus: function(rideshare) {
      if (rideshare.driver.accepted === true && rideshare.passenger.accepted === true) {
        rideshare.status = 'confirmed';
      } else if (rideshare.driver.accepted === false && rideshare.passenger.accepted === false) {
        rideshare.status = 'declined';
      } else {
        rideshare.status = 'pending';
      }
      return rideshare;
    }
  };

}]);
