myApp.service('PostDataService', ['$http', '$location', function($http, $location){
    console.log('PostDataService Loaded');
    var self = this;
    self.datesArray = [];
    self.gluScore = [];


    self.getGluData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/dates/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.datesArray = response.data;
          for (item of self.datesArray) {
          self.gluScore.push(item.glu_value);
          }
          console.log('PDS myScore ', self.datesArray);
          console.log('axis', self.gluScore);
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getDates

    self.reportPage = function() {
      $location.url('/report');
    }

}]);