app.factory('scheduleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addDate: function(date) {
      ajaxService.call($http.post('/api/v1/user/calendar', date));
    },
    addDates: function(dates) {
        dates.forEach(function(date) {
          ajaxService.call($http.post('/api/v1/user/calendar', date));
        });
    },
    editDate: function(date) {
      ajaxService.call($http.put('/api/v1/user/calendar', date));
    },

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
