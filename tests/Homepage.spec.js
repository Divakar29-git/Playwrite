const {test,expect}=require('@playwright/test');
test('Homepage', async({page})=>{

    await page.goto('https://www.youtube.com/')
    const pagetitle = page.title;
    console.log("page title is ", pagetitle);
    await expect(page).toHaveTitle('YouTube');
   const Pageurl = page.url;
   console.log("Page URL is " ,Pageurl);
    await expect(page).toHaveURL('https://www.youtube.com');
    await page.close();
})