package com.chromatech.utils;

public class TestProperties {

    // Set the desired browser here: "chrome", "firefox", or "edge"
    public static final String BROWSER = "chrome";
    //public static final String BROWSER = "firefox";
    //public static final String BROWSER = "edge";

    // Set the base URL for testing
    //public static final String BASE_URL = "https://www.google.com";
     public static final String BASE_URL = "https://mexil.it/chroma/site/userlogin"; // Update this with your actual login page

    //Page Objects
    public static final String USERNNAME = "//input[@name='username']";

    public static final String PASSWORD = "//input[@name='password']";

    public static final String SIGNIN_BUTTON = "//button[@type='submit']";
    
    public static final String FORGOT_PASSWORD = "//a[contains(@class, 'forgot)]";
    // Test data
    public static final String TEST_EMAIL = "general@teacher.com";

    public static final String TEST_PASSWORD = "123456";

    public static final String DASHBOARD_TITLE = "Chroma Tech Academy";  

    public static final String DASHBOARD_URL = "https://mexil.it/chroma/admin/admin/dashboard";    


    
}
