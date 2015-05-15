myApp.controller("calendarTimeController", ["$scope","$http", function($scope, $http){

		$scope.initGetRequestCalendarTime = function(){
		$http.get('http://localhost/calendarTime.json').success(function(data){


			$scope.data=data;

		})	

		}
}]);