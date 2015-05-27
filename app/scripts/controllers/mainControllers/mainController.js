  myApp.controller('MainController', ["$scope","$http", function($scope,$http){

  	
  	$scope.initGetRequestMain = function(){
  		
  		$http.get('http://localhost/main.json?r=<%= session.getId()%').success(function(data){

  			$scope.data=data;
  		

  		})
  	}
  }]);