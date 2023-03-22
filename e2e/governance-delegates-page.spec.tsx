import { test, expect } from '@playwright/test';

test.describe('Delegates page test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`http://localhost:3000/governance/delegates`);
  });

  test('Governance delegated MKR Kpi', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Delegated MKR title' })
    ).toContainText('Delegated MKR');

    await expect(
      page.getByRole('textbox', { name: 'Delegated MKR value' })
    ).toContainText('16.8M');
  });
});
