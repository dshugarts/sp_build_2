myApp.controller('SleepController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('SleepController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.sleepValuesArray = PostDataService.sleepValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.sleepScore = PostDataService.sleepScore;
  


    console.log('GCAA', self.sleepScore);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.sleepScore[0], self.sleepScore[1], self.sleepScore[2], self.sleepScore[3], self.sleepScore[4]],
              label: "Sleep (hrs/night)",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Sleep Readings Over Time',
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