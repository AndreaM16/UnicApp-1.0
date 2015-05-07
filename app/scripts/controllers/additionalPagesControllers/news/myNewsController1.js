myApp.controller("myNewsController1", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestMyNews1 = function(){
		$http.get('data/otherPages/news/myNew1JSON.json').success(function(data){

			$scope.data=data;
		})
	}
	
}]);