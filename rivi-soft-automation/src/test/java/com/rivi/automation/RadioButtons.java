package com.rivi.automation;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;



public class RadioButtons {

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
    
        WebElement radio1 = driver.findElement(By.xpath("(//input[@name='radioButton'])[1]"));
        WebElement radio2 = driver.findElement(By.xpath("(//input[@name='radioButton'])[2]"));
        WebElement radio3 = driver.findElement(By.xpath("(//input[@name='radioButton'])[3]"));
    
    
        radio1.click();
        System.out.println("Radio 1 selected: " + radio1.isSelected());
        Thread.sleep(2000);
        
        radio2.click();
        System.out.println("Radio 2 selected: " + radio2.isSelected());
        Thread.sleep(2000);

        radio3.click();
        System.out.println("Radio 3 selected: " + radio3.isSelected());
        Thread.sleep(2000);

    
    
    
    
    
    
    
    
    
    
    
    }






    
}
