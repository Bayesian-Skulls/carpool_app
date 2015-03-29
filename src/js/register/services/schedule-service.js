app.factory('scheduleService', ['ajaxService', '$http', 'workDate', function(ajaxService, $http, workDate) {

  return {

    addDate: function(date) {
      console.log(workDate(date));
      // ajaxService.call($http.post('/api/v1/user/calendar', date));
    },
    addDates: function(dates) {
        dates.forEach(function(date) {
          console.log(date);
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
        date.arrive = new Date(date.arrival_datetime);
        date.depart = new Date(date.departure_datetime);
      });
      return dates;
    }

  };

}]);
