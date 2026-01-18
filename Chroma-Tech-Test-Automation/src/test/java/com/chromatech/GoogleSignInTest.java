package com.chromatech;

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

