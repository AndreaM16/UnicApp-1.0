myApp.controller("futureEventsController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestFutureEvents = function(){
		$http.get('http://localhost/futureEvents.json?r=<%= session.getId()%').success(function(data){

			$scope.data=data;
		})
	}
}]);