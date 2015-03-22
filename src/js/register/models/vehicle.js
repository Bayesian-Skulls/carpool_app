app.factory('Vehicle', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      make: spec.make || '',
      model: spec.model || '',
      year: spec.year || ''
    };
  };
}]);
