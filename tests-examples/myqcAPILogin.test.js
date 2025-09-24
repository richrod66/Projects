const{test, expect, request} = require('@playwright/test');
const{error, assert} = require('console');

let token;

//API Contract
const baseURL = "https://qa10-4.mmhcloud.com/myqc/api/auth/login/accounts";
const loginPayLoad = {
  loginName: "rrodriguez.prepaid@transactcampus.com",
  loginPassword: "Kronites2!",
  keepLogged: true
}

test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post(baseURL,{data: loginPayLoad})
    expect(loginResponse.ok).toBeTruthy();
    console.log('The loginResponse: ', loginResponse.json());
    const loginResponceJson = await loginResponse.json();

    token = await loginResponceJson.code;


    console.log('the dsKey is: ',token);


});
const mainURL = "https://QA10-4.mmhcloud.com/myqc";
test("MYQC API login Test", async ({page})=>{
    //await page.goto(mainURL);

    //await page.pause();


});
