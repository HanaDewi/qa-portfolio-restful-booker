const { test, expect } = require('@playwright/test');

test.describe('Restful Booker - UI Automation', () => {

    test('1. Verify Homepage Elements', async ({ page }) => {
        await page.goto('https://automationintesting.online/');
        const hotelName = page.getByText('Welcome to Shady Meadows B&B');
        await expect(hotelName).toBeVisible({ timeout: 15000 });
    });

    test('2. Submit Contact/Booking Inquiry Form', async ({ page }) => {
        await page.goto('https://automationintesting.online/');

        await page.locator('#name').fill('Nina');
        await page.locator('#email').fill('nina@example.com');
        await page.locator('#phone').fill('0812345678901'); 
        await page.locator('#subject').fill('Booking via Playwright');
        await page.locator('#description').fill('Halo, saya ingin menanyakan ketersediaan kamar. Terima kasih!');

        // PERBAIKAN: Menggunakan getByRole untuk mencari tombol "Submit"
        await page.getByRole('button', { name: 'Submit' }).click();

        const successMessage = page.getByText('Thanks for getting in touch');
        await expect(successMessage).toBeVisible({ timeout: 15000 });
    });

    test('3. Verify Mandatory Field Validation (Negative Test)', async ({ page }) => {
        await page.goto('https://automationintesting.online/');

        // PERBAIKAN: Menggunakan getByRole untuk mencari tombol "Submit"
        await page.getByRole('button', { name: 'Submit' }).click();

        const errorMessage = page.locator('.alert-danger');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('may not be blank');
    });
});