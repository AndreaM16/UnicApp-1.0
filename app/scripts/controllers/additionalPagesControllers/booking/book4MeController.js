myApp.controller('book4MeController', function($scope){

	$scope.book4MeBackground= 'background-image: url('+'../../images/back.png'+')';

	$scope.book4MeHeaderText='Prenotazione';

	$scope.box1Text='Automi e Linguaggi Formali';
	$scope.box2Text='Reti di Calcolatori';

	$scope.book4MeSendText='Conferma';

	$scope.box1Image= 'background-image: url('+'../../images/arrow.png'+')';
	$scope.box2Image= $scope.box1Image;
});