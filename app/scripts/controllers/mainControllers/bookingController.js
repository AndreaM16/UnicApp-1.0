
myApp.controller("BookingController", ["$scope", "$http","bookingSharer",function($scope, $http, bookingSharer){

  $scope.initGetRequestBooking = function(){

    $http.get('http://localhost/booking.json?r=<%= session.getId()%').success(function(data){

      $scope.data=data;
      //console.log(data);

      data.courseText=bookingSharer.getProperty();

      if (data.courseText!='Corsi'){

        angular.element('.sendRequest span').css('color','#fff');
      }
      else if (data.courseText=='Corsi'){
        angular.element('.sendRequest span').css('color','#grey');
      }


      $scope.closePoppy= function(){
        angular.element('.poppy').css('display','none');
        
      }



      $scope.datePicker=function(){

        if ($scope.datePickerState=='on') {

          angular.element('.form-horizontal').css('display','block');
          angular.element('.poppy').css('display','block');

          angular.element('.btn-info').css('color', '#ffffff !important');
          $scope.datePickerState='off';
        }
        else{
          angular.element('.form-horizontal').css('display','none');
          angular.element('.poppy').css('display','none');
          $scope.datePickerState='on';
        }

      }

      $scope.dates = {
        date1: new Date('01 Mar 2015'),
        date2: new Date(),
        date3: new Date(),
        date4: new Date('01 Mar 2015'),
        date5: new Date('10 Mar 2015')
      };

      $scope.open = {
        date1: false
      /*date2: false,
      date3: false,
      date4: false,
      date5: false,*/
    };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {

    return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
  };

  $scope.dateOptions = {
    showWeeks: false,
    startingDay: 1
  };
  
  $scope.timeOptions = {
    readonlyInput: true,
    showMeridian: false
  };
  
  $scope.openCalendar = function(e, date) {
    angular.element('.sendDate').css('display','block');
    angular.element('.cancelRequest').css('display','block');
    e.preventDefault();
    e.stopPropagation();

    $scope.open[date] = true;
  };
  
  // watch date4 and date5 to calculate difference
  $scope.$watch(function() {
    //console.log($scope.dates.date3);
    return $scope.dates;
    
  }, function() {
    if ($scope.dates.date1 && $scope.dates.date5) {
      var diff = $scope.dates.date1.getTime() - $scope.dates.date5.getTime();
      $scope.dayRange = Math.round(Math.abs(diff/(1000*60*60*24)))
      //console.log($scope.diff);
    } else {
      $scope.dayRange = 'n/a';
    }
  }, true);

  $scope.saveDate = function(date){
    data.whenText=$scope.dates.date3;
    return data.whenText;
  }
  

  
})
}
}]);