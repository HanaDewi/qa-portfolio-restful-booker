// @ts-check
const { defineConfig, devices } = require('@playwright/test');
 
module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,           // 30 detik per test
  retries: 1,               // retry 1x jika gagal (kurangi flaky)
  workers: 2,               // jalankan 2 test paralel
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['list'],               // output di terminal
  ],
  use: {
    baseURL: 'https://restful-booker.herokuapp.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
