app.factory('Schedule', ['workDate','$log', 'current', function(workDate, $log, current){

  return function (spec) {
    var today = new Date();
    var dateOffset = 7 - today.getDay();
    var week = [];
    var weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

    var fromIndex = weekdays.indexOf(spec.from) || 0;
    var toIndex = weekdays.indexOf(spec.to) || weekdays.length - 1;

    weekdays = weekdays.slice(fromIndex, toIndex + 1);
    weekdays.forEach(function(day, index) {
      var weekDate = today.getDate() + dateOffset + index;
      var departDate = new Date();
      var arriveDate = new Date();
      departDate.setUTCDate(weekDate);
      arriveDate.setUTCDate(weekDate);
      departDate.setHours(Math.floor(spec.depart_time / 60), spec.depart_time % 60, 0, 0);
      arriveDate.setHours(Math.floor(spec.arrive_time / 60), spec.arrive_time % 60, 0, 0);
      week.push(workDate({
        user_id: current.user.id,
        work_id: spec.work_id,
        arrival_datetime: departDate.toISOString(),
        departure_datetime: arriveDate.toISOString()
      }));
    });

    return week;
  };
}]);
