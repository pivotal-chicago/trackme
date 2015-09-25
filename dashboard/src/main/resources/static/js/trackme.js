var trackme = trackme || {};

trackme.setup = function (map) {
    trackme.locationService.getCoordinates().done(function (data) {
        map.addMarker(data);
    });
};