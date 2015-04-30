
  myApp.controller("BookingController", ["$scope", "bookingSharer",function($scope, bookingSharer){

  	$scope.headerText="Prenotazione";

  	$scope.bookingImage= 'background-image: url('+'../../images/bookingBook.png'+')';

  	$scope.ghostlyText='Colloqui';

  	$scope.bookingTitle='Scegli il corso e l\'orario gradito.';

  	$scope.whenText='Quando?';

  	$scope.requestText='Invia Prenotazione';

  	$scope.courseBackground='background-image: url('+'../../images/arrow.png'+')';
    $scope.whenBackground=$scope.courseBackground;

    $scope.courseText=bookingSharer.getProperty();
   

  }]);