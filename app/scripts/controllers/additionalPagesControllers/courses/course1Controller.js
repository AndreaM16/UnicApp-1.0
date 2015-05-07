myApp.controller('course1Controller', function($scope, $http){
	
	$scope.initGetRequestCourse1 = function(){
		$http.get('data/otherPages/courses/course1JSON.json').success(function(data){

			$scope.data=data;

		})
	}
});