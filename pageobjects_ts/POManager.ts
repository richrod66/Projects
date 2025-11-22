import { type Locator, type Page } from '@playwright/test';
import {LoginPage } from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {CheckoutPage} from './CheckoutPage';    
import { ConfirmationPage} from './ConfirmationPage';

export class POManager {
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    checkoutPage: CheckoutPage;
    confirmationPage: ConfirmationPage;

  constructor(page:Page) {
    if (!page) {
        throw new Error("Page context is required for POManager initialization.");
        }   

    this.page = page; // Store the page context for use in page objects
    // Initialize page objects with the current page context
    // This allows each page object to interact with the same page instance

    this.loginPage = new LoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
    this.confirmationPage = new ConfirmationPage(this.page);

  }


    getLoginPage() {
        return this.loginPage;
    }   

    getDashboardPage() {
        return this.dashboardPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getConfirmationPage() {
        return this.confirmationPage;
    }



}

// Export the POManager class for use in tests
module.exports = {POManager};