myApp.controller("myCalendarController", ["$scope","$http", function($scope,$http){
		

		$http.get('data/otherPages/myCalendarJSON.json').success(function(data){


			$scope.data=data;

		})	
}]);