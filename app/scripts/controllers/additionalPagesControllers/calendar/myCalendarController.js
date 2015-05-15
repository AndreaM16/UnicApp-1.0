myApp.controller("myCalendarController", ["$scope","$http", function($scope,$http){
	
	$scope.initGetRequestMyCalendar = function(){
		$http.get('http://localhost/myCalendar.json').success(function(data){


			$scope.data=data;

		})	
	}
}]);