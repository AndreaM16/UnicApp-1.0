myApp.controller("calendarTimeController", ["$scope","$http", function($scope, $http){

		$scope.initGetRequestCalendarTime = function(){
		$http.get('data/otherPages/calendarTimeJSON.json').success(function(data){


			$scope.data=data;

		})	

		}
}]);