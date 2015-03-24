app.directive('mileageChart', function() {
  return {
      // require: 'ngModel',
      replace: true,
      templateUrl: '/static/js/directive/mileage-chart.html',
      scope: {
          // ngModel: '=',
          // pickerType: '=?',
          // details: '=?'
      },
      link: function(scope, element, attrs, model) {
        var chart = c3.generate({
          bindto: element[0],
          data: {
            columns: [
              ['MILES/WEEK', 259, 130],
              // ['DOLLARS', 27, 13]
            ],

            type: 'bar'
          },
          axis: {
            x: {
              tick: {
                format: function (d) {
                  var labels = ['SOLO', 'RIDESHARE'];
                  return labels[d % labels.length];
                }
              }
            }
          },
          color: {
            pattern: ['#FFF', '#aaa']
          }
        });
      }
  };
});
