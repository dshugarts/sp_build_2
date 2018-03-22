myApp.controller('ModifyController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('ModifyController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;
    self.dataArray = DataService.dataArray;
    self.newEntry = DataService.newEntry;
    self.entryObject = DataService.entryObject;
    self.id = UserService.userObject.id;
    console.log(self.id);
    self.addEntry = DataService.addEntry;
    self.newNicotine = self.dataArray[0].nicotine_value.toString();
    self.newHistory = self.dataArray[0].family_history_value.toString();
    console.log('DA', self.dataArray);
    console.log('nicotine = ', self.newNicotine);
    console.log('gender = ', self.dataArray[0].gender);
    console.log('history = ', self.newHistory);


    self.dataView = function() {
        $location.url('/data');
      }

      self.editData = function(data){
        data.editing = true;
      }

      self.cancelUpdate = function(data){
        data.editing = false;
      }
  }]);