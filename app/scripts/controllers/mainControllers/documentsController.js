
  myApp.controller('DocumentsController', ["$scope","$http", function($scope, $http){

  	$http.get('data/mainPages/documentsJSON.json').success(function(data){

  		$scope.data=data;
  	})

  }]);
