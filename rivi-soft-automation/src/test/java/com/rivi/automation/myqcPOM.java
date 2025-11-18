package com.rivi.automation;

import java.time.Duration;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class myqcPOM {

    // Define locators for myQC login page
    public static final String URL = "https://qa10-1.mmhcloud.com/myqc/RIVI";
    public static final String DEFAULT_USERNAME = "rrodriguez.prepaid@transactcampus.com";
    public static final String DEFAULT_PASSWORD = "Kronites2!";

    // Element locators (using By locators instead of strings)
    public static final By GET_STARTED_BUTTON = By.id("getStartedBtn");
    public static final By USERNAME_FIELD = By.id("loginName");
    // public static final By PASSWORD_FIELD = By.id("loginPassword");

    // Locating using className() locator/method
    public static final By PASSWORD_FIELD = By.className("login-form-input");

    public static final By LOGIN_BUTTON = By.id("loginButton");
    public static final By LOGGED_IN_ACCOUNT = By.xpath("//*[@id='greeting-message-edit']/strong");

    public static final String EXPECTED_LOGGED_IN_ACCOUNT = "rrodriguez.prepaid";

    private WebDriver driver;
    private WebDriverWait wait;

    // Constructor to initialize WebDriver
    public myqcPOM() {
        this.driver = new EdgeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        driver.manage().window().maximize();
    }

    // Constructor with custom WebDriver
    public myqcPOM(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    // Method to navigate to the login page
    public void navigateToLoginPage() {
        try {
            driver.get(URL);
            System.out.println("Navigated to: " + URL);
        } catch (Exception e) {
            System.err.println("Failed to navigate to login page: " + e.getMessage());
            throw new RuntimeException("Navigation failed", e);
        }
    }

    // Method to perform login with provided credentials
    public boolean login(String username, String password) {
        try {
            System.out.println("Attempting to log in with username: " + username);

            // Navigate to login page first
            navigateToLoginPage();

            // Wait for and click Get Started button
            WebElement getStartedBtn = wait.until(ExpectedConditions.elementToBeClickable(GET_STARTED_BUTTON));
            getStartedBtn.click();
            System.out.println("Clicked Get Started button");

            // Enter username
            WebElement usernameField = wait.until(ExpectedConditions.visibilityOfElementLocated(USERNAME_FIELD));
            usernameField.clear();
            usernameField.sendKeys(username);
            System.out.println("Entered username");

            // Enter password
            WebElement passwordField = driver.findElement(PASSWORD_FIELD);
            passwordField.clear();
            passwordField.sendKeys(password);
            System.out.println("Entered password");

            // Click login button
            WebElement loginButton = driver.findElement(LOGIN_BUTTON);
            loginButton.click();
            System.out.println("Clicked login button");

            // Wait for login to complete and verify
            Thread.sleep(3000); // Wait for page to load

            return verifyLogin();

        } catch (Exception e) {
            System.err.println("Login failed: " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }

    // Method to perform login with default credentials
    public boolean loginWithDefaults() {
        return login(DEFAULT_USERNAME, DEFAULT_PASSWORD);
    }

    // Method to verify successful login
    public boolean verifyLogin() {
        try {
            System.out.println("Verifying login...");

            // Wait for the logged-in user element to be visible
            WebElement loggedInUserElement = wait
                    .until(ExpectedConditions.visibilityOfElementLocated(LOGGED_IN_ACCOUNT));
            String loggedInUser = loggedInUserElement.getText().trim();

            System.out.println("Logged in user: " + loggedInUser);
            System.out.println("Expected user: " + EXPECTED_LOGGED_IN_ACCOUNT);

            if (loggedInUser.contains(EXPECTED_LOGGED_IN_ACCOUNT)) {
                System.out.println("✅ Login verification successful - Logged in account matches expected account.");
                return true;
            } else {
                System.out.println("❌ Login verification failed - Logged in account does not match expected account.");
                return false;
            }

        } catch (Exception e) {
            System.err.println("Login verification failed: " + e.getMessage());
            return false;
        }
    }

    // Method to get current logged-in user
    public String getLoggedInUser() {
        try {
            WebElement loggedInUserElement = wait
                    .until(ExpectedConditions.visibilityOfElementLocated(LOGGED_IN_ACCOUNT));
            return loggedInUserElement.getText().trim();
        } catch (Exception e) {
            System.err.println("Failed to get logged-in user: " + e.getMessage());
            return "";
        }
    }

    // Method to close the browser
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
            System.out.println("Browser closed successfully");
        }
    }

    // Getter for WebDriver (useful for additional operations)
    public WebDriver getDriver() {
        return driver;
    }

}
