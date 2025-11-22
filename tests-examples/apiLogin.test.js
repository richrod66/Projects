const {test,expect,request} = require('@playwright/test');
const {error,assert} = require('console');
const { json } = require('stream/consumers');
const {APIUtils} = require('../utils/APIUtils');

let response;
let orderNumber = null;
let trimmedorderNumber = null;

// Login API Contranct
const baseURL = 'https://rahulshettyacademy.com/api/ecom/auth/login'
const loginPayLoad = {userEmail:"rich944@gmail.com",userPassword: "Kronites2!"};

// Place Order API Contract
const orderBaseURL = 'https://rahulshettyacademy.com/api/ecom/order/create-order';
const orderPayload = {orders: [{country: "United States", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
const orderHeader =  {'Authorization' :token,'Content-Type' : 'application/json'};

///////////////////Test section/////////////////////////////////////////////////////////////////////////////////

test.beforeAll(async ()=>{
  
    const apiContext = await request.newContext();


    //New Order
    const apiUtils = new APIUtils(apiContext, baseURL, loginPayLoad );
    response = apiUtils.createOrder(orderBaseURL,orderPayload, orderHeader)



});


test('Place the order', async ({page})=>
    {

        page.addInitScript(value => {window.localStorage.setItem('token',value);},response.token);

        await page.goto("https://rahulshettyacademy.com/client/");
        await page.locator("button[routerlink*='myorder']").click();
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");

        for(let i=0; i< await rows.count() ; ++i)
        {
            const rowOrderID = await rows.nth(i).locator("th").textContent();
            if (response.orderId.includes(rowOrderID))
            {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        
        const orderIdDetails = await page.locator(".col-text").textContent();
        await page.pause();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
                
    //await page.pause();
});