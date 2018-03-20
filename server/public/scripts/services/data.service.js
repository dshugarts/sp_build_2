myApp.service('DataService', ['$http', '$location', function($http, $location){
    console.log('DataService Loaded');
    var self = this;
    self.newEntry = {};
    self.entryObject = {};
    self.entryObject = {list: []};
    self.dataArray = [];
    self.myScore = '';
    self.pScore = '';

    self.postData = function(entry) {
        console.log(entry);
        $http({
            method: 'POST',
            url: '/data',
            data: {entry: entry}
        }).then(function (response) {
            console.log(response);
            $location.url('/user');
            self.newEntry = {};
        }).catch(function (error) {
            console.log('post error', error);
        })
    }

    self.getData = function(id){
        console.log('HHHHH', id);
        $http({
          method: 'GET',
          url: `/data/${id}`
        }).then(function(response){
          console.log('response', response.data);
          self.dataArray = response.data;
          self.myScore = self.dataArray[0].cvd_score;
          self.pScore = ((self.myScore/20)*100) + "%";
          console.log('DS myScore ', self.myScore);
        }).catch(function(error){
          console.log('Error getting data', error);
        })
      } //end getData

    self.addEntry = function(newEntry, id) {
        console.log(newEntry, id);
        console.log('age value = ', newEntry.gender, newEntry.age_value);
        console.log('waist value = ', newEntry.waist_value);
        console.log('glu value = ', newEntry.glu_value);
        console.log('HDL = ', newEntry.hdl_value);
        console.log('LDL = ', newEntry.ldl_value);
        console.log('nicotine value = ', newEntry.nicotine_value);
        console.log('sleep value = ', newEntry.sleep_value);
        console.log('family history value = ', newEntry.family_history_value);
        console.log('blood pressure value = ', newEntry.systolic_value + "/" + newEntry.diastolic_value);
        console.log('physical activity total = ', newEntry.physical_activity_value);
        
    let glu_score = 0;
    if (newEntry.glu_value >= 100 && newEntry.glu_value < 126) {
        glu_score = 1;
    } else if (newEntry.glu_value < 100) {
        glu_score = 2;
    } else {
        glu_score = 0;
    } // end glu score if
    console.log('glu_score = ', glu_score);
    
    let nicotine_score = 0;
    if (newEntry.nicotine_value === "false") {
        nicotine_score = 2;
    } else {
        nicotine_value = 0;
    } // end nicotine if
    console.log('nicotine score = ', nicotine_score);
   
    let sleep_score = 0;
    if (newEntry.sleep_value >= 7) {
        sleep_score = 2;
    } else {
        sleep_score = 0;
    } // end sleep if
    console.log('sleep score = ', sleep_score);

    let family_history_score = 0;
    if (newEntry.family_history_value === "false") {
        family_history_score = 2;
    } else {
        family_history_score = 0;
    } // end family history if
    console.log('family history score = ', family_history_score);

    let bp_score = 0;
    if ((newEntry.systolic_value < 160 && newEntry.systolic_value > 139) || (newEntry.diastolic_value <100 && newEntry.diastolic_value > 89)) {
        bp_score = 1;
    } else if (newEntry.systolic_value < 140 && newEntry.diastolic_value < 90) {
        bp_score = 2;
    } else {
        bp_score = 0;
    } // end bp score
    console.log('bp score = ', bp_score);

    let physical_activity_score = 0;
    if (newEntry.physical_activity_value >= 150) {
        physical_activity_score = 2;
    } else {
        physical_activity_score = 0;
    } // end activity score if
    console.log('physical activity score = ', physical_activity_score);

    let age_score = 0;
    if ((newEntry.age_value < 45 && newEntry.gender === "M") || (newEntry.age_value < 55 && newEntry.gender === "F")) {
        age_score = 2;
    } else {
        age_score = 0;
    } // end age score if
    console.log('age score = ', age_score);

    let waist_score = 0;
    if ((newEntry.waist_value < 40 && newEntry.gender === "M") || (newEntry.waist_value < 35 && newEntry.gender === "F")) {
        waist_score = 2;
    } else {
        waist_score = 0;
    } // end waist score if
    console.log('waist score = ', waist_score);

    let hdl_score = 0;
    if (newEntry.hdl_value > 59) {
        hdl_score = 2;
    } else if ((newEntry.hdl_value < 60 && newEntry.hdl_value > 40 && newEntry.gender === "M") || (newEntry.hdl_value < 60 && newEntry.hdl_value > 50 && newEntry.gender === "F")) {
        hdl_score = 1;
    } else {
        hdl_score = 0;
    } // end hdl score if
    console.log('hdl score = ', hdl_score);

    let ldl_score = 0;
    if (newEntry.ldl_value < 100) {
        ldl_score = 2; 
    } else if (newEntry.ldl_value > 99 && newEntry.ldl_value < 130) {
        ldl_score = 1;
    } else {
        ldl_score = 0;
    } // end ldl score if
    console.log('ldl score = ', ldl_score);

    let cvd_score = 0;
    cvd_score += age_score;
    cvd_score += waist_score;
    cvd_score += bp_score;
    cvd_score += hdl_score;
    cvd_score += ldl_score;
    cvd_score += glu_score;
    cvd_score += physical_activity_score;
    cvd_score += sleep_score;
    cvd_score += nicotine_score;
    cvd_score += family_history_score;
    console.log('TOTAL CVD SCORE = ', cvd_score);

    let now_data_date = new Date();
    
    entryObject = {
        id: id,
        data_date: now_data_date,
        age_value: newEntry.age_value,
        family_history_value: newEntry.family_history_value,
        physical_activity_value: newEntry.physical_activity_value,
        systolic_value: newEntry.systolic_value,
        diastolic_value: newEntry.diastolic_value,
        nicotine_value: newEntry.nicotine_value,
        glu_value: newEntry.glu_value,
        hdl_value: newEntry.hdl_value,
        ldl_value: newEntry.ldl_value,
        trg_value: newEntry.trg_value,
        waist_value: newEntry.waist_value,
        sleep_value: newEntry.sleep_value,
        height_value: newEntry.height_value,
        weight_value: newEntry.weight_value,
        gender: newEntry.gender,
        age_score: age_score,
        physical_activity_score: physical_activity_score,
        family_history_score: family_history_score,
        bp_score: bp_score,
        nicotine_score: nicotine_score,
        glu_score: glu_score,
        hdl_score: hdl_score,
        ldl_score: ldl_score,
        waist_score: waist_score,
        sleep_score: sleep_score,
        cvd_score: cvd_score
    } // end entryObject

    self.postData(entryObject);

    } // end addEntry





}]);