package com.rivi.automation;


import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Windows {
    public static void main(String[] args) throws InterruptedException {
       
        WebDriver driver = new ChromeDriver();

        //String URL = "https://chroma.mexil.it/site/login";
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();    
        driver.manage().deleteAllCookies();

        driver.get(URL);

        /**
         * Handling Tabs
         * 
         */
       
        //Getting handle of main window
        String mainWindowHandle = driver.getWindowHandle();
        System.out.println("Main Window Handle: " + mainWindowHandle);  

        
        WebElement opentTabButton = driver.findElement(By.xpath("//a[@id='opentab']"));
        opentTabButton.click();
        System.out.println("New Tab opened");

        Set<String> allWindows = driver.getWindowHandles();
        for (String nextWndow : allWindows){
            driver.switchTo().window(nextWndow);
        }
        
        //Clicking on "Courses" link in the new tab
        Thread.sleep(3000);
        WebElement coursesLink = driver.findElement(By.linkText("Enroll Now"));
        coursesLink.click();

        //Option 1 - SWITCHING TO MAIN WINDOW USING WINDOW HANDLE
        // driver.switchTo().window(mainWindowHandle);
        //  Thread.sleep(3000);
        //  WebElement option1 = driver.findElement(By.xpath("//button[@id='openwindow']"));
        // option1.click();


        //Option 2 - Using the swichTo().defaultContent() method 
        Thread.sleep(3000);
        driver.switchTo().defaultContent();
      
        Thread.sleep(2000);
       // driver.quit();
    }
}
