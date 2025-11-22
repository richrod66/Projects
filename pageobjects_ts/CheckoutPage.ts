import { type Locator, type Page } from '@playwright/test';

export class CheckoutPage{
    page: Page;
    CrditCardBtn: Locator;
    PlaceOrderBtn: Locator;
    CreditCardImput: Locator;
    CreditCardMonth: Locator;
    CreditCardYear: Locator;
    CreditCardCVC: Locator;
    CreditCardName: Locator;
    ShippingEmail: Locator;
    SignOutBtn: Locator;
    
    constructor (page : Page){
        this.page = page;
        this.CrditCardBtn = this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input');
        
        this.PlaceOrderBtn = this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a');

        this.CreditCardImput = this.page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input');
        this.CreditCardMonth = this.page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)');
        this.CreditCardYear = this.page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)');
        this.CreditCardCVC = this.page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input');
        this.CreditCardName = this.page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input');
        this.ShippingEmail = this.page.locator('div.payment__info > div.payment__shipping > div.details__user > div > input');
        this.PlaceOrderBtn = this.page.locator('div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a');
        this.SignOutBtn = this.page.locator('body > app-root > app-thanksorder > app-sidebar > nav > ul > li:nth-child(5) > button > i'); // Assuming this is the sign out button


    }    


    async isCreditCardEnabled () {
        return await this.CrditCardBtn.isEnabled();
    }

    async enterCreditCardDetails(cardNumber : number, month : number, year : number, cvc : number , name : string) {
        await this.CreditCardImput.fill(cardNumber.toString());
        await this.CreditCardMonth.selectOption(month.toString());
        await this.CreditCardYear.selectOption(year.toString());
        await this.CreditCardCVC.click();
        await this.CreditCardCVC.fill(cvc.toString());
        await this.CreditCardName.click();   
        await this.CreditCardName.fill(name);
    }

    async EnterShippingInfo(emailAddress : any, Country : any) {
        await this.ShippingEmail.fill(emailAddress);
        await this.page.getByPlaceholder('Select Country').pressSequentially('United States');
        await this.page.locator('div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > section > button:nth-child(2) > span').click();

    }

    async PlaceOrder() {
        await this.PlaceOrderBtn.click();
    } 
    
    async SignOut() {
        await this.SignOutBtn.click();
    }       
  
}


module.exports = { CheckoutPage };
// This code defines a CheckoutPage class for interacting with a checkout page in a web application.    
