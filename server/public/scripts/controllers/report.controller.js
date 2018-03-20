myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', 'PostDataService', function($http, $location, UserService, DataService, PostDataService) {
    console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.PostDataService = PostDataService;
    self.getGluData = PostDataService.getGluData;
    self.getHdlData = PostDataService.getHdlData;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;



  }]);