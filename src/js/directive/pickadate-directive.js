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
