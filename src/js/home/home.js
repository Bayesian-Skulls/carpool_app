app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm',
  };
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', '$location', 'current', 'Work', '$anchorScroll', function($log, $location, current, Work, $anchorScroll){
  var self = this;
  current.page = '/';
  self.current = current;
  self.newWork = Work();

  self.register = function() {
    self.current.work = self.newWork;
    $location.path('/facebook/login');
  };

  self.showInfo = function(info) {
    console.log(info);
    self.pageInfo = info;

    $location.hash('how');
    $anchorScroll();
  }
}]);
