myApp.controller("myDocumentsController", ["$scope","$http",function($scope,$http){

	$http.get('data/otherPages/documents/myDocumentsJSON.json').success(function(data){

		$scope.data=data;

	})
	
}]);