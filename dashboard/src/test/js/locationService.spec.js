'use strict';

describe('location service', function () {
    it('fetches coordinates', function () {
        var expectedPromise = $.Deferred();
        spyOn($, 'get').and.returnValue(expectedPromise);

        var responsePromise = trackme.locationService.getCoordinates();

        expect(responsePromise).toBe(expectedPromise);
        expect($.get).toHaveBeenCalledWith("/location-service/coordinates");
    });
});