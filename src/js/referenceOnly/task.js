app.factory('Task', function() {
  var date = new Date();
  return function(spec) {
    spec = spec || {};
    return {
      title: spec.title || '',
      status: 'new',
      date_due: date.toISOString().slice(0, 10)
    };
  };
});
