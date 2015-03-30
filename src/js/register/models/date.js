app.factory('workDate', [ function(){

  return function (spec) {
    spec = spec || {};
    return {
      user_id: spec.user_id || undefined,
      work_id: spec.work_id || undefined,
      arrival_datetime: spec.arrival_datetime || undefined,
      departure_datetime: spec.departure_datetime || undefined
    };
  };
}]);
