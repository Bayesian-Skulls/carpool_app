app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/profile/profile.html',
    controller: 'profileCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/profile', routeOptions);

}]).controller('profileCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService',
      function($log, $location, current, userService, workService, vehicleService, scheduleService, rideShareService){

  var self = this;
  self.current = current;
  if (current.name) {
    $locaton.path('/');
  }

  // self.getRideShares = function() {
  //   rideShareService.getRideShares().then(function(result) {
  //     self.rideShare = result;
  //   });
  // };
  // self.getRideShares();
  //
  // self.rideShareRes = function(res) {
  //   var response = {
  //     response: res
  //   };
  //   self.rideShare.you.accepted = res;
  //   rideShareService.respond(response);
  //   rideShareService.process();
  //   self.getRideShares();
  // };

  self.goTo = function(url) {
    $location.path(url);
  };
  self.deleteDate = function(dateItem, index) {
    $log.log(index);
    scheduleService.deleteDate(dateItem).then(function(result) {
      if (result) {
        self.current.schedule.splice(index, 1);
      }
    });
  };
  self.editWork = function() {

  }
  self.editVehicle = function() {
    
  }
  self.deleteWork = function(workItem, index) {
    // IMPLEMENT 'are you sure?' if there are dates associated with this job
    workService.deleteWork(workItem).then(function(result) {
      if (result) {
        self.current.work.splice(index, 1);
      }
      current.getSchedule();
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
