package com.chromatech.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    features = "src/test/resources/features",
    glue = "com.chromatech.stepDefinitions",//class path to step definitions
    tags = "@smoke",
    dryRun = false,
    plugin = {"pretty", "html:target/cucumber-reports.html", "json:target/cucumber.json"}
)

public class RunTests extends AbstractTestNGCucumberTests {

    
}
