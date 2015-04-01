
var myCenter=new google.maps.LatLng(41.9026329,12.452200400000038);
function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:5,
    disableDefaultUI:true,
        draggable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,


    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker=new google.maps.Marker({
    position:myCenter

    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
