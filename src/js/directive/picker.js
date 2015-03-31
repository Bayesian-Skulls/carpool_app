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
