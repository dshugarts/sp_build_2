myApp.controller('UpdateController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('UpdateController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;

    self.newEntry = DataService.newEntry;
    self.entryObject = DataService.entryObject;
    self.id = UserService.userObject.id;
    console.log(self.id);
    self.addEntry = DataService.addEntry;




  }]);
  