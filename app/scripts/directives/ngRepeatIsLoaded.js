
                          angular.module('ngRepeatIsLoaded', [])
                          .controller('MainController', [])
                          myApp.directive('ngRepeatIsLoaded', ["ngRepeatService",function (ngRepeatService){
            
                              return{
                                  scope:true,
                                  restrict: 'A', //Attribute type
                                  link: function (scope, elements, arguments){ //Function that picks the 3 guys
                                    
                                   if(scope.$last){

                                        scope.init = true;
                                        ngRepeatService.setProperty(scope.init);
                                        console.log('page Is Ready!');
                                    }
                                  }   
                              }
                          }])


                          
