package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Test {
    public static void main(String[] args) {
      
      //Using Chrome Driver
        WebDriver chromeDriver = new ChromeDriver();

      //Using Edge Driver  
        WebDriver edgeDriver = new EdgeDriver();

      //Using Firefox Driver
        WebDriver firefoxDriver = new FirefoxDriver();  

        //chromeDriver.get("https://mmhcloud.com/gateway/");
        chromeDriver.navigate().to("https://mmhcloud.com/gateway/");
        edgeDriver.get("https://mmhcloud.com/gateway/");
        firefoxDriver.get("https://mmhcloud.com/gateway/");

        System.out.println("Title: " + edgeDriver.getTitle());
        System.out.println("Title: " + firefoxDriver.getTitle());
        System.out.println("Title: " + chromeDriver.getTitle());

        // Close the browsers
        chromeDriver.quit();
        edgeDriver.quit();
        firefoxDriver.quit();
    }
}
    
