myApp.controller("book4MeController", ["$scope", "$http","bookingSharer",  function($scope, $http, bookingSharer){

    $scope.initGetRequestBook4Me = function(){
	$http.get('data/otherPages/booking/book4MeJSON.json').success(function(data){


        $scope.data=data;


        $scope.boxClick1 = function(){
        
            
            angular.element('.box1').css('background-color', 'rgba(107,107,107,0.2)');
            angular.element('.box1Background').css('display', 'block');

            angular.element('.box2').css('background-color', '#fff');
            angular.element('.box2Background').css('display', 'none');

            angular.element('.book4MeSend span').css('color', '#fff');

            data.goBack='#booking';

            data.myField=data.box1Text;
            bookingSharer.setProperty(data.myField);
        }

     $scope.boxClick2 = function(){
        
            
            angular.element('.box2').css('background-color', 'rgba(107,107,107,0.2)');
            angular.element('.box2Background').css('display', 'block');

            angular.element('.box1').css('background-color', '#fff');
            angular.element('.box1Background').css('display', 'none');

            angular.element('.book4MeSend span').css('color', '#fff');

            data.goBack='#booking';

            data.myField=data.box2Text;
            bookingSharer.setProperty(data.myField);    
        }
    

    })
    }
}]);