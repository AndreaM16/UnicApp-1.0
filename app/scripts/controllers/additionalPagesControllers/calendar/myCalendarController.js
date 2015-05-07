myApp.controller("myCalendarController", ["$scope","$http", function($scope,$http){
	
	$scope.initGetRequestMyCalendar = function(){
		$http.get('data/otherPages/myCalendarJSON.json').success(function(data){


			$scope.data=data;

		})	
	}
}]);