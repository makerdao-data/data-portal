import { test, expect } from '@playwright/test';
import votersFixture from './fixtures/voters.json';

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

    await page.goto(`http://localhost:3000/governance/voters`);
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
    ).toBe(50);
  });

  test('Voters table pagination', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Page number' })
    ).toContainText('Page 1 of 2');
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
    ).toContainText('Page 2 of 2');

    await expect(
      page.getByRole('button', { name: 'First page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Previous page button' })
    ).toBeEnabled();
    await expect(
      page.getByRole('button', { name: 'Last page button' })
    ).toBeDisabled();
    await expect(
      page.getByRole('button', { name: 'Next page button' })
    ).toBeDisabled();
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
    ).toBe(50);

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
