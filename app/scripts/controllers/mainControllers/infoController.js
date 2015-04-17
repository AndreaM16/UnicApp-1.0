myApp.controller('InfoController', function($scope){
   
		$scope.myHeaderText='Info & Contatti';

		$scope.mySettingsImage='background-image: url('+'../images/settings.png'+')';

		$scope.myZoomImage='background-image: url('+'../images/zoom.png'+')';

		$scope.pars=[
				{className:'p1', text:'Sergio Melchiorre'},
				{className:'p2', text:'Segretario generale Università'},
				{className:'p3', text:'Via Roma 09010, Cagliari'}
		];

  });