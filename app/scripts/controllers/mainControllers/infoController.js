myApp.controller('InfoController', ["$scope","$http",function($scope,$http){
	
	$scope.initGetRequestInfo = function(){   	
		$http.get('data/mainPages/infoJSON.json').success(function(data){

			$scope.data=data;


		})
	}
}]);
