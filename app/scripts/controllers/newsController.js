  
  myApp.controller('NewsController', function($scope){
          
          $scope.headerText='Ultime Notizie';

          $scope.myBackground1='background-image: url('+'../images/consiglio.jpg'+')';

          $scope.myBackground2='background-image: url('+'../images/atzori.png'+')';

          $scope.pars1=[
				{className:'p4', text:'Proseguono Incontri Rettore'},
				{className:'p5', text:'Proseguono gli incontri dei candid...'},
				{className:'p6', text:'4-Marzo 2015'}
		];

		  $scope.pars2=[
				{className:'p4', text:'Atzori vince premio Google'},
				{className:'p5', text:'Cagliari, 3 marzo 2015 - E\' stato as...'},
				{className:'p6', text:'4-Marzo 2015'}
		];
  });