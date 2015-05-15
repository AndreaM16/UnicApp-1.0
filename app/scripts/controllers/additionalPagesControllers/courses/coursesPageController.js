myApp.controller("coursesPageController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestCoursesPage = function(){
		$http.get('http://localhost/coursesPage.json').success(function(data){

			$scope.data=data;

		})
	}
}]);