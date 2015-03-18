app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', '$location', 'currentUser', 'Work', function($log, $location, currentUser, Work){
  var self = this;

  self.currentUser = currentUser;
  self.newWork = Work();

  self.register = function() {
    self.currentUser.work = self.newWork;
    $location.path('/register');
  };
}]);
