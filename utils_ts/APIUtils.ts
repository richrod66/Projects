import { request } from '@playwright/test';

export class APIUtils{
    apiContext:any;
    baseURL:any;
    loginPayLoad:any;
    orderNumber:any;
    trimmedorderNumber:any;
    orderBaseURL:any;
    orderPayload:any;
    headers:any;

    static token: string;
    static orderNumber: string;
    

    constructor(apiContext:any,baseURL:any,loginPayLoad:any)
    {
        this.apiContext = apiContext
        this.baseURL = baseURL
        this.loginPayLoad = loginPayLoad
    }


    
    async getToken()
    {
        // Login API Contranct
        APIUtils.token 
        const loginResponse = await this.apiContext.post(this.baseURL,{data: this.loginPayLoad});
        const loginResponceJson = await loginResponse.json();
        APIUtils.token = loginResponceJson.token
        console.log('The token is: ', APIUtils.token);

        return APIUtils.token
    }


    async createOrder( orderBaseURL:any, orderPayload:any, headers:any)
    {

        const newOrder = await request.newContext();
        const orderResponse = await newOrder.post(orderBaseURL,{data: orderPayload, headers: {'Authorization' : APIUtils.token, 'Content-Type' : 'application/json'} });
        const orderResponseJson = await orderResponse.json();

        APIUtils.orderNumber = orderResponseJson.orders;

        this.trimmedorderNumber = String(APIUtils.orderNumber).replace(/[^a-zA-Z0-9]/g, '');
        //console.log('The trimmed order number is: ', trimmedorderNumber);

        const response = { orderId: this.trimmedorderNumber };

        return response;


    }


}

module.exports={APIUtils}