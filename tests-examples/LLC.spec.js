import{test, expect} from '@playwright/test';

test('Playwrite Special Locator', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByRole("CheckBox").click();
    await page.getByLabel("Employed").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByLabel("Password").fill("abc123");
    await page.getByRole("button",{name : "Shop"}).click();
    await page.getByText("Sucess! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("btn", {name : "Shop"}.Click());
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();

    //locator(CSS)


});