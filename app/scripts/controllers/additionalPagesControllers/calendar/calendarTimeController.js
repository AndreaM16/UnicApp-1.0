myApp.controller("calendarTimeController", ["$scope","$http", function($scope, $http){

		$http.get('data/otherPages/calendarTimeJSON.json').success(function(data){


			$scope.data=data;

		})	

	
}]);