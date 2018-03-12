myApp.controller('UpdateController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('UpdateController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);
  