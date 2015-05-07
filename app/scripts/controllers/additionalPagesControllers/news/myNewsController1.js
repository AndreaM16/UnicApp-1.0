myApp.controller("myNewsController1", ["$scope","$http",function($scope,$http){

     $http.get('data/otherPages/news/myNew1JSON.json').success(function(data){

          $scope.data=data;
     })
          
          
  }]);