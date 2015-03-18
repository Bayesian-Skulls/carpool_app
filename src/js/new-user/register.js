app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/new-user/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', 'currentUser', function($log, currentUser){

  var self = this;
  console.log(currentUser);
  self.currentUser = currentUser;

}]);
