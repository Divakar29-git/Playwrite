const{test , expect} = require('@playwright/test')
test('Practice', async({page})=>{
    await page.goto('https://in.bookmyshow.com/explore/home/hyderabad')

    const currentURL = page.url()
    console.log("URL of the page is " + currentURL);
 await page.waitForTimeout(5000);
    await expect(page).toHaveURL('https://in.bookmyshow.com/explore/home/hyderabad')


   // await page.locator("//div[contains(text(),'Hari Hara Veera Mallu - Part 1 Sword vs Spirit')]").click
   await page.waitForTimeout(20000);
    await page.getByAltText('Mahavatar Narsimha').click();
    
    await page.waitForTimeout(20000);



}

)