'use strict';

describe('trackme', function () {

    describe('setup()', function () {
        it('sets coordinates', function (done) {
            var mockMap = {addMarker: jasmine.createSpy('addMarker')};

            var coordinatesPromise = $.Deferred();
            spyOn(trackme.locationService, 'getCoordinates').and.returnValue(coordinatesPromise.promise());

            trackme.setup(mockMap);

            coordinatesPromise.resolve({
                latitude: 38.913371603574,
                longitude: -77.03221142292
            });


            expect(mockMap.addMarker).toHaveBeenCalledWith({
                latitude: 38.913371603574,
                longitude: -77.03221142292
            });

            coordinatesPromise.promise().then(function () {
                done();
            });
        });

    });
});