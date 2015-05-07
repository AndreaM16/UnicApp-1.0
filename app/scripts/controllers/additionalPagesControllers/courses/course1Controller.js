myApp.controller('course1Controller', function($scope, $http){
	
	$http.get('data/otherPages/courses/course1JSON.json').success(function(data){

		$scope.data=data;

	})
	
});