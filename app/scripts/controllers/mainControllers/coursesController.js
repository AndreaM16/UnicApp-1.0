 
myApp.controller("CoursesController", ["$scope","$http",function($scope, $http){

	$scope.initGetRequestCourses = function(){
		$http.get('http://localhost/courses.json?r=<%= session.getId()%').success(function(data){
			
			$scope.data=data;

		})
	}
}]);
