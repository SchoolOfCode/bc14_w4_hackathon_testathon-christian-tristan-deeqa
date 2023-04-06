const { test, expect } = require('@playwright/test');

// User goes to the website ✅
// User clicks on the Task input box ✅
// User puts a task in the input box ✅

// User clicks on the date
// User clicks on the "Create!" button

test ('Navigate to website', async ({ page }) => {
    await page.goto('http://localhost:3000');
});

//Tests 1-3
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

   // Use fills in the date
test ('Filling in the date box"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const inputDate = page.getByLabel('Completion Date');
    // await inputDate.click();
    await expect (inputDate).toBeVisible();
    await inputDate.fill ('2021-12-31');
    await expect (inputDate).toHaveValue ('2021-12-31');
});