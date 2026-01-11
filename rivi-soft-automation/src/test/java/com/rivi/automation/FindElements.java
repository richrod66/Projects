package com.rivi.automation;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FindElements {
    public static void main(String[] args) throws InterruptedException {
        /*  
        * TOPIC: Finding Elements in Selenium WebDriver 
        */

        WebDriver driver = new ChromeDriver();
        
        
            String URL = "https://chroma-tech-academy.mexil.it/static_page/";
            
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get(URL);

            List<WebElement> links = driver.findElements(By.tagName("a"));
            // RETRIEVING NUMBER OF LINKS ON A WEB PAGE
            System.out.println("Number of links on the web page: " + links.size());

            //PRINTING THE TEXT OF EACH LINK
            // for(WebElement link : links) {
            //     System.out.println(link.getText());
            // }



















            Thread.sleep(2000);
            driver.quit();

    }
}
