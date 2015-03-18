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

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    var addressObj = scope.gPlace.getPlace();
                    model.$setViewValue(element.val());
                    scope.details.city = addressObj.address_components[3].long_name;
                    scope.details.state = addressObj.address_components[6].long_name;
                    scope.details.street_number = addressObj.address_components[0].long_name;
                    scope.details.street = addressObj.address_components[1].long_name;
                    scope.details.zip = addressObj.address_components[8].long_name;
                    scope.details.lat = addressObj.geometry.location.k;
                    scope.details.long = addressObj.geometry.location.D;
                });
            });
        }
    };
});
