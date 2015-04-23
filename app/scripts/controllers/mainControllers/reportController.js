  myApp.controller('ReportController', function($scope, sharedProperties){
          
          $scope.headerText = 'Segnalazioni';

          $scope.choseObjtext = '';

          $scope.writeMeText = 'Scrivi qui il tuo messaggio...';

          $scope.sendMeText = 'Invia Richiesta';

          $scope.myBackground = 'background-image: url('+'../../images/nextNew.png'+')';

          $scope.getProperty = function(gotClicked){
    			$scope.gotClicked = sharedProperties.getProperty();

    			if ($scope.gotClicked=='Problema n.1'){
    					$scope.choseObjtext=$scope.gotClicked;
    			}
    			else{
    					$scope.choseObjtext = 'Scegli l\'oggetto della tua richiesta';
    			}
    		}
  });