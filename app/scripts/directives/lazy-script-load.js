

						  angular.module('lazy-script-load', [])
						  .controller('MainController', [
                          myApp.directive('lazyLoad', function (){
            
                              return{
                                  scope:true,
                                  restrict: 'EA',
                                  link: function (scope, elements, arguments, scriptLink){
                                      
                                    //scope.$on(pageIsReady===true, function(){
                                     if (arguments.dirtype === 'text/javascript-lazy'){
                            			  
                                          scope.scriptLink = arguments.src;
                                  		  console.log(scope.scriptLink);
                                     }
                                    //})
                                  },
                                  replace: true, //replaces our element 
                                  template: '<script src="{{scriptLink}}"></script>'
                              }
                          })
						  ]);