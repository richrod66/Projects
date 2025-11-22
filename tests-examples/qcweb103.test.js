const {test, expect} = require('@playwright/test');
const {error, asert} = require('console');

test('QCWEB Regretion test', async ({page}) => {
    
    //Credentials
    const addMinAccount = "richard.rodriguez@transactcampus.com"
    const prePaidAccount = "rrodriguez.prepaid@transactcampus.com";
    const payRollAccount = "rrodriguez.payrolldeduct@transactcampus.com";
    const passWord = "Kronites2!";

   
    //Go to the gateway
    await page.goto('https://www.mmhcloud.com/gateway/login');

    //Log in
    await page.getByPlaceholder("Username").fill(prePaidAccountt);
    await page.getByPlaceholder("Password").fill(passWord);
    await page.locator('#loginBtn').click();

    //Select QA Version 10 - Test 3(MyQC)
    await page.locator('//*[@id="10"]').click();




    

    









    await page.pause();

})