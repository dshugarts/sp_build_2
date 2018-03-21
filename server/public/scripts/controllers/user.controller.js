myApp.controller('UserController', ['UserService', 'DataService', function(UserService, DataService) {
  console.log('UserController created');
  var self = this;
  self.userService = UserService;
  self.DataService = DataService;
  self.userObject = UserService.userObject;
  self.dataArray = DataService.dataArray;
  self.getData = DataService.getData;
  self.id = UserService.userObject.id;
  self.myScore = DataService.myScore;
  self.pScore = DataService.pScore;

  console.log('user controller: ', self.id);

self.getData(self.id);
 console.log('controller', self.myScore);
  
 const sectors = [{
  color : "red",
      lo : 0,
      hi : 7
                },{
      color : "gold",
      lo : 8,
      hi : 14
    },{
      color : "#008000",
      lo : 15,
      hi : 20
    }];

  var g = new JustGage({
    id: "gauge",
    value: self.myScore,
    min: 0,
    max: 20,
    customSectors: sectors,
    pointer: true,
    title: "My Heart Health Score",
    label: "Healthy Points Earned"
  });


}]);
