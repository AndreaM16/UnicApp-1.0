
console.log("hfvhjfjfdsp");
appdoitApp.module('appdoitApp')
  .directive("myMaps", function(){
    return{
      restrict:'E',
      template:'<div></div>', //Defining myApp div
      replace:true,
      link: function(scope, element, attributes){
        console.log("hfvhjfjfdsp");
        var myLatLng = new google.maps.LatLng(41.9026329,12.452200400000038);
        console.log("OK");
        var mapOptions = {
                center: myLatLng,
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI:true,
                draggable: false,
                scrollwheel: false,
                disableDoubleClickZoom: true
              };
            var map = new google.maps.Map(angular.element(element).attr("id"),//document.getElementById(attributes.id),
                      mapOptions);
              var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title:"My town"
              });
              marker.setMap(map);
          } 
    };
  });
