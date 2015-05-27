myApp.controller("myCalendarController", ["$scope","$http", function($scope,$http){
	
	$scope.initGetRequestMyCalendar = function(){
		$http.get('http://localhost/myCalendar.json?r=<%= session.getId()%').success(function(data){


			$scope.data=data;

		})	
	}
}]);