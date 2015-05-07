  myApp.controller('MainController', ["$scope","$http", function($scope,$http){

  	$scope.initGetRequestMain = function(){
  		$http.get('data/mainPages/mainJSON.json').success(function(data){

  			$scope.data=data;

  		})
  	}
  }]);