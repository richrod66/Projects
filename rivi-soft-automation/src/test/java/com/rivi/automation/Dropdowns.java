package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Dropdowns {
    public static void main(String[] args) {

         WebDriver driver = new ChromeDriver();
         //String URL = "https://chroma.mexil.it/site/login";
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();    
        driver.get(URL);

        Select dropdowns = new Select(driver.findElement(By.xpath("//*[@id='dropdown-class-example']")));

    }

    }
    
}
