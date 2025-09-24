class ConfirmationPage{

    constructor(page) {
        this.page = page;
        this.orderConfirmationMessage = page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > h1');
        this.orderId = page.locator('#htmlData > tbody > tr:nth-child(4) > td > table > tbody > tr > td > table > tbody > tr.ng-star-inserted > td > label');
    }

    async getOrderConfirmationMessage() {
        return await this.orderConfirmationMessage.textContent();
    }

    async getOrderId() {
        return await this.orderId.textContent();
    }

    async isOrderConfirmed() {
        const message = await this.getOrderConfirmationMessage();
        return message.includes('Your order has been placed successfully');
    }

} 
  
export default ConfirmationPage;
