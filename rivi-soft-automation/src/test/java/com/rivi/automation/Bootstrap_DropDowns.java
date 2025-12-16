package com.rivi.automation;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.ui.Select;

public class Bootstrap_DropDowns {
    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();
        String URL = "https://chroma-tech-academy.mexil.it/static_page/";
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.get(URL);

        WebElement bootstrapDropdown = driver.findElement(By.xpath("(//button[@type=\"button\"])[1]"));

        bootstrapDropdown.click();
        System.out.println("Clicked on Bootstrap dropdown");

        // Beginner way
        // WebElement option1 = driver.findElement(By.xpath("//label[contains(text(),'
        // Option 1')]"));
        // WebElement option2 = driver.findElement(By.xpath("//label[contains(text(),'
        // Option 2')]"));
        // WebElement option3 = driver.findElement(By.xpath("//label[contains(text(),'
        // Option 3')]"));
        // WebElement option4 = driver.findElement(By.xpath("//label[contains(text(),'
        // Option 4')]"));

        // option1.click();
        // option2.click();
        // option3.click();
        // option4.click();

        // System.out.println("Selected 'All' from Bootstrap dropdown");

        // The Chroma Tech Academy way
        List<WebElement> options = driver.findElements(By.xpath("//label[@class='dropdown-item']"));
        String targetOption = "Option 1";
        for (WebElement option : options) {
            if (option.getText().equals(targetOption)) {
                option.click();
                System.out.println("Selected option: " + option.getText());
                break;
            }
        }

        // driver.quit();

    }
}
