import SendCommunicationPage from './SendCommunicationPage.js';
import LoginPage from './LoginPage.js';
import DashboardPage from './DashboardPage.js';
import CheckoutPage from './CheckoutPage.js';
import ConfirmationPage from './ConfirmationPage.js';

import QCInstancePage from './QCInstancePage.js';

import ActionsPage from './ActionsPage.js';



class POManager {

  constructor(page) {
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
    this.qcInstancePage = new QCInstancePage(this.page);
    this.actionsPage = new ActionsPage(this.page);
    this.sendCommunicationPage = new SendCommunicationPage(this.page);

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

    getQCInstancePage() {
        return this.qcInstancePage;
    }

    getActionsPage() {
        return this.actionsPage;
    }

    getSendCommunicationPage() {
        return this.sendCommunicationPage;
    }



}

// Export the POManager class for use in tests
//module.exports = {POManager};
export default POManager;