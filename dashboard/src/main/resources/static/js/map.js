var trackme = trackme || {};

(function () {
    trackme.Map = function (accessToken) {
        L.mapbox.accessToken = accessToken;
        this.map = L.mapbox.map('map', 'mapbox.streets');
    };

    trackme.Map.prototype.addMarker = function (options) {
        L.mapbox.featureLayer({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [
                    options.longitude,
                    options.latitude
                ]
            }
        }).addTo(this.map);
    }
}());