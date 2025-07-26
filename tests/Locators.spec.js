import { test,expect } from "@playwright/test";

test('locators', async({page})=>{

await page.goto('https://selectorshub.com/xpath-practice-page/');
//await page.locator('id=shub76').click
await page.click('id=shub76')
//await page.locator('#shub76').fill('divakarthilak334@gmail.com')
//await page.fill('#shub76')
await page.type("//input[@name='username']",'admin')
await page.locator("//input[@type='password']").fill('admin123')
await page.click("//button[@type='submit']")

const logoutlink = await page.locator("//a[@role='menuitem']")
await expect(logoutlink).toBeVisible();
await page.close();

})