const {test, expect} = require('@playwright/test');
const {error, assert} = require('console');

test('Calendar Validations', async ({page}) => {
     /*  Log navigate to the test site https://rahulshettyacademy.com/seleniumPractise/#/
        Naviagte to the calendar and set the date base on variables Month, Day, Year format (06/15/2027)
        Add an asertion to confirm the correct date was selected
    */
     //Date parameters
    const monthNumber = 6;
    const date = "15";
    const year = "2027";
    // naviagte to the website        
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    //Click on the calendar and select the date
    await page.locator('.react-date-picker__inputGroup').click();
    await page.getByText('February 2025').click();
    await page.getByText('2025').click();
    //Select the desiared year
    await page.getByText(year).click();
    // Select the month
    const monthSelectection = await page.locator('div.react-calendar__viewContainer > div > div > button').allTextContents();
    for(let x=0 ; x < monthSelectection.length; x++) {
        if(monthNumber === (x+1) ){
            await page.locator(`div.react-calendar__viewContainer > div > div > button:nth-child(${x+1})`).click();
            break;
        }
    }
    // select the date   
    const daySelection = await page.locator('div .react-calendar__month-view__days button').allTextContents();
    for (let y = 0; y < daySelection.length; y++) {
        if (date === daySelection[y]) {
            await page.waitForSelector('div.react-calendar__month-view__days > button');
            await page.locator(`div.react-calendar__month-view__days > button:nth-child(${y + 1})`).click();
            break;
        }
    }
    // Confirm that you have the correct delivery date
    await page.waitForSelector('#root > div > div.date-field-container > div > div > div');
    const monthValue = await page.locator('input[name="month"]').getAttribute('value');
    const dayValue = await page.locator('input[name="day"]').getAttribute('value');
    const yearValue = await page.locator('input[name="year"]').getAttribute('value');
    expect(monthValue).toBe(monthNumber.toString());
    expect(dayValue).toBe(date);
    expect(yearValue).toBe(year);
});
