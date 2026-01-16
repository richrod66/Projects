package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class HandlingHardAsserts {
    public static void main(String[] args) {
        /*
         * TOPIC: HANDLING HARD ASSERTS
         */

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));
        String url = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.get(url);


                String expectedTitle = "Chroma Tech Academy";
        String actualTitle = driver.getTitle();

        String actualPageURL = driver.getCurrentUrl();
        String expectedPageURL = "https://chroma-tech-academy.mexil.it/static_page/";

        WebElement actualInstructorJohnText = driver.findElement(By.xpath("(//*[contains(text(),'John')])[1]"));
        String expectedInstructorJohnText = "John";


        try {
            Assert.assertEquals(actualTitle, expectedTitle, " Title verification failed!");
            Assert.assertEquals(actualPageURL, expectedPageURL, " Page URL verification failed!");
            Assert.assertEquals(actualInstructorJohnText.getText(), expectedInstructorJohnText, " Instructor John text verification failed!");

        } catch (AssertionError e) {
            System.out.println("Title assertion failed: " + e.getMessage());
        }
        


        driver.quit();
    }
}
