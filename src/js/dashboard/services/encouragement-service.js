app.factory('encouragementService', ['ajaxService', '$http', 'current', function(ajaxService, $http, current) {

  return {

    getCost: function() {
      return ajaxService.call($http.get('/api/v1/cost'));
    },
    // getEncouragement: function() {
    //   return ajaxService.call($http.get('/api/v1/user/carpool'));
    // }
  };

}]);
