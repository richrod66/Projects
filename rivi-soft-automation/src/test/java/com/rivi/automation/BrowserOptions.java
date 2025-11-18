package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserOptions {
    public static void main(String[] args) {
        System.out.println("Browser Options Class");
        WebDriver driver = new ChromeDriver();

        // Maximize the browser window by using the manage().window().maximize() method
        System.out.println("Maximizing the browser window");
        driver.manage().window().maximize();

        // Delete all cookies by using the manage().deleteAllCookies() method
        System.out.println("Deleting all cookies");
        driver.manage().deleteAllCookies();

        // Navigate to a specific URL
        System.out.println("Navigating to CHROMA site login page");
        String baseUrl = "https://chroma.mexil.it/site/login";
        driver.get(baseUrl);

        // Close the browser
        driver.quit();

    }
}
