myApp.controller("calendarTimeController", ["$scope","$http", function($scope, $http){

		$scope.initGetRequestCalendarTime = function(){
		$http.get('http://localhost/calendarTime.json?r=<%= session.getId()%').success(function(data){


			$scope.data=data;

		})	

		}
}]);