 
  myApp.controller('EventsController', ["$scope","$http",function($scope,$http){

  	$http.get('data/mainPages/eventsJSON.json').success(function(data){

      $scope.data=data;

      $scope.changeEventFromPast = function(){
        if ($scope.tileStyle == 'futureTile'){
              $scope.tileStyle = 'oldTile';
              angular.element('.oldEvents span').css('font-weight', 'bold');
              angular.element('.futureEvents span').css('font-weight', 'normal');   
        }
         else{
              $scope.tileStyle = 'oldTile';
              angular.element('.oldEvents span').css('font-weight', 'bold');
              angular.element('.futureEvents span').css('font-weight', 'normal');
                              
        }
    };

    $scope.changeEventFromFuture= function(){
        if ($scope.tileStyle == 'oldTile'){
              $scope.tileStyle = 'futureTile';
              angular.element('.futureEvents span').css('font-weight', 'bold');
              angular.element('.oldEvents span').css('font-weight', 'normal');
                  
        }
         else{
              $scope.tileStyle = 'futureTile';
              angular.element('.futureEvents span').css('font-weight', 'bold');
              angular.element('.oldEvents span').css('font-weight', 'normal');
                              
        }
    };

    })
  
  		
          
  }]);