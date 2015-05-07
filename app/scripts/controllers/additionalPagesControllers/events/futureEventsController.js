myApp.controller("futureEventsController", ["$scope","$http",function($scope,$http){

	$http.get('data/otherPages/events/futureEventsJSON.json').success(function(data){

		$scope.data=data;
	})
	
}]);