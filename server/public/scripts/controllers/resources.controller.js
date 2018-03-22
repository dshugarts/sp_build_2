myApp.controller('ResourcesController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('ResourcesController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.userObject = UserService.userObject;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.getAllResourceData = DataService.getAllResourceData;
    self.resourceArray = DataService.resourceArray;




  }]);