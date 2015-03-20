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

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    var addressObj = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());
                    scope.details.city = addressObj.address_components[3].long_name;
                    scope.details.state = addressObj.address_components[6].long_name;
                    scope.details.street_number = addressObj.address_components[0].long_name;
                    scope.details.street = addressObj.address_components[1].long_name;
                    scope.details.zip = addressObj.address_components[8].long_name;
                    scope.details.lat = addressObj.geometry.location.k;
                    scope.details.long = addressObj.geometry.location.D;
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
    templateUrl: '/static/js/dashboard/dashboard.html',
    controller: 'dashCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/dashboard', routeOptions);

}]).controller('dashCtrl', ['$log', '$location', 'currentUser', 'userService',
      function($log, $location, currentUser, userService){

  var self = this;
  self.currentUser = currentUser;

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

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var routeOptions = {
    templateUrl: '/static/js/home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/', routeOptions);

}]).controller('HomeCtrl', ['$log', '$location', 'currentUser', 'Work', function($log, $location, currentUser, Work){
  var self = this;

  self.currentUser = currentUser;
  self.newWork = Work();

  self.register = function() {
    self.currentUser.work = self.newWork;
    $location.path('/register');
  };
}]);

app.directive('mainNav', function() {

  return {

    replace: true,

    scope: {
      onclose: '='
    },

    templateUrl: '/static/js/nav/main-nav.html',

    controller: ['$location', 'StringUtil', '$log', 'currentUser', '$scope', '$rootScope',
    function($location, StringUtil, $log, currentUser, $scope, $rootScope) {
      var self = this;

      self.isActive = function (path) {

        if (path === '/') {
          return $location.path() === '/';
        }
        return StringUtil.startsWith($location.path(), path);
      };

      self.currentUser = currentUser;

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
    templateUrl: '/static/js/register/register.html',
    controller: 'registerCtrl',
    controllerAs: 'vm'
  };
  $routeProvider.when('/register', routeOptions);

}]).controller('registerCtrl', ['$log', '$location', 'currentUser', 'Work', 'Schedule', 'userService',
      function($log, $location, currentUser, Work, Schedule, userService){

  var self = this;
  self.currentUser = currentUser;
  self.newWork = Work();
  self.schedule = Schedule();
  console.log(self.schedule);

  self.signup = function() {
    userService.addUser().then(function() {

    });
  };

  self.fbRegister = function() {
    $location.path('/facebook/login');
  };

}]);

app.factory('currentUser', ['User', 'userService', function(User, userService) {

  // userService.getCurrent(function(data){
  //   console.log(data);
  // });

  return User();

}]);

app.factory('ajaxService', ['$log', function($log) {

  return {
    call: function(p) {
      return p.then(function (result) {
        return result.data;
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
    spec = spec || {};
    return {
      user_id: spec.user_id || undefined,
      work_id: spec.work_id || undefined,
      arrival_datetime: spec.arrival_datetime || undefined,
      departure_datetime: spec.departure_datetime || undefined
    };
  };
}]);

app.factory('Schedule', ['workDate','$log', function(workDate, $log){

  return function (spec) {
    spec = spec || {};
    var today = new Date();
    var dateOffset = 7 - today.getDay();
    var week = [];
    var weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
    weekdays.forEach(function(day, index) {
      var weekDate = today.getDate() + dateOffset + index;
      var isoDate = new Date();
      isoDate.setDate(weekDate);
      week.push(workDate());
      week[index].day = day;
      week[index].iso = isoDate.toISOString();
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

app.factory('Vehicle', [function(){

  return function (spec) {
    spec = spec || {};
    return {
      id: spec.id || '',
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
      street_address: spec.street_address || '',
      street_number: spec.street_number || '',
      street: spec.street || '',
      city: spec.city || '',
      state: spec.state || '',
      zip: spec.zip || undefined,
      lat: spec.lat || '',
      long: spec.long || ''
    };
  };

}]);

app.factory('userService', ['ajaxService', '$http', function(ajaxService, $http) {

  return {

    addUser: function(user) {
        return ajaxService.call($http.post('/api/v1/user/' + user.user_id, user));
    },

    editUser: function() {
      return ajaxService.call($http.post('/api/v1/user/' + user.user_id, user));
    },

    getCurrent: function() {
      return ajaxService.call($http.get('/api/v1/me'));
    }

  };



}]);


//# sourceMappingURL=app.js.map