app.directive('upcoming', function() {
  return {
      require: 'ngModel',
      replace: true,

      scope: {
          ngModel: '=',
          details: '=?'
      },
      controller: ['$scope', 'current', function($scope, current) {
        var self = this;
      }],
      link: function(scope, element, model, ctrl) {
        if(scope.pickerType==='date'){
          $(element).pickadate({
            formatSubmit: 'yyyy/mm/dd'
          });
        } else if (scope.pickerType==='time') {
          $(element[0]).pickatime();
        }
      }
  };
});
