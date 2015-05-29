  myApp.controller('MainController', ["$scope","$http",/*,"ngRepeatService",*/ function($scope,$http/*, ngRepeatService*/){

  	
  	$scope.initGetRequestMain = function(){
  		
  		$http.get('http://localhost/main.json?r=<%= session.getId()%').success(function(data){

  			$scope.data=data;
        //$scope.init =  ngRepeatService.getProperty();

        //$scope.pageIsReady = false;
  		  //if($scope.init === true){
          $(document).ready(function (){
            var swiper = new Swiper('.swiper-container',{
              direction: 'horizontal',
              pagination: '.swiper-pagination',
              paginationClickable: true
            })
          })
        /*} else {

              console.log("Error on pageIsReady");
        }*/

  		})
  	}
  }]);