myApp.controller('InfoController', ["$scope","$http",function($scope,$http){
   	
   	$http.get('data/mainPages/infoJSON.json').success(function(data){

   		$scope.data=data;


   	})
   	
  }]);
