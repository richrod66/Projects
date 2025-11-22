package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


public class GetText {
        public static void main(String[] args) {

            WebDriver driver = new ChromeDriver();

            String URL = "https://chroma.mexil.it/site/login";

            driver.manage().window().maximize();    
            driver.manage().deleteAllCookies();

            driver.get(URL);
            WebElement userName = driver.findElement(By.xpath("//input[@name='username']"));
            WebElement password = driver.findElement(By.xpath("//input[@name='password']"));
            WebElement SignIn = driver.findElement(By.xpath("//button[contains(text(),'Sign In')]"));
            WebElement forgotPasswordLink = driver.findElement(By.xpath("//a [@class = 'forgot']"));
            String linkText = forgotPasswordLink.getText();
            
            System.out.println("The Button text is : " + SignIn.getText());
            System.out.println("Forgot Password Link Text: " + linkText);

            userName.sendKeys("general@teacher.com");
            password.sendKeys("123456");
            SignIn.click(); 



        }   
}
