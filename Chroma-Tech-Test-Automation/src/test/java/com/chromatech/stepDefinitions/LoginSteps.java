package com.chromatech.stepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import com.chromatech.utils.WebDriverUtils;
import com.chromatech.pages.LoginPage;
import com.chromatech.utils.TestProperties;

public class LoginSteps {

    LoginPage loginPage = new LoginPage();
    
    @Given("a user is on the login page of {string}")
    public void a_user_is_on_the_login_page_of(String BASE_URL) {
        WebDriverUtils.driver.get(BASE_URL);
        System.out.println("Navigated to: " + BASE_URL);
    }

    @When("a user enters username {string} in the username text box")
    public void a_user_enters_username_in_the_username_text_box(String USERNAME) throws InterruptedException {
    loginPage.usernameField.sendKeys(USERNAME);
      
    }

    @When("a user enters password {string} in the password text box")
    public void a_user_enters_password_in_the_password_text_box(String PASSWORD) throws InterruptedException {
    loginPage.passwordField.sendKeys(PASSWORD);  
    }

    @When("a user clicks on the Sign In button")
    public void a_user_clicks_on_the_Sign_In_button() throws InterruptedException {
    loginPage.signInButton.click();
    
    }

    @Then("the user is redirected to the dashboard page")
    public void the_user_is_redirected_to_the_dashboard_page() {
        
        String title = WebDriverUtils.driver.getTitle();
        String currentUrl = WebDriverUtils.driver.getCurrentUrl();
        System.out.println("Actual page title is: " + title);
        System.out.println("Current URL is: " + currentUrl);

        assert title.contains(TestProperties.DASHBOARD_TITLE) : "** User is not on the dashboard page. The Current page is: " + title + " **";
        assert WebDriverUtils.driver.getCurrentUrl().equals(TestProperties.DASHBOARD_URL) : "** User is not on the dashboard page. The Current URL is: " + WebDriverUtils.driver.getCurrentUrl() + " **"; 
       
        System.out.println("** User successfully redirected to dashboard page. **");

        
    }


}
