myApp.controller("coursesPageController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestCoursesPage = function(){
		$http.get('http://localhost/coursesPage.json?r=<%= session.getId()%').success(function(data){

			$scope.data=data;

		})
	}
}]);