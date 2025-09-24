const {test, expect, request} = require('@playwright/test');
const {error, assert} = require('console');


// API Contract
const baseURL = "https://qa10-4.mmhcloud.com/myqc/#login-page";

const accountsPayload = {
    loginName:"rrodriguez.prepaid@transactcampus.com",
    loginPassword:"Kronites2!",
    keepLogged:false
};

test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const requestResponse = await apiContext.post(baseURL,
        {
            data:accountsPayload
        }
    )

     const validationCheck = expect(requestResponse.ok()).toBeTruthy(); //OK status codes: 200,2001

     //const loginResponceJson = requestResponse.json();

     //console.log(validationCheck);

    //console.log('The validation is done, it is:', validationCheck);
    //const validateResponseJson = await validateResponse.json();
    //console.log("The validation response is: ", validateResponseJson);
    //const gsKey = validateResponseJson.gskey;
    //const instanceUserID =  validateResponseJson.instanceUserID;
    //const instanceID =  validateResponseJson.instanceID;
    //const gatewayID =  validateResponseJson.gatewayID;

    //console.log("The gsKey is: ",gsKey);
    //console.log("The instanceUserID is: ",instanceUserID);
    //console.log("The instanceID is: ",instanceID);
    //console.log("The gatewayID is: ",gatewayID);
});

test('Sample Test', async ({page}) => {
    
    const gatewayURL = 'https://qa10-4.mmhcloud.com/myqc/RIVI104';

    //const baseURL = '';

    await page.goto(gatewayURL);

    //Get the page title
    const pageTitle = await page.title();

    // Confirm that you are at the correct page
    try {

        await expect(pageTitle).toEqual('My Quickcharge');

    } catch (error) {

        console.log('\n **There is an issue with the page title.** \n' + 'The page title is: ' + pageTitle );

    }

    const loginWithQCAuth = await page.getByText('Login with Quickcharge Authentication');


    await loginWithQCAuth.click();
    

});
