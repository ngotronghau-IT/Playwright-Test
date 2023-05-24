const { test, expect } = require('@playwright/test');

test('Test request-type', async ({ page }) => {
    await page.goto('https://tms.code-hub.online/my-request');
    await page.locator('.ant-select-selection-overflow').first().click();
    await page.getByLabel('Làm việc tại nhà').check();
    await page.getByLabel('Nghỉ bệnh').check();
    await page.getByLabel('Nghỉ không lương').check();
    await page.getByLabel('Nghỉ phép', { exact: true }).check();
    await page.getByLabel('Nghỉ phép không trả lương').check();
    await page.getByLabel('Nghỉ tang').check();
    await page.getByLabel('Nghỉ thai sản').check();
    await page.locator('label').filter({ hasText: 'Deselect All' }).locator('span').first().click();
    await page.locator('label').filter({ hasText: /^Nghỉ phép$/ }).click();
    await page.getByLabel('Nghỉ không lương').check();
    await page.getByRole('button', { name: 'Tìm' }).click();
    await page.screenshot({ path: Date.now() + 'srceenshot1.png'});
    await page.waitForTimeout(3000);
});