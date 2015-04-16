

angular.module('map-canvas', [])
  .controller('InfoController',[ 
    $(document).ready(function (){

      $(function initialize() {

  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(41.9026329,12.452200400000038),
    disableDefaultUI:true,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


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