package com.chromatech.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverUtils {

    public static WebDriver driver;

    public static void initBrowser() {
    
    driver = new ChromeDriver();
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
