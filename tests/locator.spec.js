const {test,expect}=require('@playwright/test');

test('locators', async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//await page.locator('id=shub76').click
//await page.click('id=shub76')
//await page.locator('#shub76').fill('divakarthilak334@gmail.com')
//await page.fill('#shub76')
await page.type("//input[@name='username']",'admin')
await page.locator("//input[@type='password']").fill('admin123')
await page.click("//button[@type='submit']")
//await page.waitForSelector("//a[@role='menuitem']");
//const logoutlink = await page.locator("//a[@role='menuitem']")
//await expect(logoutlink).toBeVisible();
await page.waitForSelector('#dropdownButton');
await page.close();

})