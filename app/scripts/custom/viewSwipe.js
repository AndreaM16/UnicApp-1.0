

myApp.run(function ($rootScope, $location) {
  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    
      if($location.path().match('OP') && !$rootScope.Appdoitsize) {
          $rootScope.Appdoitsize = true;
          }
      	else {
      		$rootScope.Appdoitsize = false;
      	}
    })

});
