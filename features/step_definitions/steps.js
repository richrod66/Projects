import { Given, When, Then } from '@cucumber/cucumber';

import { expect } from '@playwright/test';

import '../../features/support/hooks.js';

Given('a login to Ecommerce application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
  await this.poManager.loginPage.goTo();
  await this.poManager.loginPage.validlogin(username, password);
});


When('Add {string} to Cart', {timeout : 100*1000}, async function (productName) {

    //Find the "ZARA COAT 3" product and add it to the cart
    await this.page.waitForSelector('#products > div.container > div.row');
    this.products = (await this.page.locator('.card-body h5').allTextContents());
    this.productToPurchase = productName;
    console.log("The product to purchase is: ", this.productToPurchase);  
    //this.productToPurchase = "ZARA COAT 3";
    for(let x=0 ; x < this.products.length ; x++)
    {
        console.log("The product is: ", this.products[x]);
        if (this.products[x] === this.productToPurchase){
            await this.page.getByText(' Add To Cart').nth(x).click();
            break;
       }
    }
 
});

Then('Verify {string} is added to Cart', {timeout : 100*1000} , async function (productToPurchase) {

    // Verify that the product is added to the cart
    await this.page.locator("[routerlink*='cart']").click();
    await this.page.waitForLoadState('networkidle'); // Optional, ensures page is fully loaded
    await this.page.waitForSelector('body > app-root > app-profile > div > div.cart > ul > li > div > div:nth-child(1) > h3', { timeout: 5000 });
    const cartItems = await this.page.locator('body > app-root > app-profile > div > div.cart > ul > li > div > div:nth-child(1) > h3', { timeout: 5000 }).allTextContents();
    console.log("The Cart Items are: " , cartItems)

    // Normalize case
    const cartItemsLower = cartItems.map(item => item.toLowerCase());
    const productToPurchaseLower = productToPurchase.toLowerCase();
    
    // Assert that the product is in the cart
    expect(cartItemsLower).toContain(productToPurchaseLower, `Expected product "${productToPurchase}" to be in the cart`); 

});

When('Enter valid details and Place the Order',{timeout : 100*1000}, async function () {
//Check Out
    await this.page.getByText("Checkout").click();

    //Confirm the payment Method 
     this.page.getByText("Credit Card").first().click()
    
    //Enter credit card Number 4542 9931 9292 2293
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input').fill('3714 496353 98431');
    //await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2) > option:nth-child(12)').selectOption();
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)').selectOption('12');
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)').selectOption('12');
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input').fill('123');
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input').fill('QA User');
    
    //Shipping Information
    await this.page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label');
    const emailOnFile = await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label').textContent();
    await this.page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input');
    const emailField = await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input').inputValue();
    expect(emailOnFile).toBe(emailField);

    await this.page.getByPlaceholder('Select Country').pressSequentially('United States');
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > section > button:nth-child(2) > span').click();
    
    //Place the order
    await this.page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a').click();
   
});

Then('Verify Order is present in the order history cart', {timeout : 100*1000}, async function () {

//Confirm the order was placed
    await this.page.waitForSelector('td h1');
    const orderConfirmation = await this.page.locator('td h1').textContent();
    expect(orderConfirmation).toContain('Thankyou')

    //Get the order number
    await this.page.waitForSelector('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label');
    const ordernumber = (await this.page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label').textContent());
    const trimOrderNumber =  ordernumber.slice(2, -2).trim();
    
    //Navigate to the Orders History Page
    await this.page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > label').click();
    await this.page.waitForSelector('tbody tr th');
    const orderID = await this.page.locator('tbody tr th').allTextContents();
    
    //Find the Order and view it

   
    for(let x=0 ; x<orderID.length ; x++){
        //console.log('Order ID: ', orderID[x]);
        if(trimOrderNumber===orderID[x]){ 
            await this.page.locator("body > app-root > app-myorders > div.container.table-responsive.py-5 > table > tbody > tr:nth-child(1) > td:nth-child(6) > button").click();
            break;
        }
    }

    const orderSummaryID = await this.page.locator('body > app-root > app-order-details > div > div > div > div > div.email-container > div:nth-child(2) > div:nth-child(1) > div').textContent();
    expect(orderSummaryID).toBe(trimOrderNumber);
   
    //logout
    await this.page.waitForSelector('body > app-root > app-order-details > app-sidebar > nav > ul > li:nth-child(5) > button > i');
    await this.page.locator('body > app-root > app-order-details > app-sidebar > nav > ul > li:nth-child(5) > button > i').click();  

    await this.browser.close();
});

Given ('a login to Ecommerces2 application with {string} and {string}' , {timeout : 100*1000}, async function (string, string2) {
   const userName = this.page.locator('#username');
   const passWord = this.page.locator('#password');
   const SignIn = this.page.locator('#signInBtn');
   await  this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await this.page.title());
   
   await userName.type(string);
   await passWord.type(string2);
   await SignIn.click();
    
   //await this.page.locator('#okayBtn').click();
});

    Then('Verify Error message is displayed', {timeout : 100*1000}, async function () {
        // Write code here that turns the phrase above into concrete actions
        console.log(await this.page.locator("[style*='block']").textContent());
        await expect(this.page.locator("[style*='block']")).toContainText('Incorrect');
    });