myApp.service('PostDataService', ['$http', '$location', function($http, $location){
    console.log('PostDataService Loaded');
    var self = this;
    self.chartValuesArray = [];
    self.gluValuesArray = [];
    self.gluScore = [];
    self.hdlValuesArray = [];
    self.hdlScore = [];
    self.ldlValuesArray = [];
    self.ldlScore = [];

    self.reportPage = function() {
      $location.url('/report');
    } // end reportPage


    self.getGluData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/glu/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.gluValuesArray = response.data;
          for (item of self.gluValuesArray) {
          self.gluScore.push(item.glu_value);
          }
          console.log('PDS myScore ', self.gluValuesArray);
          console.log('glu axis', self.gluScore);
        }).then(function(response) {
          $location.url('/glucose');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getaGluData

      self.getHdlData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/hdl/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.hdlValuesArray = response.data;
          for (item of self.hdlValuesArray) {
          self.hdlScore.push(item.hdl_value);
          }
          console.log('PDS myScore ', self.hdlValuesArray);
          console.log('hdl axis', self.hdlScore);
        }).then(function(response) {
          $location.url('/hdl');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getHDLData

      self.getLdlData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/ldl/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.ldlValuesArray = response.data;
          for (item of self.ldlValuesArray) {
          self.ldlScore.push(item.ldl_value);
          }
          console.log('PDS myScore ', self.ldlValuesArray);
          console.log('ldl axis', self.ldlScore);
        }).then(function(response) {
          $location.url('/ldl');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getHDLData
    
    self.getChartData = function(id) {
      console.log('hi');
    }

}]);