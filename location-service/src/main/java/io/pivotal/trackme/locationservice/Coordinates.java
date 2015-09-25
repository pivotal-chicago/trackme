package io.pivotal.trackme.locationservice;

import java.math.BigDecimal;

public class Coordinates {
    public BigDecimal latitude;
    public BigDecimal longitude;

    public Coordinates(BigDecimal latitude, BigDecimal longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public BigDecimal getLatitude() {
        return latitude;
    }

    public BigDecimal getLongitude() {
        return longitude;
    }
}
