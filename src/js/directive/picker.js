app.directive('picker', function() {
  return {
      scope: {
          pickerType: '=?',
          details: '=?',
      },
      link: function(scope, element, attrs, model) {
        if(scope.pickerType==='date'){
          $(element).pickadate({
            formatSubmit: 'yyyy/mm/dd',
            onSet: function(submit) {
              scope.details = new Date( submit.select );
            }
          });
        } else if (scope.pickerType==='time') {
          $(element).pickatime({
            onSet: function(time) {
              console.log('set time');
              scope.details = time.select;
            }
          });
        }
      }
  };
});
