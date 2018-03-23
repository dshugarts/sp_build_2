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
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/report', {
      templateUrl: '/views/templates/report.html',
      controller: 'ReportController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/resources', {
      templateUrl: '/views/templates/resources.html',
      controller: 'ResourcesController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/update', {
      templateUrl: '/views/templates/update.html',
      controller: 'UpdateController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/modify', {
      templateUrl: '/views/templates/modify.html',
      controller: 'ModifyController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
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
    .when('/new', {
      templateUrl: '/views/templates/new.html',
      controller: 'NewController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/data', {
      templateUrl: '/views/templates/data.html',
      controller: 'DataController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/scoreChart', {
      templateUrl: '/views/templates/scoreChart.html',
      controller: 'ScoreChartController as vm',
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
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hdl', {
      templateUrl: '/views/charts/hdl.html',
      controller: 'HDLController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/ldl', {
      templateUrl: '/views/charts/ldl.html',
      controller: 'LDLController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/trg', {
      templateUrl: '/views/charts/trg.html',
      controller: 'TRGController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/hearthealth', {
      templateUrl: '/views/charts/hearthealth.html',
      controller: 'HeartHealthController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/waist', {
      templateUrl: '/views/charts/waist.html',
      controller: 'WaistController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/sleep', {
      templateUrl: '/views/charts/sleep.html',
      controller: 'SleepController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/weight', {
      templateUrl: '/views/charts/weight.html',
      controller: 'WeightController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bp', {
      templateUrl: '/views/charts/bp.html',
      controller: 'BPController as vm',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      template: '<h1>404</h1>'
    });
}]);
