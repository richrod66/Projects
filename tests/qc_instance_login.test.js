import { test, expect } from '@playwright/test';
import POManager from '../pageobjects/POManager.js';

const username = 'richard.rodriguez@transactcampus.com';
const password = 'Kronites2!';
const loginUrl = 'https://www.qcdevtest.net/gateway/login';

test('Login and select third QC-QA10-2 instance', async ({ page }) => {
    const poManager = new POManager(page);
    await page.goto(loginUrl);
    // Dismiss any warning popup if present
    const warningPopup = page.locator('text=Please fill out username and password fields before logging in!');
    if (await warningPopup.isVisible()) {
        await page.getByRole('button', { name: 'OK' }).click();
    }
    // Fill login fields
    await page.locator('#userName').fill(username);
    await page.locator('#userPass').fill(password);
    // Click login and wait for navigation
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.getByRole('button', { name: /login/i }).click()
    ]);
    // Select third QC-QA10-2 instance
    await poManager.getQCInstancePage().selectThirdQCQA10_2Instance();
    await expect(page).toHaveURL(/applications/);
    await page.pause();
});
