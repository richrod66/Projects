package com.rivi.automation;

import java.time.Duration;

import org.openqa.selenium.By;
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

        //Declaring Implicit Wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));

    
        Actions action = new Actions(driver);   
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";

        driver.get(URL);

        WebElement youtube = driver.findElement(By.xpath("(//li[@class='gf-li'])[18]/a"));
        // WebElement aboutUsLink = driver.findElement(By.xpath("//a[text()='About Us']")); 
        // System.out.println("Created the aboutUsLink WebElement object");
        // action.moveToElement(aboutUsLink).perform();

        action.moveToElement(youtube).perform();
        youtube.click();

        driver.quit();

        


     }
}
