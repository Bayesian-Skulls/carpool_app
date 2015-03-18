app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', 'currentUser', 'Work', 'userService', function($log, currentUser, Work, userService){

  var self = this;
  self.currentUser = currentUser;
  self.newWork = Work();

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

}]);
