const {test, expect} = require('@playwright/test');
const { assert, error } = require('console');


test('Playwrite homework', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/'); 

    const landingPageTitle = await page.title();
    console.log('Langing page title: ' , landingPageTitle);


    //Register a new account
    const regesterHereLink = page.locator('body > app-root > app-login > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > p > a');
    await regesterHereLink.click();

    //Fill the registration form 
    
        //Element locator setup 
        const firstName = page.locator('#firstName');
        const lastName = page.locator('#lastName');
        const userEmail = page.locator('#userEmail');
        const userMobile = page.locator('#userMobile');
        const occupation = page.locator('body > app-root > app-register > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > form > div:nth-child(3) > div:nth-child(1) > select');
        const male = page.locator('body > app-root > app-register > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > form > div:nth-child(3) > div:nth-child(2) > label:nth-child(2) > input')
        const fName = 'Richard';
        const lName = 'Rodriguez';
        const emailAddress = 'rich944@getMaxListeners.com';
        const phoneNumber = '5188817936';
        const upass = 'Kronites2!';
     
        // Fill the form
        await firstName.fill(fName);
        await lastName.fill(lName);
        await userEmail.fill(emailAddress);
        await userMobile.fill(phoneNumber);
    
        // Select the "Student" option from the dropdown 
        const selectElement = page.locator('select[formcontrolname="occupation"]'); 
        await selectElement.selectOption({ label: 'Student' });

        //Select Male for the Gender
        const gender = page.locator('input[type="radio"][value="Male"]');
        await gender.click();

        //Enter the password 
        const password = page.locator('#userPassword');
        await password.fill(upass);

        //Confirm the password
        const cPassword = page.locator('#confirmPassword');
        await cPassword.fill(upass);

        //Check the over 18 box
        const adult = page.locator('body > app-root > app-register > div.banner > section:nth-child(2) > div > div.login-wrapper.my-auto.p-5 > form > div:nth-child(5) > div.col-md-1 > input');
        await adult.click();
    
        //Click the regestration button
        const regButton = page.locator('#login');
        await regButton.click();
    
    // Pause execution 
    //await page.pause();
  
    await browser.close();




});





test.only('Get first product title', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client/'); 

    const eMail = page.locator('#userEmail');
    const uPassword = page.locator('#userPassword');
    const loginBtn = page.locator('#login')

    await eMail.fill('rich944@getMaxListeners.com');
    await uPassword.fill('Kronites2!');
    await loginBtn.click();

    //Get title
    const title = await page.locator('div.card-body h5 b').first().textContent();
    console.log(title);
   


    // Pause execution 
    //await page.pause();
    await browser.close();
});