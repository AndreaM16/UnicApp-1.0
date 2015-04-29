  myApp.controller('ReportController', function($scope, sharedProperties){
          
          $scope.headerText = 'Segnalazioni';

          $scope.choseObjtext = '';

          $scope.writeMeText = 'Scrivi qui il tuo messaggio...';

          $scope.sendMeText = 'Invia Richiesta';

          $scope.myBackground = 'background-image: url('+'../../images/arrow.png'+')';

          $scope.objectText =  sharedProperties.getProperty();

          

          if ($scope.objectText=='Problema n.1'){
              $scope.choseObjtext=$scope.objectText;
          }
          else{
              $scope.choseObjtext = 'Scegli l\'oggetto della tua richiesta';
          }
        
  });