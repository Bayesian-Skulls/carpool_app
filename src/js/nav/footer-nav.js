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
