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
  

 var data = {
  labels: [
    "My Heart Health Level"
  ],
  datasets: [
    {
      data: [self.myScore, (20-self.myScore)],
      backgroundColor: [
        "Green",
        "White"
      ],
      hoverBackgroundColor: [
        "lightgreen",
        "White"
      ]
    }]
};

var chart = new Chart(document.getElementById('doughnut-chart'), {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    tooltips: {enabled: false},
    hover: {mode: null},
    title: {
      display: true,
      text: 'How Healthy is My Heart?'
    }
  }
});


}]);
