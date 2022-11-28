import { test, expect } from '@playwright/test';
import summaryFixture from './fixtures/summary.json';

test.describe('navigation test', () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      'https://data-api.makerdao.network/v1/metrics/summary',
      (route) =>
        route.fulfill({
          status: 200,
          body: JSON.stringify(summaryFixture)
        })
    );

    await page.goto(`http://localhost:3000/l2s/overview`);
  });

  test('DAI in L2s section', async ({ page }) => {
    await expect(
      page.getByRole('textbox', { name: 'DAI Supply value' })
    ).toContainText('122,544,793.03');

    await expect(
      page.getByRole('textbox', { name: 'DAI Supply change' })
    ).toContainText('-2.18%');

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

    await expect(
      page.getByRole('figure', { name: 'DAI in L2s chart' })
    ).toBeVisible();

    await expect(
      page
        .getByRole('figure', { name: 'DAI in L2s chart' })
        .locator('div')
        .first()
    ).toHaveCSS('height', '387px');
  });
});
