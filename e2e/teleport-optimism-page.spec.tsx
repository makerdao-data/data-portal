import { test, expect } from '@playwright/test';
import optimismFixture from './fixtures/optimism.json';
import alchemyFixture from './fixtures/alchemy.json';

test.describe('Optimism page test', () => {
  test.beforeEach(async ({ page }) => {
    // Pick the new/fake "now" for you test pages.
    const fakeNow = new Date('2022-12-06 10:57:11').valueOf();
    const lastEthTimestamp = new Date('2022-12-06 14:57:11').valueOf();
    // Update the Date accordingly in your test pages
    await page.addInitScript(`{
      Date = class extends Date {
        constructor(...args) {
          if (args.length === 0) {
            super(${fakeNow});
          } else {
            super(${lastEthTimestamp});
          }
        }
      }

      const __DateNowOffset = ${fakeNow} - Date.now();
      const __DateNow = Date.now;
      Date.now = () => __DateNow() + __DateNowOffset;
    }`);

    await page.route(
      'https://data-api.makerdao.network/v1/metrics/optimism',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(optimismFixture)
        })
    );

    await page.route(
      'https://opt-mainnet.g.alchemy.com/v2/kKpGhqgtnDaz1n6PhdhZTXBPKcX9vlVN',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(alchemyFixture)
        })
    );

    await page.goto(`http://localhost:3000/teleport/optimism`);
  });

  test('L2 DAI supply card', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'L2 Dai Supply title' })
    ).toContainText('L2 Dai Supply');

    await expect(
      page.getByRole('textbox', { name: 'L2 Dai Supply value' })
    ).toContainText('51,429,737.82');

    await expect(
      page.getByRole('textbox', { name: 'L2 Dai Supply change' })
    ).toContainText('7d Change +11.08%');

    // await expect(
    //   page.getByRole('textbox', { name: 'Last processed block text' })
    // ).toContainText('Last update: block 68860608 (-52734011 blocks)');

    // await expect(
    //   page.getByRole('link', { name: 'Block link' })
    // ).toHaveAttribute('href', 'https://optimistic.etherscan.io/block/68860608');

    // await expect(
    //   page.getByRole('textbox', { name: 'Last refresh date' })
    // ).toContainText('Dec 6, 2022, 2:57 PM LT (less than a minute)');
  });

  test('L2 Dai supply and escrow chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'L2 Dai supply and escrow chart' })
    ).toBeVisible();

    await expect(
      page
        .getByRole('figure', { name: 'L2 Dai supply and escrow chart' })
        .locator('div')
        .first()
    ).toHaveCSS('height', '380px');
  });

  test('Dai distribution kpis', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Unique DAI Holders title' })
    ).toContainText('Unique DAI Holders');

    await expect(
      page.getByRole('textbox', { name: 'Unique DAI Holders value' })
    ).toContainText('99,814');

    await expect(
      page.getByRole('textbox', { name: 'Unique DAI Holders change' })
    ).toContainText('+5.32%');

    await expect(
      page.getByRole('heading', { name: 'Avg. DAI ownership/holding title' })
    ).toContainText('Avg. DAI ownership/holding');

    await expect(
      page.getByRole('textbox', { name: 'Avg. DAI ownership/holding value' })
    ).toContainText('515.26');

    await expect(
      page.getByRole('textbox', { name: 'Avg. DAI ownership/holding change' })
    ).toContainText('+5.47%');
  });

  test('Top DAI holders chart', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Top DAI Holders pie chart title' })
    ).toContainText('Top DAI Holders');

    await expect(
      page.getByRole('figure', {
        name: 'Top DAI Holders pie chart'
      })
    ).toBeVisible();
  });

  test('DAI distribution chart', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'DAI Distribution comparison title' })
    ).toContainText('DAI Distribution');

    await expect(
      page.getByRole('figure', {
        name: 'DAI Distribution chart'
      })
    ).toBeVisible();
  });

  test('Flows kpis', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: '7d. Inflow title' })
    ).toContainText('7d. Inflow');

    await expect(
      page.getByRole('textbox', { name: '7d. Inflow value' })
    ).toContainText('5,212,391.95');

    await expect(
      page.getByRole('textbox', { name: '7d. Inflow change' })
    ).toContainText('7d Change +10,865.06%');

    await expect(
      page.getByRole('heading', { name: '7d. Outfow title' })
    ).toContainText('7d. Outfow');

    await expect(
      page.getByRole('textbox', { name: '7d. Outfow value' })
    ).toContainText('81,305.24');

    await expect(
      page.getByRole('textbox', { name: '7d. Outfow change' })
    ).toContainText('7d Change +394.84%');

    await expect(
      page.getByRole('heading', { name: '7d. Fast Withdrawal Share title' })
    ).toContainText('7d. Fast Withdrawal Share');

    await expect(
      page.getByRole('textbox', { name: '7d. Fast Withdrawal Share value' })
    ).toContainText('0');

    await expect(
      page.getByRole('textbox', { name: '7d. Fast Withdrawal Share change' })
    ).toContainText('7d Change 0.00%');
  });

  test('Net inflows chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', {
        name: 'Net inflows chart'
      })
    ).toBeVisible();
  });

  test('Optimism page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/metrics/optimism',
      (route) => route.abort()
    );

    await page.route(
      'https://opt-mainnet.g.alchemy.com/v2/kKpGhqgtnDaz1n6PhdhZTXBPKcX9vlVN',
      (route) => route.abort()
    );

    await page.goto(`http://localhost:3000/teleport/optimism`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'L2 Dai Supply data is not available at the moment.',
      'Dai in L2s data is not available at the moment.',
      'Data is not available at the moment.',
      'Top DAI Holders data is not available at the moment.',
      'DAI Distribution data is not available at the moment.',
      'Data is not available at the moment.',
      'Net Inflows data is not available at the moment.'
    ]);
  });
});
