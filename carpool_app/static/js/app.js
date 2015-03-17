// Declare our app module, and import the ngRoute and ngAnimate
// modules into it.
var app = angular.module('app', ['ngRoute', 'ngAnimate',]);

// Set up our 404 handler
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'static/errors/404/error-404.html'
  });
}]);

app.controller('Error404Ctrl', ['$location', function ($location) {
  this.message = 'Could not find: ' + $location.url();
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  };
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', function($log){



}]);

app.config(['$routeProvider', function($routeProvider){
  var routeDefinition = {
    templateUrl: 'static/js/lists/list.html',
    controller: 'RegCtrl',
    controllerAs: 'vm'
  };

  $routeProvider.when('static/register', routeDefinition);

}]).controller('RegCtrl', ['$log', function($log) {

}]);

app.factory('ajaxService', ['$log', function($log) {

  return {
    call: function(p) {
      return p.then(function (result) {
        return result.data;
      })
      .catch(function (error) {
        $log.log(error);
      });
    }
  };

}]);

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

//# sourceMappingURL=app.js.map