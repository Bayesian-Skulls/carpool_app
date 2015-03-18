app.factory('userService', ['ajaxService', function(ajaxService) {

  return {

    addUser: function(user) {
        return ajaxService.call($http.post('/api/user/' + user.user_id, user));
    },

    editUser: function() {
      return ajaxService.call($http.post('/api/user/' + user.user_id, user));
    },

    getCurrent: function() {
      return ajaxService.call($http.get('/api/me'));
    }

  };



}]);
