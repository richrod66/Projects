package com.rivi.automation;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;



public class CheckBoxes {

    public static void main(String[] args) throws InterruptedException{
       
        WebDriver driver = new ChromeDriver();

        //String URL = "https://chroma.mexil.it/site/login";
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();    
        driver.manage().deleteAllCookies();

        driver.get(URL);

        /**
         * Handling Radio Buttons with unique attributes and attrivutes values
         * 
         */
       // WebElement radio1 = driver.findElement(By.xpath("//input[@value='radio1']"));
       // WebElement radio2 = driver.findElement(By.xpath("//input[@value='radio2']"));
       // WebElement radio3 = driver.findElement(By.xpath("//input[@value='radio3']"));

        //Using index to handle radio buttons
    
        WebElement checkbox1 = driver.findElement(By.xpath("(//input[@type='checkbox'])[5]"));
        WebElement checkbox2 = driver.findElement(By.xpath("(//input[@type='checkbox'])[6]"));
        WebElement checkbox3 = driver.findElement(By.xpath("(//input[@type='checkbox'])[7]"));
    
    
        checkbox1.click();
        System.out.println("Checkbox 1 selected: " + checkbox1.isSelected());
        Thread.sleep(2000);
        
        checkbox2.click();
        System.out.println("Checkbox 2 selected: " + checkbox2.isSelected());
        Thread.sleep(2000);

        checkbox3.click();
        System.out.println("Checkbox 3 selected: " + checkbox3  .isSelected());
        Thread.sleep(2000);

    
    
    
    
    
    
    
    
    
    
    
    }






    
}
