import {type Locator, type Page } from '@playwright/test';

export class DashboardPage
{
    page: Page;
    products: any;
    productstext: any;
    cart: any;
    checkout: any;
    addToCart: any;
    checkoutButton: any;

    constructor (page: Page)
    {
        this.page = page;
        this.products = page.locator('.card-body');
        this.productstext = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.checkout = page.locator("[routerlink*='checkout']");
        //this.addToCart = page.locator("[routerlink*='Add To Cart']");
        this.addToCart = page.locator("#products > div.container > div.row > div:nth-child(1) > div > div > button.btn.w-10.rounded");
        this.checkoutButton = page.locator("body > app-root > app-profile > div > div.subtotal.cf.ng-star-inserted > ul > li:nth-child(3) > button");

    }

    async searchProductAddToCart(productToPurchase : string){
        const titles = await this.productstext.allTextContents();
        //console.log(titles);
        const count = await this.products.count();
        //console.log("Total Products: " + count);

        
        if (await this.addToCart.isVisible()) {
            await this.addToCart.click();
        } else {
            console.log("Add To Cart button not found.");
        }

        ///Loop through the products to find the one to purchase  
        for(let i = 0; i < count; i++)
        {
           console.log(this.products.nth(i).locator("b").textContent());
           console.log();
            if (this.products.nth(i).locator("b").textContent() === productToPurchase) 
            {
                //Add to card
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }   
    }

    async navigateToCart (){
        
        await this.cart.click();
        
    } 
    
    
    async navigateToCheckout(){

        //await this.checkout.click();
        await this.checkoutButton.click();

    }








}

module.exports = { DashboardPage };
// This code defines a DashboardPage class for interacting with a dashboard page in a web application.  