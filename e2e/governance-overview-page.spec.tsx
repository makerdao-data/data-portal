import { test, expect } from '@playwright/test';
import votersFixture from './fixtures/voters.json';
import delegatesSupportFixture from './fixtures/delegatesSupport.json';
import governanceOverviewFixture from './fixtures/governanceOverview.json';

test.describe('Voters page test', () => {
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
      'https://data-api.makerdao.network/v1/governance/voters',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(votersFixture)
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

    await page.goto(`http://localhost:3000/governance/overview`);
  });

  test('Staked MKR Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Staked MKR in Chief title' })
    ).toContainText('Staked MKR in Chief');

    await expect(
      page.getByRole('textbox', { name: 'Staked MKR in Chief value' })
    ).toContainText('196,163.57');

    await expect(
      page.getByRole('textbox', { name: 'Staked MKR in Chief change' })
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
  });

  test('Governing Executive (Hat) Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Governing Executive (Hat) title' })
    ).toContainText('Governing Executive (Hat)');

    await expect(
      page.getByRole('textbox', { name: 'Governing Executive (Hat) value' })
    ).toContainText('89,263');
  });

  test('Executives by month chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'Governing executive chart' })
    ).toBeVisible();
  });

  test('Total voters Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Total voters title' })
    ).toContainText('Total voters');

    await expect(
      page.getByRole('textbox', { name: 'Total voters value' })
    ).toContainText('59');
  });

  test('Voters table initial content', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Voters Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);
  });

  test('Voters table pagination', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 1 of 6 ');
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
    ).toContainText('Page 2 of 6 ');

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

  test('Voters table global filter', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Voters Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);

    await page
      .getByRole('textbox', { name: 'Data table global filter' })
      .fill('Chris');

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
    ).toContainText('Chris');
  });

  test('Voters table date sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Voters Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(3)
    ).toContainText('Jul 15, 2022');

    await page
      .getByRole('table', { name: 'Voters Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(3)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(3)
    ).toContainText('Feb 23, 2022');

    await page
      .getByRole('table', { name: 'Voters Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(3)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(3)
    ).toContainText('Jan 16, 2023');
  });

  test('Voters table text sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Voters Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(2)
    ).toContainText('Recognized Delegate Compensation');

    await page
      .getByRole('table', { name: 'Voters Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(2)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(2)
    ).toContainText('');

    await page
      .getByRole('table', { name: 'Voters Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(2)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Voters Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(2)
    ).toContainText('Collateral Auction Parameter Changes');
  });
});

test.describe('API errors', () => {
  test('Overview page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/overview',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/voters',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/delegates_support**',
      async (route) => await route.abort()
    );

    await page.goto(`http://localhost:3000/governance/overview`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'Staked MKR data is not available at the moment.',
      'Voter types data is not available at the moment.',
      'Delegate voting power data is not available at the moment.',
      'Voters data is not available at the moment.'
    ]);
  });
});
