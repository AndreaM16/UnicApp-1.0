myApp.controller("course2Controller", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestCourse2 = function(){
		$http.get('http://localhost/course2.json').success(function(data){

			$scope.data=data;
		})
	}
}]);