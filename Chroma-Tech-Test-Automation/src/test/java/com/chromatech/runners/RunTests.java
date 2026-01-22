package com.chromatech.runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
    plugin = "html:target/cucumber-reports/cucumber-execution-report.html",
    features = "src/test/resources/features",
    glue = "com.chromatech.stepDefinitions"//,//class path to step definitions
    //tags = "@DataDrivenTest",
    //dryRun = false,
    //plugin = {"pretty", "html:target/cucumber-reports.html", "json:target/cucumber.json"}
)

public class RunTests extends AbstractTestNGCucumberTests {

    
}
