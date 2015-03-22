app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'current', 'Work', 'Schedule', 'userService', 'workService', 'scheduleService', 'Vehicle', 'vehicleService',
                        function($log, $location, current, Work, Schedule, userService, workService, scheduleService, Vehicle, vehicleService){

  var self = this;
  current.page = $location.path();
  self.current = current;
  self.newWork = Work();
  self.vehicle = Vehicle();
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

  self.editUser = function() {
    userService.editUser(self.current.user);
  };

  self.addWork = function() {
    self.newWork.user_id = self.current.user.id;
    delete self.newWork.address;
    workService.addWork(self.newWork, current.user).then(function(data) {
      console.log(data);
    });
  };

  self.addSchedule = function() {
    self.schedule.work_id = current.work[0].id;
    var scheduleToSubmit = Schedule(self.schedule);
    try {
      scheduleService.addDates(scheduleToSubmit);
    } catch(e) {
      console.log(e);
    }
  };

  self.addVehicle = function() {
    vehicleService.addVehicle(self.vehicle).then(function(data) {
      console.log(data);
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
