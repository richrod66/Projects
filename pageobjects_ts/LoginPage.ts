import { type Locator, type Page } from '@playwright/test';

export class LoginPage{

    page: Page;
    signInbutton: Locator;
    userName: Locator;
    password: Locator;

    constructor(page : Page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value = 'Login']");
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        
    } 

    async goTo(page : Page )
    {
        await this.page.goto('https://rahulshettyacademy.com/client/');
    }

    async validlogin(username: string, password: string)
    {
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }   


}

module.exports = {LoginPage};
// This code defines a LoginPage class for automating the login process on a web page using Playwright. 
