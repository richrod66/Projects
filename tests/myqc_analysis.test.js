import { test, expect } from '@playwright/test';

test('MyQC Login Analysis', async ({ page }) => {
    console.log('=== Starting MyQC Login Analysis ===');
    
    // Navigate to the logout page
    console.log('1. Navigating to MyQC logout page...');
    await page.goto('https://qc-qa10-2.qcdevtest.net/myqc/#logout-page');
    
    // Wait for page to load and take screenshot
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'myqc-logout-page.png', fullPage: true });
    
    // Analyze the logout page elements
    console.log('2. Analyzing logout page elements...');
    const logoutLink = page.locator('#logoutMyQCLink');
    console.log('Logout link found:', await logoutLink.count() > 0);
    if (await logoutLink.count() > 0) {
        console.log('Logout link text:', await logoutLink.textContent());
        console.log('Logout link visible:', await logoutLink.isVisible());
    }
    
    // Click "Login with quickcharge authentication"
    console.log('3. Clicking Login with quickcharge authentication...');
    await logoutLink.click();
    
    // Wait for login page to load
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'myqc-login-page.png', fullPage: true });
    
    // Analyze login page elements
    console.log('4. Analyzing login page elements...');
    
    // Check for loginName field
    const loginNameField = page.locator('#loginName');
    console.log('LoginName field found:', await loginNameField.count() > 0);
    if (await loginNameField.count() > 0) {
        console.log('LoginName field visible:', await loginNameField.isVisible());
        console.log('LoginName field type:', await loginNameField.getAttribute('type'));
    }
    
    // Check for loginPassword field
    const loginPasswordField = page.locator('#loginPassword');
    console.log('LoginPassword field found:', await loginPasswordField.count() > 0);
    if (await loginPasswordField.count() > 0) {
        console.log('LoginPassword field visible:', await loginPasswordField.isVisible());
        console.log('LoginPassword field type:', await loginPasswordField.getAttribute('type'));
    }
    
    // Check for loginButton
    const loginButton = page.locator('#loginButton');
    console.log('LoginButton found:', await loginButton.count() > 0);
    if (await loginButton.count() > 0) {
        console.log('LoginButton visible:', await loginButton.isVisible());
        console.log('LoginButton text:', await loginButton.textContent());
    }
    
    // Fill login credentials
    console.log('5. Filling login credentials...');
    await loginNameField.fill('rrodriguez.prepaid@transactcampus.com');
    await loginPasswordField.fill('Kronites2!');
    
    // Click login button
    console.log('6. Clicking login button...');
    await loginButton.click();
    
    // Wait for main page to load
    console.log('7. Waiting for main page to load...');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'myqc-main-page.png', fullPage: true });
    
    // Analyze what's on the main page
    console.log('8. Analyzing main page...');
    console.log('Current URL:', page.url());
    
    // Look for common main page elements
    const mainElements = [
        'h1', 'h2', 'h3', '.dashboard', '#main', '.main-content', 
        '[role="main"]', '.header', '.nav', '.navigation'
    ];
    
    for (const selector of mainElements) {
        const element = page.locator(selector).first();
        if (await element.count() > 0) {
            console.log(`Found element ${selector}:`, await element.textContent());
        }
    }
    
    console.log('=== Analysis Complete ===');
    
    // Pause for manual inspection
    await page.pause();
});