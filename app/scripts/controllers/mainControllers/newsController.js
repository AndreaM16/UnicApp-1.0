  
myApp.controller('NewsController', ["$scope","$http",function($scope, $http){
	
	
	$scope.initGetRequestNews = function(){

		$http.get('http://localhost/news.json?r=<%= session.getId()%').success(function(newsItems){
			$scope.newsItems=newsItems;
		})  
	}
}]);