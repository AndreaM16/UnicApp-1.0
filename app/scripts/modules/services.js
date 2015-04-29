
myApp.factory('sharedProperties', [function () {
        var gotClicked = '';

        return {
            getProperty: function() {
                return gotClicked;
            },
            setProperty: function(value) {
                gotClicked = value;
                return gotClicked;
            }
        };
    }]);

/*
 angular.module('bi.services')
.factory('bi.AccessService', [function(){
 var accessMap = {};
 
 return {
  setAccessMap: function(newAccessMap){ accessMap = newAccessMap; },
  getAccessMap: function(){ return accessMap; },
  
 }
}]);*/