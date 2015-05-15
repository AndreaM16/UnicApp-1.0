myApp.controller('course1Controller', function($scope, $http){
	
	$scope.initGetRequestCourse1 = function(){
		$http.get('http://localhost/course1.json').success(function(data){

			$scope.data=data;

		})
	}
});