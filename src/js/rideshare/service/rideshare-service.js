app.factory('rideShareService', ['ajaxService', '$http', '$q', function(ajaxService, $http, $q) {
  var rideShare;

  var self = {
    getRideShares: function() {
      if (rideShare !== undefined) {
        return $q(function(resolve) {
          resolve(rideShare);
        });
      }
      return ajaxService.call($http.get('/api/v1/user/carpool')).then(function(results) {
        rideShare = results.data.carpool;
        self.process();
        return $q(function(resolve, reject) {
          resolve(results.data.carpool);
        });
      });
    },
    respond: function(res) {
        res.carpool_id = rideShare.carpool_id;
        return ajaxService.call($http.post('/api/v1/user/carpool', res));
    },
    process: function() {
      // are we passenger or driver?
      self.getStatus();
      if (rideShare.driver.info.id === currentSpec.user.id){
        rideShare.role = 'driver';
        rideShare.you = self.isConfirmed(rideShare.driver);
        rideShare.rideo = self.isConfirmed(rideShare.passenger);
      } else {
        rideShare.role = 'passenger';
        rideShare.you = self.isConfirmed(rideShare.passenger);
        rideShare.rideo = self.isConfirmed(rideShare.driver);
      }
      return $q(function(resolve,reject) {
        resolve(rideShare);
      });
    },

    isConfirmed: function(person) {
      if (person.accepted === true) {
        person.status = 'confirmed';
      } else if (person.accepted === false) {
        person.status = 'declined';
      } else {
        person.status = 'unconfirmed';
      }
      return person;
    },

    getStatus: function() {
      if (rideShare.driver.accepted === true && rideShare.passenger.accepted === true) {
        rideShare.status = 'confirmed';
      } else if (rideShare.driver.accepted === false && rideShare.passenger.accepted === false) {
        rideShare.status = 'declined';
      } else {
        rideShare.status = 'pending';
      }
      return $q(function(resolve, reject) {
        resolve(rideShare);
      });
    },
    getCost: function() {
      return ajaxService.call($http.get('/api/v1/'+ rideShare.carpool_id +'/carpool_cost')).then(function(results) {
        return $q(function(resolve, reject){
          resolve( rideShare.cost = results.data );
        });
      });
    },
    getSingleCost: function() {
      return ajaxService.call($http.get('/api/v1/cost'));
    }
  };
  return self;


}]);
