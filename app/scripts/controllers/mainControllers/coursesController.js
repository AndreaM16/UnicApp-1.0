 
myApp.controller("CoursesController", ["$scope","$http",function($scope, $http){

	$scope.initGetRequestCourses = function(){
		$http.get('data/mainPages/coursesJSON.json').success(function(data){
			
			$scope.data=data;

		})
	}
}]);
