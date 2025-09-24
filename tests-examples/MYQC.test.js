const {test, expect} = require('@playwright/test');
const { assert, error } = require('console');

test('Login to QA10-4 Test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.mmhcloud.com/gateway/login'); 
  
  
    //Log into the gate way
    await page.locator('#userName').fill('rrodriguez.prepaid@Transactcampus.com');
    await page.locator('#userPass').fill('Kronites2!');
    await page.locator('#loginBtn').click();
  
    // Click on the element with the specific CSS selector
    await page.locator('#\\37  > td:nth-child(8) > span').click();
  
    // Add any additional assertions or actions here
  
    //Confirm that the Prepaid account successfully logged in
    const editNameBtn = page.locator('#greeting-message-edit');
    const editNameBtnTxt = await editNameBtn.textContent();
    await expect(editNameBtnTxt.trim()).toBe('RIVI PREPAID');
    console.log('The logged in user is: ', editNameBtnTxt);
  
    // Pause execution 
    //await page.pause();
  
    await browser.close();
  });

test('MYQC Order with Prep and Mod test', async ({browser})=>{

    const context  = await browser.newContext();
    const page = await context.newPage();

    //const TestURL = "https://www.mmhcloud.com/gateway/login";
    const TestURL = "https://qa10-4.mmhcloud.com/myqc/RIVI104";
    const GatewayAppURL = "https://www.mmhcloud.com/gateway/applications";
    const MYQCLandingPage = "https://qa10-4.mmhcloud.com/myqc/#main";
    const MMHCloudGateway = "https://www.mmhcloud.com/gateway/login";
    // Navigate to the gateway
    await page.goto(TestURL);
    //Confirm that you are at the MMH gateway
    await expect(page).toHaveURL('https://qa10-4.mmhcloud.com/myqc/#logout-page');
    console.log('The page URL is: ',page.url());

    const PageTitle = await page.title();
    await expect(page).toHaveTitle('Logout');
    console.log('The current page title is: ',PageTitle ,' Page');

    const SSOLogin = page.locator('#logoutLink');
    const QCLogin = page.locator('#logoutMyQCLink');

    //Log in with QC
    await QCLogin.click();
    console.log('Login With Quickcharge was clicked');
    const loginURL = await page.url();
    await expect(page).toHaveURL('https://qa10-4.mmhcloud.com/myqc/#login-page');
    await expect(page).toHaveTitle('Login');
    const loginPageTitle = await page.title();
    console.log('The current page title is: ', loginPageTitle);
    const loginName = page.locator('#loginName');
    const loginPassword = page.locator('#loginPassword');
    const loginButton = page.locator('#loginButton');


    //Enter creds
    await loginName.fill('rrodriguez.prepaid@transactcampus.com');
    await loginPassword.fill('Kronites2!');

    //await page.waitForSelector('input#keepLogged', { state: 'visible' });
    await page.locator('//*[@id="loginFormContainer"]/div[2]/label').check();
    await loginButton.click();
    await expect(page).toHaveTitle('Home');
    const homePageTitle = await page.title();
    console.log('The current page title is: ', homePageTitle);

    //Check if the store is open
    const albanyCafeBtn = await page.locator('button#store-18');
    const albanyCafeBtnTxt = await page.locator('button#store-18').textContent();
    await expect(albanyCafeBtnTxt).toBe('Albany Cafe');
    console.log('The Albany Cafe button reads: ', albanyCafeBtnTxt);
    
    //Navigate to the Albany Cafe
    await albanyCafeBtn.click();

    //Select RIVI - Sandwiches
    await page.locator('#keypad-41 > ul > button:nth-child(2) > div.line-details.line-center_details > div.line_name').click();
    const sandwichText = await page.locator('#keypad-41 > ul > button:nth-child(2) > div.line-details.line-center_details > div.line_description.line-center_description').textContent();
    await expect(sandwichText).toContain('uncontrollable');
    console.log(sandwichText);
   
    //Add the prep option Mayonnaise
    const prepOptMayo = page.locator('#product-detail-page > div.product-detail_container.scrollElement > div.product-detail_bottom-container > div.product-detail_prep-option-menu-list > div > div.prep-option-menu_list > div:nth-child(3) > div.prep-option_select-container');
    await prepOptMayo.scrollIntoViewIfNeeded();
    await prepOptMayo.click();

    //Add the mod RIVI - Cranberry Turkey
    const modRIVICranTurk = page.locator('#product-detail-page > div.product-detail_container.scrollElement > div.product-detail_bottom-container > div.product-detail_modifier-menu-list > div > div.modifier-menu_list > div:nth-child(4) > div.modifier_details.variable-height.align-mod > div.modifier_select-container');
    await modRIVICranTurk.scrollIntoViewIfNeeded();
    await modRIVICranTurk.click();

    //Add the sandwich to the order
    const addToOrderBtn = page.locator('#product-detail-page > div.product-detail_button-container.hide-swap > button.product-detail_button.no-border > div.product-detail_button-label');
    await addToOrderBtn.scrollIntoViewIfNeeded();
    await addToOrderBtn.click();

    //Add Bottle Soda from the Seggetions page
    const bottleSodaAddTaOrderBtn = page.locator('#suggestive-list-165 > li:nth-child(1) > div.suggestive-button-container > button > span');
    await bottleSodaAddTaOrderBtn.scrollIntoViewIfNeeded();
    await bottleSodaAddTaOrderBtn.click();

    //Click the continue button
    const suggestionPageContBtn = page.locator('#suggestive_button-next');
    await suggestionPageContBtn.scrollIntoViewIfNeeded();
    await suggestionPageContBtn.click();

    //Confirm that two item where added to the cart
    const cartBtn = page.locator('#keypad-banner-cart');
    const numberOfItems = await cartBtn.textContent();
    await expect(numberOfItems).toBe('2');
    console.log('Number of items in the cart: ',numberOfItems);
    await cartBtn.click();

    //Navigate to the card confim the items and proceed to checkout
    const RIVISandPrice = await page.locator('#cartList > div:nth-child(1) > div > div > div.slick-slide.slick-current.slick-active > div > button > div.cart-line_price-container > div.cart-line_total.accent-color-two').textContent();
    const BottleSodaPrice = await page.locator('#cartList > div:nth-child(2) > div > div > div.slick-slide.slick-current.slick-active > div > button > div.cart-line_price-container > div.cart-line_total.accent-color-two').textContent();
    const Subtotal = await page.locator('#cart-bottom-subtotal').textContent();
    await expect(RIVISandPrice).toBe('$8.10');
    await expect(BottleSodaPrice).toBe('$2.00');
    await expect(Subtotal).toBe('$10.10');
    console.log('Math check: ', RIVISandPrice ,' + ', BottleSodaPrice , ' = ', Subtotal);
    const proceedToCheckoutBtn = page.locator('#checkOutButton');
    await proceedToCheckoutBtn.click();
    const suggestionPageContBtn2 = page.locator('#suggestive_button-next');
    //const suggestionPageContBtn3 = page.locator('#suggestive_button-next');
    await suggestionPageContBtn2.click();
    await suggestionPageContBtn2.click();

    //skip the rewards page
    const rewardsSkip = page.locator('#redeemContinue');
    await rewardsSkip.click();

    //On the Order Details page place the order
    const placeOrderBtn = page.locator('#placeOrderBtn');
    await placeOrderBtn.click();

    //On the confirmation page view the receipt
    const viewReceipt = page.locator('#order-placed_view-receipt-btn');
    await viewReceipt.click();


    //Go back home
    const homeBtn = page.locator('#receipt-view > header > a > i');
    await homeBtn.click();

    // Pause execution 
    await page.pause();
    

    //Close the browser
    await browser.close();
});

test.only('Delivery order', async ({browser})=>{

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.mmhcloud.com/gateway/login'); 


  //Log into the gate way
  await page.locator('#userName').fill('rrodriguez.prepaid@Transactcampus.com');
  await page.locator('#userPass').fill('Kronites2!');
  await page.locator('#loginBtn').click();
  //navigate to QA10-4
  await page.locator('#\\37  > td:nth-child(8) > span').click();

  //Navigate to the Online Order page
  const OnlineOrder = page.locator('#nav-onlineordering');
  await OnlineOrder.click();

  //Select Delivery 
  const delivery = page.locator('#orderType-delivery');
  await delivery.click();
    
// Select the "Bronx Pizza: All Locations" option from the dropdown 
const selectElement = page.locator('#store-selector-location-delivery'); 
await selectElement.selectOption({ label: 'OL1-RIVI-Bronx Pizza: All Locations' });

//Select the Bronx Pizza store
const BronxPizza = page.locator('#stores-available > div > div.template-gen.store-info-container > h2');
await BronxPizza.click();

//Select RIVI - Pizza - Slices
const pizzaslice = page.locator('#keypad-94 > ul > button:nth-child(1) > div.line-details.line-center_details > div.line_name > span');
await pizzaslice.click();

//Make it a favorite
const fav = page.locator('#product-detail-page > div.product-detail_container.scrollElement > div.product-detail_bottom-container > div.product-detail_info-container > div.product-detail_name-container > button > img');
await fav.click();

//Select Garlic Crust
const garlicCrust = page.locator('#product-detail-page > div.product-detail_container.scrollElement > div.product-detail_bottom-container > div.product-detail_prep-option-menu-list.add-prep-margin > div > div.prep-option-menu_list > div:nth-child(4) > div.prep-option_detail-container > div.prep-option_name');
await garlicCrust.click();

//Add to Cart
const addtocart = page.locator('#product-detail-page > div.product-detail_button-container.hide-swap > button.product-detail_button.no-border > div.product-detail_button-label');
await addtocart.click();








    // Pause execution 
    await page.pause();
    

    //Close the browser
    await browser.close();
});

