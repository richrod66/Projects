package com.chromatech.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class WebDriverUtils {

    public static WebDriver driver;

    public static void initBrowser() {
        
    switch (TestProperties.BROWSER.toLowerCase()) {
        case "chrome":
            driver = new ChromeDriver();
            break;
        case "firefox":
            driver = new FirefoxDriver();
            break;
        case "edge":
            driver = new EdgeDriver();
            break;
        default:
            throw new IllegalArgumentException("Unsupported browser: " + TestProperties.BROWSER);
        }

    driver.manage().window().maximize();
    driver.manage().deleteAllCookies();
    driver.manage().timeouts().pageLoadTimeout(java.time.Duration.ofSeconds(30));
    driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));

    }


    public static void tearDown() throws InterruptedException {
        Thread.sleep(2000);
        driver.quit();
    }   
    
    
}
