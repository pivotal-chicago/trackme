package io.pivotal.trackme.locationservice;

import org.junit.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class CoordinatesControllerTest {

    @Test
    public void location() throws Exception {
        MockMvc mvc = MockMvcBuilders.standaloneSetup(new CoordinatesController()).build();

        mvc.perform(get("/coordinates").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("{\"latitude\": 42, \"longitude\": -87}"));
    }
}