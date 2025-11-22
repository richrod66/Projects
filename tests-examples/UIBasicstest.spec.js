const {test, expect} = require('@playwright/test');
const { assert, error } = require('console');


//This is a test of the SerbaseSoft domain.

test.only('Serbasesoft page test', async ({browser})=>{

    // chrome - plugins / cookies
    const context  = await browser.newContext();

    const page = await context.newPage();
    
    await page.goto("http://serbasesoft.com/");
    
    await expect(page).toHaveTitle("Serbase Software");
    
    //get title - assertion
    console.log(await page.title());

    /* Click the home link */
    await page.locator('text=Home').click();

    await expect(page).toHaveURL('http://serbasesoft.com/');

    if (page.url()=='http://serbasesoft.com/'){

        console.log('We are on the index page');
    } else {
        console.log('This is not the index page');
    }


    /* Click the About us link */
    
    await page.locator('text=About us').click();

    await expect(page).toHaveURL('http://serbasesoft.com/aboutus.html');

    if (page.url()=='http://serbasesoft.com/aboutus.html'){
        console.log('We are on the about us page');
    } else {
        console.log('This is not the about us page');
    }

    // Select the element with the class "mission-statement" and get its text content 
    const missionStatement = await page.locator('//*[@id="mission"]').textContent();

    try{

        await expect(missionStatement).toContain('database');

    }catch(error){

        console.error('Check the logs for an issue on line 51.',error.message);

    }

    console.log(missionStatement);
    

    /* Click the Contact us Page */
   
    await page.locator('text=Contact us').click();

    
    try{

        await expect(page).toHaveURL('http://serbasesoft.com/contactpage.html');

    }catch(error){
        
        console.error('Check the logs for an issue on line 69.',error.message);

    }
    
    await expect(page).toHaveURL('http://serbasesoft.com/contactpage.html');
    
    if (page.url()=='http://serbasesoft.com/contactpage.html'){

        console.log('We are on the contact us page');
    } else {
        console.log('This is not the contact us page');
    }

    /* Send Message */
    await page.locator('input[name="fname"]').fill('Richard');
    await page.locator('input[name="lname"]').fill('Rodriguez');
    await page.locator('input[name="user_phone"]').fill('5188817936');
    await page.locator('input[name="user_email"]').fill('Richard-Rodriguez@msn.com');
    await page.locator('textarea[name="request"]').fill('This is a demo test, this is only a test. ');
    await page.locator('#button').click();


    /* Click the Like us page link */

    //await page.locator('text=Like us').click();

    //await expect(page).toHaveURL('https://www.facebook.com/serbasesoft');

    //if (page.url()=='https://www.facebook.com/serbasesoft'){

    //    console.log('We are on the serbasesoft page');
    //} else {
    //    console.log('This is not the serbasesoft page');
    //}


    await browser.close();

});

// This is  second test scenario

test('Page Playwright test', async({page})=>{
    await page.goto("https://google.com")

    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    //

});