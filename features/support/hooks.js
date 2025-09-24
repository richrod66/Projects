import { chromium } from 'playwright';
import { After, AfterStep, Before, BeforeStep, Status } from '@cucumber/cucumber';
import POManager from '../../pageobjects/POManager.js';
import '../../features/step_definitions/steps.js';
import '../../features/support/setup.js';


Before(async function (){
     // Initialize the POManager with the current page context
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.poManager = new POManager(this.page);

    console.log('Before hook: POManager initialized')
});

BeforeStep(async function () {
    // You can add any setup needed before each step here
    console.log("Starting a new step...");
});

AfterStep(async function ({result}) {
    if (result.status === Status.FAILED){ 
        await this.page.screenshot({ path: `screenshots/failure-${Date.now()}.png`, fullPage: true });  
        //await this.page.screenshot({ path: `screenshots/step-failure-${Date.now()}.png`, fullPage: true });
    }
}); 

After(async function () {
    console.log("Test completed - closing browser");
    await this.browser.close();
});