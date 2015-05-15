 myApp.controller("CalendarController", [ "$scope", "$http",function($scope,$http){

 	$scope.initGetRequestCalendar = function(){
 		$http.get('http://localhost/calendar.json').success(function(data){
 			
 			$scope.data=data;

 		})

 	}
 }]);