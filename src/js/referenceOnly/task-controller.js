app.config(['$routeProvider', function($routeProvider){
  var routeDefinition = {
    templateUrl: 'static/js/lists/list.html',
    controller: 'RegCtrl',
    controllerAs: 'vm',
    resolve: {}
  };

  $routeProvider.when('/register', routeDefinition);

}]).controller('RegCtrl', ['$log', function($log) {

}]);
