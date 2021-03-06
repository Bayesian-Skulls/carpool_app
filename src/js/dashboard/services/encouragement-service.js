app.factory('encouragementService', ['ajaxService', '$http', 'current', '$q', function(ajaxService, $http, current, $q) {

  var stats = [
    'In some cities there are HOV (High Occupancy Vehicle) lanes, which are meant to be used only by those who are carpooling and are designed to make your commute time faster.Taking the HOV lane can cut your commute time down by as much as half.',
    'An average American spends 40 hours each year stuck in traffic... Wouldn\'t it be nice to share the ride?',
    'About 51% of the people who carpoolers are in the same family and 40% of people carpool with their apartment or flat mates.',
    'As much as 77% of carpoolers ride with just one other person.',
    'The average carpooler can cut out as much as $600 each month on the cost of their commuting drive.',
    'About 78% Americans drive to work without carpooling at all, which is part of a peculiar two decade-long decrease in carpooling.',
    'The EO in RidEO is an irregular latin verb meaning- "To Go"',
    'By carpooling just twice a week, 1,600 pounds of greenhouse gases can be kept out of the air each year.',
    'If 100 people were to take advantage of the carpool option every day, more than of 1,320 pounds of carbon monoxide and 2,376,000 pounds of carbon dioxide could be removed from the air.',
    'About 18% of a person’s monthly budget it taken up in car maintenance, repairs, and gas.',
    'If you add at least one carpooler whom you split costs with, it may add 5-10 minutes onto your drive time but will reduce your bills and expenses by half; adding more people means even more savings.',
    'Carpooling means fewer cars on the road each day which means less oil usage, and this can help reduce the nation’s dependency on foreign oil.',
    'If everyone opted to carpool just one day a week, the traffic on the nation’s major highways and roads would be reduced by as much as 20%.',
    'Total percent of people who carpool with a family member - 51%',
    'Percent of people who carpool with someone that they live with  - 40%',
    'Percent of Americans who carpool - 10%',
    'Percent of people who carpool with just 1 other person - 77.3%',
    'Percent of Americans who drive to work solo - 78%',
    'Percent of traffic that would die down if everyone carpooled once a week - 20%',
    'Total amount of gas saved yearly by carpooling - 85 million gallons',
    'Total amount of miles avoided traffic every year by carpooling - 56,000 miles',
    'Total amount of money saved by carpooling every year - $1.1 billion'
  ];

  return {

    getCost: function() {
      return ajaxService.call($http.get('/api/v1/cost'));
    },
    getStat: function() {
      // return ajaxService.call($http.get('/api/v1/user/carpool'));
      var length = stats.length;
      var statIndex = Math.floor(Math.random() * length);
      return $q(function(resolve, reject) {
          resolve(stats[statIndex]);
      });
    }
  };

}]);
