myApp.controller("myDocumentsController", ["$scope","$http",function($scope,$http){

	$scope.initGetRequestMyDocuments = function(){
		$http.get('http://localhost/myDocuments.json').success(function(data){

			$scope.data=data;

		})
	}
}]);