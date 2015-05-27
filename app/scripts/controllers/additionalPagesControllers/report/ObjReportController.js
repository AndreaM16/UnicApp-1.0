myApp.controller("ObjReportController", ["$scope","$http", "sharedProperties", function($scope,$http,sharedProperties){
 
    $scope.initGetRequestObjReport = function(){
     $http.get('http://localhost/objReport.json?r=<%= session.getId()%').success(function(data){

        $scope.data=data;

        $scope.changeColor = function(){
            
            if (data.classy == 'isWhite'){
                data.classy = 'goGrey';
                data.sendObjClass='sendObjWhite';     
            }
            else{
                data.classy = 'isWhite';
                data.sendObjClass='sendObj';                  
            }
        };

        $scope.objHasBeenSelected = function(){
            
            if (data.sendObjClass=='sendObjWhite'){
                data.sentOrNot='true'
                data.whereToGo='#report';

                data.gotClicked = data.staticObjText;
                sharedProperties.setProperty(data.gotClicked);
            }
            else{
                data.sentOrNot='false';
                data.whereToGo='#ObjReport';
            }
        };
        

    })

     
 }
}]);