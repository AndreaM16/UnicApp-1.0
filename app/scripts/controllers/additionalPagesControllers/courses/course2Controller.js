myApp.controller("course2Controller", ["$scope","$http",function($scope,$http){

	$http.get('data/otherPages/courses/course2JSON.json').success(function(data){

		$scope.data=data;
	})
	
}]);