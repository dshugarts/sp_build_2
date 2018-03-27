myApp.service('PostDataService', ['$http', '$location', function($http, $location){
    console.log('PostDataService Loaded');
    var self = this;
    self.chartValuesArray = [];
    self.gluValuesArray = [];
    self.gluScore = [];
    self.activityValuesArray = [];
    self.activityScore = [];
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
    self.dateArray = [];
    self.dates = [];
    self.bmiValuesArray = [];
    self.bmiScoreArray = [];
    self.bmiScore = '';
    self.bmiScoreUse = '';


    self.reportPage = function() {
      $location.url('/aaa');
    } // end reportPage


    self.getGluData = function(id){
      self.gluScore = [];
      self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/glu/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.gluValuesArray = response.data;
          for (item of self.gluValuesArray) {
          self.gluScore.push(item.glu_value);
          self.dates.push(item.data_date);
          }
          console.log('PDS myScore ', self.gluValuesArray);
          console.log('glu axis', self.gluScore);
        }).then(function(response) {
          $location.url('/glucose');
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getaGluData

      self.getActivityData = function(id){
        self.ActivityScore = [];
        self.dates = [];
          console.log('PDS', id);
          $http({
            method: 'GET',
            url: `/data/activity/${id}`
          }).then(function(response){
            console.log('response', response.data);
            self.activityValuesArray = response.data;
            for (item of self.activityValuesArray) {
            self.activityScore.push(item.physical_activity_value);
            self.dates.push(item.data_date);
            }
            console.log('PDS activity array ', self.activityValuesArray);
            console.log('activity axis', self.activityScore);
          }).then(function(response) {
            $location.url('/activity');
          }).catch(function(error){
            console.log('Error getting data', error);
          })
        } //end getActivityData

        self.getbmiData = function(id){
          self.bmiScore = '';
          self.dates = [];
            console.log('PDS', id);
            $http({
              method: 'GET',
              url: `/data/bmi/${id}`
            }).then(function(response){
              console.log('response', response.data);
              self.bmiValuesArray = response.data;
              for (item of self.bmiValuesArray) {
                self.bmiScore = 0;
                self.bmiScore += ((item.weight_value)/(item.height_value*item.height_value)*703);
                self.bmiScoreUse = Math.round((self.bmiScore *10)/10);
                console.log('BMI SCORE = ', bmiScoreUse); 
              self.bmiScoreArray.push(self.bmiScoreUse);
              self.dates.push(item.data_date);
              }
              console.log('PDS activity array ', self.bmiValuesArray);
              console.log('bmi axis', self.bmiScore);
            }).then(function(response) {
              $location.url('/bmi');
            }).catch(function(error){
              console.log('Error getting data', error);
            })
          } //end getbmiData

      self.getHdlData = function(id){
        self.hdlScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/hdl/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.hdlValuesArray = response.data;
          for (item of self.hdlValuesArray) {
          self.hdlScore.push(item.hdl_value);
          self.dates.push(item.data_date);
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
        self.ldlScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/ldl/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.ldlValuesArray = response.data;
          for (item of self.ldlValuesArray) {
          self.ldlScore.push(item.ldl_value);
          self.dates.push(item.data_date);
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
        self.trgScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/trg/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.trgValuesArray = response.data;
          for (item of self.trgValuesArray) {
          self.trgScore.push(item.trg_value);
          self.dates.push(item.data_date);
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
        self.heartHealthScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/hearthealth/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.heartHealthValuesArray = response.data;
          for (item of self.heartHealthValuesArray) {
          self.heartHealthScore.push(item.cvd_score);
          self.dates.push(item.data_date);
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
        self.waistScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/waist/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.waistValuesArray = response.data;
          for (item of self.waistValuesArray) {
          self.waistScore.push(item.waist_value);
          self.dates.push(item.data_date);
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
        self.sleepScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/sleep/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.sleepValuesArray = response.data;
          for (item of self.sleepValuesArray) {
          self.sleepScore.push(item.sleep_value);
          self.dates.push(item.data_date);
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
        self.weightScore = [];
        self.dates = [];
        console.log('PDS', id);
        $http({
          method: 'GET',
          url: `/data/weight/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.weightValuesArray = response.data;
          for (item of self.weightValuesArray) {
          self.weightScore.push(item.weight_value);
          self.dates.push(item.data_date);
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
        self.systolicScore = [];
        self.diastolicScore = [];
        self.dates = [];
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
          self.dates.push(item.data_date);
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

}]);