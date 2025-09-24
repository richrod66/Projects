const {test, expect} = require('@playwright/test');
const {error, assert} = require('console');

test('Popup Validation', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.goto('https://google.com');
    // await page.goBack();
    // await page.goForward();
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();

    await page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();

    await page.locator('#mousehover').hover();
    await page.getByText('Top').click();


    await page.locator('#mousehover').hover();
    await page.getByText('Reload').click();

    const framesPage = page.frameLocator('#courses-iframe');

    await framesPage.locator("li a[href*='lifetime-access']:visible").click();

    expect(await framesPage.locator('body > div > div.container-fluid > div > div.content-side.col-lg-9.col-md-8.col-sm-12.col-xs-12 > div.text > h2 > span').textContent()).toBe('13,522');

    //await page.pause();
});

