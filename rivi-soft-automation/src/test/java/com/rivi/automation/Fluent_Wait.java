package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;

public class Fluent_Wait {
    public static void main(String[] args) {
        /*
        *TOPIC: FLUENT WAIT
        */
       WebDriver driver = new ChromeDriver();
       driver.manage().window().maximize();
       driver.manage().deleteAllCookies();
       
       //Declare an implicit wait
       driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(10));



       String URL = "https://chroma-tech-academy.mexil.it/static_page/";    
       driver.get(URL); 

       
        WebElement bootstrapDropDown = driver.findElement(By.xpath("(//button[@data-toggle='dropdown'])[1]"));

        FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver)
                .withTimeout(java.time.Duration.ofSeconds(30)) // Set the Max time out duration
                .pollingEvery(java.time.Duration.ofSeconds(5)) //Set the polling interval
                .ignoring(org.openqa.selenium.NoSuchElementException.class); //Ignore the exception

        wait.until(ExpectedConditions.elementToBeClickable(bootstrapDropDown));
        bootstrapDropDown.click();

    }
}
