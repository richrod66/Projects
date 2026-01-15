package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.asserts.SoftAssert;

public class Soft_Assertions {
    public static void main(String[] args) {
        /* 
        *TOPIC: SOFT ASSERTIONS
        */

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
        String url = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.get(url);

        String expectedTitle = "Chroma Tech Academys";
        String actualTitle = driver.getTitle();

        String actualPageURL = driver.getCurrentUrl();
        String expectedPageURL = "https://chroma-tech-academy.mexil.it/static_page/1";

        WebElement actualInstructorJohnText = driver.findElement(By.xpath("(//*[contains(text(),'John')])[1]"));
        String expectedInstructorJohnText = "John";

        //Step 1: Create the SoftAssert object
        SoftAssert softAssert = new SoftAssert();

        //Step 2: Use soft assertion methods
        softAssert.assertEquals(actualTitle, expectedTitle," Title verification failed!");
        softAssert.assertEquals(actualInstructorJohnText.getText(), expectedInstructorJohnText," Instructor John text verification failed!");
        softAssert.assertEquals(actualPageURL, expectedPageURL," Page URL verification failed!" );

        //Step 3: Call assertAll() to report all assertion results
        try {
            softAssert.assertAll();
        } catch (AssertionError e) {
            System.out.println("One or more assertions failed:");
            System.out.println(e.getMessage());
        }   
       // softAssert.assertAll();     
    
    
    
    
    
        driver.quit();

    }

}
