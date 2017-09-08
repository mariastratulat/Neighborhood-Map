// Model
// Initial center on map
var initLocation = {lat: 53.404469, lng: -2.987078};

// Initial locations data
var locations = [
    {title:'The Cavern Club', location: {lat: 53.406376, lng: -2.988169}},
    {title:'Be At One', location: {lat: 53.403097, lng: -2.981688}},
    {title:'The Pumphouse Albert Dock', location: {lat: 53.401805,
                                                   lng: -2.992101}},
    {title:'Cask', location: {lat: 53.422320, lng: -2.914844}},
    {title:'Little Coopers', location: {lat: 53.405274, lng: -2.980436}}
    ];


// Setting up the initial map
var map, infowindow, marker;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: initLocation,
        zoom: 13
    });
    infowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i<locations.length; i++) {
        var l = locations[i];

        marker = new google.maps.Marker({
            position: l.location,
            map: map,
            title: l.title,
            animation: google.maps.Animation.DROP
        });
        bounds.extend(marker.getPosition());
        attach(marker);
        l.marker = marker;
    }
    map.fitBounds(bounds);
};


// Attach properties to the markers
function attach(marker) {
    // adding bounce animation to the click event
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null)
        }, 1400);
    }
    // adding data to infowindow, click event
    marker.addListener('click', populate);
    function populate() {
        // info window content
        var contentString = '<div id="content">' +
                            '<h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>' +
                            '<p>' + marker.position + '</p>' +
                            '</div>';
        infowindow.setContent(contentString);
    }
    infowindow.open(map, marker);
}



// function populateInfoWindow(marker) {
//         // Check to make sure the infowindow is not already opened on this marker.
//         if (infowindow.marker != marker) {
//           // Clear the infowindow content to give the streetview time to load.
//           infowindow.setContent('');
//           infowindow.marker = marker;
//           // Make sure the marker property is cleared if the infowindow is closed.
//           infowindow.addListener('closeclick', function() {
//             infowindow.marker = null;
//           });
//           infowindow.open(map, marker);
// }

    var Bar = function(data) {
        this.title = ko.observable(data.title);
        this.location = ko.observable(data.location);
        this.marker = null;
    };



// // Error if lading the map fails
// function Error() {
//     alert('Google Maps fails to load. Please try again');
// };





