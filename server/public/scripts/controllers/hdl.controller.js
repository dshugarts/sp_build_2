myApp.controller('HDLController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('HDLController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.hdlValuesArray = PostDataService.hdlValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.hdlScore = PostDataService.hdlScore;
  


    console.log('HDLCAA', self.hdlScore);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.hdlScore[0], self.hdlScore[1], self.hdlScore[2], self.hdlScore[3], self.hdlScore[4]],
              label: "HDL",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My HDL Readings Over Time',
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