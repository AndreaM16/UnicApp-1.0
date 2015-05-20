

angular.module('fullmap-canvas', [])
  .controller('FullmapController',[ 
    $(document).ready(function (){

var myCenter=new google.maps.LatLng(41.9026329,12.452200400000038);
      
      $(function initialize() {

  var mapOptions = {
    
    zoom: 8,
    center: myCenter,
    disableDefaultUI:true,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('fullmap-canvas'),
      mapOptions);

  //var myCenter=new google.maps.LatLng(41.9026329,12.452200400000038);

  var marker=new google.maps.Marker({
    position:myCenter
    });

  marker.setMap(map);

})

function loadScript() {

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);

}

window.onload = loadScript;



      })]);