app.factory('scheduleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    // addDate: function(work, user) {
    //     return ajaxService.call($http.post('/api/v1/users/' + user.id + '/work', work));
    // },
    addDates: function(dates) {
        dates.forEach(function(date) {
          ajaxService.call($http.post('/api/v1/user/calendar', date));
        });
    },
    // editDate: function(work, userId) {
    //     return ajaxService.call($http.put('/api/v1/user/' + userId, work));
    // },
    getSchedule: function(userId) {
        return ajaxService.call($http.get('api/v1/user/calendar'));
    },
    deleteDate: function(date) {
        return ajaxService.call($http.delete('api/v1/user/calendar/' + date.id));
    },
    processDates: function(dates) {
      dates.forEach(function(date){
        date.depart = new Date(date.departure_datetime);
        date.return = new Date(date.arrival_datetime);
      });
      return dates;
    }

  };

}]);
