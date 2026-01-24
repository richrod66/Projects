package com.chromatech.utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import io.github.bonigarcia.wdm.WebDriverManager;
import java.time.Duration;
import java.util.Objects;

public class WebDriverUtils {

    public static WebDriver driver;
    public static WebDriverWait wait;

    public static void initBrowser() {
        // Setup WebDriverManager to automatically download and configure drivers
        switch (TestProperties.BROWSER.toLowerCase()) {
            case "chrome":
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver();
                break;
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                driver = new FirefoxDriver();
                break;
            case "edge":
                WebDriverManager.edgedriver().setup();
                driver = new EdgeDriver();
                break;
            default:
                throw new IllegalArgumentException("Unsupported browser: " + TestProperties.BROWSER);
        }

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(Objects.requireNonNull(Duration.ofSeconds(30)));
        driver.manage().timeouts().implicitlyWait(Objects.requireNonNull(Duration.ofSeconds(20)));
        
        // Initialize explicit wait
        wait = new WebDriverWait(driver, Objects.requireNonNull(Duration.ofSeconds(20)));
    }

    public static void tearDown() {
        if (driver != null) {
            driver.quit();
        }
    }
}
