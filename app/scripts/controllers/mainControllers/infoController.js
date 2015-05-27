myApp.controller('InfoController', ["$scope","$http",function($scope,$http){
	
	$scope.initGetRequestInfo = function(){   	
		$http.get('http://localhost/info.json?r=<%= session.getId()%').success(function(data){

			$scope.data=data;


		})
	}
}]);
