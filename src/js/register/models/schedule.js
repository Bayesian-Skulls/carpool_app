app.factory('Schedule', ['workDate','$log', function(workDate, $log){

  return function (spec) {
    spec = spec || {};
    var today = new Date();
    var dateOffset = 7 - today.getDay();
    var week = [];
    var weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
    weekdays.forEach(function(day, index) {
      var weekDate = today.getDate() + dateOffset + index;
      var isoDate = new Date();
      isoDate.setDate(weekDate);
      week.push(workDate());
      week[index].day = day;
      week[index].iso = isoDate.toISOString();
    });
    return week;
  };
}]);
