myApp.controller('ReportController', ['$http', '$location', 'UserService', 'DataService', 'PostDataService', function($http, $location, UserService, DataService, PostDataService) {
    console.log('ReportController created');
    var self = this;
    self.userService = UserService;
    self.DataService = DataService;
    self.PostDataService = PostDataService;
    self.getGluData = PostDataService.getGluData;
    self.getHdlData = PostDataService.getHdlData;
    self.getLdlData = PostDataService.getLdlData;
    self.getTrgData = PostDataService.getTrgData;
    self.getHeartHealthData = PostDataService.getHeartHealthData;
    self.getWaistData = PostDataService.getWaistData;
    self.getSleepData = PostDataService.getSleepData;
    self.getWeightData = PostDataService.getWeightData;
    self.getBpData = PostDataService.getBpData;
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.getAllReportData = DataService.getAllReportData;
    self.ageReport = DataService.ageReport;
    self.bpReport = DataService.bpReport;
    self.hdlReport = DataService.hdlReport;
    self.ldlReport = DataService.ldlReport;
    self.gluReport = DataService.gluReport;

  }]);