const {test, expect} = require('@playwright/test');
const {assert, error} = require('console');

test('Sample Test', async ({page}) => {
    
    const gatewayURL = 'https://www.mmhcloud.com/gateway/login';

    await page.goto(gatewayURL);

    //Get the page title
    const pageTitle = await page.title();

    // Confirm that you are at the correct page
    try {

        await expect(pageTitle).toEqual('Welcome to the MMHayes Cloud!');

    } catch (error) {

        console.log('\n **There is an issue with the page title.** \n' + 'The page title is: ' + pageTitle );

    }

    // Credentials 
    const prepaidAcct = 'rrodriguez.prepaid@transactcampus.com';
    const payrollAcct = 'rrodriguez.payrolldeduct@transactcampus.com';
    const acctPassword = 'Kronites2!';

    //Gateway page locators
    const userName = page.locator('#userName');
    const userPass = page.locator('#userPass');
    const loginBTN = page.locator('#loginBtn');
    const forgotPasswordBtn = page.locator('#forgotPasswordBtn');


    //log in with a prepaid account and place an order
    await userName.fill(prepaidAcct);
    await userPass.fill(acctPassword);
    await loginBTN.click();

    //Get the page title
    const pageHeader= await page.locator('#pageHeader').textContent();
    
    //confirm that you are on the Applications page
    try {
        await expect(pageHeader).toContain('Application');
    } catch (error) {
        console.log("You are not on the applications page");
    }

    //Navegate to QA10-4(MyQC)
    const QA104 = page.locator("td[title='QA10-4 (MyQC)'] + td + td + td + td + td + td");
    
    try {
       Promise.all([
        await QA104.click(),
        await page.waitForLoadState('load'),
       ]);

        console.log("Successfull click.")

    } catch (error) {
        console.log('Somthing is wrong. The click did not work.');
    }
  
});