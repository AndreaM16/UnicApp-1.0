myApp.controller('course1Controller', function($scope, $http){
	
	$scope.initGetRequestCourse1 = function(){
		$http.get('http://localhost/course1.json?r=<%= session.getId()%').success(function(data){

			$scope.data=data;

		})
	}
});