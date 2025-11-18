package com.rivi.automation;

public class POMDemo {
    public static void main(String[] args) {
        System.out.println("=== MyQC POM Demonstration ===");
        
        myqcPOM loginPage = null;
        
        try {
            // Create an instance of the refactored POM
            System.out.println("1. Creating POM instance...");
            loginPage = new myqcPOM();
            System.out.println("✅ POM instance created successfully");
            
            // Test if WebDriver is initialized
            if (loginPage.getDriver() != null) {
                System.out.println("✅ WebDriver initialized: " + loginPage.getDriver().getClass().getSimpleName());
            }
            
            // Navigate to login page
            System.out.println("2. Navigating to login page...");
            loginPage.navigateToLoginPage();
            System.out.println("✅ Navigation completed");
            
            // Show current URL
            String currentUrl = loginPage.getDriver().getCurrentUrl();
            System.out.println("Current URL: " + currentUrl);
            
            // Show page title
            String pageTitle = loginPage.getDriver().getTitle();
            System.out.println("Page Title: " + pageTitle);
            
            System.out.println("✅ POM demonstration completed successfully");
            
        } catch (Exception e) {
            System.err.println("❌ Error during POM demonstration: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always clean up resources
            if (loginPage != null) {
                System.out.println("3. Closing browser...");
                loginPage.closeBrowser();
                System.out.println("✅ Browser closed successfully");
            }
        }
        
        System.out.println("=== Demonstration Complete ===");
    }
}