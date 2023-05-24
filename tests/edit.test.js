const{test, expect} = require('@playwright/test');

test('Test edit', async ({ page }) => {
    await page.goto('https://tms.code-hub.online/');
    await page.getByRole('switch', { name: 'EN VI' }).click();
    await page.getByRole('row', { name: '1 Tâm lý không ổn định From 28-09-2023 to 29-09-2023 Cả ngày 2 Nghỉ phép không trả lương Nguyễn Văn Nam Đã gửi' }).getByText('Tâm lý không ổn định').click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.getByText('Nghỉ phép không trả lương').click();
    await page.getByText('Nghỉ thai sản').click();
    await page.getByPlaceholder('Select start day').click();
    await page.getByText('11', { exact: true }).click();
    await page.getByText('Cả ngày').click();
    await page.getByText('Cả ngày').nth(1).click();
    await page.getByText('Tâm lý không ổn định').click();
    await page.getByText('Sinh con').click();
    await page.getByPlaceholder('Select end day').click();
    await page.getByRole('row', { name: '24 25 26 27 28 29 30' }).getByText('27').click();
    await page.getByPlaceholder('Detail reason').click();
    await page.getByPlaceholder('Detail reason').fill('em hơi bị stress ạ sau khi sinh con ạ');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(3000);
});

