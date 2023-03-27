import { test, expect } from '@playwright/test';
import governanceOverviewFixture from './fixtures/governanceOverview.json';
import currentDelegatesFixture from './fixtures/currentDelegates.json';
import delegationSummaryFixture from './fixtures/delegationSummary.json';
import delegatesSupportFixture from './fixtures/delegatesSupport.json';

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
      'https://data-api.makerdao.network/v1/governance/delegates_support**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(delegatesSupportFixture)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/current_delegates**',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(currentDelegatesFixture)
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
    ).toContainText('75.9K');
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

  test('Delegates table initial content', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Delegates Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);
  });

  test('Delegates table pagination', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 1  of 3 ');
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
    ).toContainText('Page 2  of 3 ');

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

  test('Delegates table global filter', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Delegates Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);

    await page
      .getByRole('textbox', { name: 'Data table global filter' })
      .fill('penn');

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
    ).toContainText('Penn');
  });

  test('Delegates table text sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Delegates Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Flip Flop Flap Delegate Llc');

    await page
      .getByRole('table', { name: 'Delegates Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Acreinvest');

    await page
      .getByRole('table', { name: 'Delegates Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Riskdao');
  });

  test('Delegates table number sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Delegates Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(1)
    ).toContainText('9%');

    await page
      .getByRole('table', { name: 'Delegates Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(1)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(1)
    ).toContainText('0%');

    await page
      .getByRole('table', { name: 'Delegates Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(1)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Delegates Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(1)
    ).toContainText('9%');
  });
});

test.describe('API errors', () => {
  test('Overview page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/current_delegates**',
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
      'Top Delegates data is not available at the moment.',
      'Delegate voting power data is not available at the moment.',
      'Delegate voting power data is not available at the moment.',
      'Something went wrogn trying to load the data.',
      'Delegates data is not available at the moment.'
    ]);
  });
});
