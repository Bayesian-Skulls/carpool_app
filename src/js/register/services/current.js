app.factory('current', ['User', 'userService','$log', function(User, userService, $log) {
  // create basic object
  var currentSpec = {};

  currentSpec.user = User();
  userService.getCurrent().then(function(result) {
    if (result.status === 200){
      $log.log('logged in');
      $log.log(result.data.user);
      currentSpec.user = result.data.user;
      currentSpec.user.address = result.data.user.street_number + ' ' + result.data.user.street + ' ' + result.data.user.city + ' ' + result.data.user.state + ' ' + result.data.user.zip_code;
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);
