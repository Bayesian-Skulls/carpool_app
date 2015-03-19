app.factory('Schedule', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      name: spec.name || '',
      email: spec.email || '',
      paypal: spec.paypal || '',
      id: spec.id || '',
      address: spec.address || '',
      street_number: spec.street_number || '',
      street: spec.street || '',
      city: spec.city || '',
      state: spec.state || '',
      zip: spec.zip || '',
      lat: spec.lat || '',
      long: spec.long || ''
    };
  };
}]);
