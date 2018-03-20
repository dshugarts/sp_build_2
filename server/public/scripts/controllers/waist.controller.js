myApp.controller('WaistController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('WaistController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.waistValuesArray = PostDataService.waistValuesArray;
    self.reportPage = PostDataService.reportPage;
    self.waistScore = PostDataService.waistScore;
  


    console.log('GCAA', self.waistScore);


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.waistScore[0], self.waistScore[1], self.waistScore[2], self.waistScore[3], self.waistScore[4]],
              label: "Waist Size (in.)",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Waist Size Readings Over Time',
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