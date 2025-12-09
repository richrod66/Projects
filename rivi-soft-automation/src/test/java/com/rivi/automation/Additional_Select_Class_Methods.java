package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Additional_Select_Class_Methods {
    public static void main(String[] args) {
        
        WebDriver driver = new ChromeDriver();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get(URL);


        //Initialize "dropdown" with WebElement
        WebElement dropdown = driver.findElement(By.xpath("//select[@multiple]"));

        //Create OBJECT of Select class passing the "dropdown" WebElement as a parameter to its constructor

        Select select = new Select(dropdown);
        
        // Use the select object to perform operations
        select.selectByValue("HTML");
        System.out.println("Selected option with value 'HTML'");

        //Retrive first selected option
        WebElement firstSelectedOption = select.getFirstSelectedOption();
        System.out.println("First selected option: " + firstSelectedOption.getText());  


        driver.quit();
    }
}
