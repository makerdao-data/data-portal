import { test, expect } from '@playwright/test';
import summaryFixture from './fixtures/summary.json';
import alchemyFixture from './fixtures/alchemy.json';

test.describe('Overview page test', () => {
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
      'https://data-api.makerdao.network/v1/metrics/summary',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(summaryFixture)
        })
    );

    await page.route(
      'https://eth-mainnet.g.alchemy.com/v2/kKpGhqgtnDaz1n6PhdhZTXBPKcX9vlVN',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(alchemyFixture)
        })
    );

    await page.goto(`http://localhost:3000/teleport/overview`);
  });

  test('DAI supply card', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'DAI Supply value' })
    ).toContainText('122,544,793.03');

    await expect(
      page.getByRole('textbox', { name: 'DAI Supply change' })
    ).toContainText('-2.18%');

    // await expect(
    //   page.getByRole('textbox', { name: 'Last processed block text' })
    // ).toContainText('Last update: block 16126494 (103 blocks)');

    // await expect(
    //   page.getByRole('link', { name: 'Block link' })
    // ).toHaveAttribute('href', 'https://etherscan.io/block/16126494');

    // await expect(
    //   page.getByRole('textbox', { name: 'Last refresh date' })
    // ).toContainText('Dec 6, 2022, 2:57 PM LT (less than a minute)');
  });

  test('DAI in L2s chart', async ({ page }) => {
    await expect(
      page.getByRole('figure', { name: 'DAI in L2s chart' })
    ).toBeVisible();

    await expect(
      page
        .getByRole('figure', { name: 'DAI in L2s chart' })
        .locator('div')
        .first()
    ).toHaveCSS('height', '380px');
  });

  test('L1 DAI bridges status', async ({ page }) => {
    await expect(
      page.getByRole('table', { name: 'Bridges status table' })
    ).toBeVisible();

    await page.getByRole('link', { name: 'Optimism' }).click();
    await expect(page).toHaveURL('http://localhost:3000/teleport/optimism');

    await page.goto(`http://localhost:3000/teleport/overview`);

    await expect(
      page.getByRole('cell', { name: 'optimism Bridge status cell' })
    ).toContainText('Open');

    await expect(
      page.getByRole('cell', { name: 'optimism Bridge ceiling cell' })
    ).toContainText('–');

    await expect(
      page.getByRole('cell', {
        name: 'optimism Bridge max deposit cell'
      })
    ).toContainText('–');

    await expect(
      page.getByRole('cell', { name: 'optimism Bridge fast withdrawal cell' })
    ).toContainText('146 / 1M (0.01%)');

    await expect(
      page.getByRole('cell', { name: 'optimism Bridge contract cell' })
    ).toContainText('0x4f...0000');

    await page.getByRole('link', { name: 'Starknet' }).click();
    await expect(page).toHaveURL('http://localhost:3000/teleport/starknet');

    await page.goto(`http://localhost:3000/teleport/overview`);

    await expect(
      page.getByRole('cell', { name: 'starknet Bridge status cell' })
    ).toContainText('Closed');

    await expect(
      page.getByRole('cell', { name: 'starknet Bridge ceiling cell' })
    ).toContainText('200K');

    await expect(
      page.getByRole('cell', {
        name: 'starknet Bridge max deposit cell'
      })
    ).toContainText('1K');

    await expect(
      page.getByRole('cell', { name: 'starknet Bridge fast withdrawal cell' })
    ).toContainText('0 / 100K (0%)');

    await expect(
      page.getByRole('cell', { name: 'starknet Bridge contract cell' })
    ).toContainText('0x53...0000');

    await page.getByRole('link', { name: 'Arbitrum' }).click();
    await expect(page).toHaveURL('http://localhost:3000/teleport/arbitrum');

    await page.goto(`http://localhost:3000/teleport/overview`);

    await expect(
      page.getByRole('cell', { name: 'arbitrum Bridge status cell' })
    ).toContainText('Open');

    await expect(
      page.getByRole('cell', { name: 'arbitrum Bridge ceiling cell' })
    ).toContainText('–');

    await expect(
      page.getByRole('cell', {
        name: 'arbitrum Bridge max deposit cell'
      })
    ).toContainText('–');

    await expect(
      page.getByRole('cell', { name: 'arbitrum Bridge fast withdrawal cell' })
    ).toContainText('50 / 1M (0.01%)');

    await expect(
      page.getByRole('cell', { name: 'arbitrum Bridge contract cell' })
    ).toContainText('0x41...0000');
  });

  test('Weekly kpis', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'DAI Weekly transfer volume value' })
    ).toContainText('420,770,255.18');

    await expect(
      page.getByRole('textbox', { name: 'DAI Weekly transfer volume change' })
    ).toContainText('-32.27%');

    await expect(
      page.getByRole('textbox', { name: 'Weekly transfers value' })
    ).toContainText('366,223');

    await expect(
      page.getByRole('textbox', { name: 'Weekly transfers change' })
    ).toContainText('-14.80%');
  });

  test('Network comparison chart', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'Network comparison title' })
    ).toContainText('Network comparison');

    await expect(
      page.getByRole('figure', {
        name: 'Network Weekly transfer volume comparison chart'
      })
    ).toBeVisible();

    await expect(
      page.getByRole('figure', {
        name: 'Network Weekly transfer count comparison chart'
      })
    ).toBeVisible();

    await expect(
      page.getByRole('figure', {
        name: 'Network Avg. Transfer amount comparison chart'
      })
    ).toBeVisible();
  });

  test('Overview page data api error', async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/metrics/summary',
      (route) => route.abort()
    );

    await page.route(
      'https://eth-mainnet.g.alchemy.com/v2/kKpGhqgtnDaz1n6PhdhZTXBPKcX9vlVN',
      (route) => route.abort()
    );

    await page.goto(`http://localhost:3000/teleport/overview`);

    await expect(
      page.getByRole('textbox', { name: 'Error message' })
    ).toContainText([
      'Dai Supply data is not available at the moment.',
      'Teleport data is not available at the moment.',
      'Dai in L2s data is not available at the moment.',
      'Data is not available at the moment.',
      'Network comparison data is not available at the moment.'
    ]);
  });
});
