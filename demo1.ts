import { expect, type Locator, type Page } from '@playwright/test';

let message1 : string = "Hello";
message1 = "Goodbye";
let age1 : number = 58;
console 
let isActive1 : boolean = true;
let numbers1 : number[] = [1, 2, 3, 4, 5];
console.log(message1, age1, isActive1, numbers1);
 function add(a:number, b:number): number {
    return a+b;
 }

console.log(add(5, 10));

class CheckoutPage{

   readonly page: Page;
   readonly CrditCardBtn: Locator;
   readonly PlaceOrderBtn: Locator;
   readonly CreditCardImput: Locator;
   readonly CreditCardMonth: Locator;
   readonly CreditCardYear: Locator;
   readonly CreditCardCVC: Locator;
   readonly CreditCardName: Locator;
   readonly ShippingEmail: Locator;
   readonly SignOutBtn: Locator;
    

    constructor (page: Page){
        this.page = page;
        this.CrditCardBtn = page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input');
        
        this.PlaceOrderBtn = page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a');

        this.CreditCardImput = page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input');
        this.CreditCardMonth = page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)');
        this.CreditCardYear = page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)');
        this.CreditCardCVC = page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input');
        this.CreditCardName = page.locator('div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input');
        this.ShippingEmail = page.locator('div.payment__info > div.payment__shipping > div.details__user > div > input');
        this.PlaceOrderBtn = page.locator('div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a');
        this.SignOutBtn = page.locator('body > app-root > app-thanksorder > app-sidebar > nav > ul > li:nth-child(5) > button > i'); // Assuming this is the sign out button


    }    


    async isCreditCardEnabled () {
        return await this.CrditCardBtn.isEnabled();
    }

    async enterCreditCardDetails(cardNumber: number, month: number, year: number, cvc: number, name: string) {
        await this.CreditCardImput.fill(cardNumber.toString());
        await this.CreditCardMonth.selectOption(month.toString());
        await this.CreditCardYear.selectOption(year.toString());
        await this.CreditCardCVC.click();
        await this.CreditCardCVC.fill(cvc.toString());
        await this.CreditCardName.click();   
        await this.CreditCardName.fill(name);
    }

    async EnterShippingInfo(emailAddress: string, Country: string) {
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

 