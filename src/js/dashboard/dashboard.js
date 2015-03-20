app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'currentUser', 'userService',
      function($log, $location, currentUser, userService){

  var self = this;
  self.currentUser = currentUser;

}]);
