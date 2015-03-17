app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'newUserCtrl',
    controllerAs: 'vm'
  };
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider.when('/register', routeOptions);

}]).controller('newUserCtrl', ['$log', function($log){



}]);