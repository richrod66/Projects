const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { test, expect} = require('@playwright/test');
const { chromium } = require('playwright');

let browser, context, page;


Given('a login to Ecommerce application with {string} and {string}', {timeout : 100*1000}, async (username, password) => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/client', { waitUntil: 'domcontentloaded' });

  // Wait for key login elements
  await page.waitForSelector('#userEmail', { state: 'visible'});
  await page.waitForSelector('#userPassword', { state: 'visible'});
  await page.fill('#userEmail', username);
  await page.fill('#userPassword', password);
  await page.click('#login');

  // Confirm login success
  await page.waitForLoadState('networkidle');
  //await page.waitForSelector('.dashboard'); // Adjust selector as needed
});

When('Add {string} to Cart', async (productName) => {
    //Find the Banarsi Saree product and add it to the cart
    await page.waitForSelector('#products > div.container > div.row');
    const products = (await page.locator('.card-body h5').allTextContents());
    const productToPurchase = 'ZARA COAT 3';
    for(let x=0 ; x < products.length ; x++)
    {
        if (products[x] === productToPurchase){
            await page.getByText(' Add To Cart').nth(x).click();
            break;
       }
    }
});

Then('Verify {string} is added to Cart', async (productToPurchase) => {
    //Confirm that one product was added to the cart
    await page.waitForSelector('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label');
    const numberOfProductsOnCart = await page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label').textContent();
    expect(numberOfProductsOnCart).toBe('1');
    await page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button ').click();

    //confirm that the correct item was added to the cart
    await page.waitForSelector('body > app-root > app-profile > div > div.cart > ul');
    const cartItems = await page.locator('.cart ul li h3').allTextContents();
        
    for (let x = 0; x < cartItems.length; x++) {
                
        if (cartItems[x] === productToPurchase) {
                    
            // Correctly await the textContent() method
            const itemNumber = await page.locator(`body > app-root > app-profile > div > div.cart > ul:nth-child(${x}) > li > div > div:nth-child(${x+1}) > p.itemNumber`).textContent();
           
            // Break the loop once the product is found
            break;

        }
    }

    // Verify the product is in the cart 
    await page.waitForSelector('.cart ul li h3:has-text("zara coat 3")', { timeout: 5000 });
    const normalizedCartItems = cartItems.map(item => item.toLowerCase().trim());
    assert.ok(normalizedCartItems.includes('zara coat 3'), 'Product not found');
    //Cawait page.pause(); // Opens Playwright Inspector
});

When('Enter valid details and Place the Order', async () => {
    
  //Check Out
    await page.getByText("Checkout").click();

    //Confirm the payment Method 
     page.getByText("Credit Card").first().click()
    
    //Enter credit card Number 4542 9931 9292 2293
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input').fill('3714 496353 98431');
    //await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2) > option:nth-child(12)').selectOption();
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(2)').selectOption('12');
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)').selectOption('12');
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input').fill('123');
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input').fill('QA User');
    
    //Shipping Information
    await page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label');
    const emailOnFile = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label').textContent();
    await page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input');
    const emailField = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input').inputValue();
    expect(emailOnFile).toBe(emailField);

    await page.getByPlaceholder('Select Country').pressSequentially('United States');
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > section > button:nth-child(2) > span').click();
    
    //Place the order
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a').click();
    
    //Confirm the order was placed
    await page.waitForSelector('td h1');
    const orderConfirmation = await page.locator('td h1').textContent();
    expect(orderConfirmation).toContain('Thankyou')

});

Then('Verify Order is present in the order history cart', async () => {

      //Get the order number
    await page.waitForSelector('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label');
    const ordernumber = (await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label').textContent());
    const trimOrderNumber = ordernumber ? ordernumber.slice(2, -2).trim() : '';




      //Navigate to the Orders History Page
    await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > label').click();
    await page.waitForSelector('tbody tr th');
    const orderID = await page.locator('tbody tr th').allTextContents();
    
    //Find the Order and view it

    for(let x=0 ; x<orderID.length ; x++){
        //console.log('Order ID: ', orderID[x]);
        if(trimOrderNumber===orderID[x]){ 
            await page.locator("body > app-root > app-myorders > div.container.table-responsive.py-5 > table > tbody > tr:nth-child(1) > td:nth-child(6) > button").click();
            break;
        }
    }

    //Confirm it is the correct order
    await page.waitForSelector('body > app-root > app-order-details > div > div > div > div > div.email-container > div:nth-child(2) > div:nth-child(1) > div');
    const orderSummaryID = await page.locator('body > app-root > app-order-details > div > div > div > div > div.email-container > div:nth-child(2) > div:nth-child(1) > div').textContent();
    expect(orderSummaryID).toBe(trimOrderNumber);


    
    // Close the browser
    await browser.close();
});



