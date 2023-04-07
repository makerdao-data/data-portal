import { test, expect } from '@playwright/test';
import governanceOverviewFixture from './fixtures/governanceOverview.json';
import executivesSummary from './fixtures/executivesSummaryFixture.json';
import executives from './fixtures/executivesFixture.json';

test.describe('Executive votes page test', () => {
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
      'https://data-api.makerdao.network/v1/governance/executives**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(executives)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/executives_summary',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(executivesSummary)
        })
    );

    await page.goto(`http://localhost:3000/governance/executive-votes`);
  });

  test('MKR in Hat Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'MKR in Hat title' })
    ).toContainText('MKR in Hat');

    await expect(
      page.getByRole('textbox', { name: 'MKR in Hat value' })
    ).toContainText('89,263');
  });

  test('Executives line chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Governing executive chart' })
    ).toBeVisible();
  });

  test('Total Polls table initial content', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Executive Votes Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);
  });

  test('Total Executive Votes Table pagination', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 1  of 17 ');
    await expect(
      page.getByRole('button', { name: 'First page button' })
    ).toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Previous page button' })
    ).toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Last page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Next page button' })
    ).toBeEnabled();

    await page.getByRole('button', { name: 'Next page button' }).click();

    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 2  of 17 ');

    await expect(
      page.getByRole('button', { name: 'First page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Previous page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Last page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Next page button' })
    ).toBeEnabled();
  });

  test('Total Executive Votes Table global filter', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Executive Votes Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);

    await page
      .getByRole('textbox', { name: 'Data table global filter' })
      .fill('flap');

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
    ).toContainText('FLAP Auction Adjustment, RWA-02 (NS-DROP) ');
  });

  test('Total Executive Votes Table text sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Executive Votes Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Onboarding Real World Asset Vaults - July 29, 2022	');

    await page
      .getByRole('table', { name: 'Total Executive Votes Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText(
      'Aave D3M Onboarding and Core Unit Budget Transfers - October 29, 2021'
    );

    await page
      .getByRole('table', { name: 'Total Executive Votes Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Total Executive Votes Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText(
      'rETH Technical Onboarding, Enable Starknet DAI Bridge Fees - October 26, 2022'
    );
  });
});

test.describe('API errors', () => {
  test('Executive votes page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/overview',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/executives_summary',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/executives**',
      async (route) => await route.abort()
    );

    await page.goto(`http://localhost:3000/governance/executive-votes`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'MKR in Hat data is not available at the moment.',
      'Executive votes data is not available at the moment.',
      'Executive votes data is not available at the moment.'
    ]);
  });
});
