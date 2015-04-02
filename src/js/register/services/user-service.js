app.factory('userService', ['ajaxService', '$http', '$q', function(ajaxService, $http, $q) {

  return {

    addUser: function(user) {
        return ajaxService.call($http.post('/api/v1/user', user));
    },

    editUser: function(user) {
      return ajaxService.call($http.put('/api/v1/user', user));
    },

    getCurrent: function() {
      return ajaxService.call($http.get('/api/v1/me'));
    },

    getPhoto: function() {
      return ajaxService.call($http.get('/facebook/photo'));
    },

    getUserPhoto: function(facebookID) {
      return ajaxService.call($http.get('/facebook/photo/' + facebookID));
    },

    logout: function() {
      return ajaxService.call($http.get('/api/v1/logout'));
    }

  };



}]);
