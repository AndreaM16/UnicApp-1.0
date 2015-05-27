 
myApp.controller('EventsController', ["$scope","$http",function($scope,$http){

  $scope.initGetRequestEvents = function(){
  	$http.get('http://localhost/events.json?r=<%= session.getId()%').success(function(data){

        
      $scope.data=data;


      $scope.changeEventFromPast = function(){
        angular.element('.futureTile').css('display', 'none');
        angular.element('.oldTile').css('display', 'block');
        angular.element('.oldEvents span').css('font-weight', 'bold');
        angular.element('.futureEvents span').css('font-weight', 'normal');   
        
      };

      $scope.changeEventFromFuture= function(){
        angular.element('.futureTile').css('display', 'block');
        angular.element('.oldTile').css('display', 'none');
        angular.element('.futureEvents span').css('font-weight', 'bold');
        angular.element('.oldEvents span').css('font-weight', 'normal');

      };

    })


  }  
}]);