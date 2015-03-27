app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService', 'encouragementService',
      function($log, $location, current, userService, workService, vehicleService, scheduleService, rideShareService, encouragementService){

  var self = this;
  self.current = current;
  if (current.name) {
    $locaton.path('/');
  }

  encouragementService.getCost().then(function(result) {
    console.log(result);
  });

  self.getRideShares = function() {
    rideShareService.getRideShares().then(function(result) {
      self.rideShare = result;
    });
  };
  self.getRideShares();

  self.rideShareRes = function(res) {
    var response = {
      response: res
    };
    self.rideShare.you.accepted = res;
    rideShareService.respond(response);
    rideShareService.process();
    self.getRideShares();
  };

  self.editProfile = function() {
    $location.path('/profile');
  };
  self.deleteWork = function(workItem, index) {
    // IMPLEMENT 'are you sure?' if there are dates associated with this job
    workService.deleteWork(workItem).then(function(result) {
      if (result) {
        self.current.work.splice(index, 1);
      }
      current.getSchedule();
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
