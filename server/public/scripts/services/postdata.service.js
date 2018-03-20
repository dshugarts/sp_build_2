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
    self.trgValuesArray = [];
    self.trgScore = [];
    self.heartHealthValuesArray = [];
    self.heartHealthScore = [];
    self.waistValuesArray = [];
    self.waistScore = [];
    self.sleepValuesArray = [];
    self.sleepScore = [];
    self.weightValuesArray = [];
    self.weightScore = [];
    self.bpValuesArray = [];
    self.systolicScore = [];
    self.diastolicScore = [];

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
      } //end getLDLData

      self.getTrgData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/trg/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.trgValuesArray = response.data;
          for (item of self.trgValuesArray) {
          self.trgScore.push(item.trg_value);
          }
          console.log('PDS myScore ', self.trgValuesArray);
          console.log('trg axis', self.trgScore);
        }).then(function(response) {
          $location.url('/trg');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getTRGData

      self.getHeartHealthData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/hearthealth/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.heartHealthValuesArray = response.data;
          for (item of self.heartHealthValuesArray) {
          self.heartHealthScore.push(item.cvd_score);
          }
          console.log('PDS myScore ', self.heartHealthValuesArray);
          console.log('heart health axis', self.heartHealthScore);
        }).then(function(response) {
          $location.url('/hearthealth');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getHeartHealthData

      self.getWaistData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/waist/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.waistValuesArray = response.data;
          for (item of self.waistValuesArray) {
          self.waistScore.push(item.waist_value);
          }
          console.log('PDS myScore ', self.waistValuesArray);
          console.log('waist axis', self.waistScore);
        }).then(function(response) {
          $location.url('/waist');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getWaistData

      self.getSleepData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/sleep/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.sleepValuesArray = response.data;
          for (item of self.sleepValuesArray) {
          self.sleepScore.push(item.sleep_value);
          }
          console.log('PDS myScore ', self.sleepValuesArray);
          console.log('sleep axis', self.sleepScore);
        }).then(function(response) {
          $location.url('/sleep');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getSleepData

      self.getWeightData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/weight/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.weightValuesArray = response.data;
          for (item of self.weightValuesArray) {
          self.weightScore.push(item.weight_value);
          }
          console.log('PDS myScore ', self.weightValuesArray);
          console.log('weight axis', self.weightScore);
        }).then(function(response) {
          $location.url('/weight');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getWeightData

      self.getBpData = function(id){
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/bp/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.bpValuesArray = response.data;
          for (item of self.bpValuesArray) {
          self.systolicScore.push(item.systolic_value);
          self.diastolicScore.push(item.diastolic_value);
          }
          console.log('PDS myScore ', self.bpValuesArray);
          console.log('systolic axis', self.systolicScore);
          console.log('diastolic axis', self.diastolicScore);
        }).then(function(response) {
          $location.url('/bp');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getBPData
    
    self.getChartData = function(id) {
      console.log('hi');
    }

}]);