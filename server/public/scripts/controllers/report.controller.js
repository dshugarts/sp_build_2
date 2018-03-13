myApp.controller('ReportController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);