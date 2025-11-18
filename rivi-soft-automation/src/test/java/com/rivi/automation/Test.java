package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Test {
    public static void main(String[] args) {
        System.out.println("=== Multi-Browser Test ===");
        
        // Test Chrome
        System.out.println("\n--- Testing Chrome Browser ---");
        WebDriver chromeDriver = new ChromeDriver();
        try {
            chromeDriver.navigate().to("https://mmhcloud.com/gateway/");
            System.out.println("Chrome Title: " + chromeDriver.getTitle());
        } finally {
            chromeDriver.quit();
        }

        // Test Edge  
        System.out.println("\n--- Testing Edge Browser ---");
        WebDriver edgeDriver = new EdgeDriver();
        try {
            edgeDriver.get("https://mmhcloud.com/gateway/");
            System.out.println("Edge Title: " + edgeDriver.getTitle());
        } finally {
            edgeDriver.quit();
        }

        // Test Firefox
        System.out.println("\n--- Testing Firefox Browser ---");
        WebDriver firefoxDriver = new FirefoxDriver();
        try {
            firefoxDriver.get("https://mmhcloud.com/gateway/");
            System.out.println("Firefox Title: " + firefoxDriver.getTitle());
        } finally {
            firefoxDriver.quit();
        }
        
        System.out.println("\n=== Multi-Browser Test Complete ===");
        
        // Now test the refactored POM class
        System.out.println("\n=== Testing Refactored POM Class ===");
        testRefactoredPOM();
    }
    
    private static void testRefactoredPOM() {
        myqcPOM loginPage = new myqcPOM();
        
        try {
            System.out.println("✅ POM instance created successfully");
            System.out.println("✅ WebDriver initialized: " + (loginPage.getDriver() != null));
            
            // Test navigation
            loginPage.navigateToLoginPage();
            System.out.println("✅ Navigation to login page successful");
            
            // Show the current URL to verify we're on the right page
            String currentUrl = loginPage.getDriver().getCurrentUrl();
            System.out.println("Current URL: " + currentUrl);
            
        } catch (Exception e) {
            System.err.println("❌ POM test failed: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always clean up
            loginPage.closeBrowser();
            System.out.println("✅ Browser closed successfully");
        }
    }
}
    
