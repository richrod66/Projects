// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries : 2,
/* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',
   reporter: [["line"],
    ["allure-playwright",
      {
        resultsDir: "allure-results",
        detail: true,
        suiteTitle: true,
        links: {
          issue: {
            nameTemplate: "Issue #%s",
            urlTemplate: "https://issues.example.com/%s",
          },
          tms: {
            nameTemplate: "TMS #%s",
            urlTemplate: "https://tms.example.com/%s",
          },
          jira: {
            urlTemplate: (v) => `https://jira.example.com/browse/${v}`,
          },
        }
      
      },
    ]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    trace: 'on',
    //trace: 'retain-on-failure',
    browserName: 'webkit',
    headless: true,
    screenshot: 'off', // This will take a screen shot on failure
    

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'safari',
      use: { 
      
      trace: 'retain-on-failure',
      browserName: 'webkit',
      headless: false,
      screenshot: 'on' ,
      //viewport: { width: 360, height: 360 }
      //...devices['iPhone 14'],
      //...devices['iPad Pro 11'],
      //...devices['Pixel 5'],
      //...devices['Desktop Chrome']


      },
    },
//      {
//      name: 'chromium',
//      use: { ...devices['Desktop Chrome'],
//      trace: 'on',
//      //trace: 'retain-on-failure',
//      browserName: 'webkit',
//      headless: true,
//      screenshot: 'on',
//      viewport: { width: 720, height: 720 },
//      },
//    },

    
  ],

  

});

