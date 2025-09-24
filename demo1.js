var message1 = "Hello";
message1 = "Goodbye";
var age1 = 58;
console;
var isActive1 = true;
var numbers1 = [1, 2, 3, 4, 5];
console.log(message1, age1, isActive1, numbers1);
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

class CheckoutPage{

    constructor (page){
        this.page = page;
        this.CrditCardBtn = 'body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input';
        
        this.PlaceOrderBtn = 'body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a';

        this.CreditCardImput = 'div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input';
        this.CreditCardMonth = 'div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)';
        this.CreditCardYear = 'div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)';
        this.CreditCardCVC = 'div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input';
        this.CreditCardName = 'div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input';
        this.ShippingEmail = 'div.payment__info > div.payment__shipping > div.details__user > div > input';
        this.PlaceOrderBtn = 'div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a';
        this.SignOutBtn = 'body > app-root > app-thanksorder > app-sidebar > nav > ul > li:nth-child(5) > button > i'; // Assuming this is the sign out button


    }    


    async isCreditCardEnabled () {
        return await this.CrditCardBtn.isEnabled();
    }

    async enterCreditCardDetails(cardNumber, month, year, cvc, name) {
        await this.page.locator(this.CreditCardImput).fill(cardNumber);
        await this.page.locator(this.CreditCardMonth).selectOption(month);
        await this.page.locator(this.CreditCardYear).selectOption(year);
        await this.page.locator(this.CreditCardCVC).click();
        await this.page.locator(this.CreditCardCVC).fill(cvc);
        await this.page.locator(this.CreditCardName).click();   
        await this.page.locator(this.CreditCardName).fill(name);
    }

    async EnterShippingInfo(emailAddress, Country) {
        await this.page.locator(this.ShippingEmail).fill(emailAddress);
        await this.page.getByPlaceholder('Select Country').pressSequentially('United States');
        await this.page.locator('div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > section > button:nth-child(2) > span').click();

    }

    async PlaceOrder() {
        await this.page.locator(this.PlaceOrderBtn).click();
    } 
    
    async SignOut() {
        await this.page.locator(this.SignOutBtn).click();
    }       
  
}


module.exports = { CheckoutPage };
// This code defines a CheckoutPage class for interacting with a checkout page in a web application.    

