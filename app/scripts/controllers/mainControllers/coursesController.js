 
myApp.controller("CoursesController", ["$scope","$http",function($scope, $http){

	$scope.initGetRequestCourses = function(){
		$http.get('http://localhost/courses.json').success(function(data){
			
			$scope.data=data;

		})
	}
}]);
