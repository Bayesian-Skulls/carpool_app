app.factory('userService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addUser: function(user) {
        return ajaxService.call($http.post('/api/v1/user', user));
    },

    editUser: function(user) {
      return ajaxService.call($http.put('/api/v1/user', user));
    },

    getCurrent: function() {
      return ajaxService.call($http.get('/api/v1/me'));
    }

  };



}]);
