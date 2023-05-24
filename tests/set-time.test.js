const{test, expect} = require('@playwright/test');

test('Test set-time', async ({ page }) => {
    await page.goto('https://tms.code-hub.online/');
    await page.getByRole('switch', { name: 'EN VI' }).click();
    await page.getByPlaceholder('Select time request from').first().click();
    await page.getByText('24', { exact: true }).click();
    await page.getByPlaceholder('Select time request to').first().click();
    await page.getByRole('row', { name: '28 29 30 31 1 2 3' }).getByText('31').nth(1).click();
    await page.locator('.ant-select-selection-overflow').first().click();
    await page.getByLabel('Nghỉ bệnh').check();
    await page.getByLabel('Làm việc tại nhà').check();
    await page.getByLabel('Nghỉ không lương').check();
    await page.locator('.ant-select-selection-overflow').nth(1).click();
    await page.getByLabel('Đã duyệt').check();
    await page.getByLabel('Đã gửi').check();
  await page.waitForTimeout(3000);
});