app.factory('current', ['User', 'userService','$log', 'Work', 'workService', 'vehicleService', 'scheduleService', '$q', 'rideShareService',
                        function(User, userService, $log, Work, workService, vehicleService, scheduleService, $q, rideShareService) {
  // create basic object
  currentSpec = {
    getWork: function() {
      return workService.getWork(currentSpec.user.id).then(function(result) {
        $log.log(result.data.work);
        currentSpec.work = result.data.work;
        if(currentSpec.work.length <= 0) {
          currentSpec.incomplete = true;
        }
      });
    },
    getVehicles: function() {
      try {
        return vehicleService.getVehicles().then(function(result) {
          currentSpec.vehicles = result.data.vehicles;
          if(currentSpec.vehicles.length <= 0) {
            currentSpec.incomplete = true;
          }
        });
      } catch(e) {
        $log.log(e);
      }
    },
    getSchedule: function() {
      return scheduleService.getSchedule().then(function(result) {
        currentSpec.schedule = result.data.calendars;
        if(currentSpec.schedule.length <= 0) {
          currentSpec.incomplete = true;
        } else {
          currentSpec.schedule = scheduleService.processDates(currentSpec.schedule);
        }

        $log.log(currentSpec.schedule);
      });
    },
    getRideShares: function() {
      return rideShareService.getRideShares().then(function(result) {
        $log.log(result);
        currentSpec.rideShares = result.data.carpool;
      });
    },
    getStatus: function() {
      return $q.all([
        currentSpec.getWork(),
        currentSpec.getVehicles(),
        currentSpec.getSchedule(),
        currentSpec.getRideShares()]);
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
      userService.getPhoto().then(function(result){
        console.log(result);
        currentSpec.photo = result.data;
      });
      currentSpec.getStatus().then(function(data) {
        $log.log('hey');
      });
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);
