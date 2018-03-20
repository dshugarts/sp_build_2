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
    .when('/hdl', {
      templateUrl: '/views/charts/hdl.html',
      controller: 'HDLController as vm',
    })
    .when('/ldl', {
      templateUrl: '/views/charts/ldl.html',
      controller: 'LDLController as vm',
    })
    .when('/trg', {
      templateUrl: '/views/charts/trg.html',
      controller: 'TRGController as vm',
    })
    .when('/hearthealth', {
      templateUrl: '/views/charts/hearthealth.html',
      controller: 'HeartHealthController as vm',
    })
    .when('/waist', {
      templateUrl: '/views/charts/waist.html',
      controller: 'WaistController as vm',
    })
    .when('/sleep', {
      templateUrl: '/views/charts/sleep.html',
      controller: 'SleepController as vm',
    })
    .when('/weight', {
      templateUrl: '/views/charts/weight.html',
      controller: 'WeightController as vm',
    })
    .when('/bp', {
      templateUrl: '/views/charts/bp.html',
      controller: 'BPController as vm',
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
