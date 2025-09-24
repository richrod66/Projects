import { test, expect } from '@playwright/test';

const username = 'rrodriguez.prepaid@transactcampus.com';
const password = 'Kronites2!';
const myqcUrl = 'https://qc-qa10-2.qcdevtest.net/myqc/rivi102';

test('MyQC Login Test', async ({ page }) => {
    // Navigate to MyQC URL
    await page.goto(myqcUrl);
    await page.waitForLoadState('networkidle');

    // Wait for and click "Login with Quickcharge Authentication" link
    // Note: The link may not be immediately visible, so we use evaluate to click
    const loginLink = page.locator('#logoutMyQCLink');
    await loginLink.waitFor({ state: 'attached', timeout: 10000 });
    
    // Use evaluate to trigger the click since the element might have CSS visibility issues
    await page.evaluate(() => {
        const link = document.querySelector('#logoutMyQCLink');
        if (link) link.click();
    });
    
    // Wait for login page elements to load with longer timeout
    await page.waitForLoadState('networkidle');
    
    // Add longer wait for page transition
    await page.waitForTimeout(5000);
    
    // Debug: Check what's on the page
    console.log('Current URL after login link click:', page.url());
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);
    
    // Wait specifically for the login form to appear with extended timeout
    await page.waitForSelector('#loginName', { state: 'visible', timeout: 20000 });
    
    // Verify we're on the login page by checking for login form elements
    // Note: There might be multiple elements with same ID, so we use .first()
    await expect(page.locator('#loginName').first()).toBeVisible();
    await expect(page.locator('#loginPassword').first()).toBeVisible();
    await expect(page.locator('#loginButton').first()).toBeVisible();
    
    // Fill in login credentials using the first visible elements
    await page.locator('#loginName').first().fill(username);
    await page.locator('#loginPassword').first().fill(password);
    
    // Click login button
    await page.locator('#loginButton').first().click();
    
    // Wait for main page to load after successful login
    await page.waitForLoadState('networkidle');
    
    // Verify successful login by checking for main page elements
    // The page shows "Your account has been created!" on successful login
    await expect(page.locator('#account-created-title')).toContainText('Your account has been created!');
    
    // Verify account information is displayed
    await expect(page.locator('#main')).toBeVisible();
    
    // Additional verification - check for account number or other account details
    const mainContent = page.locator('#main');
    await expect(mainContent).toContainText('Account Number:');
    
    console.log('✅ MyQC Login successful!');
    console.log('Current URL:', page.url());
    
    // Take a screenshot of the successful login
    await page.screenshot({ path: 'myqc-login-success.png', fullPage: true });
});