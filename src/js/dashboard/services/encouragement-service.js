app.factory('encouragementService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    getCost: function() {
      return ajaxService.call($http.get('/api/v1/user/cost'));
    },
    getEncouragement: function() {
      return ajaxService.call($http.get('/api/v1/user/carpool'));
    }
  };

}]);
