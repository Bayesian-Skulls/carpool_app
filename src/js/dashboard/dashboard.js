app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'current', 'workDate', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService', 'encouragementService', '$anchorScroll', '$timeout',
      function($log, $location, current, workDate, userService, workService, vehicleService, scheduleService, rideShareService, encouragementService, $anchorScroll, $timeout){

  var self = this;
  self.current = current;
  self.loading = current.loading;
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  if (current.name) {
    $locaton.path('/');
  }
  self.schedule = workDate();
  self.cost = {};

  self.loading= false;
  self.getRideShares = function() {
    rideShareService.getRideShares().then(function(result) {
      self.rideShare = result;
      userService.getUserPhoto(self.rideShare.rideo.info.facebook_id).then(function(result){
        self.rideShare.rideo.photo = result.data;
      });
      rideShareService.getCost().then(function(result) {
        $log.log(result);
        self.cost = result;
      });
    });
  };
  self.getRideShares();


  self.rideShareResponse = function() {
    var response = {
      response: self.rideShare.you.accepted
    };
    rideShareService.respond(response).then(function(data) {
      rideShareService.process().then(function(data){
        self.rideShare = data;
      });
    });
  };

  self.editProfile = function() {
    $location.hash('profile');
    $anchorScroll();
  };

  // quick conditional for the submissions form
  self.submitted = false;

  self.edit = function() {
    userService.editUser(self.current.user).then(function(result) {
      $log.log(result);
    });
    //
    vehicleService.addVehicle(self.current.vehicles[0]).then(function(result) {
      $log.log(result);
    });

    workService.addWork(self.current.work[0], current.user).then(function(result) {
      $log.log(result);
      // self.current.work[0] = result.data.work;
    });
    self.submitted = true;
    $timeout(function() {
      self.submitted = false;

    }, 3000);
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
  self.addDate = function() {
    $timeout(function() {
      var arriveDate = new Date(self.schedule.utc_date.toDateString());
      var departDate = new Date(self.schedule.utc_date.toDateString());
      arriveDate.setHours(Math.floor(self.schedule.arrival_datetime / 60), self.schedule.arrival_datetime % 60, 0, 0);
      departDate.setHours(Math.floor(self.schedule.departure_datetime / 60), self.schedule.departure_datetime % 60, 0, 0);
      var newDate = {
        user_id: self.current.user.id,
        work_id: self.current.work[0].id,
        arrival_datetime: arriveDate.toISOString(),
        departure_datetime: departDate.toISOString()
      };
      scheduleService.addDate(newDate).then(function(result) {
        self.current.schedule.push(result.data.calendar);
      });
      self.schedule = workDate();
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
  self.getStat = function() {
    encouragementService.getStat().then(function(data) {
      self.stat = data;
    });
  };
  self.getStat();

  self.fixError = function() {
    console.log('fired');
    $location.hash(self.current.errorURL);
    $anchorScroll();
  };


}]);
