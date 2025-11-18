package com.rivi.automation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Locators {
    public static void main(String[] args) {
        System.out.println("Locators class executed");
        // Add your locator strategies here
        WebDriver driver = new ChromeDriver();
        String qcWebURL = "https://www.mmhcloud.com/gateway/login";        
        driver.get(qcWebURL);
        driver.manage().window().maximize();
        // Example locator usage
        WebElement userName = driver.findElement(By.id("userName"));
        WebElement userPass = driver.findElement(By.id("userPass"));
        WebElement loginBtn = driver.findElement(By.id("loginBtn"));
        //WebElement passwordTextBox = driver.findElement(By.id("loginPassword"));
        // We'll find the qa101 element later after login, with proper error handling
        userName.click();
        userName.sendKeys("richard.rodriguez@transactcampus.com");
        userPass.click();
        userPass.sendKeys("Kronites2!");
        //passwordTextBox.click();
        //passwordTextBox.sendKeys("Kronites2!");
        loginBtn.click();
        
        // Wait a moment for the page to load after login
        try {
            Thread.sleep(5000); // Wait 5 seconds for page to load
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        
        // Debug: Print current page URL and title
        System.out.println("Current URL: " + driver.getCurrentUrl());
        System.out.println("Page Title: " + driver.getTitle());
        
        // Debug: Check if there are any span elements with ui-icon class
        try {
            java.util.List<WebElement> spanElements = driver.findElements(By.xpath("//span[contains(@class,'ui-icon')]"));
            System.out.println("Found " + spanElements.size() + " span elements with 'ui-icon' class");
            
            for (int i = 0; i < Math.min(5, spanElements.size()); i++) {
                WebElement span = spanElements.get(i);
                System.out.println("Span " + (i+1) + ": class='" + span.getAttribute("class") + "', style='" + span.getAttribute("style") + "'");
            }
        } catch (Exception e) {
            System.out.println("No span elements with ui-icon class found");
        }
        
        // Look for server selection elements and find the correct QA server
        try {
            System.out.println("Looking for QA Version 10 - Test 1 server...");
            
            // Wait a bit more for elements to be fully loaded
            Thread.sleep(2000);
            
            // First, let's look for clickable elements like links or buttons containing Test 1
            java.util.List<WebElement> clickableElements = driver.findElements(By.xpath("//a[contains(text(),'QA Version 10 - Test 1')] | //button[contains(text(),'QA Version 10 - Test 1')] | //div[@role='button' and contains(text(),'QA Version 10 - Test 1')] | //span[contains(@class,'clickable') and contains(text(),'QA Version 10 - Test 1')]"));
            
            if (clickableElements.size() > 0) {
                for (WebElement element : clickableElements) {
                    String elementText = element.getText().trim();
                    System.out.println("Found clickable element: '" + elementText + "'");
                    if (elementText.contains("QA Version 10 - Test 1") && !elementText.contains("MyQC")) {
                        element.click();
                        System.out.println("Successfully clicked on clickable 'QA Version 10 - Test 1' element!");
                        
                        // Wait for the login to complete
                        Thread.sleep(3000);
                        System.out.println("Final URL after server selection: " + driver.getCurrentUrl());
                        return;
                    }
                }
            }
            
            // If no direct clickable elements found, look for all text elements and find clickable parents
            System.out.println("No direct clickable elements found, searching for text elements with clickable parents...");
            java.util.List<WebElement> textElements = driver.findElements(By.xpath("//*[contains(text(),'QA Version 10 - Test 1')]"));
            
            for (int i = 0; i < textElements.size(); i++) {
                WebElement textElement = textElements.get(i);
                String elementText = textElement.getText().trim();
                System.out.println("Text element " + (i+1) + ": '" + elementText + "'");
                
                if (elementText.contains("QA Version 10 - Test 1") && !elementText.contains("MyQC")) {
                    // Try multiple approaches to make it clickable
                    boolean clickSuccessful = false;
                    
                    // Approach 1: Try clicking the element directly
                    try {
                        textElement.click();
                        System.out.println("Successfully clicked text element directly!");
                        clickSuccessful = true;
                    } catch (Exception e1) {
                        System.out.println("Direct click failed: " + e1.getMessage());
                        
                        // Approach 2: Try clicking the parent element
                        try {
                            WebElement parent = textElement.findElement(By.xpath("./.."));
                            parent.click();
                            System.out.println("Successfully clicked parent element!");
                            clickSuccessful = true;
                        } catch (Exception e2) {
                            System.out.println("Parent click failed: " + e2.getMessage());
                            
                            // Approach 3: Try clicking grandparent
                            try {
                                WebElement grandParent = textElement.findElement(By.xpath("./../.."));
                                grandParent.click();
                                System.out.println("Successfully clicked grandparent element!");
                                clickSuccessful = true;
                            } catch (Exception e3) {
                                System.out.println("Grandparent click failed: " + e3.getMessage());
                                
                                // Approach 4: Try finding a clickable sibling
                                try {
                                    WebElement sibling = textElement.findElement(By.xpath("./following-sibling::*[@onclick or @href] | ./preceding-sibling::*[@onclick or @href]"));
                                    sibling.click();
                                    System.out.println("Successfully clicked sibling element!");
                                    clickSuccessful = true;
                                } catch (Exception e4) {
                                    System.out.println("Sibling click failed: " + e4.getMessage());
                                }
                            }
                        }
                    }
                    
                    if (clickSuccessful) {
                        // Wait for the server login to complete
                        Thread.sleep(3000);
                        
                        String currentUrl = driver.getCurrentUrl();
                        String currentTitle = driver.getTitle();
                        
                        System.out.println("Final URL after server selection: " + currentUrl);
                        System.out.println("Final page title: " + currentTitle);
                        
                        // Check if we're actually in the Test 1 environment
                        // Look for any indicators that we're in the correct server
                        try {
                            // Check if there are any elements indicating we're in Test 1
                            java.util.List<WebElement> test1Indicators = driver.findElements(By.xpath("//*[contains(text(),'Test 1') or contains(text(),'TEST 1') or contains(text(),'test1')]"));
                            System.out.println("Found " + test1Indicators.size() + " Test 1 indicators on the page");
                            
                            // Check for a login button or "Enter" button that might need to be clicked
                            java.util.List<WebElement> enterButtons = driver.findElements(By.xpath("//button[contains(text(),'Enter') or contains(text(),'LOGIN') or contains(text(),'Connect')] | //input[@type='submit' and contains(@value,'Enter')]"));
                            if (enterButtons.size() > 0) {
                                System.out.println("Found " + enterButtons.size() + " potential enter/login buttons");
                                for (WebElement button : enterButtons) {
                                    try {
                                        System.out.println("Trying to click button: " + button.getAttribute("value") + " / " + button.getText());
                                        button.click();
                                        Thread.sleep(2000);
                                        System.out.println("Successfully clicked enter button!");
                                        System.out.println("New URL: " + driver.getCurrentUrl());
                                        System.out.println("New Title: " + driver.getTitle());
                                        break;
                                    } catch (Exception buttonError) {
                                        System.out.println("Could not click button: " + buttonError.getMessage());
                                    }
                                }
                            } else {
                                System.out.println("No enter/login buttons found after server selection");
                            }
                            
                        } catch (Exception indicatorError) {
                            System.out.println("Error checking for Test 1 indicators: " + indicatorError.getMessage());
                        }
                        
                        return;
                    }
                }
            }
            
            System.out.println("Could not successfully click any 'QA Version 10 - Test 1' elements");
            
        } catch (Exception e) {
            System.out.println("Error in server selection process: " + e.getMessage());
        }

        driver.quit();
    }
    
}
