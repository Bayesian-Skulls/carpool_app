app.factory('current', ['User', 'userService','$log', 'Work', 'workService', 'vehicleService', 'scheduleService',
                        function(User, userService, $log, Work, workService, vehicleService, scheduleService) {
  // create basic object
  var currentSpec = {
    getWork: function() {
      workService.getWork(currentSpec.user.id).then(function(result) {
        $log.log(result.data.work);
        currentSpec.work = result.data.work;
      });
    },
    // getVehicles: function() {
    //   vehicleService.getVehicles().then(function(result) {
    //     $log.log(result);
    //     currentSpec.vehicle = result;
    //   });
    // },
    getSchedule: function() {
      scheduleService.getSchedule().then(function(result) {
        $log.log(result.data);
      });
    }
  };

  currentSpec.user = User();
  // Get our current User and if one exists, populate the user object data
  userService.getCurrent().then(function(result) {
    if (result.status === 200){
      $log.log('logged in');
      $log.log(result.data.user);
      currentSpec.user = result.data.user;
      currentSpec.user.address = result.data.user.street_number + ' ' + result.data.user.street + ' ' + result.data.user.city + ' ' + result.data.user.state + ' ' + result.data.user.zip_code;
      currentSpec.getWork();
      // currentSpec.getVehicles();
      currentSpec.getSchedule();
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);
