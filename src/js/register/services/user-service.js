app.factory('userService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addUser: function(user) {
        return ajaxService.call($http.post('/api/v1/user/' + user.user_id, user));
    },

    editUser: function() {
      return ajaxService.call($http.post('/api/v1/user/' + user.user_id, user));
    },

    getCurrent: function() {
      return ajaxService.call($http.get('/api/v1/me'));
    }

  };



}]);
