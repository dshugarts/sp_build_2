myApp.controller('GlucoseController', ['$http', '$location', 'UserService', 'DataService', function($http, $location, UserService, DataService) {
    console.log('GlucoseController created');
    var self = this;
    self.userService = UserService;
    self.dataService = DataService
    self.userObject = UserService.userObject;
    self.id = UserService.userObject.id;


    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
          labels: ['Q3 - 2015', 'Q4 - 2015', 'Q1 - 2016'],
          datasets: [{ 
              data: [110, 90, 80],
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