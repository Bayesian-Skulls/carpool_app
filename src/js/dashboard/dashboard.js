app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService',
      function($log, $location, current, userService, workService, vehicleService, scheduleService){

  var self = this;
  self.current = current;

  self.deleteWork = function(workItem, index) {
    workService.deleteWork(workItem).then(function(result) {
      if (result) {
        self.current.work.splice(index, 1);
      }
    });
  };
  self.deleteDate = function(dateItem, index) {
    $log.log(index);
    scheduleService.deleteDate(dateItem).then(function(result) {
      if (result) {
        self.current.schedule.splice(index, 1);
      }
    });
  };
  self.deleteVehicle = function(carItem, index) {
    vehicleService.deleteVehicle(carItem).then(function(result) {
      if (result) {
        self.current.vehicles.splice(index, 1);
      }
    });
  };

}]);
