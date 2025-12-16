package com.rivi.automation;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Alerts {
        public static void main(String[] args) throws InterruptedException {
       
        WebDriver driver = new ChromeDriver();

        //String URL = "https://chroma.mexil.it/site/login";
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();    
        driver.manage().deleteAllCookies();

        driver.get(URL);

        //WebElement alertButton = driver.findElement(By.xpath("//input[@id='alertbtn']"));
        WebElement confirmButton = driver.findElement(By.xpath("//input[@id='confirmbtn']"));
        WebElement alertTextBox = driver.findElement(By.xpath("//input[@id='name']"));

        //Enter your name in the text box
         alertTextBox.sendKeys("Richard");

                
        //Handling Alerts
        // alertButton.click();
        // Thread.sleep(2000);

        //Clicking on button that opens alert with  "ok" and "cancel" options
         confirmButton.click();
         Thread.sleep(2000);

        Alert alert = driver.switchTo().alert();
        String alertMessage = alert.getText();
        System.out.println("Alert message is: " + alertMessage);

        //Clicking on OK button
        //alert.accept();
        //Clicking on Cancel button
         alert.dismiss();
        
        
        
        
        
        
        
         Thread.sleep(2000);
        driver.quit();
        }
}
