myApp.controller("futureEventsController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestFutureEvents = function(){
		$http.get('data/otherPages/events/futureEventsJSON.json').success(function(data){

			$scope.data=data;
		})
	}
}]);