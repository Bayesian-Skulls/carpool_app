app.factory('User', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      name: spec.name || '',
      email: spec.email || '',
      paypal: spec.paypal || '',
      user_id: spec.user_id || '',
      pickup_address: spec.pickup_address || ''
    };
  };
}]);
