 myApp.controller("FullmapController", ["$scope","$http",function($scope,$http){

 	$http.get('data/otherPages/infos/fullMapJSON.json').success(function(data){

 		$scope.data=data;
 	})
          
  }]);