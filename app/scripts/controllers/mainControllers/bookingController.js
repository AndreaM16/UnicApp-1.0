
  myApp.controller("BookingController", ["$scope", "$http","bookingSharer",function($scope, $http, bookingSharer){

    $http.get('data/mainPages/bookingJSON.json').success(function(data){
        
        $scope.data=data;
        data.courseText=bookingSharer.getProperty();

        if (data.courseText!='Corsi'){

            angular.element('.sendRequest span').css('color','#fff');
        }
          else if (data.courseText=='Corsi'){
              angular.element('.sendRequest span').css('color','#grey');
          }

    })

          /*
            $scope.datePicker=function(){

              if ($scope.datePickerState=='on') {
                  
                  angular.element('.form-horizontal').css('display','block');
                  angular.element('.poppy').css('display','block');
                  $scope.datePickerState='off';
              }
              else{
                  angular.element('.form-horizontal').css('display','none');
                  angular.element('.poppy').css('display','none');
                  $scope.datePickerState='on';
              }
              
            }*/
    /*
          $scope.dates = {
    date1: new Date('01 Mar 2015 00:00:00.000'),
    date2: new Date(),
    date3: new Date(),
    date4: new Date('01 Mar 2015'),
    date5: new Date('10 Mar 2015')
  };
  
  $scope.open = {
    date1: false,
    date2: false,
    date3: false,
    date4: false,
    date5: false,
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
      e.preventDefault();
      e.stopPropagation();

      $scope.open[date] = true;
  };
  
  // watch date4 and date5 to calculate difference
  $scope.$watch(function() {
    return $scope.dates;
  }, function() {
    if ($scope.dates.date4 && $scope.dates.date5) {
      var diff = $scope.dates.date4.getTime() - $scope.dates.date5.getTime();
      $scope.dayRange = Math.round(Math.abs(diff/(1000*60*60*24)))
    } else {
      $scope.dayRange = 'n/a';
    }
  }, true);*/

  }]);