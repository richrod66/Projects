package com.chromatech.stepDefinitions;

import com.chromatech.utils.WebDriverUtils;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

    @Before
    public void ssetup() {
        // Any setup code if needed
        WebDriverUtils.initBrowser();
    }       

    @After
    public void teardown() {
        // Any teardown code if needed
        WebDriverUtils.tearDown();
    }   


}
