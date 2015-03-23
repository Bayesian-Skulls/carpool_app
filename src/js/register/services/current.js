app.factory('current', ['User', 'userService','$log', 'Work', 'workService', 'vehicleService', 'scheduleService',
                        function(User, userService, $log, Work, workService, vehicleService, scheduleService) {
  // create basic object
  currentSpec = {
    getWork: function() {
      workService.getWork(currentSpec.user.id).then(function(result) {
        $log.log(result.data.work);
        currentSpec.work = result.data.work;
        if(currentSpec.work <= 0) {
          currentSpec.incomplete = true;
        }
      });
    },
    getVehicles: function() {
      try {
        vehicleService.getVehicles().then(function(result) {
          currentSpec.vehicles = result.data.vehicles;
          if(currentSpec.vehicles <= 0) {
            currentSpec.incomplete = true;
          }
        });
      } catch(e) {
        $log.log(e);
      }
    },
    getSchedule: function() {
      scheduleService.getSchedule().then(function(result) {
        currentSpec.schedule = result.data.calendars;
        if(currentSpec.schedule <= 0) {
          currentSpec.incomplete = true;
        }

        $log.log(currentSpec.schedule);
      });
    },
    getStatus: function() {
      currentSpec.getWork();
      currentSpec.getVehicles();
      currentSpec.getSchedule();
    },
    vehicles: [],
    work: [],
    schedule: []
  };

  currentSpec.user = User();
  // Get our current User and if one exists, populate the user object data
  userService.getCurrent().then(function(result) {
    if (result.status === 200){
      $log.log('logged in');
      $log.log(result.data.user);
      currentSpec.user = result.data.user;
      currentSpec.user.address = result.data.user.street_number + ' ' + result.data.user.street + ' ' + result.data.user.city + ' ' + result.data.user.state + ' ' + result.data.user.zip_code;
      currentSpec.getStatus();
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);
