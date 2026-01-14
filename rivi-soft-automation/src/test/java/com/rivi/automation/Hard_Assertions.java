package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class Hard_Assertions {
    public static void main(String[] args) {
        /*
        *TOPIC: HARD ASSERTIONS
        */  

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
        driver.get(URL);


    String expectedTitle = "Chroma Tech Academy1";
    String actualTitle = driver.getTitle();

       Assert.assertEquals(actualTitle, expectedTitle, "Title does not match! Test Failed.");



        driver.quit();
        

    }
}
