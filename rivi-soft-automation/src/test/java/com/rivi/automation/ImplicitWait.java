package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ImplicitWait {
    public static void main(String[] args) {
        /*
        * TOPIC: IMPLICIT WAIT
        */

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(60));
        Actions action = new Actions(driver);   
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";

        driver.get(URL);


        WebElement aboutUsLink = driver.findElement(
            org.openqa.selenium.By.xpath("//a[text()='About Us']")
        );  

        // wait.until(ExpectedConditions.visibilityOf(aboutUsLink);


        
        action.moveToElement(aboutUsLink).perform();

        


     }
}
