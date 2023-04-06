const { test, expect } = require('@playwright/test');

// User goes to the website
// User clicks on the Task input box
// User a task in the input box
// User clicks on the completion date box
// User clicks on the date
// User clicks on the "Create!" button

test ('Navigate to website', async ({ page }) => {
    await page.goto('http://localhost:3000');
});

test ('Clicking on the text box and filling it with the text "test"', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = page.getByLabel(`Task`)
    await input.fill ('test'); 
    await expect (input).toHaveValue ('test');
});
