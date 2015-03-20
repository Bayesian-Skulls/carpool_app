app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'current', 'Work', 'Schedule', 'userService', 'workService',
                        function($log, $location, current, Work, Schedule, userService, workService){

  var self = this;
  self.current = current;
  self.newWork = Work();
  self.schedule = Schedule();

  self.editUser = function() {
    userService.editUser(self.current.user);
  };

  self.addWork = function() {
    workService.addWork(self.newWork, current.user).then(function(data) {
      console.log(data);
    });
  };

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

  self.fbRegister = function() {
    $location.path('/facebook/login');
  };

}]);
