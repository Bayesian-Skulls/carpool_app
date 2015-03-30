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
          console.log(self.cost);
          self.cost.cost = self.cost.cost * 5;
          self.cost.half_cost = self.cost.half_cost * 5;
          console.log(self.cost);
          $scope.showLevel(self.cost.cost, self.cost.half_cost);
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
                       return '$' + Math.floor(value);
                   },
                   min: 0,
                   max: 50,
                   unites: ' %'
               },
            },
            tooltip: {
              show: false
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
              columns: [['data', cost]]
          });
          setTimeout(function () {
            chart.load({
                columns: [['data', halfCost]]
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
