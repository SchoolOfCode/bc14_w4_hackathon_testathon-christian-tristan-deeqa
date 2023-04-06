const { test, expect } = require('@playwright/test');

// User goes to the website ✅
// User clicks on the Task input box ✅
// User puts a task in the input box ✅

// User clicks on the date✅
// User clicks on the "Create!" button✅
 // integrated test that adds new item list and checks if the item is added to the list ✅
// refresh the to do list and making sure the old to-dos are still saved
// delete to do list 

test ('Navigate to website', async ({ page }) => {
    await page.goto('http://localhost:3000');
});

test ('Clicking on the text box and filling it with the text "test"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel(`Task`)
    await input.fill ('test'); 
    await expect (input).toHaveValue ('test');
});


// User clicks on the completion date box

test ('Clicking on the date box"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel(`Task`)
    await input.fill ('test'); 
    await expect (input).toHaveValue ('test');
    const inputDate = page.getByLabel('Completion Date');
    await inputDate.click();
   });

   // integrated test that adds new item list and checks if the item is added to the list
   test ('add new item to list"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const inputDate = page.getByLabel('Completion Date');
    await expect (inputDate).toBeVisible();
    await inputDate.fill ('2021-12-31');
    await expect (inputDate).toHaveValue ('2021-12-31');


    //check if the task textbox is visible and filled
    
    const input = page.getByLabel(`Task`)
    await input.fill ('test'); 
    await expect (input).toHaveValue ('test');

   // User clicks on the "Create!" button
        const createButton = page.getByLabel('Create');
        await createButton.click();
        await expect (createButton).toBeVisible();
        const list = page.getByRole('list');
        await expect (list).toBeVisible();
        await expect (list).toHaveText('test2021-12-31🗑️');
        

});