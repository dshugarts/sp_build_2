var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('myApp -- config')
  $routeProvider
    .when('/', {
      redirectTo: 'home'
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as vm',
    })
    .when('/report', {
      templateUrl: '/views/templates/report.html',
      controller: 'ReportController as vm',
    })
    .when('/resources', {
      templateUrl: '/views/templates/resources.html',
      controller: 'ResourcesController as vm',
    })
    .when('/update', {
      templateUrl: '/views/templates/update.html',
      controller: 'UpdateController as vm',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/glucose', {
      templateUrl: '/views/charts/glucose.html',
      controller: 'GlucoseController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
