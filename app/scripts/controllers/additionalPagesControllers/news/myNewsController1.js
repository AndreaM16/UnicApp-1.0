myApp.controller("myNewsController1", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestMyNews1 = function(){
		$http.get('http://localhost/myNew1.json').success(function(data){

			$scope.data=data;
		})
	}
	
}]);