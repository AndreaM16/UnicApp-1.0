myApp.controller("calendarPlaceController", ["$scope", "$http", function($scope, $http){

	$scope.initGetRequestCalendarPlace = function(){
		$http.get('http://localhost/calendarPlace.json?r=<%= session.getId()%').success(function(data){


			$scope.data=data;

		})
	}
	
}]);