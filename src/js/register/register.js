app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'current', 'Work', 'Schedule', 'userService', 'workService', 'scheduleService', 'Vehicle', 'vehicleService', '$timeout',
                        function($log, $location, current, Work, Schedule, userService, workService, scheduleService, Vehicle, vehicleService, $timeout){

  var self = this;
  current.page = $location.path();
  self.current = current;
  self.newWork = Work();
  self.vehicle = Vehicle();
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  self.show = 'register';

  self.editUser = function() {
    userService.editUser(self.current.user).then(function(data) {
      self.show = 'work';
      console.log(self.newWork);
    });
  };

  self.addWorkFields = function() {
    self.addWork()
    $timeout(function() {
      self.addSchedule();
    }, 50);
  };

  self.addWork = function() {
    self.newWork.user_id = self.current.user.id;
    delete self.newWork.address;
    workService.addWork(self.newWork, current.user).then(function(results) {
      self.show = 'vehicle';
      self.newWork = results.data.work;
      console.log(self.newWork);
    });
    return self.newWork;
  };

  self.addSchedule = function() {
    self.schedule.work_id = self.newWork.id;
    var scheduleToSubmit = Schedule(self.schedule);
    try {
      scheduleService.addDates(scheduleToSubmit);
    } catch(e) {
      $log.log(e);
    }
  };

  self.addVehicle = function() {
    vehicleService.addVehicle(self.vehicle).then(function(data) {
      console.log(data);
      $location.path('/dashboard');
    });
  };

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

  self.fbRegister = function() {
    $location.path('/facebook/login');
  };

}]);
