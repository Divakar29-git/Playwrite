import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in.bookmyshow.com/');
  await page.getByRole('img', { name: 'HYD' }).click();
  await page.getByRole('link', { name: 'Mahavatar Narsimha Mahavatar' }).click();
  await page.getByText('Refresh', { exact: true }).click();
});