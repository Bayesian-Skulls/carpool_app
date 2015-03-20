app.factory('currentUser', ['User', 'userService', function(User, userService) {

  // userService.getCurrent(function(data){
  //   console.log(data);
  // });

  return User();

}]);
