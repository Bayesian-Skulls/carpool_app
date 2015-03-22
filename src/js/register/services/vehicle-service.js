app.factory('vehicleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addVehicle: function(car) {
        return ajaxService.call($http.post('/api/v1/user/vehicle', car));
    },

    getVehicles: function() {
        return ajaxService.call($http.get('/api/v1/user/vehicle'));
    }

  };



}]);
