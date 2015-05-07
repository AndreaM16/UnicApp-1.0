myApp.controller("myDocumentsController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestMyDocuments = function(){
		$http.get('data/otherPages/documents/myDocumentsJSON.json').success(function(data){

			$scope.data=data;

		})
	}
}]);