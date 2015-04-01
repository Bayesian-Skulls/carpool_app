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
