package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import java.time.Duration;
import java.util.List;

public class DeselectDropdown {
    
     public static void main(String[] args) {
        System.out.println("DeselectDropdown class executed");
        
        WebDriver driver = new ChromeDriver();
        
        try {
            String URL = "https://chroma-tech-academy.mexil.it/static_page/";
            
            driver.manage().window().maximize();
            driver.manage().deleteAllCookies();
            driver.get(URL);
            
            // Wait for page to load
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));   

            // Wait for dropdown to be present
            WebElement dropdown = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//select[@multiple]")));
            System.out.println("Dropdown found");

            Select select = new Select(dropdown);
            
            // Verify it's a multi-select dropdown
            if (select.isMultiple()) {
                System.out.println("Multi-select dropdown confirmed");
                
                // Show available options
                List<WebElement> options = select.getOptions();
                System.out.println("Available options:");
                for (int i = 0; i < options.size(); i++) {
                    System.out.println("  " + i + ": " + options.get(i).getText());
                }
                
                // Select multiple options
                select.selectByIndex(2);
                System.out.println("Selected option at index 2");
                
                select.selectByVisibleText("HTML");
                System.out.println("Selected HTML option");
                
                // Find and select option containing "4" (Bootstrap 4)
                for (WebElement option : options) {
                    if (option.getText().contains("4")) {
                        if (!option.isSelected()) {
                            option.click();
                            System.out.println("Selected option containing '4': " + option.getText());
                        }
                        break;
                    }
                }

                // Show selected options
                List<WebElement> selectedOptions = select.getAllSelectedOptions();
                System.out.println("\nCurrently selected options:");
                for (WebElement option : selectedOptions) {
                    System.out.println("  - " + option.getText());
                }

                // Deselect specific options
                select.deselectByIndex(2);
                System.out.println("Deselected option at index 2");

                try {
                    select.deselectByVisibleText("HTML");
                    System.out.println("Deselected HTML option");
                } catch (Exception e) {
                    System.out.println("HTML option was not selected or not found");
                }

                // Finally deselect all
                select.deselectAll();
                System.out.println("Deselected all options");
                
            } else {
                System.out.println("This is not a multi-select dropdown");
            }

            
        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
            e.printStackTrace();
        } finally {
            // Always close the browser
            System.out.println("Closing browser...");
            driver.quit();
        }
     }

}
