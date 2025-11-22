//login UI -> .json
//test browser-> .json, Cart-order, orderdetails, orderhistory

const {test,expect} = require('@playwright/test');
    let webContext;

    test.beforeAll(async ({browser}) => {
        const context = await browser.newContext();
        const page = await context.newPage();
            
        //Gateway log in process
        //await page.goto('https://www.mmhcloud.com/gateway/login');
        //await page.getByPlaceholder('Username').fill('rrodriguez.prepaid@transactcampus.com');
        //await page.getByPlaceholder('Password').fill('Kronites2!');
        //await page.locator('#loginBtn').click();
    
        // Wait for a post-login element that confirms success
        //await page.waitForSelector('#summaryDiv'); // Replace with a valid selector
       // await page.locator('//*[@id="7"]/td[8]/span').click();

       //MYQC Login process
       await page.goto('https://qa10-3.mmhcloud.com/myqc/RIVI103');
       await page.locator('#logoutQCAuthMsg').click();

       expect(page).toHaveURL('https://qa10-3.mmhcloud.com/myqc/#login-page');

       await page.locator('#loginName').fill('rrodriguez.prepaid@transactcampus.com');

       await page.locator('#loginPassword').fill('Kronites2!');

       await page.locator('#loginButton').click();

       await expect(page.locator('#user-information > h5')).toHaveText('Account Number: 3251015');
   
        // Save the storage state AFTER successful login
        await page.waitForLoadState('networkidle');
        await context.storageState({ path: 'MYQCstate.json' });
     
        webContext =  await browser.newContext({storageState : 'MYQCstate.json' });

        //await page.pause();

        await page.close();
    });
    
        

    test('MYQC Smoke Test', async ()=>
    {
    
       const page2 = await webContext.newPage();

       const cookies = await webContext.cookies();
       console.log(cookies); 
       
       await page2.goto('https://qa10-3.mmhcloud.com/myqc/#main');
        
       //await expect(pages).toHaveURL('https://qa10-3.mmhcloud.com/myqc/#main');

       
       
       
       //await page2.pause();

 
 
    });