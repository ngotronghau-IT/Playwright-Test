const{test, expect} = require('@playwright/test');

test('Test create-request', async ({ page }) => {
  await page.goto('https://tms.code-hub.online/');

  await page.locator('.sideNav__item').first().click();

  await page.locator('div').filter({ hasText: /^Working Time Management$/ }).click();

  await page.getByText('Leave RequestMy RequestCreate RequestReceived Request List').click();

  await page.getByRole('link', { name: 'Create Request' }).click();

  await page.locator('.ant-select-selector').first().click();

  await page.getByTitle('Làm việc tại nhà').click();

  await page.getByPlaceholder('Chọn ngày bắt đầu').click();

  await page.locator('.ant-picker').first().click();

  await page.getByText('19', { exact: true }).click();

  await page.locator('#requestReasonId').click();

  await page.getByTitle('Dịch Covid').click();

  await page.getByPlaceholder('Detail reason').click();

  await page.getByPlaceholder('Detail reason').fill('no');

  await page.locator('div:nth-child(2) > div > div:nth-child(2) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker').click();

  await page.getByRole('cell', { name: '23' }).getByText('23').click();

  await page.locator('#approver').click();

  await page.getByText('Bùi Hồng Thanh').click();

  await page.locator('#supervisor').click();

  await page.getByText('Bùi Hồng Vi Xử').nth(1).click();

  await page.locator('#informTo').click();

  await page.getByText('buihongvixu.zeronine@gmail.com').click();

  await page.getByRole('button', { name: 'Submit' }).click();

  await page.waitForResponse

  await page.waitForTimeout(3000);
  });