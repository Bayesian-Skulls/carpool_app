app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService', 'encouragementService', '$anchorScroll',
      function($log, $location, current, userService, workService, vehicleService, scheduleService, rideShareService, encouragementService, $anchorScroll){

  var self = this;
  self.current = current;
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  if (current.name) {
    $locaton.path('/');
  }

  self.getRideShares = function() {
    rideShareService.getRideShares().then(function(result) {
      self.rideShare = result;
    });
  };
  self.getRideShares();

  self.rideShareResponse = function() {
    var response = {
      response: self.rideShare.you.accepted
    };
    console.log('dashboard fired');
    rideShareService.respond(response);
    rideShareService.process();
    self.getRideShares();
  }

  // self.rideShareRes = function(res) {
  //   var response = {
  //     response: res
  //   };
  //   self.rideShare.you.accepted = res;
  //   rideShareService.respond(response).then(function(result){
  //     $log.log('result');
  //     $log.log(result);
  //   });
  //   rideShareService.process();
  //   self.getRideShares();
  // };

  self.editProfile = function() {
    $location.hash('profile')
    $anchorScroll();
  };

  self.edit = function() {
    console.log(self.current);
    userService.editUser(self.current.user).then(function(result) {
      console.log(result);
    });
    //
    vehicleService.addVehicle(self.current.vehicles[0]).then(function(result) {
      console.log(result);
    });

    workService.addWork(self.current.work[0], current.user).then(function(result) {
      console.log(result);
      self.current.work[0] = result.data.work;
    });
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
  self.addDate = function(dateItem) {
    self.schedule.user_id = current.user.id;
    console.log(self.schedule);
    scheduleService.addDate(self.schedule).then(function(result) {
      console.log(result);
    });
  }
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
  self.getStat = function() {
    encouragementService.getStat().then(function(data) {
      self.stat = data;
    });
  }
  self.getStat();

}]);
