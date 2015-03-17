app.factory('Vehicle', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      id: spec.id || '',
      make: spec.make || '',
      model: spec.model || '',
      year: spec.year || ''
    };
  };
}]);

id year make model
