 myApp.controller("OptionsController", ["$scope","$http",function($scope,$http){

 	$scope.initGetRequestOptions = function(){
 		$http.get('data/otherPages/infos/optionsJSON.json').success(function(data){

 			$scope.data=data;
 		})
 	}     
 }]);