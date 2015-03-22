// Declare our app module, and import the ngRoute and ngAnimate
// modules into it.
var app = angular.module('app', ['ngRoute', 'ngAnimate',]);

// Set up our 404 handler
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.otherwise({
    controller: 'Error404Ctrl',
    controllerAs: 'vm',
    templateUrl: 'static/errors/404/error-404.html'
  });
}]);

app.controller('Error404Ctrl', ['$location', function ($location) {
  this.message = 'Could not find: ' + $location.url();
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'current', 'userService',
      function($log, $location, current, userService){

  var self = this;
  self.current = current;

}]);

app.factory('Schedule', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      name: spec.name || '',
      email: spec.email || '',
      paypal: spec.paypal || '',
      id: spec.id || '',
      address: spec.address || '',
      street_number: spec.street_number || '',
      street: spec.street || '',
      city: spec.city || '',
      state: spec.state || '',
      zip: spec.zip || '',
      lat: spec.lat || '',
      long: spec.long || ''
    };
  };
}]);

app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            var addressValues = {
              'street_number': 'street_number',
              'route': 'street',
              'locality': 'city',
              'administrative_area_level_1': 'state',
              'postal_code': 'zip_code'
            };

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {

                    var addressObj = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());

                    addressObj.address_components.forEach(function(address_comp){
                      var type = address_comp.types[0];
                      if (addressValues[type]) {
                        var add_field = addressValues[type];
                        scope.details[add_field] = address_comp.long_name;
                        console.log(scope.details[add_field]);
                      }
                    });

                    // scope.details.city = addressObj.address_components[2].long_name;
                    // scope.details.state = addressObj.address_components[5].long_name;
                    // scope.details.street_number = addressObj.address_components[0].long_name;
                    // scope.details.street = addressObj.address_components[1].long_name;
                    // scope.details.zip_code = addressObj.address_components[7].long_name;
                    scope.details.latitude = addressObj.geometry.location.k;
                    scope.details.longitude = addressObj.geometry.location.D;
                    console.log(addressObj);
                });
            });
        }
    };
});

app.directive('picker', function() {
  return {
      require: 'ngModel',
      scope: {
          ngModel: '=',
          pickerType: '=?',
          details: '=?'
      },
      link: function(scope, element, attrs, model) {
        if(scope.pickerType==='date'){
          $(element).pickadate({
            formatSubmit: 'yyyy/mm/dd'
          });
        } else if (scope.pickerType==='time') {
          $(element[0]).pickatime();
        }
      }
  };
  // {{vm.user.schedule.slice(0,5).trim()}}
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm',
  };
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', '$location', 'current', 'Work', function($log, $location, current, Work){
  var self = this;
  current.page = '/';
  self.current = current;
  self.newWork = Work();

  self.register = function() {
    self.current.work = self.newWork;
    $location.path('/facebook/login');
  };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'current', 'Work', 'Schedule', 'userService', 'workService', 'scheduleService', 'Vehicle', 'vehicleService',
                        function($log, $location, current, Work, Schedule, userService, workService, scheduleService, Vehicle, vehicleService){

  var self = this;
  current.page = $location.path();
  self.current = current;
  self.newWork = Work();
  self.vehicle = Vehicle();
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

  self.editUser = function() {
    userService.editUser(self.current.user);
  };

  self.addWork = function() {
    self.newWork.user_id = self.current.user.id;
    delete self.newWork.address;
    workService.addWork(self.newWork, current.user).then(function(data) {
      console.log(data);
    });
  };

  self.addSchedule = function() {
    self.schedule.work_id = current.work[0].id;
    var scheduleToSubmit = Schedule(self.schedule);
    try {
      scheduleService.addDates(scheduleToSubmit);
    } catch(e) {
      console.log(e);
    }
  };

  self.addVehicle = function() {
    vehicleService.addVehicle(self.vehicle).then(function(data) {
      console.log(data);
    });
  };

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

  self.fbRegister = function() {
    $location.path('/facebook/login');
  };

}]);

app.directive('mainNav', function() {

  return {

    replace: true,

    scope: {
      onclose: '='
    },

    templateUrl: '/static/js/nav/main-nav.html',

    controller: ['$location', 'StringUtil', '$log', 'current', '$scope', '$rootScope', 'userService',
    function($location, StringUtil, $log, current, $scope, $rootScope, userService) {
      var self = this;
      self.current = current;

      self.logout = function() {
        userService.logout();
      };

      $rootScope.$on('$routeChangeSuccess', function() {
        self.page = $location.path();
      });

      self.isActive = function (path) {
        // The default route is a special case.
        if (path === '/') {
          return $location.path() === '/';
        }
        return StringUtil.startsWith($location.path(), path);
      };

      self.goTo = function(elem) {
        $location.hash(elem);
        $anchorScroll();
      };

    }],

    controllerAs: 'vm',

    link: function ($scope, element, attrs, ctrl) {

      $(document).ready(function(){
        $('.js-menu-trigger, .js-menu-screen').on('click touchstart', function (e) {
          $('.js-menu,.js-menu-screen').toggleClass('is-visible');
          e.preventDefault();
        });
      });
    }
  };



});

app.factory('ajaxService', ['$log', function($log) {

  return {
    call: function(p) {
      return p.then(function (result) {
        return result;
      })
      .catch(function (error) {
        $log.log(error);
      });
    }
  };

}]);

// A little string utility... no biggie
app.factory('StringUtil', function() {
  return {
    startsWith: function (str, subStr) {
      str = str || '';
      return str.slice(0, subStr.length) === subStr;
    }
  };
});

app.factory('workDate', [function(){

  return function (spec) {
    return {
      user_id: spec.user_id || undefined,
      work_id: spec.work_id || undefined,
      arrival_datetime: spec.arrival_datetime || undefined,
      departure_datetime: spec.departure_datetime || undefined
    };
  };
}]);

app.factory('Schedule', ['workDate','$log', 'current', function(workDate, $log, current){

  return function (spec) {
    var today = new Date();
    var dateOffset = 7 - today.getDay();
    var week = [];
    var weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

    var fromIndex = weekdays.indexOf(spec.from) || 0;
    var toIndex = weekdays.indexOf(spec.to) || weekdays.length - 1;

    weekdays = weekdays.slice(fromIndex, toIndex + 1);
    weekdays.forEach(function(day, index) {
      var weekDate = today.getDate() + dateOffset + index;
      var departDate = new Date();
      var arriveDate = new Date();
      var depart = spec.departing.split(':');
      var arrive = spec.arriving.split(':');
      departDate.setDate(weekDate);
      arriveDate.setDate(weekDate);
      departDate.setHours(depart[0], depart[1].slice(0,3), 0, 0);
      arriveDate.setHours(arrive[0], arrive[1].slice(0,3), 0, 0);
      week.push(workDate({
        user_id: current.user.id,
        work_id: spec.work_id,
        arrival_datetime: departDate.toISOString(),
        departure_datetime: arriveDate.toISOString()
      }));
    });

    return week;
  };
}]);

app.factory('User', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      name: spec.name || '',
      email: spec.email || '',
      paypal_id: spec.paypal || '',
      id: spec.id || '',
      address: spec.address || '',
      street_number: spec.street_number || '',
      street: spec.street || '',
      city: spec.city || '',
      state: spec.state || '',
      zip_code: spec.zip || '',
      latitude: spec.lat || '',
      longitude: spec.long || ''
    };
  };
}]);

app.factory('Vehicle', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      make: spec.make || '',
      model: spec.model || '',
      year: spec.year || ''
    };
  };
}]);

app.factory('Work', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      name: spec.name || '',
      user_id: spec.user_id || '',
      // address: spec.street_address || '',
      street_number: spec.street_number || '',
      street: spec.street || '',
      city: spec.city || '',
      state: spec.state || '',
      zip_code: spec.zip || undefined,
      latitude: spec.lat || '',
      longitude: spec.long || ''
    };
  };

}]);

app.factory('current', ['User', 'userService','$log', 'Work', 'workService', 'vehicleService',
                        function(User, userService, $log, Work, workService, vehicleService) {
  // create basic object
  var currentSpec = {
    getWork: function() {
      workService.getWork(currentSpec.user.id).then(function(result) {
        $log.log(result.data.work);
        currentSpec.work = result.data.work;
      });
    },
    getVehicles: function() {
      vehicleService.getVehicles().then(function(result) {
        $log.log(result);
        currentSpec.vehicle = result;
      });
    }

  };

  currentSpec.user = User();
  // Get our current User and if one exists, populate the user object data
  userService.getCurrent().then(function(result) {
    if (result.status === 200){
      $log.log('logged in');
      $log.log(result.data.user);
      currentSpec.user = result.data.user;
      currentSpec.user.address = result.data.user.street_number + ' ' + result.data.user.street + ' ' + result.data.user.city + ' ' + result.data.user.state + ' ' + result.data.user.zip_code;
      currentSpec.getWork();
      currentSpec.getVehicles();
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);

app.factory('scheduleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    // addDate: function(work, user) {
    //     return ajaxService.call($http.post('/api/v1/users/' + user.id + '/work', work));
    // },
    addDates: function(dates) {
        console.log(dates);
        dates.forEach(function(date) {
          console.log(date);
          return ajaxService.call($http.post('/api/v1/user/calendar', date));
        });
    },
    // editDate: function(work, userId) {
    //     return ajaxService.call($http.put('/api/v1/user/' + userId, work));
    // },
    getSchedule: function(userId) {
        return ajaxService.call($http.get('api/v1/users/schedule'));
    }
  };

}]);

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
    },

    logout: function() {
      return ajaxService.call($http.get('/api/v1/logout'));
    }

  };



}]);

app.factory('vehicleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addVehicle: function(car) {
        return ajaxService.call($http.post('/api/v1/user/vehicle', car));
    },

    getVehicles: function() {
        return ajaxService.call($http.get('/api/v1/user/vehicle'));
    }

  };



}]);

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
    }
  };

}]);

//# sourceMappingURL=app.js.map