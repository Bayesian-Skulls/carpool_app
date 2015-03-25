app.factory('workService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addWork: function(work, user) {
        return ajaxService.call($http.post('/api/v1/users/' + user.id + '/work', work));
    },
    editWork: function(work, userId) {
        return ajaxService.call($http.put('/api/v1/user/' + userId, work));
    },
    getWork: function(userId) {
        return ajaxService.call($http.get('api/v1/users/work'));
    },
    deleteWork: function(work) {
        return ajaxService.call($http.delete('api/v1/user/work/' + work.id));
    }
  };

}]);
