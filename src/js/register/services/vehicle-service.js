app.factory('vehicleService', ['ajaxService', 'Vehicle', '$http', '$q', function(ajaxService, Vehicle, $http, $q) {

  return {

    addVehicle: function(car) {
        return ajaxService.call($http.post('/api/v1/user/vehicle', car));
    },

    getVehicles: function() {
        return ajaxService.call($http.get('/api/v1/user/vehicle')).then(function(result) {
          return $q(function(resolve, reject) {
            if(result.data.vehicles.length === 0) {
              result.data.vehicles.push(Vehicle());
              console.log(result);
              resolve(result);
            } else {
              resolve(result);
            }
          });
        });
    },
    deleteVehicle: function(car) {
        return ajaxService.call($http.delete('/api/v1/user/vehicle/' + car.id));
    }

  };



}]);
