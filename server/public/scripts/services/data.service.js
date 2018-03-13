myApp.service('DataService', ['$http', '$location', function($http, $location){
    console.log('DataService Loaded');
    var self = this;
    self.newEntry = {};
    self.entryObject = {list: []};

    self.addEntry = function(newEntry, name) {
        console.log(newEntry, name);
        console.log(newEntry.glu_value);
    let glu_score = 0;
    if (newEntry.glu_value >= 100 && newEntry.glu_value < 120) {
        glu_score = 1;
    } else if (newEntry.glu_value >= 120) {
        glu_score = 2;
    } // end glu score if
        console.log('glu_score = ', glu_score);
   
    } // end addEntry




}]);