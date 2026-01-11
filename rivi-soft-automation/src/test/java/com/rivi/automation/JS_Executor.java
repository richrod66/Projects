package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class JS_Executor {
    public static void main(String[] args) throws InterruptedException {
        /*
         * TOPIC: JavaScript Executor in Selenium WebDriver 
        */

        WebDriver driver = new ChromeDriver();
        
        
            String URL = "https://chroma-tech-academy.mexil.it/static_page/";
            
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get(URL);
   

            //SCROLLING DOWN USING ACTIONS CLASS
            //Actions actions = new Actions(driver);

            WebElement hoverButton = driver.findElement(By.xpath("//button[normalize-space()='Mouse Hover']"));
            //actions.moveToElement(hoverButton).perform();

            //SCROLLING DOWN USING JAVASCRIPT EXECUTOR
            //Cast the werbdriver instance to JavascriptExecutor:
            Thread.sleep(2000);
            JavascriptExecutor jsExecutor = (JavascriptExecutor) driver;
            jsExecutor.executeScript("arguments[0].scrollIntoView(true);", hoverButton);

            //Click element using JavaScript Executor
            Thread.sleep(2000);
            WebElement contactUsLink = driver.findElement(By.xpath("(//li[@class='gf-li'])[10]//a"));
            jsExecutor.executeScript("arguments[0].scrollIntoView(true);", contactUsLink);
            Thread.sleep(2000);
            jsExecutor.executeScript("arguments[0].click();", contactUsLink);


            Thread.sleep(12000);
            driver.quit();  
    }
}
