myApp.controller("futureEventsController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestFutureEvents = function(){
		$http.get('http://localhost/futureEvents.json').success(function(data){

			$scope.data=data;
		})
	}
}]);