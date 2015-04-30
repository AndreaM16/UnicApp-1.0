myApp.controller("book4MeController", ["$scope", "bookingSharer",  function($scope, bookingSharer){

	$scope.book4MeBackground= 'background-image: url('+'../../images/back.png'+')';

	$scope.book4MeHeaderText='Prenotazione';

	$scope.box1Text='Automi e Linguaggi Formali';
	$scope.box2Text='Reti di Calcolatori';

	$scope.book4MeSendText='Conferma';

	$scope.box1Image= 'background-image: url('+'../../images/check.png'+')';
	$scope.box2Image= $scope.box1Image;

	$scope.goBack='#OPbook4Me';

	$scope.boxClick1 = function(){
        
            
            angular.element('.box1').css('background-color', 'rgba(107,107,107,0.2)');
            angular.element('.box1Background').css('display', 'block');

            angular.element('.box2').css('background-color', '#fff');
            angular.element('.box2Background').css('display', 'none');

            angular.element('.book4MeSend span').css('color', '#fff');

            $scope.goBack='#booking';

            $scope.myField=$scope.box1Text;
            bookingSharer.setProperty($scope.myField);
        }

     $scope.boxClick2 = function(){
        
            
            angular.element('.box2').css('background-color', 'rgba(107,107,107,0.2)');
            angular.element('.box2Background').css('display', 'block');

            angular.element('.box1').css('background-color', '#fff');
            angular.element('.box1Background').css('display', 'none');

            angular.element('.book4MeSend span').css('color', '#fff');

            $scope.goBack='#booking';

            $scope.myField=$scope.box2Text;
            bookingSharer.setProperty($scope.myField);
        }
            	        	        		        	   
    
}]);