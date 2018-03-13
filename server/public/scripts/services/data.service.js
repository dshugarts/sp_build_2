myApp.service('DataService', ['$http', '$location', function($http, $location){
    console.log('DataService Loaded');
    var self = this;
    self.newEntry = {};
    self.entryObject = {list: []};

    self.addEntry = function(newEntry, username) {
        console.log(newEntry, username);
        console.log('glu value = ', newEntry.glu_value);
        console.log('nicotine value = ', newEntry.nicotine_value);
        console.log('sleep value = ', newEntry.sleep_value);
        console.log('family history value = ', newEntry.family_history_value);
        console.log('blood pressure value = ', newEntry.systolic_value + "/" + newEntry.diastolic_value);
        
    let glu_score = 0;
    if (newEntry.glu_value >= 100 && newEntry.glu_value < 120) {
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





    } // end addEntry




}]);