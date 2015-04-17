 myApp.controller('OptionsController', function($scope){
          
          $scope.headerText= 'Info & Dettagli';

          $scope.myBackground='background-image: url('+'../../images/back.png'+')';

          $scope.optionsText1='Invia statistiche d\'uso';

          $scope.optionsText2='Guarda la nostra privacy policy';

          $scope.privacyText='Informativa resa ai sensi dell\'art. 13 del codice in materia di protezione dei dati personali. \
          					  Ai sensi dell\'art. 13 del D.Lgs. 196/2003, Codice in materia di protezione dei dati personali, \
          					  Vi informiamo che i dati personali, forniti mediante l\'invio di email di richiesta saranno trattati \
          					  in forma automatizzata dal titolare dell\'applicazione al fine di rispondere alle richieste di informazioni, \
          					  di prodotti o di prestazioni inviate attraverso quest\'App. Il conferimento dei dati è facoltativo ma \
          					  l\'eventuale rifiuto di rispondere determinerà l\'impossibilità di essere contattati per la finalità \
          					  su indicata. In ogni momento potete esercitare i diritti di cui all\'art. 7 del Codice in materia \
          					  di protezione dei dati personali tra i quali accedere alle informazioni che Vi riguardano e chiederne \
          					  l\'aggiornamento,la rettificazione e l\'integrazione, nonchè la cancellazione. Potete altresì opporVi \
          					  al Responsabile del trattamento dei dati di natura commerciale.';

          $scope.privacyButton='closeBtn btn-lg btn-default active';

          $scope.privacyButtonStyle='font-size:40%; vertical-align: middle;';
  });