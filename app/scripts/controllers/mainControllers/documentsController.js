
myApp.controller('DocumentsController', ["$scope","$http", function($scope, $http){

	$scope.initGetRequestDocuments = function(){
		$http.get('http://localhost/documents.json?r=<%= session.getId()%').success(function(data){

			$scope.data=data;
		})
	}
}]);
