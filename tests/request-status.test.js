const{test, expect} = require('@playwright/test');

test('Test request-status', async ({ page }) => {
  await page.goto('https://tms.code-hub.online/');
  await page.getByRole('switch', { name: 'EN VI' }).click();
  await page.locator('div:nth-child(4) > .ant-form-item > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
  await page.getByLabel('Bản nháp').check();
  await page.getByLabel('Bị từ chối').check();
  await page.getByLabel('Đã duyệt').check();
  await page.getByLabel('Đã gửi').check();
  await page.getByLabel('Đã hủy').check();
  await page.getByLabel('Đã xác nhận').check();
  await page.getByText('Time Managament SystemWelcome to, Dinh Tien DungENVI').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div:nth-child(4) > .ant-form-item > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-overflow').click();
  await page.getByLabel('Đã xác nhận').check();
  await page.getByText('Time Managament SystemWelcome to, Dinh Tien DungENVI').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.screenshot({ path: Date.now() + 'srceenshot2.png'});
  await page.waitForTimeout(3000);
  await page.I
});