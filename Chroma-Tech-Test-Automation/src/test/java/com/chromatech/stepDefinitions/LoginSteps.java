package com.chromatech.stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import com.chromatech.utils.WebDriverUtils;
import com.chromatech.utils.TestProperties;

public class LoginSteps {

    @Given("a user is on the login page")
    public void a_user_is_on_the_login_page() {
        WebDriverUtils.initBrowser();
        WebDriverUtils.driver.get(TestProperties.BASE_URL);
        System.out.println("User navigated to login page: " + TestProperties.BASE_URL);
    }

    @When("the user enters a valid username in the username text box")
    public void the_user_enters_a_valid_username_in_the_username_text_box() {
        // Implement username entry logic here
        System.out.println("User entered valid username");
    }

    @When("the user enters a valid password in the password text box")
    public void the_user_enters_a_valid_password_in_the_password_text_box() {
        // Implement password entry logic here
        System.out.println("User entered valid password");
    }

    @Then("the user is redirected to the landing page")
    public void the_user_is_redirected_to_the_landing_page() {
        // Implement validation logic here
        System.out.println("User successfully redirected to landing page");
        WebDriverUtils.tearDown();
    }
}
