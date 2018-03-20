myApp.controller('GlucoseController', ['$http', '$location', 'UserService', 'PostDataService', function($http, $location, UserService, PostDataService) {
    console.log('GlucoseController created');
    var self = this;
    self.userService = UserService;
    self.postdataService = PostDataService;
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;
    self.getDates = PostDataService.getDates;
    self.datesArray = PostDataService.datesArray;
    self.gluScore = PostDataService.gluScore;
  


    console.log('GCAA', self.gluScore);

    
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: [1, 2, 3, 4, 5],
          datasets: [{ 
              data: [self.gluScore[0], self.gluScore[1], self.gluScore[2], self.gluScore[3], self.gluScore[4]],
              label: "Glucose",
              borderColor: "crimson",
              fill: false
            }]
        },
        options: {
          title: {
            display: true,
            text: 'My Glucose Readings Over Time'
          }

        }
      });

}]);