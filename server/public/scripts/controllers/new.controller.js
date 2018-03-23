myApp.controller('NewController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('NewController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.getData = DataService.getData;
    self.id = UserService.userObject.id;
    self.myScore = DataService.myScore;
    self.pScore = DataService.pScore;
    self.letPass = DataService.letPass;
    console.log('user controller: ', self.id);
  
  self.getData(self.id);
   console.log('controller', self.myScore);

}]);