app.directive('gaugeChart', function() {
  return {
      replace: true,
      templateUrl: '/static/js/directive/mileage-chart.html',
      scope: {
          data: '=?'
      },
      controller: ['$scope', function($scope) {
        var self = this;

        self.showHide = function() {
          self.with = !self.with;
        };
        self.cost = $scope.data;

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
                       return '$' + Math.round(value) + '/week';
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

        chart.load({
            columns: [['data', 0]]
        });


        var chartData;
        var dataIndex = 0;
        function setData() {
          if (!scope.data.cost) {
            setTimeout(function() {
              setData();
            }, 500);
          } else {
            chartData = [scope.data.cost, scope.data.half_cost];
            ctrl.cost = scope.data;
            toggleChartData();
          }
        }
        setData();

        function toggleChartData() {
          dataIndex = (dataIndex + 1) % chartData.length;
          ctrl.showHide();
          chart.load({
              columns: [['data', chartData[dataIndex]]]
          });
          scope.$apply(function() {
            setTimeout(toggleChartData, 3000);
          });
        }

    }
  };
});
