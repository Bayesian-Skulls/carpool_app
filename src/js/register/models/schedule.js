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
      var depart = spec.departing.split(':');
      var arrive = spec.arriving.split(':');
      departDate.setDate(weekDate);
      arriveDate.setDate(weekDate);
      departDate.setHours(depart[0], depart[1].slice(0,3), 0, 0);
      arriveDate.setHours(arrive[0], arrive[1].slice(0,3), 0, 0);
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
