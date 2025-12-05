package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class SelectDropdown {
    public static void main(String[] args) {
        
        WebDriver driver = new ChromeDriver();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.get(URL);
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();

        WebElement dropdown = driver.findElement(By.xpath("(//select[@multiple])[1]"));
       
        Select dropdownOption = new Select(dropdown);

        dropdownOption.selectByValue("HTML");
        dropdownOption.selectByValue("CSS");
    }
    
}
