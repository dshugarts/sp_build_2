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

  console.log('user controller: ', self.id);

  self.getData(self.id);
 console.log('controller', self.myScore);


  new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["My Heart Health", "Risk Factor Score"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["Green", "Red"],
          data: [self.myScore, (20 - self.myScore)]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'My Risk Level for Cardiovascular Disease'
      }
    }
});

}]);
