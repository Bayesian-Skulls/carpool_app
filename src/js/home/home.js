app.config('$routeController', function($routeController) {
  routeOptions = {
    templateUrl: 'static/js/lists/list.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/', routeDefinition);

}).controller('HomeCtrl', ['$log', function($log){




}]);
