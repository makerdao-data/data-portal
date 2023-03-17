import { test, expect } from '@playwright/test';

test.describe('layout footer test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('render footer', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo', { name: 'Layout footer' })
    ).toBeVisible();

    await expect(
      page
        .getByRole('contentinfo', { name: 'Layout footer' })
        .locator('span')
        .first()
    ).toContainText(
      'DAI Foundation ・ AGPL-3.0 license ・ Data API ( ReDoc | Swagger UI)'
    );

    await expect(
      page
        .getByRole('contentinfo', { name: 'Layout footer' })
        .locator('span')
        .nth(1)
    ).toContainText('Powered by Token Flow ・ Nansen Query & NaaS');
  });

  test('links', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'ReDoc link' })
    ).toHaveAttribute('href', 'https://data-api.makerdao.network/redoc');

    await expect(
      page.getByRole('link', { name: 'Swagger UI link' })
    ).toHaveAttribute('href', 'https://data-api.makerdao.network/docs');

    await expect(
      page.getByRole('link', { name: 'Token Flow link' })
    ).toHaveAttribute('href', 'https://tokenflow.live/');

    await expect(
      page.getByRole('link', { name: 'Nansen Query link' })
    ).toHaveAttribute('href', 'https://www.nansen.ai/query');
  });
});
