package com.chromatech;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import com.chromatech.utils.TestProperties;
import com.chromatech.utils.WebDriverUtils;

public class GoogleSignInTest {
    
    public static void main(String[] args) {
        try {
            System.out.println("Starting test...");
            
            // Initialize browser
            WebDriverUtils.initBrowser();
            System.out.println("Browser initialized: " + TestProperties.BROWSER);
            
            // Navigate to Google
            WebDriverUtils.driver.get(TestProperties.BASE_URL);
            System.out.println("Navigated to: " + TestProperties.BASE_URL);
            
            // Wait for and click Sign In button
            WebElement signInButton = WebDriverUtils.wait.until(
                ExpectedConditions.elementToBeClickable(By.xpath("//a[contains(@aria-label, 'Sign in')]"))
            );
            signInButton.click();
            System.out.println("Clicked Sign In button");
            
            // Wait for email field and enter email
            WebElement emailField = WebDriverUtils.wait.until(
                ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@type='email']"))
            );
            emailField.sendKeys(TestProperties.TEST_EMAIL);
            System.out.println("Entered email: " + TestProperties.TEST_EMAIL);
            
            // Wait for and click Next button
            WebElement nextButton = WebDriverUtils.wait.until(
                ExpectedConditions.elementToBeClickable(By.xpath("//button[@type='button' and .//span[text()='Next']]"))
            );
            nextButton.click();
            System.out.println("Clicked Next button");
            
            // Wait a moment to see the result
            Thread.sleep(3000);
            
            System.out.println("Test completed successfully!");
            
        } catch (Exception e) {
            System.err.println("Test failed with error: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always close the browser
            WebDriverUtils.tearDown();
            System.out.println("Browser closed");
        }
    }
}

