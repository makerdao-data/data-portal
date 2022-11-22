import { test, expect } from '@playwright/test';

test.describe('navigation test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('change theme color mode', async ({ page }) => {
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).not.toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).toBeDisabled();
    await page
      .getByRole('button', { name: 'Dark mode button' })
      .click({ force: true });
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).not.toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).toBeDisabled();

    await page
      .getByRole('button', { name: 'Light mode button' })
      .click({ force: true });
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).not.toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).toBeDisabled();
  });
});
