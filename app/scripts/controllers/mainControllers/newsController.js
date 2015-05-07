  
  myApp.controller('NewsController', ["$scope","$http",function($scope, $http){
              
    $http.get('data/mainPages/newsJSON.json').success(function(data){
        
        $scope.data=data;

    })

  }]);
          