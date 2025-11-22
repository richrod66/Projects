class APIUtils{


    constructor(apiContext,baseURL,loginPayLoad)
    {
        this.apiContext = apiContext
        this.baseURL = baseURL
        this.loginPayLoad = loginPayLoad
    }


    
    async getToken()
    {
        // Login API Contranct

        const loginResponse = await this.apiContext.post(this.baseURL,{data: this.loginPayLoad});
        const loginResponceJson = await loginResponse.json();
        token = loginResponceJson.token
        console.log('The token is: ', token);

        return token

    }


    async createOrder( orderBaseURL, orderPayload, headers)
    {

        let response = {};
        response.token = await this.getToken();
        const newOrder = await request.newContext();
        const orderResponse = await newOrder.post(orderBaseURL,{data: orderPayload, headers: {'Authorization' :response.token,'Content-Type' : 'application/json'} });
        const orderResponseJson = await orderResponse.json();

        orderNumber = orderResponseJson.orders;

        trimmedorderNumber = String(orderNumber).replace(/[^a-zA-Z0-9]/g, '');
        //console.log('The trimmed order number is: ', trimmedorderNumber);

        response.orderId = trimmedorderNumber;

        return response;


    }


}

module.exports={APIUtils}