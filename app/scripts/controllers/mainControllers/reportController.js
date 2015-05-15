  
myApp.controller("ReportController", ["$scope", "$http","sharedProperties",  function($scope,$http, sharedProperties){

  $scope.initGetRequestReport = function(){
    $http.get('http://localhost/report.json').success(function(data){

      $scope.data=data;

      data.objectText =  sharedProperties.getProperty();

      if (data.objectText!=''){
        data.choseObjtext=data.objectText;
        

        angular.element('.writeMe').keyup(function(){
          
          
          if(data.ngTextBox!=''){

            angular.element('.reportSendMe span').css('color', 'white');

          }
          else {
            angular.element('.reportSendMe span').css('color', 'grey');
          }
          
        });
        
      }
      else {
        data.choseObjtext = 'Scegli l\'oggetto della tua richiesta';
        angular.element('.reportSendMe span').css('color', 'grey');
        
      }
      
    })
  }
}]);


  /*
      Using dependency injection here is quite nice for testing your controllers, 
      since you can easily inject a UserService stub. The only downside is that you 
      can’t minify the code from above without breaking it, since the injection mechanism 
      relies on the exact string representation of UserService. It is therefore recommended 
      to define dependencies using inline annotations, which keeps working even when minified
      he syntax looks a bit funny, but since strings in arrays are not changed during the 
      minification process it solves our problem. Note that you could change the parameter 
      names of the function, since the injection mechanism relies on the order of the array definition only.

  */