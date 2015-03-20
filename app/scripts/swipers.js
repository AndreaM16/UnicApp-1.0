/* Activated by ng-click on the images put in swiper-container.
	Instantiating an empty swip*/
var swip = angular.module('swipers',[]);

/* Since I don't need a controller I leave it by default*/
angular.module('swipers')
  .controller('',[ 
  $(document).ready(function (){
    var swiper = new Swiper('.swiper-container',{
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        paginationClickable: true 
        })
  })]);