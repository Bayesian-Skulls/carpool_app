app.config(['$routeProvider', function($routeProvider) {
  var routeOptions = {
    templateUrl: 'static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', function($log){




}]);
