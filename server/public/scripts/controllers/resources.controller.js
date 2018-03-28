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

    
    if (self.bpResourceOne != '') {
      self.bpone = true;
    } else if (self.bpResourceTwo != '') {
      self.bptwo = true;
    }

    if (self.hdlResourceOne != '') {
      self.hdlone = true;
    } else if (self.hdlResourceTwo != '') {
      self.hdltwo = true;
    }

    if (self.ldlResourceOne != '') {
      self.ldlone = true;
    } else if (self.ldlResourceTwo != '') {
      self.ldltwo = true;
    }

    if (self.gluResourceOne != '') {
      self.gluone = true;
    } else if (self.gluResourceTwo != '') {
      self.glutwo = true;
    }

    if (self.sleepResourceOne != '') {
      self.sleepone = true;
    } 

    if (self.nicotineResourceOne != '') {
      self.nicotineone = true;
    } 

    if (self.activityResourceOne != '') {
      self.activityone = true;
    } 

    if (self.waistResourceOne != '') {
      self.waistone = true;
    } 


  }]);