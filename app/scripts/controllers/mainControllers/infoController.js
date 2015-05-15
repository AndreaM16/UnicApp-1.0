myApp.controller('InfoController', ["$scope","$http",function($scope,$http){
	
	$scope.initGetRequestInfo = function(){   	
		$http.get('http://localhost/info.json').success(function(data){

			$scope.data=data;


		})
	}
}]);
