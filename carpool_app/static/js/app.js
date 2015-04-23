// <<<<<<< HEAD
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

}]).controller('dashCtrl', ['$log', '$location', 'current', 'workDate', 'userService', 'workService', 'vehicleService', 'scheduleService', 'rideShareService', 'encouragementService', '$anchorScroll', '$timeout',
      function($log, $location, current, workDate, userService, workService, vehicleService, scheduleService, rideShareService, encouragementService, $anchorScroll, $timeout){

  var self = this;
  self.current = current;
  self.weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
  self.loading = false;
  if (current.name) {
    $locaton.path('/');
  }
  self.schedule = workDate();
  self.cost = {};

  self.getRideShares = function() {
    rideShareService.getRideShares().then(function(result) {
      self.rideShare = result;
      self.loading= false;
      userService.getUserPhoto(self.rideShare.rideo.info.facebook_id).then(function(result){
        self.rideShare.rideo.photo = result.data;
      });
      rideShareService.getCost().then(function(result) {
        $log.log(result);
        self.cost = result;
      });
    });
  };
  self.getRideShares();


  self.rideShareResponse = function() {
    var response = {
      response: self.rideShare.you.accepted
    };
    rideShareService.respond(response).then(function(data) {
      rideShareService.process().then(function(data){
        self.rideShare = data;
      });
    });
  };

  self.editProfile = function() {
    $location.hash('profile');
    $anchorScroll();
  };

  // quick conditional for the submissions form
  self.submitted = false;

  self.edit = function() {
    userService.editUser(self.current.user).then(function(result) {
      $log.log(result);
    });
    //
    vehicleService.addVehicle(self.current.vehicles[0]).then(function(result) {
      $log.log(result);
    });

    workService.addWork(self.current.work[0], current.user).then(function(result) {
      $log.log(result);
      // self.current.work[0] = result.data.work;
    });
    self.submitted = true;
    $timeout(function() {
      self.submitted = false;

    }, 3000);
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
  self.addDate = function() {
    $timeout(function() {
      var arriveDate = new Date(self.schedule.utc_date.toDateString());
      var departDate = new Date(self.schedule.utc_date.toDateString());
      arriveDate.setHours(Math.floor(self.schedule.arrival_datetime / 60), self.schedule.arrival_datetime % 60, 0, 0);
      departDate.setHours(Math.floor(self.schedule.departure_datetime / 60), self.schedule.departure_datetime % 60, 0, 0);
      var newDate = {
        user_id: self.current.user.id,
        work_id: self.current.work[0].id,
        arrival_datetime: arriveDate.toISOString(),
        departure_datetime: departDate.toISOString()
      };
      scheduleService.addDate(newDate).then(function(result) {
        self.current.schedule.push(result.data.calendar);
      });
      self.schedule = workDate();
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
  self.getStat = function() {
    encouragementService.getStat().then(function(data) {
      self.stat = data;
    });
  };
  self.getStat();

  self.fixError = function() {
    console.log('fired');
    $location.hash(self.current.errorURL);
    $anchorScroll();
  };


}]);

app.directive('gaugeChart', function() {
  return {
      replace: true,
      templateUrl: '/static/js/directive/mileage-chart.html',
      scope: {
          data: '=?'
      },
      controller: ['$scope', function($scope) {
        var self = this;

        self.showHide = function() {
          self.with = !self.with;
        };
        self.cost = $scope.data;

      }],
      controllerAs: 'vm',

      link: function(scope, element, attrs, ctrl) {
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
                       return '$' + Math.round(value) + '/week';
                   },
                   min: 0,
                   max: 50,
                   unites: ' %'
               },
               max: 25,
            },
            tooltip: {
              show: false
            },
            color: {
                pattern: ['#FFF', '#FFF', '#FFF', '#FFF'], // the three color levels for the percentage values.
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


        // var cost = 0;
        // var halfCost = 50;
        var chartData;
        var dataIndex = 0;
        function setData() {
          if (!scope.data.cost) {
            setTimeout(function() {
              setData();
            }, 500);
          } else {
            chartData = [scope.data.cost, scope.data.half_cost];
            ctrl.cost = scope.data;
            toggleChartData();
          }
        }
        setData();

        function toggleChartData() {
          console.log(chartData);
          dataIndex = (dataIndex + 1) % chartData.length;
          ctrl.showHide();
          chart.load({
              columns: [['data', chartData[dataIndex]]]
          });
          scope.$apply(function() {
            setTimeout(toggleChartData, 3000);
          });
        }

    }
  };
});

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
                  console.log(scope.details);

                    var addressObj = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());

                    addressObj.address_components.forEach(function(address_comp){
                      var type = address_comp.types[0];
                      console.log(type);
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
                  { latLng: { lat: rideShare.passenger.work.latitude, lng: rideShare.passenger.work.longitude }},
                  { latLng: { lat: rideShare.driver.work.latitude, lng: rideShare.driver.work.longitude }}
                ]
              }
            });
          });
        });
      }],
      link: function(scope, element, attrs, model) {
        //  create an object for options
        var options = {
          elt: element[0],           // ID of map element on page
          zoom: 10,                                      // initial zoom level of the map
          mtype: 'map',                                  // map type (map, sat, hyb); defaults to map
          bestFitMargin: 0,                              // margin offset from map viewport when applying a bestfit on shapes
          zoomOnDoubleClick: true,
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
          self.cost.cost = self.cost.cost * 5;
          self.cost.half_cost = self.cost.half_cost * 5;
          $scope.showLevel(self.cost.cost, self.cost.half_cost);
        });

        self.with = false;

        self.showHide = function() {
          self.with = !self.with;
        };

      }],
      controllerAs: 'vm',
      link: function(scope, element, attrs, ctrl) {

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
                       return '$' + Math.floor(value) + '/week';
                   },
                   min: 0,
                   max: 50,
                   unites: ' %'
               },
               max: 25,
            },
            tooltip: {
              show: false
            },
            color: {
                pattern: ['#FFF', '#FFF', '#FFF', '#FFF'], // the three color levels for the percentage values.
                threshold: {
                   unit: 'value', // percentage is default
                   max: 50, // 100 is default
                  values: [30, 60, 90, 100]
                }
            },
        });

        // switch between values every 3 seconds
        function showLevel(cost, halfCost) {
          scope.$apply(function () {
            console.log('TOGGLING');
            ctrl.showHide();
            chart.load({
              columns: [['data', cost]]
            });
          });

          setTimeout(function () {
            scope.$apply(function () {
              ctrl.showHide();
              chart.load({
                columns: [['data', halfCost]]
              });
              setTimeout(function() {
                showLevel(cost, halfCost);
              }, 5000);
            });
          }, 5000);
        }
        scope.showLevel = showLevel;
      }
  };
});

app.directive('picker', function() {
  return {
      scope: {
          pickerType: '=?',
          details: '=?',
      },
      link: function(scope, element, attrs, model) {
        if(scope.pickerType==='date'){
          $(element).pickadate({
            // container: '#root-picker-outlet',
            formatSubmit: 'yyyy/mm/dd',
            onSet: function(submit) {
              scope.details = new Date( submit.select );
            },
            disable: [{
              from: new Date(1962-07-07),
              to: new Date()
            }]
          });
        } else if (scope.pickerType==='time') {
          $(element).pickatime({
            // container: '#root-picker-outlet',
            onSet: function(time) {
              console.log('set time');
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

}]).controller('HomeCtrl', ['$log', '$location', 'current', 'Work', '$anchorScroll', function($log, $location, current, Work, $anchorScroll){
  var self = this;
  current.page = '/';
  self.current = current;
  self.newWork = Work();

  self.register = function() {
    self.current.work = self.newWork;
    $location.path('/facebook/login');
  };

  self.showInfo = function(info) {

    $('.home-page-wrapper').animate({
      scrollTop: $('#' + info).offset().top
    }, 500);
    
  };
}]);

app.directive('footerNav', function() {

  return {

    replace: true,

    scope: {
      onclose: '='
    },

    templateUrl: '/static/js/nav/footer-nav.html',

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

    }
  };



});

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

      // if(!self.current.user.name) {
      //   $location.path('/');
      // }

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

  };
  self.editVehicle = function() {

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

app.factory('encouragementService', ['ajaxService', '$http', 'current', '$q', function(ajaxService, $http, current, $q) {

  var stats = [
    'In some cities there are HOV (High Occupancy Vehicle) lanes, which are meant to be used only by those who are carpooling and are designed to make your commute time faster.Taking the HOV lane can cut your commute time down by as much as half.',
    'An average American spends 40 hours each year stuck in traffic... Wouldn\'t it be nice to share the ride?',
    'About 51% of the people who carpoolers are in the same family and 40% of people carpool with their apartment or flat mates.',
    'As much as 77% of carpoolers ride with just one other person.',
    'The average carpooler can cut out as much as $600 each month on the cost of their commuting drive.',
    'About 78% Americans drive to work without carpooling at all, which is part of a peculiar two decade-long decrease in carpooling.',
    'The EO in RidEO is an irregular latin verb meaning- "To Go"',
    'By carpooling just twice a week, 1,600 pounds of greenhouse gases can be kept out of the air each year.',
    'If 100 people were to take advantage of the carpool option every day, more than of 1,320 pounds of carbon monoxide and 2,376,000 pounds of carbon dioxide could be removed from the air.',
    'About 18% of a person’s monthly budget it taken up in car maintenance, repairs, and gas.',
    'If you add at least one carpooler whom you split costs with, it may add 5-10 minutes onto your drive time but will reduce your bills and expenses by half; adding more people means even more savings.',
    'Carpooling means fewer cars on the road each day which means less oil usage, and this can help reduce the nation’s dependency on foreign oil.',
    'If everyone opted to carpool just one day a week, the traffic on the nation’s major highways and roads would be reduced by as much as 20%.',
    'Total percent of people who carpool with a family member - 51%',
    'Percent of people who carpool with someone that they live with  - 40%',
    'Percent of Americans who carpool - 10%',
    'Percent of people who carpool with just 1 other person - 77.3%',
    'Percent of Americans who drive to work solo - 78%',
    'Percent of traffic that would die down if everyone carpooled once a week - 20%',
    'Total amount of gas saved yearly by carpooling - 85 million gallons',
    'Total amount of miles avoided traffic every year by carpooling - 56,000 miles',
    'Total amount of money saved by carpooling every year - $1.1 billion'
  ];

  return {

    getCost: function() {
      return ajaxService.call($http.get('/api/v1/cost'));
    },
    getStat: function() {
      // return ajaxService.call($http.get('/api/v1/user/carpool'));
      var length = stats.length;
      var statIndex = Math.floor(Math.random() * length);
      return $q(function(resolve, reject) {
          resolve(stats[statIndex]);
      });
    }
  };

}]);

app.factory('workDate', [ function(){

  return function (spec) {
    spec = spec || {};
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
      departDate.setUTCDate(weekDate);
      arriveDate.setUTCDate(weekDate);
      departDate.setHours(Math.floor(spec.depart_time / 60), spec.depart_time % 60, 0, 0);
      arriveDate.setHours(Math.floor(spec.arrive_time / 60), spec.arrive_time % 60, 0, 0);
      week.push(workDate({
        user_id: current.user.id,
        work_id: spec.work_id,
        arrival_datetime: arriveDate.toISOString(),
        departure_datetime: departDate.toISOString()
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
        currentSpec.work.forEach(function(work, index) {
          if(result.data.work[index].street_number){
            work.address = result.data.work[index].street_number + ' ' + result.data.work[index].street + ' ' + result.data.work[index].city + ' ' + result.data.work[index].state + ' ' + result.data.work[index].zip_code;
          }
        });
          // currentSpec.work[0].address = undefined;
        if(currentSpec.work.length <= 0) {
          currentSpec.incomplete = true;
          currentSpec.errorMsg = 'You don\'t have a workplace. Please add one.';
          currentSpec.errorURL = 'profile';
        }
      });
    },
    getVehicles: function() {
      try {
        return vehicleService.getVehicles().then(function(result) {
          currentSpec.vehicles = result.data.vehicles;
          if(currentSpec.vehicles.length <= 0) {
            currentSpec.incomplete = true;
            currentSpec.errorMsg = 'You don\'t have a vehicle. Please add one.';
            currentSpec.errorURL = 'profile';
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
          currentSpec.errorMsg = 'You don\'t have any dates on the calendar. Please add one.';
          currentSpec.errorURL = 'dates';
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

app.factory('scheduleService', ['ajaxService', '$http', 'workDate', function(ajaxService, $http, workDate) {

  return {

    addDate: function(date) {
      return ajaxService.call($http.post('/api/v1/user/calendar', date));
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

    getUserPhoto: function(facebookID) {
      return ajaxService.call($http.get('/facebook/photo/' + facebookID));
    },

    logout: function() {
      return ajaxService.call($http.get('/api/v1/logout'));
    }

  };



}]);

app.factory('vehicleService', ['ajaxService', 'Vehicle', '$http', '$q', function(ajaxService, Vehicle, $http, $q) {

  return {

    addVehicle: function(car) {
        return ajaxService.call($http.post('/api/v1/user/vehicle', car));
    },

    getVehicles: function() {
        return ajaxService.call($http.get('/api/v1/user/vehicle')).then(function(result) {
          return $q(function(resolve, reject) {
            if(result.data.vehicles.length === 0) {
              result.data.vehicles.push(Vehicle());
              console.log(result);
              resolve(result);
            } else {
              resolve(result);
            }
          });
        });
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
        console.log(rideShare);
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
    process: function() {
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
      return $q(function(resolve,reject) {
        resolve(rideShare);
      });
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
      return $q(function(resolve, reject) {
        resolve(rideShare);
      });
    },
    getCost: function() {
      return ajaxService.call($http.get('/api/v1/'+ rideShare.carpool_id +'/carpool_cost')).then(function(results) {
        return $q(function(resolve, reject){
          resolve( rideShare.cost = results.data );
        });
      });
    }
  };
  return self;


}]);

// =======
var app=angular.module("app",["ngRoute","ngAnimate"]);app.config(["$routeProvider",function(e){e.otherwise({controller:"Error404Ctrl",controllerAs:"vm",templateUrl:"static/errors/404/error-404.html"})}]),app.controller("Error404Ctrl",["$location",function(e){this.message="Could not find: "+e.url()}]),app.config(["$routeProvider","$locationProvider",function(e){var t={templateUrl:"/static/js/dashboard/dashboard.html",controller:"dashCtrl",controllerAs:"vm"};e.when("/dashboard",t)}]).controller("dashCtrl",["$log","$location","current","workDate","userService","workService","vehicleService","scheduleService","rideShareService","encouragementService","$anchorScroll","$timeout",function(e,t,r,o,n,a,c,i,l,u,s,d){var p=this;p.current=r,p.loading=r.loading,p.weekdays=["mon","tues","wed","thurs","fri","sat","sun"],r.name&&$locaton.path("/"),p.schedule=o(),p.cost={},p.loading=!1,p.getRideShares=function(){l.getRideShares().then(function(e){p.rideShare=e,n.getUserPhoto(p.rideShare.rideo.info.facebook_id).then(function(e){p.rideShare.rideo.photo=e.data})}),l.getSingleCost().then(function(e){p.cost=e.data})},p.getRideShares(),p.rideShareResponse=function(){var e={response:p.rideShare.you.accepted};l.respond(e).then(function(){l.process().then(function(e){p.rideShare=e})})},p.editProfile=function(){t.hash("profile"),s()},p.submitted=!1,p.edit=function(){n.editUser(p.current.user).then(function(t){e.log(t)}),c.addVehicle(p.current.vehicles[0]).then(function(t){e.log(t)}),a.addWork(p.current.work[0],r.user).then(function(t){e.log(t)}),p.submitted=!0,d(function(){p.submitted=!1},3e3)},p.deleteWork=function(e,t){a.deleteWork(e).then(function(e){e&&p.current.work.splice(t,1),r.getSchedule()})},p.addDate=function(){d(function(){var e=new Date(p.schedule.utc_date.toDateString()),t=new Date(p.schedule.utc_date.toDateString());e.setHours(Math.floor(p.schedule.arrival_datetime/60),p.schedule.arrival_datetime%60,0,0),t.setHours(Math.floor(p.schedule.departure_datetime/60),p.schedule.departure_datetime%60,0,0);var r={user_id:p.current.user.id,work_id:p.current.work[0].id,arrival_datetime:e.toISOString(),departure_datetime:t.toISOString()};i.addDate(r).then(function(e){p.current.schedule.push(e.data.calendar)}),p.schedule=o()})},p.deleteDate=function(t,r){e.log(r),i.deleteDate(t).then(function(e){e&&p.current.schedule.splice(r,1)})},p.deleteVehicle=function(e,t){c.deleteVehicle(e).then(function(e){e&&p.current.vehicles.splice(t,1)})},p.getStat=function(){u.getStat().then(function(e){p.stat=e})},p.getStat(),p.fixError=function(){console.log("fired"),t.hash(p.current.errorURL),s()}}]),app.directive("gaugeChart",function(){return{replace:!0,templateUrl:"/static/js/directive/mileage-chart.html",scope:{data:"=?"},controller:["$scope",function(e){var t=this;t.showHide=function(){t["with"]=!t["with"]},t.cost=e.data}],controllerAs:"vm",link:function(e,t,r,o){function n(){e.data.cost?(i=[e.data.cost,e.data.half_cost],o.cost=e.data,a()):setTimeout(function(){n()},500)}function a(){l=(l+1)%i.length,o.showHide(),c.load({columns:[["data",i[l]]]}),e.$apply(function(){setTimeout(a,3e3)})}var c=c3.generate({bindto:t[0].querySelector(".chart"),data:{columns:[["data",0]],type:"gauge"},gauge:{label:{format:function(e){return"$"+Math.round(e)+"/week"},min:0,max:50,unites:" %"},max:25},tooltip:{show:!1},color:{pattern:["#FFF","#FFF","#FFF","#FFF"],threshold:{unit:"value",max:50,values:[30,60,90,100]}}});c.load({columns:[["data",0]]});var i,l=0;n()}}}),app.directive("googleplace",function(){return{require:"ngModel",scope:{ngModel:"=",details:"=?"},link:function(e,t,r,o){var n={types:[],componentRestrictions:{}};e.gPlace=new google.maps.places.Autocomplete(t[0],n);var a={street_number:"street_number",route:"street",locality:"city",administrative_area_level_1:"state",postal_code:"zip_code"};google.maps.event.addListener(e.gPlace,"place_changed",function(){e.$apply(function(){console.log(e.details);var r=e.gPlace.getPlace();o.$setViewValue(t.val()),r.address_components.forEach(function(t){var r=t.types[0];if(console.log(r),a[r]){var o=a[r];e.details[o]=t.long_name,console.log(e.details[o])}}),e.details.latitude=r.geometry.location.k,e.details.longitude=r.geometry.location.D,console.log(r)})})}}}),app.directive("maps",function(){return{replace:!0,scope:{details:"=?"},controller:["rideShareService","$scope",function(e,t){e.getRideShares().then(function(e){var r=e;MQA.withModule("new-route",function(){t.map.addRoute({request:{locations:[{latLng:{lat:r.driver.info.latitude,lng:r.driver.info.longitude}},{latLng:{lat:r.passenger.info.latitude,lng:r.passenger.info.longitude}},{latLng:{lat:r.passenger.work.latitude,lng:r.passenger.work.longitude}},{latLng:{lat:r.driver.work.latitude,lng:r.driver.work.longitude}}]}})})})}],link:function(e,t){var r={elt:t[0],zoom:10,mtype:"map",bestFitMargin:0,zoomOnDoubleClick:!0};e.map=new MQA.TileMap(r)}}}),app.directive("mileageChart",function(){return{replace:!0,templateUrl:"/static/js/directive/mileage-chart.html",scope:{details:"=?"},controller:["$scope","encouragementService",function(e,t){var r=this;t.getCost().then(function(t){r.cost=t.data,r.cost.cost=5*r.cost.cost,r.cost.half_cost=5*r.cost.half_cost,e.showLevel(r.cost.cost,r.cost.half_cost)}),r["with"]=!1,r.showHide=function(){r["with"]=!r["with"]}}],controllerAs:"vm",link:function(e,t,r,o){function n(t,r){e.$apply(function(){console.log("TOGGLING"),o.showHide(),a.load({columns:[["data",t]]})}),setTimeout(function(){e.$apply(function(){o.showHide(),a.load({columns:[["data",r]]}),setTimeout(function(){n(t,r)},5e3)})},5e3)}var a=c3.generate({bindto:t[0].querySelector(".chart"),data:{columns:[["data",0]],type:"gauge"},gauge:{label:{format:function(e){return"$"+Math.floor(e)+"/week"},min:0,max:50,unites:" %"},max:25},tooltip:{show:!1},color:{pattern:["#FFF","#FFF","#FFF","#FFF"],threshold:{unit:"value",max:50,values:[30,60,90,100]}}});e.showLevel=n}}}),app.directive("picker",function(){return{scope:{pickerType:"=?",details:"=?"},link:function(e,t){"date"===e.pickerType?$(t).pickadate({formatSubmit:"yyyy/mm/dd",onSet:function(t){e.details=new Date(t.select)},disable:[{from:new Date(1948),to:new Date}]}):"time"===e.pickerType&&$(t).pickatime({onSet:function(t){console.log("set time"),e.details=t.select}})}}}),app.config(["$routeProvider","$locationProvider",function(e){var t={templateUrl:"/static/js/home/home.html",controller:"HomeCtrl",controllerAs:"vm"};e.when("/",t)}]).controller("HomeCtrl",["$log","$location","current","Work","$anchorScroll",function(e,t,r,o){var n=this;r.page="/",n.current=r,n.newWork=o(),n.register=function(){n.current.work=n.newWork,t.path("/facebook/login")},n.showInfo=function(e){$(".home-page-wrapper").animate({scrollTop:$("#"+e).offset().top},500)}}]),app.directive("footerNav",function(){return{replace:!0,scope:{onclose:"="},templateUrl:"/static/js/nav/footer-nav.html",controller:["$location","StringUtil","$log","current","$scope","$rootScope","userService",function(e,t,r,o,n,a,c){var i=this;i.current=o,i.logout=function(){c.logout().then(function(){e.path("/")})},a.$on("$routeChangeSuccess",function(){i.page=e.path()}),i.isActive=function(r){return"/"===r?"/"===e.path():t.startsWith(e.path(),r)},i.goTo=function(t){e.hash(t),$anchorScroll()}}],controllerAs:"vm",link:function(){}}}),app.directive("mainNav",function(){return{replace:!0,scope:{onclose:"="},templateUrl:"/static/js/nav/main-nav.html",controller:["$location","StringUtil","$log","current","$scope","$rootScope","userService",function(e,t,r,o,n,a,c){var i=this;i.current=o,i.logout=function(){c.logout().then(function(){e.path("/")})},a.$on("$routeChangeSuccess",function(){i.page=e.path()}),i.isActive=function(r){return"/"===r?"/"===e.path():t.startsWith(e.path(),r)},i.goTo=function(t){e.hash(t),$anchorScroll()}}],controllerAs:"vm",link:function(){$(document).ready(function(){$(".js-menu-trigger, .js-menu-screen").on("click touchstart",function(e){$(".js-menu,.js-menu-screen").toggleClass("is-visible"),e.preventDefault()})})}}}),app.config(["$routeProvider","$locationProvider",function(e){var t={templateUrl:"/static/js/profile/profile.html",controller:"profileCtrl",controllerAs:"vm"};e.when("/profile",t)}]).controller("profileCtrl",["$log","$location","current","userService","workService","vehicleService","scheduleService","rideShareService",function(e,t,r,o,n,a,c){var i=this;i.current=r,r.name&&$locaton.path("/"),i.goTo=function(e){t.path(e)},i.deleteDate=function(t,r){e.log(r),c.deleteDate(t).then(function(e){e&&i.current.schedule.splice(r,1)})},i.editWork=function(){},i.editVehicle=function(){},i.deleteWork=function(e,t){n.deleteWork(e).then(function(e){e&&i.current.work.splice(t,1),r.getSchedule()})},i.deleteVehicle=function(e,t){a.deleteVehicle(e).then(function(e){e&&i.current.vehicles.splice(t,1)})}}]),app.config(["$routeProvider","$locationProvider",function(e){var t={templateUrl:"/static/js/register/register.html",controller:"registerCtrl",controllerAs:"vm"};e.when("/register",t)}]).controller("registerCtrl",["$log","$location","current","Work","Schedule","userService","workService","scheduleService","Vehicle","vehicleService","$timeout",function(e,t,r,o,n,a,c,i,l,u,s){var d=this;r.page=t.path(),d.current=r,d.newWork=o(),d.vehicle=l(),d.weekdays=["mon","tues","wed","thurs","fri","sat","sun"],d.show="register",d.editUser=function(){a.editUser(d.current.user).then(function(){d.show="work",console.log(d.newWork)})},d.addWorkFields=function(){d.addWork(),s(function(){d.addSchedule()},50)},d.addWork=function(){return d.newWork.user_id=d.current.user.id,delete d.newWork.address,c.addWork(d.newWork,r.user).then(function(e){d.show="vehicle",d.newWork=e.data.work,console.log(d.newWork)}),d.newWork},d.addSchedule=function(){d.schedule.work_id=d.newWork.id;var t=n(d.schedule);try{i.addDates(t),r.getSchedule()}catch(o){e.log(o)}},d.addVehicle=function(){u.addVehicle(d.vehicle).then(function(){d.current.vehicles.push(d.vehicle),r.getStatus(),d.editUser(),t.path("/dashboard")})},d.signup=function(){a.addUser().then(function(){})},d.fbRegister=function(){t.path("/facebook/login")}}]),app.config(["$routeProvider","$locationProvider",function(e){var t={templateUrl:"/static/js/rideshare/rideshare.html",controller:"rideCtrl",controllerAs:"vm"};e.when("/rideshare",t)}]).controller("rideCtrl",["$log","$location","current","rideShareService",function(e,t,r,o){o.getRideShares().then(function(t){e.log(t)})}]),app.factory("ajaxService",["$log",function(e){return{call:function(t){return t.then(function(e){return e})["catch"](function(t){e.log(t)})}}}]),app.factory("StringUtil",function(){return{startsWith:function(e,t){return e=e||"",e.slice(0,t.length)===t}}}),app.factory("encouragementService",["ajaxService","$http","current","$q",function(e,t,r,o){var n=["In some cities there are HOV (High Occupancy Vehicle) lanes, which are meant to be used only by those who are carpooling and are designed to make your commute time faster.Taking the HOV lane can cut your commute time down by as much as half.","An average American spends 40 hours each year stuck in traffic... Wouldn't it be nice to share the ride?","About 51% of the people who carpoolers are in the same family and 40% of people carpool with their apartment or flat mates.","As much as 77% of carpoolers ride with just one other person.","The average carpooler can cut out as much as $600 each month on the cost of their commuting drive.","About 78% Americans drive to work without carpooling at all, which is part of a peculiar two decade-long decrease in carpooling.",'The EO in RidEO is an irregular latin verb meaning- "To Go"',"By carpooling just twice a week, 1,600 pounds of greenhouse gases can be kept out of the air each year.","If 100 people were to take advantage of the carpool option every day, more than of 1,320 pounds of carbon monoxide and 2,376,000 pounds of carbon dioxide could be removed from the air.","About 18% of a person’s monthly budget it taken up in car maintenance, repairs, and gas.","If you add at least one carpooler whom you split costs with, it may add 5-10 minutes onto your drive time but will reduce your bills and expenses by half; adding more people means even more savings.","Carpooling means fewer cars on the road each day which means less oil usage, and this can help reduce the nation’s dependency on foreign oil.","If everyone opted to carpool just one day a week, the traffic on the nation’s major highways and roads would be reduced by as much as 20%.","Total percent of people who carpool with a family member - 51%","Percent of people who carpool with someone that they live with  - 40%","Percent of Americans who carpool - 10%","Percent of people who carpool with just 1 other person - 77.3%","Percent of Americans who drive to work solo - 78%","Percent of traffic that would die down if everyone carpooled once a week - 20%","Total amount of gas saved yearly by carpooling - 85 million gallons","Total amount of miles avoided traffic every year by carpooling - 56,000 miles","Total amount of money saved by carpooling every year - $1.1 billion"];return{getCost:function(){return e.call(t.get("/api/v1/cost"))},getStat:function(){var e=n.length,t=Math.floor(Math.random()*e);return o(function(e){e(n[t])})}}}]),app.factory("workDate",[function(){return function(e){return e=e||{},{user_id:e.user_id||void 0,work_id:e.work_id||void 0,arrival_datetime:e.arrival_datetime||void 0,departure_datetime:e.departure_datetime||void 0}}}]),app.factory("Schedule",["workDate","$log","current",function(e,t,r){return function(t){var o=new Date,n=7-o.getDay(),a=[],c=["mon","tues","wed","thurs","fri","sat","sun"],i=c.indexOf(t.from)||0,l=c.indexOf(t.to)||c.length-1;return c=c.slice(i,l+1),c.forEach(function(c,i){var l=o.getDate()+n+i,u=new Date,s=new Date;u.setUTCDate(l),s.setUTCDate(l),u.setHours(Math.floor(t.depart_time/60),t.depart_time%60,0,0),s.setHours(Math.floor(t.arrive_time/60),t.arrive_time%60,0,0),a.push(e({user_id:r.user.id,work_id:t.work_id,arrival_datetime:s.toISOString(),departure_datetime:u.toISOString()}))}),a}}]),app.factory("User",[function(){return function(e){return e=e||{},{name:e.name||"",email:e.email||"",paypal_id:e.paypal||"",id:e.id||"",address:e.address||"",street_number:e.street_number||"",street:e.street||"",city:e.city||"",state:e.state||"",zip_code:e.zip||"",latitude:e.lat||"",longitude:e["long"]||""}}}]),app.factory("Vehicle",[function(){return function(e){return e=e||{},{make:e.make||"",model:e.model||"",year:e.year||""}}}]),app.factory("Work",[function(){return function(e){return e=e||{},{name:e.name||"",user_id:e.user_id||"",street_number:e.street_number||"",street:e.street||"",city:e.city||"",state:e.state||"",zip_code:e.zip||void 0,latitude:e.lat||"",longitude:e["long"]||""}}}]),app.factory("current",["User","userService","$log","Work","workService","vehicleService","scheduleService","$q","rideShareService",function(e,t,r,o,n,a,c,i,l){return currentSpec={getWork:function(){return n.getWork(currentSpec.user.id).then(function(e){currentSpec.work=e.data.work,currentSpec.work.forEach(function(t,r){e.data.work[r].street_number&&(t.address=e.data.work[r].street_number+" "+e.data.work[r].street+" "+e.data.work[r].city+" "+e.data.work[r].state+" "+e.data.work[r].zip_code)}),currentSpec.work.length<=0&&(currentSpec.incomplete=!0,currentSpec.errorMsg="You don't have a workplace. Please add one.",currentSpec.errorURL="profile")})},getVehicles:function(){try{return a.getVehicles().then(function(e){currentSpec.vehicles=e.data.vehicles,currentSpec.vehicles.length<=0&&(currentSpec.incomplete=!0,currentSpec.errorMsg="You don't have a vehicle. Please add one.",currentSpec.errorURL="profile")})}catch(e){r.log(e)}},getSchedule:function(){return currentSpec.loading=!1,c.getSchedule().then(function(e){currentSpec.schedule=e.data.calendars,currentSpec.schedule.length<=0?(currentSpec.incomplete=!0,currentSpec.errorMsg="You don't have any dates on the calendar. Please add one.",currentSpec.errorURL="dates"):currentSpec.schedule=c.processDates(currentSpec.schedule)})},getRideShares:function(){return l.getRideShares().then(function(e){currentSpec.rideShares=e})},getStatus:function(){return i.all([currentSpec.getWork(),currentSpec.getVehicles(),currentSpec.getSchedule()])},vehicles:[],work:[],schedule:[]},currentSpec.user=e(),currentSpec.loading=!0,t.getCurrent().then(function(e){200===e.status?(currentSpec.user=e.data.user,currentSpec.user.address=e.data.user.street_number+" "+e.data.user.street+" "+e.data.user.city+" "+e.data.user.state+" "+e.data.user.zip_code,t.getPhoto().then(function(e){currentSpec.photo=e.data}),currentSpec.getStatus().then(function(){currentSpec.loading=!1})):r.log("sorry bra, no user")}),currentSpec}]),app.factory("scheduleService",["ajaxService","$http","workDate",function(e,t){return{addDate:function(r){return e.call(t.post("/api/v1/user/calendar",r))},addDates:function(r){r.forEach(function(r){console.log(r),e.call(t.post("/api/v1/user/calendar",r))})},editDate:function(r){e.call(t.put("/api/v1/user/calendar",r))},getSchedule:function(){return e.call(t.get("api/v1/user/calendar"))},deleteDate:function(r){return e.call(t["delete"]("api/v1/user/calendar/"+r.id))},processDates:function(e){return e.forEach(function(e){e.arrive=new Date(e.arrival_datetime),e.depart=new Date(e.departure_datetime)}),e}}}]),app.factory("userService",["ajaxService","$http","$q",function(e,t){return{addUser:function(r){return e.call(t.post("/api/v1/user",r))},editUser:function(r){return e.call(t.put("/api/v1/user",r))},getCurrent:function(){return e.call(t.get("/api/v1/me"))},getPhoto:function(){return e.call(t.get("/facebook/photo"))},getUserPhoto:function(r){return e.call(t.get("/facebook/photo/"+r))},logout:function(){return e.call(t.get("/api/v1/logout"))}}}]),app.factory("vehicleService",["ajaxService","Vehicle","$http","$q",function(e,t,r,o){return{addVehicle:function(t){return e.call(r.post("/api/v1/user/vehicle",t))},getVehicles:function(){return e.call(r.get("/api/v1/user/vehicle")).then(function(e){return o(function(r){0===e.data.vehicles.length?(e.data.vehicles.push(t()),console.log(e),r(e)):r(e)})})},deleteVehicle:function(t){return e.call(r["delete"]("/api/v1/user/vehicle/"+t.id))}}}]),app.factory("workService",["ajaxService","$http",function(e,t){return{addWork:function(r,o){return e.call(t.post("/api/v1/users/"+o.id+"/work",r))},editWork:function(r,o){return e.call(t.put("/api/v1/user/"+o,r))},getWork:function(){return e.call(t.get("api/v1/users/work"))},deleteWork:function(r){return e.call(t["delete"]("api/v1/user/work/"+r.id))}}}]),app.factory("rideShareService",["ajaxService","$http","$q",function(e,t,r){var o,n={getRideShares:function(){return void 0!==o?r(function(e){e(o)}):e.call(t.get("/api/v1/user/carpool")).then(function(e){return o=e.data.carpool,n.process(),r(function(t){t(e.data.carpool)})})},respond:function(r){return r.carpool_id=o.carpool_id,e.call(t.post("/api/v1/user/carpool",r))},process:function(){return n.getStatus(),o.driver.info.id===currentSpec.user.id?(o.role="driver",o.you=n.isConfirmed(o.driver),o.rideo=n.isConfirmed(o.passenger)):(o.role="passenger",o.you=n.isConfirmed(o.passenger),o.rideo=n.isConfirmed(o.driver)),r(function(e){e(o)})},isConfirmed:function(e){return e.status=e.accepted===!0?"confirmed":e.accepted===!1?"declined":"unconfirmed",e},getStatus:function(){return o.status=o.driver.accepted===!0&&o.passenger.accepted===!0?"confirmed":o.driver.accepted===!1&&o.passenger.accepted===!1?"declined":"pending",r(function(e){e(o)})},getCost:function(){return e.call(t.get("/api/v1/"+o.carpool_id+"/carpool_cost")).then(function(e){return r(function(t){t(o.cost=e.data)})})},getSingleCost:function(){return e.call(t.get("/api/v1/cost"))}};return n}]);
// >>>>>>> 2f9a1778a85dfce3df14b4f8698679707e7cc778
//# sourceMappingURL=app.js.map