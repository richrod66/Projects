# Playwright Codegen: A Complete Guide for Non-Programmers

## What is Playwright Codegen?

Playwright Codegen is a **test recorder** that automatically creates test scripts by watching your actions in a web browser. Think of it like recording a video, but instead of capturing video, it captures your clicks, typing, and navigation to create a test script that can replay those same actions later.

## Why Use Playwright Codegen?

- ✅ **No coding required** - Just click and type like you normally would
- ✅ **Automatic test creation** - The tool writes the code for you
- ✅ **Fast test development** - Create tests in minutes, not hours
- ✅ **Accurate selectors** - The tool finds the best way to identify elements
- ✅ **Professional results** - Creates production-ready test code

---

## Prerequisites (What You Need)

Before starting, make sure you have:
- [ ] A computer with internet access
- [ ] Node.js installed on your computer
- [ ] Playwright installed in your project

---

## Step-by-Step Instructions

### Step 1: Open Your Terminal/Command Prompt

**For Windows Users:**
1. Press `Windows Key + R`
2. Type `powershell` and press Enter
3. Navigate to your project folder by typing:
   ```
   cd "C:\path\to\your\project"
   ```


### Step 2: Start Playwright Codegen

In your terminal, type the following command and press Enter:

```bash
npx playwright codegen
```

**What happens next:**
- A web browser window will open
- The Playwright Inspector window will appear alongside it
- You'll see "Recording..." at the top of the inspector

### Step 3: Navigate to Your Target Website

1. In the browser window that opened, go to the website you want to test
2. Type the URL in the address bar (e.g., `https://example.com`)
3. Press Enter to navigate

**👀 Watch the magic happen:**
- As you navigate, you'll see code appearing in the Playwright Inspector window
- This code represents your actions

### Step 4: Record Your Test Actions

Now perform the actions you want your test to repeat:

#### Common Actions and How to Record Them:

**🖱️ Clicking Buttons or Links:**
- Simply click any button, link, or element
- The tool records: `await page.click('selector')`

**⌨️ Filling Out Forms:**
- Click in text fields and type
- The tool records: `await page.fill('selector', 'your text')`

**🔍 Selecting Dropdowns:**
- Click dropdown menus and select options
- The tool records: `await page.selectOption('selector', 'option')`

**✅ Checking Checkboxes:**
- Click checkboxes to check/uncheck
- The tool records: `await page.check('selector')`

**📝 Example Recording Sequence:**
1. Click "Login" button
2. Type username in username field
3. Type password in password field  
4. Click "Submit" button
5. Verify you're on the dashboard page

### Step 5: Add Assertions (Verification Steps)

While recording, you can add verification steps to check if things are working correctly:

**To add an assertion:**
1. Look for the **"Assert"** button in the Playwright Inspector
2. Click on an element you want to verify (like a success message)
3. Choose what type of assertion you want:
   - **Visible** - Check if element appears
   - **Text** - Check if element contains specific text
   - **Value** - Check if input field has correct value

**Example assertions:**
- Verify login was successful by checking for "Welcome" text
- Verify form submission by checking for "Thank you" message
- Verify page navigation by checking page title

### Step 6: Stop Recording

When you've finished recording your actions:

1. Click the **"Stop Recording"** button in the Playwright Inspector
2. Or press `Ctrl+C` in the terminal to stop

### Step 7: Save Your Test

**Copy the Generated Code:**
1. In the Playwright Inspector, you'll see all the generated code
2. Select all the code (Ctrl+A)
3. Copy it (Ctrl+C)

**Create Your Test File:**
1. Create a new file in your project's `tests` folder
2. Name it something descriptive like `login-test.spec.js`
3. Paste the copied code into the file
4. Save the file

**Example of Generated Code:**
```javascript
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.click('text=Login');
  await page.fill('[placeholder="Username"]', 'testuser');
  await page.fill('[placeholder="Password"]', 'password123');
  await page.click('button:has-text("Submit")');
  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('text=Welcome')).toBeVisible();
});
```

---

## Advanced Codegen Features

### Recording with Specific Browser

To record using a specific browser:

```bash
# Record with Chrome
npx playwright codegen --browser=chromium

# Record with Firefox  
npx playwright codegen --browser=firefox

# Record with Safari
npx playwright codegen --browser=webkit
```

### Recording with Mobile Device Simulation

To record mobile tests:

```bash
# Record as iPhone
npx playwright codegen --device="iPhone 13"

# Record as Android
npx playwright codegen --device="Pixel 5"
```

### Starting from a Specific URL

To automatically navigate to a website when starting:

```bash
npx playwright codegen https://example.com
```

### Recording with Authentication

If you need to log in first before recording:

```bash
npx playwright codegen --save-storage=auth.json https://example.com/login
```

---

## Best Practices for Non-Programmers

### 🎯 Planning Your Test

**Before you start recording:**
1. **Write down your test steps** on paper first
2. **Identify what you want to verify** at each step
3. **Have test data ready** (usernames, passwords, etc.)
4. **Close unnecessary browser tabs** to avoid distractions

### 🎬 During Recording

**Do:**
- ✅ Move slowly and deliberately
- ✅ Wait for pages to load completely before clicking
- ✅ Use realistic test data
- ✅ Add assertions to verify important steps
- ✅ Give elements time to appear before interacting

**Don't:**
- ❌ Rush through steps
- ❌ Click before elements are fully loaded
- ❌ Use real personal information in tests
- ❌ Record too many actions in one test (keep tests focused)

### 📝 After Recording

**Review your generated code:**
1. **Give your test a descriptive name**
   - Instead of: `test('test', async ({ page }) => {`
   - Use: `test('User can successfully log in', async ({ page }) => {`

2. **Add comments to explain complex steps:**
   ```javascript
   // Navigate to login page
   await page.goto('https://example.com/login');
   
   // Fill in user credentials
   await page.fill('#username', 'testuser');
   await page.fill('#password', 'password123');
   ```

3. **Test your recorded test** by running it:
   ```bash
   npx playwright test your-test-file.spec.js
   ```

---

## Common Issues and Solutions

### ❗ Problem: "Element not found" errors

**Solution:**
- The element might take time to load
- Add wait commands before clicking:
```javascript
await page.waitForSelector('your-element');
await page.click('your-element');
```

### ❗ Problem: Test runs too fast

**Solution:**
- Add pauses between actions:
```javascript
await page.waitForTimeout(1000); // Wait 1 second
```

### ❗ Problem: Wrong element was selected

**Solution:**
- Re-record that specific step
- Or manually edit the selector to be more specific

### ❗ Problem: Test works during recording but fails when run later

**Solution:**
- Add more wait conditions
- Check if the website requires login or has changed
- Verify your test data is still valid

---

## Example: Complete Login Test Recording

Let's walk through recording a complete login test:

### Step 1: Start Recording
```bash
npx playwright codegen https://example.com
```

### Step 2: Record Actions
1. **Navigate** - Browser opens to example.com ✅
2. **Click Login** - Click "Login" button ✅  
3. **Enter Username** - Type in username field ✅
4. **Enter Password** - Type in password field ✅
5. **Submit Form** - Click "Login" button ✅
6. **Verify Success** - Add assertion for welcome message ✅

### Step 3: Generated Code
```javascript
import { test, expect } from '@playwright/test';

test('User can successfully log in', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://example.com/');
  
  // Click the login button
  await page.click('text=Login');
  
  // Fill in credentials
  await page.fill('[placeholder="Username"]', 'testuser');
  await page.fill('[placeholder="Password"]', 'password123');
  
  // Submit the form
  await page.click('button:has-text("Login")');
  
  // Verify successful login
  await expect(page.locator('text=Welcome')).toBeVisible();
  await expect(page).toHaveURL(/dashboard/);
});
```

### Step 4: Save and Test
1. Save as `tests/login-test.spec.js`
2. Run with: `npx playwright test login-test.spec.js`

---

## Next Steps

After mastering basic recording:

1. **Learn to organize tests** into logical groups
2. **Understand test data management** (using variables for usernames/passwords)
3. **Explore page object models** for reusable test components
4. **Set up continuous integration** to run tests automatically
5. **Learn basic debugging** when tests fail

---

## Getting Help

**If you get stuck:**

1. **Check the Playwright documentation**: https://playwright.dev/docs/codegen
2. **Ask for help in forums**: Stack Overflow, Reddit r/QualityAssurance
3. **Watch YouTube tutorials**: Search for "Playwright codegen tutorial"
4. **Practice with simple websites** before testing complex applications

---

## Conclusion

Playwright Codegen makes test automation accessible to everyone, regardless of programming experience. By following this guide, you can create professional-quality automated tests that will save time and improve software quality.

**Remember:**
- Start simple and build complexity gradually
- Practice on test websites before production applications  
- Always verify your tests work by running them multiple times
- Don't be afraid to experiment and learn from mistakes

**Happy Testing!** 🎉

---

*Last Updated: September 25, 2025*
*Document Version: 1.0*