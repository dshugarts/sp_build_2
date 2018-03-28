myApp.controller('ResourcesController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
  //  console.log('ResourcesController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.userObject = UserService.userObject;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.getAllResourceData = DataService.getAllResourceData;
    self.bpResourceOne = DataService.bpResourceOne;
    self.bpResourceTwo = DataService.bpResourceTwo;
    self.hdlResourceOne = DataService.hdlResourceOne;
    self.hdlResourceTwo = DataService.hdlResourceTwo;
    self.ldlResourceOne = DataService.ldlResourceOne;
    self.ldlResourceTwo = DataService.ldlResourceTwo;
    self.gluResourceOne = DataService.gluResourceOne;
    self.gluResourceTwo = DataService.gluResourceTwo;
    self.sleepResourceOne = DataService.sleepResourceOne;
    self.nicotineResourceOne = DataService.nicotineResourceOne;
    self.activityResourceOne = DataService.activityResourceOne;
    self.waistResourceOne = DataService.waistResourceOne;


  }]);