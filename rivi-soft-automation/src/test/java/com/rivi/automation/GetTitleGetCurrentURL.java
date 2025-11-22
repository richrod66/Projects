package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetTitleGetCurrentURL {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();

        String URL = "https://chroma.mexil.it/site/login";

        driver.manage().window().maximize();    
        driver.manage().deleteAllCookies();


        driver.get(URL);

        // Get and print the title of the page
        String title = driver.getTitle();
        System.out.println("Page Title: " + title);

        // Get and print the current URL of the page
        String currentURL = driver.getCurrentUrl();
        System.out.println("Current URL: " + currentURL);

        //Log in 
        String username = "general@teacher.com";
        String password = "123456";
        // Add login steps here using the username and password variables   

        WebElement userName = driver.findElement(By.xpath("//*[@id=\"form-username\"]"));
        WebElement userPass = driver.findElement(By.xpath("//*[@id=\"form-password\"]"));
        WebElement loginBtn = driver.findElement(By.xpath("//button[@type='submit']"));
        
        userName.click();
        userName.sendKeys(username);

        userPass.click();
        userPass.sendKeys(password);

        loginBtn.click();

        


        //paust the execution for 5 seconds to see the browser
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }   
        
        // Close the driver
        driver.quit();
    }
    
}
