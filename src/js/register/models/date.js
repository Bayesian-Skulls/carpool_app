app.factory('workDate', [ function(){

  return function (spec) {
    console.log(spec);
    var departDate = new Date(spec.date);
    var arriveDate = new Date(spec.date);
    console.log(departDate);
    console.log(arriveDate);
    var date = {
      user_id: spec.user_id || current.user.id,
      work_id: spec.work_id || current.work[0].id,
      arrival_datetime: spec.arrival_datetime || undefined,
      departure_datetime: spec.departure_datetime || undefined
    }
    return date;
  };
}]);
