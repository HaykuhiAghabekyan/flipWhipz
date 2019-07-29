
function initMap() {

    var styledMapType = new google.maps.StyledMapType(
        [
            {elementType: 'geometry', stylers: [{color: '#f5f5f5'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#868686'}]},


            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#f5f5f5'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#868686'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#e5e5e5'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9d9d9d'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#ffffff'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#dadada'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#a5a5a5'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#e5e5e5'}]
            },

            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#eeeeee'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#c9c9c9'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#a5a5a5'}]
            }
        ],
        {name: 'Styled Map'});

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.838518, lng: -84.390403 },
        zoom: 11,
    });

    var image = {
        url: 'img/marker.png',
        size: new google.maps.Size(45, 65),
    };
    addMarker( { lat: 33.738518, lng: -84.390403 }); 
    addMarker( { lat: 33.790190, lng: -84.386030 }); 
    addMarker( { lat: 33.658496, lng: -84.512805 }); 
    addMarker( { lat: 33.870580, lng: -84.523870 }); 
    addMarker( { lat: 33.965674, lng: -84.214430 }); 
    addMarker( { lat: 33.687944, lng: -84.201672 }); 
    function addMarker(prop) {
        var marker = new google.maps.Marker({
            position: prop,
            map: map,
            draggable: true,
            icon: image,
            animation: google.maps.Animation.DROP,

        });
    }


    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}
