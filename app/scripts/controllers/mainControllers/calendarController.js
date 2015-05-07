 myApp.controller("CalendarController", [ "$scope", "$http",function($scope,$http){

 	$http.get('data/mainPages/calendarJSON.json').success(function(data){
        
        $scope.data=data;

    })

          
  }]);