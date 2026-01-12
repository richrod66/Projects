package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Frames {
    public static void main(String[] args) throws InterruptedException {
         
        WebDriver driver = new ChromeDriver();
        
        
            String URL = "https://chroma-tech-academy.mexil.it/static_page/";
            
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get(URL);
            
            // Using Actions Class to scroll down to an element on the bottom of the page 
            Actions actions = new Actions(driver);
            WebElement restAPILink = driver.findElement(By.xpath("//a[normalize-space()='REST API']"));
            actions.moveToElement(restAPILink).perform();

            // Locating iframe element with xpath
            //WebElement iframeElement = driver.findElement(By.xpath("//iframe[@name='iframe-name']")); 
            
            //Switching to the iframe using WebElement
            //driver.switchTo().frame(iframeElement);
            
            //Switching to the iframe by index
            //driver.switchTo().frame(0);

            //Switching to the iframe by id or name
            driver.switchTo().frame("courses-iframe");

            WebElement frameMenuButton = driver.findElement(By.xpath("//a[@class='elementor-icon'][1]"));          //frameMenuButton.click();
            frameMenuButton.click();

            // Switch back to the main page using defaultContent()
            driver.switchTo().defaultContent();
            restAPILink.click();

            Thread.sleep(2000);
            driver.quit();











     }
}
