package com.rivi.automation;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class ExplicitWaits {
    public static void main(String[] args) throws InterruptedException {

        /*
        *TOPIC: Explicit Waits
        */

        WebDriver driver = new ChromeDriver();

        driver.manage().window().maximize();    
        driver.manage().deleteAllCookies();

        String URL = "https://chroma-tech-academy.mexil.it/static_page/";

        //Declare Implicit Wait
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(15));

        driver.get(URL);

        WebElement bootstrapDropDown = driver.findElement(By.xpath("(//button[@data-toggle='dropdown'])[1]"));

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(35));
        
        //Wait for the element visibility
        wait.until(ExpectedConditions.visibilityOf(bootstrapDropDown));
        //bootstrapDropDown.click();

        //Wait for the element to be clickable
        wait.until(ExpectedConditions.elementToBeClickable(bootstrapDropDown));
        bootstrapDropDown.click(); 
        
        WebElement Option3 = driver.findElement(By.xpath("(//input[@type='checkbox'])[3]"));
       
       
       
        //Additional Methods
        wait.until(ExpectedConditions.alertIsPresent());




        Thread.sleep(2000);
        driver.quit();
    }
}
