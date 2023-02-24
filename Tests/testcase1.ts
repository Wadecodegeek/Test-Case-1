
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


  // Go to 'https://www.qa-5.monevo.com/'  /

  await page.goto('https://www.qa-5.monevo.com/');

 //click on loan amount
await page.locator('[name="loanAmount" ]').click();

 //fill 100nin loan amount
page.locator('[name="loanAmount" ]', ").fill(\"1000\");",

 //click on continue button
await page.locator('[id="continue-button" ]').click());

 //click on loan purpose
await page.locator('[name="loanPurpose""value=3" ]').click();

 //click on your title
await page.locator('[name="title" value="1" ]').click();

 //click on and fill in your name
await page.locator('[id="firstName" ]').fill("Wade");

 //click on and fill in your last name
await page.locator('[id="lastName" ]').fill ("Wadkhbfje");

 //click on continue button
await page.locator('[id="continue-button" ]').click ();

 // click on and fill in mobile number fail
await page.locator('[name="mobileNumber" ]').fill("310-323-258");
console.log ("fail");


await page.close();

});


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {


  // Go to 'https://www.qa-5.monevo.com/'  /

  await page.goto('https://www.qa-5.monevo.com/');

 //click on loan amount
await page.locator('[name="loanAmount" ]').click();

 //fill 100nin loan amount
page.locator('[name="loanAmount" ]', ").fill(\"1000\");",

 //click on continue button
await page.locator('[id="continue-button" ]').click());

 //click on loan purpose
await page.locator('[name="loanPurpose""value=3" ]').click();

 //click on your title
await page.locator('[name="title" value="1" ]').click();

 //click on and fill in your name
await page.locator('[id="firstName" ]').fill("Wgafade");

 //click on and fill in your last name
await page.locator('[id="lastName" ]').fill ("Wajghlghbfje");

 //click on continue button
await page.locator('[id="continue-button" ]').click ();

 // click on and fill in mobile number
await page.locator('[name="mobileNumber" ]').fill("07897641544");
console.log ("pass");

 
await page.close();

});




 





