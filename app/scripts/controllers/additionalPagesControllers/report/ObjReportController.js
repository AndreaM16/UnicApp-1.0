myApp.controller('ObjReportController', function($scope){
	

	$scope.objReportText='Segnalazioni';

	$scope.myBackground='background-image: url('+'../images/back.png'+')';

	$scope.selectObjPlaceholder='Altro';

	$scope.sendObjText='Conferma';

	$scope.staticObjText='Problema n.1';

	$scope.classy="isWhite";

	$scope.classyBackground="background-image: url('+'../images/check.png'+')";

	$scope.changeColor = function(){
        if ($scope.classy == "isWhite"){
            	$scope.classy = "goGrey";		
        }
         else{
            	$scope.classy = "isWhite";            		
        }
    };

	/*
	$('.selectObj').on("click", function(){
         $(this).parent().css("background-color", "#000");
        });*/
	
});