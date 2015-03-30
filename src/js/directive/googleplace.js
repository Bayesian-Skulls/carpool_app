app.directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            var addressValues = {
              'street_number': 'street_number',
              'route': 'street',
              'locality': 'city',
              'administrative_area_level_1': 'state',
              'postal_code': 'zip_code'
            };

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                  console.log(scope.details);

                    var addressObj = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());

                    addressObj.address_components.forEach(function(address_comp){
                      var type = address_comp.types[0];
                      console.log(type);
                      if (addressValues[type]) {
                        var add_field = addressValues[type];
                        scope.details[add_field] = address_comp.long_name;
                        console.log(scope.details[add_field]);
                      }
                    });

                    scope.details.latitude = addressObj.geometry.location.k;
                    scope.details.longitude = addressObj.geometry.location.D;
                    console.log(addressObj);
                });
            });
        }
    };
});
