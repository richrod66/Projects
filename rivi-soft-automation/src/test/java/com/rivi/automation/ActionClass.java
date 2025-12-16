package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class ActionClass {
    
    public static void main(String[] args) throws InterruptedException {
        System.out.println("ActionClass executed");

        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get("https://chroma-tech-academy.mexil.it/static_page/");
        // Add your action class related code here


        Actions actions = new Actions(driver);

        /*Scrolling Down Example using Actions Class*/
         WebElement hoverButton = driver.findElement(By.xpath("//button[@id =\"mousehover\"]"));
        // actions.moveToElement(hoverButton).perform();
        // actions.contextClick().perform();
        
        
        
        
        // actions.moveToElement(hoverButton).contextClick(hoverButton).perform();
        

        //SCROLLING TO AN ELEMENT THAT IS LOWER THAN THE HOVER BUTTON
         WebElement restAPILink = driver.findElement(By.xpath("//legend[normalize-space()='iFrame Example']"));
                
         actions.moveToElement(restAPILink).moveToElement(hoverButton).perform();
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // Close the browser
        Thread.sleep(6000);
        driver.quit();


          
    }       
}
