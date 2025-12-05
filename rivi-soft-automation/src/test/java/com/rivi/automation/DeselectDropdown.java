package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;


public class DeselectDropdown {
    
     public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        
        driver.get(URL);
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();   
        

        WebElement dropdown = driver.findElement(By.xpath("//select[@multiple]"));

        Select select = new Select(dropdown); 
        
        select.selectByIndex(2);
        select.selectByVisibleText("HTML");
        select.selectByContainsVisibleText("4");

        //select.deselectByIndex(2);

        //select.deSelectByContainsVisibleText("HTML");

        //select.deselectByIndex(4);

        select.deselectAll();

    
     }

}
