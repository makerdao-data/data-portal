import { test, expect, devices } from '@playwright/test';

test.describe('navigation test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:3000`);
  });

  test('render sidebar and hide topnavbar on desktop', async ({ page }) => {
    await expect(
      page.getByRole('navigation', { name: 'Sidebar' })
    ).toBeVisible();

    await expect(
      page.getByRole('navigation', { name: 'Top Navbar' })
    ).not.toBeVisible();
  });

  test('render topnavbar and show/hide sidebar by pressing menu button on mobile', async ({
    page
  }) => {
    await page.setViewportSize(devices['iPhone X'].viewport);

    await expect(
      page.getByRole('navigation', { name: 'Sidebar' })
    ).not.toBeVisible();

    await expect(
      page.getByRole('navigation', { name: 'Top Navbar' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Open sidebar button' }).click();

    await expect(
      page.getByRole('navigation', { name: 'Sidebar' })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Close sidebar button' }).click();

    await expect(
      page.getByRole('navigation', { name: 'Sidebar' })
    ).not.toBeVisible();
  });

  test('Overview navigation menu and links', async ({ page }) => {
    await expect(
      page.getByRole('menu', { name: 'Overview sidebar menu' })
    ).not.toBeVisible();
    await page.getByRole('button', { name: 'NavbarButtonTeleport' }).click();
    await expect(
      page.getByRole('menu', { name: 'Overview sidebar menu' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'Overview' }).click();

    await expect(page).toHaveURL('http://localhost:3000/teleport/overview');
  });
});
