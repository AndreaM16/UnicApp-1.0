
myApp.controller('DocumentsController', ["$scope","$http", function($scope, $http){

	$scope.initGetRequestDocuments = function(){
		$http.get('http://localhost/documents.json').success(function(data){

			$scope.data=data;
		})
	}
}]);
