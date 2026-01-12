package com.rivi.automation;

//import javax.swing.Action;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class Is_displayed {
    
public static void main(String[] args) throws InterruptedException {
    /*
    * Topic: isDisplayed() Method in Selenium WebDriver
    */

    WebDriver driver = new ChromeDriver();
    driver.manage().timeouts().implicitlyWait(java.time.Duration.ofSeconds(20));
    Actions action = new Actions(driver);

    driver.manage().window().maximize();
    driver.manage().deleteAllCookies();

    String URL = "https://chroma-tech-academy.mexil.it/static_page/";
    driver.get(URL);
    
    WebElement ShowButton = driver.findElement(By.xpath("//input[@value='Show']"));
    WebElement HideButton = driver.findElement(By.xpath("//input[@value='Hide']"));
    WebElement TextField = driver.findElement(By.name("show-hide"));
    action.moveToElement(TextField).perform();

     
    HideButton.click();
     
    if(!TextField.isDisplayed()) {
        System.out.println("Text Field is not displayed, clicking on Show button");
        //WebElement ShowButton = driver.findElement(By.xpath("//input[@value='Show']"));
        ShowButton.click();
          
    } else {
        System.out.println("Text Field is already displayed");
        //WebElement HideButton = driver.findElement(By.xpath("//input[@value='Hide']"));
        HideButton.click();
          
    }

     
    driver.quit();



    






}

}
