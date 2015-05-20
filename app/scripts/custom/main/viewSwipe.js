
//$(document).ready(function (){
myApp.run(function ($rootScope, $location) {
  window.onload = function(){
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
   
      if($location.path().match('OP') && !$rootScope.Appdoitsize) {
      	    //$scope.$on('$viewContentLoaded', function(){
          	$rootScope.Appdoitsize = true;
          //})
        }
      	else {
      		$rootScope.Appdoitsize = false;
      	}

    })
  }
})
//})
