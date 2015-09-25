package io.pivotal.trackme.locationservice;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;

@RestController
public class CoordinatesController {

    @RequestMapping(value = "/coordinates", produces = MediaType.APPLICATION_JSON_VALUE)
    public Coordinates coordinates() {
        return new Coordinates(BigDecimal.valueOf(42), BigDecimal.valueOf(-87));
    }
}
