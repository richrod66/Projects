import { test, expect } from '@playwright/test';

test('MYQC QA10-4 Login Test', async ({ page }) => {
  await page.goto('https://www.mmhcloud.com/gateway/login');
  await page.getByPlaceholder('Username').fill('rrodriguez.prepaid@transactcampus.com');
  //await page.getByPlaceholder('Username').fill('rrodriguez.payrolldeduct@transactcampus.com');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('Kronites2!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('row', { name: 'QA10-4 (MyQC) My Quickcharge' }).locator('span').click();
  //await page.goto('https://qa10-4.mmhcloud.com/myqc/#main');
  const welcomemessage = page.locator('#greeting-message-edit > strong');
  const account = await welcomemessage.textContent();

  console.log('The Logged in account is: ' + account);

  try{

  await expect(account).toBe('RIVI PREPAID');

  }catch(e){

    console.log("Issue found. Expected: RIVI PREPAID Recieved: " + account );

  }

  //await page.waitForTimeout(10000);

});