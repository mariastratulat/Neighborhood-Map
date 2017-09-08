// Model
// Initial center on map
var initLocation = {lat: 53.404469, lng: -2.987078};

// Initial locations data
var locations = [
    {title:'Albert Dock', location: {lat: 53.400143, lng: -2.993986}},
    {title:'The Beatles Story', location: {lat: 53.399291, lng: -2.992017}},
    {title:'The Cavern Club', location: {lat: 53.406375, lng: -2.987986}},
    {title:'Liverpool Cathedral', location: {lat: 53.397457, lng: -2.973301}},
    {title:'World Museum', location: {lat: 53.409975, lng: -2.981639}}
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

function infoContent(marker, content) {
    var contentString = '<div id="content">' +
                        '<h4>' + marker.title + '</h4>' +
                        '<p>' + content + '</p>' +
                        '</div>';
    return contentString;
}
//Attach properties to the markers
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
        var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +marker.title+ '&format=json&callback=wikiCallback';
        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: processResult,
            fail: fail
        });
        function processResult(apiResult){
            var contentString = infoContent(marker, apiResult[2]);
            infowindow.setContent(contentString);
        }
    }
    infowindow.open(map, marker);
}






    var Bar = function(data) {
        this.title = ko.observable(data.title);
        this.location = ko.observable(data.location);
        this.marker = null;
    };



// Error if lading the map fails
function fail() {
    alert('Failed to load. Please try again');
};





