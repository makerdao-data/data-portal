import { test, expect } from '@playwright/test';

test.describe('navbar test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('render navbar', async ({ page }) => {
    await expect(
      page.getByRole('navigation', { name: 'Sidebar' })
    ).toBeVisible();
  });

  test('navigation links', async ({ page }) => {
    await page.getByRole('link', { name: 'L2s' }).click();
    await expect(page).toHaveURL('http://localhost:3000/en/l2s');

    await page.getByRole('button', { name: 'Dark mode button' }).click();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Light mode button' }).click();
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).toBeVisible();
  });

  test('change theme color mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Dark mode button' }).click();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Light mode button' }).click();
    await expect(
      page.getByRole('button', { name: 'Light mode button' })
    ).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Dark mode button' })
    ).toBeVisible();
  });
});
