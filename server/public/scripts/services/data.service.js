myApp.service('DataService', ['$http', '$location', function($http, $location){
    console.log('DataService Loaded');
    var self = this;
    self.newEntry = {};
    self.entryObject = {};
    self.entryObject = {list: []};
    self.dataArray = [];
    self.myScore = '';
    self.pScore = '';
    self.allReportDataArray = [];
    self.allResourceDataArray = [];
    self.resourceArray = [];
    self.ageReport = '';
    self.bpReport = '';
    self.hdlReport = '';
    self.ldlReport = '';
    self.gluReport = '';
    self.waistReport = '';
    self.historyReport = '';
    self.activityReport = '';
    self.nicotineReport = '';
    self.sleepReport = '';
    self.trgReport = '';
    self.bmiReport = '';
    self.hhsReport = '';

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
          self.getAllReportData(self.dataArray);
          self.getAllResourceData(self.dataArray);
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
    

    self.getAllReportData = function(data){
        console.log('PDS', data);
        $http({
          method: 'GET',
          url: `/data/reports/${data.id}`
        }).then(function(response){
          console.log('response All Data', data);
          self.allReportDataArray = response.data;
          console.log('ALL JOIN DATA ', self.allReportDataArray);

          if (data[0].age_score === 2) {
              self.ageReport = self.allReportDataArray[0].category_description;
          } else if (data[0].age_score === 0) {
              self.ageReport = self.allReportDataArray[1].category_description;
          }

          if (data[0].bp_score === 2) {
              self.bpReport = self.allReportDataArray[2].category_description;
          } else if (data[0].bp_score === 1) {
              self.bpReport = self.allReportDataArray[3].category_description;
          } else if (data[0].bp_score === 0) {
              self.bpReport = self.allReportDataArray[4].category_description;
          }

          if (data[0].hdl_score === 2) {
            self.hdlReport = self.allReportDataArray[5].category_description;
        } else if (data[0].hdl_score === 1) {
            self.hdlReport = self.allReportDataArray[6].category_description;
        } else if (data[0].hdl_score === 0) {
            self.hdlReport = self.allReportDataArray[7].category_description;
        }

        if (data[0].ldl_score === 2) {
            self.ldlReport = self.allReportDataArray[8].category_description;
        } else if (data[0].ldl_score === 1) {
            self.ldlReport = self.allReportDataArray[9].category_description;
        } else if (data[0].ldl_score === 0) {
            self.ldlReport = self.allReportDataArray[10].category_description;
        }

        if (data[0].glu_score === 2) {
            self.gluReport = self.allReportDataArray[11].category_description;
        } else if (data[0].glu_score === 1) {
            self.gluReport = self.allReportDataArray[12].category_description;
        } else if (data[0].glu_score === 0) {
            self.gluReport = self.allReportDataArray[13].category_description;
        }

        if (data[0].waist_score === 2) {
            self.waistReport = self.allReportDataArray[14].category_description;
        } else if (data[0].waist_score === 0) {
            self.waistReport = self.allReportDataArray[15].category_description;
        }

        if (data[0].family_history_score === 2) {
            self.historyReport = self.allReportDataArray[16].category_description;
        } else if (data[0].family_history_score === 0) {
            self.historyReport = self.allReportDataArray[17].category_description;
        }

        if (data[0].physical_activity_score === 2) {
            self.activityReport = self.allReportDataArray[18].category_description;
        } else if (data[0].physical_activity_score === 0) {
            self.activityReport = self.allReportDataArray[19].category_description;
        }

        if (data[0].nicotine_score === 2) {
            self.nicotineReport = self.allReportDataArray[20].category_description;
        } else if (data[0].nicotine_score === 0) {
            self.nicotineReport = self.allReportDataArray[21].category_description;
        }

        if (data[0].sleep_score === 2) {
            self.sleepReport = self.allReportDataArray[22].category_description;
        } else if (data[0].sleep_score === 0) {
            self.sleepReport = self.allReportDataArray[23].category_description;
        }

        if (data[0].trg_value < 150) {
            self.trgReport = self.allReportDataArray[24].category_description;
        } else if (data[0].trg_value > 149 && data[0].trg_value < 201) {
            self.trgReport = self.allReportDataArray[25].category_description;
        } else if (data[0].trg_value > 200) {
            self.trgReport = self.allReportDataArray[26].category_description;
        }

        let bmiScore = 0;
        bmiScore = ((data[0].weight_value)/(data[0].height_value*data[0].height_value)*703);
        bmiScoreUse = Math.round((bmiScore *10)/10);
        console.log('BMI SCORE = ', bmiScoreUse);

        if (bmiScoreUse < 25) {
            self.bmiReport = self.allReportDataArray[27].category_description;
        } else if (bmiScoreUse > 24.99 && bmiScoreUse < 30) {
            self.bmiReport = self.allReportDataArray[28].category_description;
        } else if (bmiScoreUse > 29.99) {
            self.bmiReport = self.allReportDataArray[29].category_description;
        }

        if (data[0].cvd_score === 20) {
            self.hhsReport = self.allReportDataArray[30].category_description;
        } else if (data[0].cvd_score === 19) {
            self.hhsReport = self.allReportDataArray[31].category_description;
        } else if (data[0].cvd_score === 18) {
            self.hhsReport = self.allReportDataArray[32].category_description;
        } else if (data[0].cvd_score === 17) {
            self.hhsReport = self.allReportDataArray[33].category_description;
        } else if (data[0].cvd_score === 16) {
            self.hhsReport = self.allReportDataArray[34].category_description;
        } else if (data[0].cvd_score === 15) {
            self.hhsReport = self.allReportDataArray[35].category_description;
        } else if (data[0].cvd_score === 14) {
            self.hhsReport = self.allReportDataArray[36].category_description;
        } else if (data[0].cvd_score === 13) {
            self.hhsReport = self.allReportDataArray[37].category_description;
        } else if (data[0].cvd_score === 12) {
            self.hhsReport = self.allReportDataArray[38].category_description;
        } else if (data[0].cvd_score === 11) {
            self.hhsReport = self.allReportDataArray[39].category_description;
        } else if (data[0].cvd_score === 10) {
            self.hhsReport = self.allReportDataArray[40].category_description;
        } else if (data[0].cvd_score === 9) {
            self.hhsReport = self.allReportDataArray[41].category_description;
        } else if (data[0].cvd_score === 8) {
            self.hhsReport = self.allReportDataArray[42].category_description;
        } else if (data[0].cvd_score === 7) {
            self.hhsReport = self.allReportDataArray[43].category_description;
        } else if (data[0].cvd_score === 6) {
            self.hhsReport = self.allReportDataArray[44].category_description;
        } else if (data[0].cvd_score === 5) {
            self.hhsReport = self.allReportDataArray[45].category_description;
        } else if (data[0].cvd_score === 4) {
            self.hhsReport = self.allReportDataArray[46].category_description;
        } else if (data[0].cvd_score === 3) {
            self.hhsReport = self.allReportDataArray[47].category_description;
        } else if (data[0].cvd_score === 2) {
            self.hhsReport = self.allReportDataArray[48].category_description;
        } else if (data[0].cvd_score === 1) {
            self.hhsReport = self.allReportDataArray[49].category_description;
        } else if (data[0].cvd_score === 0) {
            self.hhsReport = self.allReportDataArray[50].category_description;
        }

          console.log('HHS REPORT = ', self.hhsReport);
          console.log('AGE REPORT = ', self.ageReport);
          console.log('BP REPORT = ', self.bpReport);
          console.log('HDL REPORT = ', self.hdlReport);
          console.log('LDL REPORT = ', self.ldlReport);
          console.log('GLU REPORT = ', self.gluReport);
          console.log('WAIST REPORT = ', self.waistReport);
          console.log('HISTORY REPORT = ', self.historyReport);
          console.log('ACTIVITY REPORT = ', self.activityReport);
          console.log('NICOTINE REPORT = ', self.nicotineReport);
          console.log('SLEEP REPORT = ', self.sleepReport);
          console.log('TRG REPORT = ', self.trgReport);
          console.log('BMI REPORT = ', self.bmiReport);
        }).catch(function(error){
          console.log('Error getting data', error);
        })
        
      } //end getAllReportData

      self.getAllReportData = function(data){
        console.log('PDS', data);
        $http({
          method: 'GET',
          url: `/data/resources/${data.id}`
        }).then(function(response){
          console.log('response All Data', data);
          self.allResourceDataArray = response.data;
          console.log('ALL RESOURCE DATA ', self.allResourceDataArray);
        }).catch(function(error){
            console.log('Error getting data', error);
          })
          
          





        } //end getAllResourceData

}]);