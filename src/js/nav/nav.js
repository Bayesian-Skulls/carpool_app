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
