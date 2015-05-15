 myApp.controller("FullmapController", ["$scope","$http",function($scope,$http){

 	$scope.initGetRequestFullMap = function(){
 		$http.get('http://localhost/fullMap.json').success(function(data){

 			$scope.data=data;
 		})
 	}
 }]);