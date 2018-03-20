myApp.controller('LDLController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('LDLController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.ldlValuesArray = PostDataService.ldlValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.ldlScore = PostDataService.ldlScore;
  


    console.log('GCAA', self.ldlScore);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.ldlScore[0], self.ldlScore[1], self.ldlScore[2], self.ldlScore[3], self.ldlScore[4]],
              label: "LDL",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My LDL Readings Over Time',
            position: 'bottom'
          },
          legend: {
              position: 'bottom'
          },
          layout: {
            padding: {
              top: 10
            }
          }
        }
      });

}]);