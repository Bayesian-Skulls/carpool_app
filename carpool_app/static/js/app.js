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

}]).controller('dashCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService', 'encouragementService',
      function($log, $location, current, userService, workService, vehicleService, scheduleService, rideShareService, encouragementService){

  var self = this;
  self.current = current;
  if (current.name) {
    $locaton.path('/');
  }

  self.getRideShares = function() {
    rideShareService.getRideShares().then(function(result) {
      self.rideShare = result;
    });
  };
  self.getRideShares();

  self.rideShareRes = function(res) {
    var response = {
      response: res
    };
    self.rideShare.you.accepted = res;
    rideShareService.respond(response);
    rideShareService.process();
    self.getRideShares();
  };

  self.editProfile = function() {
    $location.path('/profile');
  };
  self.deleteWork = function(workItem, index) {
    // IMPLEMENT 'are you sure?' if there are dates associated with this job
    workService.deleteWork(workItem).then(function(result) {
      if (result) {
        self.current.work.splice(index, 1);
      }
      current.getSchedule();
    });
  };
  self.deleteDate = function(dateItem, index) {
    $log.log(index);
    scheduleService.deleteDate(dateItem).then(function(result) {
      if (result) {
        self.current.schedule.splice(index, 1);
      }
    });
  };
  self.deleteVehicle = function(carItem, index) {
    vehicleService.deleteVehicle(carItem).then(function(result) {
      if (result) {
        self.current.vehicles.splice(index, 1);
      }
    });
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

                    scope.details.latitude = addressObj.geometry.location.k;
                    scope.details.longitude = addressObj.geometry.location.D;
                    console.log(addressObj);
                });
            });
        }
    };
});

app.directive('maps', function() {
  return {
      replace: true,
      scope: {
          // pickerType: '=?',
          details: '=?'
      },
      controller: ['rideShareService', '$scope', function(rideShareService, $scope) {
        console.log($scope);

        rideShareService.getRideShares().then(function(result){
          var rideShare = result;
          MQA.withModule('new-route', function() {
          // uses the MQA.TileMap.addRoute function to pass in an array
          // of locations as part of the request parameter
            $scope.map.addRoute({
              request: {
                locations: [
                  { latLng: { lat: rideShare.driver.info.latitude, lng: rideShare.driver.info.longitude }},
                  { latLng: { lat: rideShare.passenger.info.latitude, lng: rideShare.passenger.info.longitude }},
                  { latLng: { lat: rideShare.driver.work.latitude, lng: rideShare.driver.work.longitude }},
                  { latLng: { lat: rideShare.passenger.work.latitude, lng: rideShare.passenger.work.longitude }}
                ]
              }
            });
          });
        });


      }],
      link: function(scope, element, attrs, model) {
        console.log(element);
        //  create an object for options
        var options = {
          elt: element[0],           // ID of map element on page
          zoom: 10,                                      // initial zoom level of the map
          mtype: 'map',                                  // map type (map, sat, hyb); defaults to map
          bestFitMargin: 0,                              // margin offset from map viewport when applying a bestfit on shapes
          zoomOnDoubleClick: true                        // enable map to be zoomed in when double-clicking on map
        };

        // construct an instance of MQA.TileMap with the options object
        scope.map = new MQA.TileMap(options);
      }
  };
});

app.directive('mileageChart', function() {
  return {
      replace: true,
      templateUrl: '/static/js/directive/mileage-chart.html',
      scope: {
          details: '=?'
      },
      controller: ['$scope', 'encouragementService', function($scope, encouragementService) {
        var self = this;
        encouragementService.getCost().then(function(result) {
          self.cost = result.data;
          $scope.showLevel(result.data.cost, result.data.half_cost);
        });
      }],
      controllerAs: 'vm',
      link: function(scope, element, attrs, model) {
        var chart = c3.generate({
            bindto: element[0].querySelector('.chart'),
            data: {
              columns: [
                    ['data', 0]
                ],
                type: 'gauge',
            },
            gauge: {
               label: {
                   format: function(value, ratio) {
                       return '$' + value;
                   },
                   min: 0,
                   max: 50,
                   unites: ' %'
               },
            },
            color: {
                pattern: ['000', '#FFF', '#FFF', '#AAA'], // the three color levels for the percentage values.
                threshold: {
                   unit: 'value', // percentage is default
                   max: 50, // 100 is default
                    values: [30, 60, 90, 100]
                }
            },
        });
        chart.load({
            columns: [['data', 0]]
        });

        // switch between values every 3 seconds
        function showLevel(cost, halfCost) {
          chart.load({
              columns: [['data', cost * 5]]
          });
          setTimeout(function () {
            chart.load({
                columns: [['data', halfCost * 5]]
            });
            setTimeout(function() {
              showLevel(cost, halfCost);
            }, 5000);
          }, 5000);
        }
        scope.showLevel = showLevel;





      }
  };
});

app.directive('picker', function() {
  return {
      // require: 'ngModel',
      scope: {
          // ngModel: '=',
          pickerType: '=?',
          // details: '=?'
      },
      link: function(scope, element, attrs, model) {
        if(scope.pickerType==='date'){
          $(element).pickadate({
            formatSubmit: 'yyyy/mm/dd'
          });
        } else if (scope.pickerType==='time') {
          $(element[0]).pickatime({
            onSet: function(time) {
              scope.details = time.select;
            }
          });
        }
      }
  };
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
        userService.logout().then(function () {
          $location.path('/');
        });
      };

      $rootScope.$on('$routeChangeSuccess', function() {
        self.page = $location.path();
        // if (self.page === '/register') {
        //   $('body').css('background-color', '#8C3A37');
        // } else if(self.page === '/dashboard') {
        //   $('body').css('background-color', '#83A9AE');
        // } else if(self.page === '/') {
        //   $('body').css('background-color', '#627F83');
        // }
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

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/profile/profile.html',
    controller: 'profileCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/profile', routeOptions);

}]).controller('profileCtrl', ['$log', '$location', 'current', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService',
      function($log, $location, current, userService, workService, vehicleService, scheduleService, rideShareService){

  var self = this;
  self.current = current;
  if (current.name) {
    $locaton.path('/');
  }

  // self.getRideShares = function() {
  //   rideShareService.getRideShares().then(function(result) {
  //     self.rideShare = result;
  //   });
  // };
  // self.getRideShares();
  //
  // self.rideShareRes = function(res) {
  //   var response = {
  //     response: res
  //   };
  //   self.rideShare.you.accepted = res;
  //   rideShareService.respond(response);
  //   rideShareService.process();
  //   self.getRideShares();
  // };

  self.goTo = function(url) {
    $location.path(url);
  };
  self.deleteDate = function(dateItem, index) {
    $log.log(index);
    scheduleService.deleteDate(dateItem).then(function(result) {
      if (result) {
        self.current.schedule.splice(index, 1);
      }
    });
  };
  self.editWork = function() {

  }
  self.editVehicle = function() {
    
  }
  self.deleteWork = function(workItem, index) {
    // IMPLEMENT 'are you sure?' if there are dates associated with this job
    workService.deleteWork(workItem).then(function(result) {
      if (result) {
        self.current.work.splice(index, 1);
      }
      current.getSchedule();
    });
  };
  self.deleteVehicle = function(carItem, index) {
    vehicleService.deleteVehicle(carItem).then(function(result) {
      if (result) {
        self.current.vehicles.splice(index, 1);
      }
    });
  };

}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'current', 'Work', 'Schedule', 'userService', 'workService', 'scheduleService', 'Vehicle', 'vehicleService', '$timeout',
                        function($log, $location, current, Work, Schedule, userService, workService, scheduleService, Vehicle, vehicleService, $timeout){

  var self = this;
  current.page = $location.path();
  self.current = current;
  self.newWork = Work();
  self.vehicle = Vehicle();
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  self.show = 'register';

  self.editUser = function() {
    userService.editUser(self.current.user).then(function(data) {
      self.show = 'work';
      console.log(self.newWork);
    });
  };

  self.addWorkFields = function() {
    self.addWork();
    $timeout(function() {
      self.addSchedule();
    }, 50);
  };

  self.addWork = function() {
    self.newWork.user_id = self.current.user.id;
    delete self.newWork.address;
    workService.addWork(self.newWork, current.user).then(function(results) {
      self.show = 'vehicle';
      self.newWork = results.data.work;
      console.log(self.newWork);
    });
    return self.newWork;
  };

  self.addSchedule = function() {
    self.schedule.work_id = self.newWork.id;
    var scheduleToSubmit = Schedule(self.schedule);
    try {
      scheduleService.addDates(scheduleToSubmit);
      current.getSchedule();
    } catch(e) {
      $log.log(e);
    }
  };

  self.addVehicle = function() {
    vehicleService.addVehicle(self.vehicle).then(function(data) {
      self.current.vehicles.push(self.vehicle);
      current.getStatus();
      self.editUser();
      $location.path('/dashboard');
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

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/rideshare/rideshare.html',
    controller: 'rideCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/rideshare', routeOptions);

}]).controller('rideCtrl', ['$log', '$location', 'current', 'rideShareService',
      function($log, $location, current, rideShareService){

  var self = this;

  rideShareService.getRideShares().then(function(result) {
    $log.log(result);
  });

}]);

app.factory('encouragementService', ['ajaxService', '$http', 'current', function(ajaxService, $http, current) {

  return {

    getCost: function() {
      return ajaxService.call($http.get('/api/v1/cost'));
    },
    // getEncouragement: function() {
    //   return ajaxService.call($http.get('/api/v1/user/carpool'));
    // }
  };

}]);

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
          $(element[0]).pickatime({
            onSet: function(time) {
              scope.details = time.select;
            }
          });
        }
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
      $log.log(spec);
      $log.log(spec);
      var depart = spec.departing.split(':');
      var arrive = spec.arriving.split(':');
      departDate.setUTCDate(weekDate);
      arriveDate.setUTCDate(weekDate);
      departDate.setHours(Math.floor(spec.depart_time / 60), spec.depart_time % 60, 0, 0);
      arriveDate.setHours(Math.floor(spec.arrive_time / 60), spec.arrive_time % 60, 0, 0);
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

app.factory('current', ['User', 'userService','$log', 'Work', 'workService', 'vehicleService', 'scheduleService', '$q', 'rideShareService',
                        function(User, userService, $log, Work, workService, vehicleService, scheduleService, $q, rideShareService) {
  // create basic object
  currentSpec = {
    getWork: function() {
      return workService.getWork(currentSpec.user.id).then(function(result) {
        currentSpec.work = result.data.work;
        if(currentSpec.work.length <= 0) {
          currentSpec.incomplete = true;
        }
      });
    },
    getVehicles: function() {
      try {
        return vehicleService.getVehicles().then(function(result) {
          currentSpec.vehicles = result.data.vehicles;
          if(currentSpec.vehicles.length <= 0) {
            currentSpec.incomplete = true;
          }
        });
      } catch(e) {
        $log.log(e);
      }
    },
    getSchedule: function() {
      return scheduleService.getSchedule().then(function(result) {
        currentSpec.schedule = result.data.calendars;
        if(currentSpec.schedule.length <= 0) {
          currentSpec.incomplete = true;
        } else {
          currentSpec.schedule = scheduleService.processDates(currentSpec.schedule);
        }
      });
    },
    getRideShares: function() {
      return rideShareService.getRideShares().then(function(result) {
        currentSpec.rideShares = result;
      });
    },
    getStatus: function() {
      return $q.all([
        currentSpec.getWork(),
        currentSpec.getVehicles(),
        currentSpec.getSchedule()]);
    },
    vehicles: [],
    work: [],
    schedule: []
  };

  currentSpec.user = User();
  // Get our current User and if one exists, populate the user object data
  userService.getCurrent().then(function(result) {
    if (result.status === 200){
      currentSpec.user = result.data.user;
      currentSpec.user.address = result.data.user.street_number + ' ' + result.data.user.street + ' ' + result.data.user.city + ' ' + result.data.user.state + ' ' + result.data.user.zip_code;
      userService.getPhoto().then(function(result){
        currentSpec.photo = result.data;
      });
      currentSpec.getStatus();
    } else {
      $log.log('sorry bra, no user');
    }
  });

  return currentSpec;

}]);

app.factory('scheduleService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addDate: function(date) {
      ajaxService.call($http.post('/api/v1/user/calendar', date));
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

    getPhoto: function() {
      return ajaxService.call($http.get('/facebook/photo'));
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
    },
    deleteVehicle: function(car) {
        return ajaxService.call($http.delete('/api/v1/user/vehicle/' + car.id));
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
    },
    deleteWork: function(work) {
        return ajaxService.call($http.delete('api/v1/user/work/' + work.id));
    }
  };

}]);

app.factory('rideShareService', ['ajaxService', '$http', '$q', function(ajaxService, $http, $q) {
  var rideShare;

  var self = {
    getRideShares: function() {
      if (rideShare !== undefined) {
        return $q(function(resolve) {
          resolve(rideShare);
        });
      }
      return ajaxService.call($http.get('/api/v1/user/carpool')).then(function(results) {
        rideShare = results.data.carpool;
        self.process();
        return $q(function(resolve, reject) {
          resolve(results.data.carpool);
        });
      });
    },
    respond: function(res) {
        res.carpool_id = rideShare.carpool_id;
        return ajaxService.call($http.post('/api/v1/user/carpool', res));
    },
    process: function(result) {
      // are we passenger or driver?
      self.getStatus();
      if (rideShare.driver.info.id === currentSpec.user.id){
        rideShare.role = 'driver';
        rideShare.you = self.isConfirmed(rideShare.driver);
        rideShare.rideo = self.isConfirmed(rideShare.passenger);
      } else {
        rideShare.role = 'passenger';
        rideShare.you = self.isConfirmed(rideShare.passenger);
        rideShare.rideo = self.isConfirmed(rideShare.driver);
      }
      return result;
    },

    isConfirmed: function(person) {
      if (person.accepted === true) {
        person.status = 'confirmed';
      } else if (person.accepted === false) {
        person.status = 'declined';
      } else {
        person.status = 'unconfirmed';
      }
      return person;
    },

    getStatus: function() {

      if (rideShare.driver.accepted === true && rideShare.passenger.accepted === true) {
        rideShare.status = 'confirmed';
      } else if (rideShare.driver.accepted === false && rideShare.passenger.accepted === false) {
        rideShare.status = 'declined';
      } else {
        rideShare.status = 'pending';
      }


      return rideShare;
    }
  };
  return self;


}]);

//# sourceMappingURL=app.js.map