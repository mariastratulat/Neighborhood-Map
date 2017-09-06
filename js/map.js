var locations = [
    {title:'The Cavern Club', location: {lat: 53.406376, lng: -2.988169}},
    {title:'Be At One', location: {lat: 53.403097, lng: -2.981688}},
    {title:'The Pumphouse Albert Dock', location: {lat: 53.401805,
                                                   lng: -2.992101}},
    {title:'Cask', location: {lat: 53.422320, lng: -2.914844}},
    {title:'Little Coopers', location: {lat: 53.405274, lng: -2.980436}}
    ];


var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),
        {center: {lat: 53.404469, lng: -2.987078},
        zoom: 13,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
       });
    var college = {lat: 53.404469, lng: -2.987078};
    var marker = new google.maps.Marker({
        position: college,
        map: map,
        title: "St. Helens College"
    });
    var infowindow = new google.maps.InfoWindow({
        content: "<div>"+marker.position + "</div>"
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}