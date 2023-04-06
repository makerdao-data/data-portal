import { test, expect } from '@playwright/test';
import governanceOverviewFixture from './fixtures/governanceOverview.json';
import votesSummary from './fixtures/votesSummaryFixture.json';
import pollsSummary from './fixtures/pollsSummaryFixture.json';

test.describe('Poll votes page test', () => {
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
      'https://data-api.makerdao.network/v1/governance/votes_summary',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(votesSummary)
        })
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/polls_summary',
      async (route) =>
        await route.fulfill({
          status: 200,
          body: JSON.stringify(pollsSummary)
        })
    );

    await page.goto(`http://localhost:3000/governance/poll-votes`);
  });

  test('MKR used last month Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'MKR used last month title' })
    ).toContainText('MKR used last month');

    await expect(
      page.getByRole('textbox', { name: 'MKR used last month value' })
    ).toContainText('2.83M');

    await expect(
      page.getByRole('textbox', { name: 'Diff. MKR used in polls' })
    ).toContainText('+70% last month');
  });

  test('Voters last month Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Voters last month title' })
    ).toContainText('Voters last month');

    await expect(
      page.getByRole('textbox', { name: 'Voters last month value' })
    ).toContainText('87');

    await expect(
      page.getByRole('textbox', { name: 'Diff. voters in polls' })
    ).toContainText('+1% last month');
  });

  test('MKR used for polls chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'MKR used for polls chart' })
    ).toBeVisible();
  });

  test('Total Polls table initial content', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Polls Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);
  });

  test('Total Polls Table pagination', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 1  of 97 ');
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
    ).toContainText('Page 2  of 97 ');

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

  test('Total Polls Table global filter', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Polls Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .count()
    ).toBe(10);

    await page
      .getByRole('textbox', { name: 'Data table global filter' })
      .fill('off');

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
    ).toContainText('Off');
  });

  test('Total Polls Table text sorting', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Total Polls Table' })
    ).toBeVisible();

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Arbitration Scope Clarification Edits - April 3, 2023');

    await page
      .getByRole('table', { name: 'Total Polls Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText(
      'Accelerate the Peg Stability Module Launch - November 23, '
    );

    await page
      .getByRole('table', { name: 'Total Polls Table' })
      .locator('table')
      .locator('thead')
      .locator('th')
      .nth(0)
      .click();

    await expect(
      await page
        .getByRole('table', { name: 'Total Polls Table' })
        .locator('table')
        .locator('tbody')
        .locator('tr')
        .nth(0)
        .locator('td')
        .nth(0)
    ).toContainText('Whitelist Yearn Finance on YFIUSD Oracle (MIP10c9-SP14)');
  });
});

test.describe('API errors', () => {
  test('Poll votes page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/governance/overview',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/polls_summary',
      async (route) => await route.abort()
    );

    await page.route(
      'https://data-api.makerdao.network/v1/governance/votes_summary',
      async (route) => await route.abort()
    );

    await page.goto(`http://localhost:3000/governance/poll-votes`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'MKR used last month data is not available at the moment.',
      'Voters last month data is not available at the moment.',
      'Polls data is not available at the moment.',
      'Polls data is not available at the moment.'
    ]);
  });
});
