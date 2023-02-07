import { test, expect } from '@playwright/test';
import votersFixture from './fixtures/voters.json';
import delegatesFixture from './fixtures/delegates.json';
import delegatesSupportFixture from './fixtures/delegatesSupport.json';

test.describe('Voters page test', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/voters',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(votersFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(delegatesFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_support',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(delegatesSupportFixture)
        })
    );

    await page.goto(`http://localhost:3000/governance/overview`);
  });

  test('Staked MKR Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Staked MKR title' })
    ).toContainText('Staked MKR');

    await expect(
      page.getByRole('textbox', { name: 'Staked MKR value' })
    ).toContainText('95,376.81');

    await expect(
      page.getByRole('textbox', { name: 'Staked MKR change' })
    ).toContainText('7d Change 0.00%');
  });

  test('Voters type table', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Voter types table' })
    ).toBeVisible();
  });

  test('Delegate voting power chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Delegate voting power chart' })
    ).toBeVisible();

    await expect(
      page
        .getByRole('figure', { name: 'Delegate voting power chart' })
        .locator('div')
        .first()
    ).toHaveCSS('height', '400px');
  });

  test.only('Overview page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/voters',
      (route) => route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates',
      (route) => route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_support',
      (route) => route.abort()
    );

    await page.goto(`http://localhost:3000/governance/overview`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'Staked MKR data is not available at the moment.',
      'Voter types data is not available at the moment.',
      'Delegate voting power data is not available at the moment.'
    ]);
  });
});
