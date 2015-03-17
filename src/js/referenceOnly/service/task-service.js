app.factory('ridesService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    rideList: function() {
      return ajaxService.call($http.get('api/rides'));
    },

    assignmentList: function() {
      return ajaxService.call($http.get('/api/assignments'));
    }
  };

}]);
