package com.chromatech.utils;

public class TestProperties {

    // Set the desired browser here: "chrome", "firefox", or "edge"
    public static final String BROWSER = "chrome";
    //public static final String BROWSER = "firefox";
    //public static final String BROWSER = "edge";

    // Set the base URL for testing
    public static final String BASE_URL = "https://www.google.com";

    //Page Objects
    public static final String GOOGLE_SIGNIN_BUTTON_XPATH = "//a[@class='gb_A']";

    public static final String GOOGLE_EMAIL_FIELD_XPATH = "//input[@type='email']";

    public static final String GOOGLE_NEXT_BUTTON_XPATH = "(//button[@type='button'])[3]";

    
    // Test data
    public static final String TEST_EMAIL = "rich944@gmail.com";

    public static final String TEST_PASSWORD = "OpenTable2023!"; // Replace with a secure password


}
