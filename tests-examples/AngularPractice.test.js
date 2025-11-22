const {test, expect} = require('@playwright/test');
const {error, assert} = require('console');
const { link } = require('fs');

test('Angular Practice' , async ({page}) =>{
    //Playwright special locaters

    //Go to the test site https://rahulshettyacademy.com/angularpractice/
    await page.goto('https://rahulshettyacademy.com/angularpractice/');

    //Get the page title
    //const pageTitle = await page.title();
    //console.log('The page title is: ', pageTitle);

    //New elements getby
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    await page.getByLabel('Employed').check();
    await page.getByLabel('Gender').selectOption('Female');
    
    await page.locator("body > app-root > form-comp > div > form > input").click();
    
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    await page.getByRole("link", {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();











    //await page.pause();

});