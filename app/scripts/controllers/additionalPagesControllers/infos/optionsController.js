 myApp.controller("OptionsController", ["$scope","$http",function($scope,$http){

 	$scope.initGetRequestOptions = function(){
 		$http.get('http://localhost/options.json').success(function(data){

 			$scope.data=data;
 		})
 	}     
 }]);