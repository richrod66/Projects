package com.rivi.automation;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Additional_Select_Class_Methods {
    public static void main(String[] args) {
        
        WebDriver driver = new ChromeDriver();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get(URL);
    }
}