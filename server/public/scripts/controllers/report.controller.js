myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.myScore = DataService.myScore;
    self.pScore = DataService.pScore;

  
  }]);