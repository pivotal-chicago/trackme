var trackme = trackme || {};

(function (trackme) {
    var LOCATION_SERVICE_PATH = "/location-service/coordinates";
    var locationService = {};
    locationService.getCoordinates = function () {
        return $.get(LOCATION_SERVICE_PATH);
    };

    trackme.locationService = locationService;
}(trackme));
