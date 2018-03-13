myApp.controller('ResourcesController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('ResourcesController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;
  }]);