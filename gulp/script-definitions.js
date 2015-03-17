// This is where any explicit script odering should
// be declared.
module.exports = {
  app: [
    './src/app.js',
    './src/**/!(init.js).js',
    './src/init.js'
  ],

  vendor: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-animate/angular-animate.min.js'
  ]
};
