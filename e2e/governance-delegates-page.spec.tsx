import { test, expect } from '@playwright/test';
import governanceOverviewFixture from './fixtures/governanceOverview.json';
import delegatesBalancesFixture from './fixtures/delegatesBalances.json';
import delegatesSupportFixture from './fixtures/delegatesSupport.json';
import delegationSummaryFixture from './fixtures/delegationSummary.json';

test.describe('Delegates page test', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/overview',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(governanceOverviewFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_balances**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(delegatesBalancesFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_support**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(delegatesSupportFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegation_summary**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(delegationSummaryFixture)
        })
    );

    await page.goto(`http://localhost:3000/governance/delegates`);
  });

  test('Governance delegated MKR Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Delegated MKR title' })
    ).toContainText('Delegated MKR');

    await expect(
      page.getByRole('textbox', { name: 'Delegated MKR value' })
    ).toContainText('71.1K');
  });

  test('Top Delegates table', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Top Delegates table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Top Delegates table' })
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(5);
  });

  test('Latest Delegate voting power chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Today Delegate voting power chart' })
    ).toBeVisible();
  });

  test('Delegate voting power chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Delegate voting power chart' })
    ).toBeVisible();
  });

  test('Delegation flow chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Delegation flow chart' })
    ).toBeVisible();
  });
});

test.describe('API errors', () => {
  test('Overview page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_balances**',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_support**',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegation_summary**',
      async (route) => await route.abort()
    );

    await page.goto(`http://localhost:3000/governance/delegates`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'Delegated MKR data is not available at the moment.',
      'Delegate voting power data is not available at the moment.',
      'Something went wrogn trying to load the data.'
    ]);
  });
});
