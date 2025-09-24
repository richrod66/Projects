//const {test, expect} = require('@playwright/test');
import { test, expect, type Locator, type Page } from '@playwright/test';

const {customtest} = require('../utils/test-base'); // Import the extended test with test data
//import { customtest } from '../utils/test-base.js'; // Import the extended test with test data



const {POManager} = require('../pageobjects/POManager');

//test.describe.configure({ mode: 'parallel' }); // Run tests in parallel
test.describe.configure({ mode: 'serial' }); // Run tests in serial   
//test.describe.configure({ mode: 'default' }); // Run tests in default mode
//test.describe.configure({ mode: 'shard' }); // Run tests in shard mode
//test.describe.configure({ mode: 'skip' }); // Skip the tests in this file
//test.describe.configure({ mode: 'only' }); // Run only the tests in this file 
//test.describe.configure({ mode: 'fixme' }); // Mark the tests in this file as fixme
//test.describe.configure({ mode: 'fail' }); // Mark the tests in this file as fail
//test.describe.configure({ mode: 'slow' }); // Mark the tests in this file as slow
//test.describe.configure({ mode: 'todo' }); // Mark the tests in this file as todo



customtest(' @login Second Login Test', async (
    { page, testDataForOrder }: { page: Page, testDataForOrder: any }
) =>
{
    
    const poManager = new POManager(page); // Initialize the POManager with the current page context
    
    
        const loginPage = poManager.getLoginPage(); // Get the LoginPage object from POManager
        await loginPage.goTo();
        await loginPage.validlogin(testDataForOrder.userName, testDataForOrder.passWord); 
    
        const dashboardPage = poManager.getDashboardPage(); // Get the DashboardPage object from POManager
        await dashboardPage.searchProductAddToCart(testDataForOrder.productToPurchase);
        //await dashboardPage.navigateToCart();
        //await dashboardPage.navigateToCheckout();
}); // Close the test callback for the second test

test('Client App Other Way', async ({page}) => {

    //Go to the site
    await page.goto('https://rahulshettyacademy.com/client/');
    
    //Check the page title ("Let's Shop") is correct
    const pageTitle = await page.title();
    expect(pageTitle).toBe("Let's Shop");

    //Log into the site
    await page.getByPlaceholder('email@example.com').fill('rich944@gmail.com');
    await page.getByPlaceholder('enter your passsword').fill('Kronites2!');
    await page.locator('#login').click();

    //Find the Banarsi Saree product and add it to the cart
    await page.waitForSelector('#products > div.container > div.row');
    const products = (await page.locator('.card-body h5').allTextContents());
    const productToPurchase = "ZARA COAT 3";
    for(let x=0 ; x < products.length ; x++)
    {
        if (products[x] === productToPurchase){
            await page.getByText(' Add To Cart').nth(x).click();
            break;
       }
    }

    //Confirm that one product was added to the cart
    await page.waitForSelector('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label');
    const numberOfProductsOnCart = await page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label').textContent();
    expect(numberOfProductsOnCart).toBe('1');
    await page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button ').click();

    //confirm that the correct item was added to the cart
    await page.waitForSelector('body > app-root > app-profile > div > div.cart > ul');
    const cartItems = await page.locator('div h3').allTextContents();
    
    for (let x = 0; x < cartItems.length; x++) {
                
        if (cartItems[x] === productToPurchase) {
                    
            // Correctly await the textContent() method
            const itemNumber = await page.locator(`body > app-root > app-profile > div > div.cart > ul:nth-child(${x}) > li > div > div:nth-child(${x}) > p.itemNumber`).textContent();
           
            // Break the loop once the product is found
            break;

        }

    }

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

    //Get the order number
    await page.waitForSelector('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label');
    const ordernumber = (await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label').textContent());
    const trimOrderNumber = ordernumber ? ordernumber.slice(2, -2).trim() : '';
    
    //Navigate to the Orders History Page
    await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > label').click();
    await page.waitForSelector('tbody tr th');
    const orderID = await page.locator('tbody tr th').allTextContents();
    
    //Find the Order and view it

    //await page.locator('tbody tr th').filter({hasText:trimOrderNumber}).getByRole("button", {name:"View"}).click();

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
        
});

