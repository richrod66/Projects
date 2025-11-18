package com.rivi.automation;

public class myqcTest {
    
    public static void main(String[] args) {
        System.out.println("MyQC Test class executed");
        
        // Create an instance of the Page Object Model
        myqcPOM loginPage = new myqcPOM();
        
        try {
            // Test 1: Login with default credentials
            System.out.println("=== Test 1: Login with Default Credentials ===");
            boolean loginSuccess = loginPage.loginWithDefaults();
            
            if (loginSuccess) {
                System.out.println("✅ Login test passed");
                
                // Get and display current logged-in user
                String currentUser = loginPage.getLoggedInUser();
                System.out.println("Current logged-in user: " + currentUser);
                
                // Verify we're on the correct page
                boolean isLoggedIn = loginPage.verifyLogin();
                if (isLoggedIn) {
                    System.out.println("✅ Login verification successful");
                } else {
                    System.out.println("⚠️ Login verification failed");
                }
                
            } else {
                System.out.println("❌ Login test failed");
            }
            
            // Optional: Test custom login
            /*
            System.out.println("\n=== Test 2: Custom Login Test ===");
            boolean customLoginSuccess = loginPage.login("rrodriguez.prepaid@transactcampus.com", "Kronites2!");
            
            if (customLoginSuccess) {
                System.out.println("✅ Custom login test passed");
            } else {
                System.out.println("❌ Custom login test failed");
            }
            */
            
        } catch (Exception e) {
            System.err.println("Test execution failed: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always close the browser - important for cleanup
            loginPage.closeBrowser();
            System.out.println("Browser closed successfully");
        }
    }
}
