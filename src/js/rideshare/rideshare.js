app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/rideshare/rideshare.html',
    controller: 'rideCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/rideshare', routeOptions);

}]).controller('rideCtrl', ['$log', '$location', 'current', 'rideShareService',
      function($log, $location, current, rideShareService){

  var self = this;

  rideShareService.getRideShares().then(function(result) {
    $log.log(result);
  });

}]);
