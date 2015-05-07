
myApp.controller('DocumentsController', ["$scope","$http", function($scope, $http){

	$scope.initGetRequestDocuments = function(){
		$http.get('data/mainPages/documentsJSON.json').success(function(data){

			$scope.data=data;
		})
	}
}]);
