myApp.controller("calendarPlaceController", ["$scope", "$http", function($scope, $http){

		$http.get('data/otherPages/calendarPlaceJSON.json').success(function(data){


			$scope.data=data;

		})
	
}]);