package com.chromatech.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.chromatech.utils.WebDriverUtils;

public class LoginPage {

    public LoginPage() {
        // Initialize WebElements using PageFactory
       PageFactory.initElements(WebDriverUtils.driver, this);
    }

    @FindBy(xpath = "//input[@name='username']")
    public WebElement usernameField;

    @FindBy(xpath = "//input[@name='password']")
    public WebElement passwordField;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement signInButton; 

    @FindBy(xpath = "//a[contains(@class, 'forgot')]")
    public WebElement forgotPasswordLink;


}
