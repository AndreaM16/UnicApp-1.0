 myApp.controller("CalendarController", [ "$scope", "$http",function($scope,$http){

 	$scope.initGetRequestCalendar = function(){
 		$http.get('data/mainPages/calendarJSON.json').success(function(data){
 			
 			$scope.data=data;

 		})

 	}
 }]);