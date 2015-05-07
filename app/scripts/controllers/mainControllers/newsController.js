  
myApp.controller('NewsController', ["$scope","$http",function($scope, $http){
	
	
	$scope.initGetRequestNews = function(){

		$http.get('data/mainPages/newsJSON.json').success(function(newsItems){
			$scope.newsItems=newsItems;
		})  
	}
}]);