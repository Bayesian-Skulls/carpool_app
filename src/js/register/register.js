app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'currentUser', 'Work', 'Schedule', 'userService',
      function($log, $location, currentUser, Work, Schedule, userService){

  var self = this;
  self.currentUser = currentUser;
  self.newWork = Work();
  self.schedule = Schedule();
  console.log(self.schedule);

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

  self.fbRegister = function() {
    $location.path('/facebook/login');
  };

}]);
