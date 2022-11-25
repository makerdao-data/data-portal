import { test, expect, devices } from '@playwright/test';
// import summaryFixture from '../fixtures/summary.json';

test.describe('navigation test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:3000`);
  });

  // test('overview query', async ({ page }) => {
  //   await page.route(
  //     'https://data-api.makerdao.network/v1/metrics/summary',
  //     (route) =>
  //       route.fulfill({
  //         status: 200,
  //         body: JSON.stringify(summaryFixture)
  //       })
  //   );

  //   await page.goto('http://localhost:3000/l2s/overview');

  //   await expect(
  //     page.getByRole('textbox', { name: 'DAI Supply value' })
  //   ).toContainText('122,544,793.02');
  // });

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
    await page.getByRole('button', { name: 'NavbarButtonL2s' }).click();
    await expect(
      page.getByRole('menu', { name: 'Overview sidebar menu' })
    ).toBeVisible();
    await page.getByRole('link', { name: 'Overview' }).click();

    await expect(page).toHaveURL('http://localhost:3000/l2s/overview');
  });
});
