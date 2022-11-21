import { test, expect } from '@playwright/test';

test.describe('L2s page test', () => {
  test('should redirect to overview when visiting root page', async ({
    page
  }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#overview');
  });

  test('sub navbar sections navigation', async ({ page }) => {
    await page.goto('http://localhost:3000/l2s');

    await expect(
      page.getByRole('navigation', { name: 'L2s Sub Navbar' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Overview' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#overview');

    await page.getByRole('link', { name: 'Fast Withdrawals' }).click();
    await expect(page).toHaveURL(
      'http://localhost:3000/en/l2s#fast-withdrawals'
    );

    await page.getByRole('link', { name: 'Arbitrum' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#arbitrum');

    await page.getByRole('link', { name: 'Optimism' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#optimism');

    await page.getByRole('link', { name: 'Starknet' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#starknet');

    await page.getByRole('link', { name: 'Appendix' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s#appendix');
  });
});
