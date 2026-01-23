package com.chromatech.stepDefinitions;

import java.time.Instant;

import com.chromatech.utils.WebDriverUtils;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks {

    @Before
    public void setup(Scenario scenario) {
        // Any setup code if needed
        scenario.log("Setting up the browser for the test scenario." + Instant.now());
        WebDriverUtils.initBrowser();
    }       

    @After
    public void teardown(Scenario scenario) {
        // Any teardown code if needed
        WebDriverUtils.tearDown();
    }   


}
