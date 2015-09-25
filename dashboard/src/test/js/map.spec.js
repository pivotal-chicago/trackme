'use strict';

describe('Map', function () {
    var mapBoxMap = {};
    var map;

    beforeEach(function () {
        spyOn(L.mapbox, 'map').and.returnValue(mapBoxMap);

        map = new trackme.Map('accessToken');
    });

    it('sets the access token', function () {
        expect(L.mapbox.accessToken).toEqual('accessToken');
    });

    it('inflates the map', function () {
        expect(L.mapbox.map).toHaveBeenCalledWith('map', 'mapbox.streets');
    });

    describe('add Marker', function () {
        var fakeFeatureLayer;

        beforeEach(function () {
            fakeFeatureLayer = L.mapbox.featureLayer(null, {});
            spyOn(L.mapbox, 'featureLayer').and.returnValue(fakeFeatureLayer);
        });

        it('adds a marker with the lat long', function () {
            spyOn(fakeFeatureLayer, 'addTo');

            map.addMarker({
                latitude: -77.03221142292,
                longitude: 38.913371603574
            });

            expect(L.mapbox.featureLayer).toHaveBeenCalledWith({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [
                        38.913371603574,
                        -77.03221142292
                    ]
                }
            });

            expect(fakeFeatureLayer.addTo).toHaveBeenCalledWith(mapBoxMap);
        });
    });
});