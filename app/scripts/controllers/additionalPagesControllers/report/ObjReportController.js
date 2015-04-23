myApp.controller('ObjReportController', function($scope, sharedProperties){
	

	$scope.objReportText='Segnalazioni';

	$scope.myBackground='background-image: url('+'../images/back.png'+')';

	$scope.selectObjPlaceholder='Altro';

	$scope.sendObjText='Conferma';

	$scope.staticObjText='Problema n.1';

	$scope.classy='isWhite';

	$scope.sendObjClass='sendObj';

	$scope.sentOrNot='false';

	$scope.whereToGo='#ObjReport';



	$scope.classyBackground='background-image: url('+'../images/check.png'+')';

	$scope.changeColor = function(){
        if ($scope.classy == 'isWhite'){
            	$scope.classy = 'goGrey';
            	$scope.sendObjClass='sendObjWhite';		
        }
         else{
            	$scope.classy = 'isWhite';
            	$scope.sendObjClass='sendObj';            		
        }
    };

    $scope.objHasBeenSelected = function(){
    	if ($scope.sendObjClass=='sendObjWhite'){
    			$scope.sentOrNot='true'
    				$scope.whereToGo='#report';

    					
    		$scope.setProperty = function(newValue){

    					$scope.gotClicked = sharedProperties.getProperty;
        				sharedProperties.setProperty(gotClicked);
    		}
    	}
    	else{
    		$scope.sentOrNot='false';
    		$scope.whereToGo='#ObjReport';
    	}
    };

});