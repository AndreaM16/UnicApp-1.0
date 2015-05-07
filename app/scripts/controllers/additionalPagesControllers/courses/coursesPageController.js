myApp.controller("coursesPageController", ["$scope","$http",function($scope,$http){

	$http.get('data/otherPages/courses/coursesPageJSON.json').success(function(data){

		$scope.data=data;

	})
	
}]);