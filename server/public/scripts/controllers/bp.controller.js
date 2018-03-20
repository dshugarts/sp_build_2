myApp.controller('BPController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('BPController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.bpValuesArray = PostDataService.bpValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.systolicScore = PostDataService.systolicScore;
    self.diastolicScore = PostDataService.diastolicScore;
  


    console.log('GCAA', self.systolicScore);
    console.log('GCAA', self.diastolicScore);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.systolicScore[0], self.systolicScore[1], self.systolicScore[2], self.systolicScore[3], self.systolicScore[4]],
              label: "Systolic Pressure",
              borderColor: "crimson",
              fill: false
            }, { 
              data: [self.diastolicScore[0], self.diastolicScore[1], self.diastolicScore[2], self.diastolicScore[3], self.diastolicScore[4]],
              label: "Diastolic Pressure",
              borderColor: "blue",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Blood Pressure Readings Over Time',
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