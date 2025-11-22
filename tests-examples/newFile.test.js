const { test, expect } = require('@playwright/test');
const {error, assert} = require('console');
const exp = require('constants');


test('Create an account "Register"', async ({ page }) => {
    // Navigate to the Rahul Shetty Academy
    await page.goto('https://rahulshettyacademy.com/client');

    // Get the title and confirm that you are on the Shopping page
    const pageTitle1 = await page.title();
    console.log("Page title 1: " + pageTitle1); 
    expect(pageTitle1).toBe("Let's Shop");

    // Register to create an account
    // Click the Register link
    await page.locator('body > app-root > app-login > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > p > a').click();
    const pageTitle2 = await page.title();
    console.log("Page title 2: " + pageTitle2);
    expect(pageTitle2).toBe("Let's Shop");

    //Fill the registration form
    //Confirm that you are on the Registration form
    const loginTitle = await page.locator('.login-title').textContent();
    await expect(loginTitle).toBe("Register");

    //enter first name
    await page.locator('#firstName').fill('richard');

    // enter last name
    await page.locator('#lastName').fill('rodriguez');

    // Enter email
    await page.locator('#userEmail').fill('rich944@gmail.com');

    //Enter phone number
    await page.locator('#userMobile').fill('5188817936');

    //Select Student for the occupation
    await page.selectOption('select[formcontrolname="occupation"]', { label: 'Student' });

    // Select the "Male" radio button
    await page.locator('input[formcontrolname="gender"][value="Male"]').check();

    //Enter a password
    await page.locator('#userPassword').fill('P0rsche944!');


    //Confirm the password
    await page.locator('#confirmPassword').fill('P0rsche944!');

    // Check age box
    await page.locator('input[formcontrolname="required"][type="checkbox"]').check();

    // Register
    await page.locator('#login').click();

    //pause
    //await page.pause();
});

test.only('login',async ({page}) =>{

    // Navigate to the Rahul Shetty Academy
    await page.goto('https://rahulshettyacademy.com/client');

    // Get the title and confirm that you are on the Shopping page
    const pageTitle1 = await page.title();
    console.log("Page title 1: " + pageTitle1); 
    expect(pageTitle1).toBe("Let's Shop");


    // log in credentials
    await page.locator('#userEmail').fill('rich944@gmail.com');
    await page.locator('#userPassword').fill('P0rsche944!');

    //log in
    await page.locator('#login').click();


    //Get all the product titles 
    await page.waitForSelector('.card-body h5 b');
    const titles = await page.locator('.card-body h5 b').allTextContents();

    //Confirm the product titles are correct
    await expect(titles[0]).toBe('IPHONE 13 PRO');
    await expect(titles[1]).toBe('qwerty');
    await expect(titles[2]).toBe('Banarsi Saree');
    await expect(titles[3]).toBe('LG Refrigerator');
    await expect(titles[4]).toBe('LG Refrigerator');
    await expect(titles[5]).toBe('qwerty');
    
    //Product to search for
    const orderedProduct = "Banarsi Saree";

    //create an index for the title
    let index = 1;

    //look through the titles for the OrderdProduct when you find it add it to the cart
    for (const title of titles) {
  
        if (title === orderedProduct) {
            const addToCart = page.locator(`#products > div.container > div.row > div:nth-child(${index}) > div > div > button.btn.w-10.rounded`);
            await addToCart.click();
            break;
        }
        index += 1;
    }

    //Get the number of items in the cart
    const cart = page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button');

    //Get the number of items in the cart
    await page.waitForSelector('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label');
    const cartItems = await page.locator('body > app-root > app-dashboard > app-sidebar > nav > ul > li:nth-child(4) > button > label').textContent();
    expect(cartItems).toBe('1');

    //Click the cart icon
    await cart.click(); 

    //confirm the item was added to the cart
    await page.waitForSelector('body > app-root > app-profile > div > div.cart > ul:nth-child(1) > li > div > div:nth-child(1) > h3');
    const itemInCart = await page.locator('body > app-root > app-profile > div > div.cart > ul:nth-child(1) > li > div > div:nth-child(1) > h3').isVisible();
    console.log("Is the Item on the cart ?:", itemInCart);
    expect(itemInCart).toBeTruthy();

    
    //checkout
    await page.locator('body > app-root > app-profile > div > div.subtotal.cf.ng-star-inserted > ul > li:nth-child(3) > button').click();

    // confirm that you have the correct product
    //Check for the product name
    await page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-5 > div > div > div > div.item__title');
    const finalProduct =(await page.locator('body > app-root > app-order > section > div > div > div.col-md-5 > div > div > div > div.item__title').textContent()).trim();
    expect(finalProduct).toBeTruthy();
    

    //Check for the final quantity
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-5 > div > div > div > div.item__quantity');
    const finalQuantity = await page.locator('body > app-root > app-order > section > div > div > div.col-md-5 > div > div > div > div.item__quantity').textContent();
    console.log('Final quantity: ', finalQuantity);
    expect(finalQuantity).toContain('1');

    //Confirm that the payment menthod is credit card
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__types > div.payment__type.payment__type--cc.active');
    const paymentMethod = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__types > div.payment__type.payment__type--cc.active').isVisible();
    console.log('Is the Credit card payment method selected? ', paymentMethod);
    expect(paymentMethod).toBe(true);

    //Clear the credit card field and enter a new credit card. Number (4542993192922293) CVV Code (123) Expt Date: 01/16 
    const creditCardNumber = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(1) > div > input');
    const cvvCode = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(2) > input');
    const nameOnCard = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(3) > div > input');
    const applyCoupon = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(4) > div:nth-child(1) > input');
    const applyCouponBtn = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(4) > div:nth-child(2) > button');

    //Clear the credit card number
    await  creditCardNumber.clear();
    await creditCardNumber.fill('4542993192922293');


    // Set the Expiry Date to 06/12 
    await page.waitForSelector('select.input.ddl');
    await page.selectOption('select.input.ddl', { label: '06' });
    await page.selectOption('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__cc > form > div > div:nth-child(2) > div:nth-child(1) > select:nth-child(3)', { label: '20' });

    // Enter the CVV code 123
    await cvvCode.fill('123');

    //Enter the name on card "Jane Doe"
    await nameOnCard.fill('Jane Doe');

    //Confirm the Shipping Information
    await page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label');
    const emailLabel = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > label').textContent();
    console.log('The email label is: ',emailLabel);

    await page.waitForSelector('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input');
    const emailAddress = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > input').inputValue();
    console.log('The email address is: ', emailAddress);

    //Confirm that the correct email addres was enterd
    expect(emailAddress).toBe(emailLabel);

    //Select a country
    const selectCountry = await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > input');
    await selectCountry.pressSequentially("united states");
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.user__address > div > section > button:nth-child(2) > span').click();

    //Place the order
    await page.locator('body > app-root > app-order > section > div > div > div.col-md-7 > div > div > div.payment__info > div.payment__shipping > div.details__user > div > div.actions > a').click();

    //confirm the complited order
    const confirmationTitle = await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > h1').textContent();
    console.log('Confirmation title: ', confirmationTitle);
    expect(confirmationTitle).toContain("Thankyou");


    //verify that the order was added to the Order History Page
    //get the order number
    await page.waitForSelector('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label');
    const orderNumber = await page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label').textContent();
    
    //trim the with spaces and the bars
    const tOderNumber = orderNumber.replace(/[^a-zA-Z0-9]/g, '');
    
    console.log("Order number: " , tOderNumber);

    const orderHistoryPageLink = page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td > label');

    // Navigate to the Order History page
    await orderHistoryPageLink.click();

    //Search and confirm the order is listed 
    await page.waitForSelector('tbody th');
    const orderId = page.locator('tbody th');
    const orderIdList = await orderId.allTextContents();
    const numberOfOrders = orderIdList.length;
    console.log("Order ID List: " ,orderIdList);
    console.log('number of orders : ', numberOfOrders);

    const viewBtn = page.locator('.btn-primary');

    for(let i=0 ; i < numberOfOrders; i++){
        const currentOrder = orderIdList[i].trim(); // Trim any leading/trailing spaces
        if(tOderNumber===currentOrder){
            await viewBtn.nth(i).click();
            break;
        } 
    } 

    //Confirm that you are at the Order Summary page
    await page.waitForSelector('body > app-root > app-order-details > div > div > div > div > div.email-preheader > p');
    const ThankyouMessage = await page.locator('body > app-root > app-order-details > div > div > div > div > div.email-preheader > p').textContent();
    console.log("the header is: ", ThankyouMessage);
    expect(ThankyouMessage).toContain("Thank you");

    //Verify the Order Id
        const summaryOrderId = await page.locator('body > app-root > app-order-details > div > div > div > div > div.email-container > div:nth-child(2) > div:nth-child(1) > div').textContent();
    console.log('Summary Order ID: ', summaryOrderId);
    expect(summaryOrderId).toEqual(tOderNumber);



   




    



    //await page.pause();
});
