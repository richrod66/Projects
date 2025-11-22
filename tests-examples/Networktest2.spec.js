const { test, expect } = require('@playwright/test');

test('Security test request intercept', async ({ page }) => {

    //login andreach orders page
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("rich944@gmail.com");
    await page.locator("#userPassword").fill("Kronites2!");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
   
    await page.locator("button[routerlink*='myorders']").click();

    //login and reach orders page
    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=68083f61fc76541aad3ba0a01' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
    
    await page.pause();

})
