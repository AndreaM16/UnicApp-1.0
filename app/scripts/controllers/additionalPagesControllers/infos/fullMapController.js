 myApp.controller("FullmapController", ["$scope","$http",function($scope,$http){

 	$scope.initGetRequestFullMap = function(){

 		$http.get('http://localhost/fullMap.json?r=<%= session.getId()%').success(function(data){

 			$scope.data=data;

 			
 			//jQuery('#fullmap-canvas').removeClass('.gm-style');
 		})
 		//angular.element('.gm-style').css('font-family', 'none');
 	}


 }]);