import { test, expect } from '@playwright/test';

test.describe('sidebar footer test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('render footer', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo', { name: 'Sidebar footer' })
    ).toBeVisible();
  });

  test('community channels section', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'MakerDAO Discord link' })
    ).toHaveAttribute('href', 'https://chat.makerdao.com');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Twitter link' })
    ).toHaveAttribute('href', 'https://twitter.com/MakerDAO');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Reddit link' })
    ).toHaveAttribute('href', 'https://www.reddit.com/r/MakerDAO/');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Youtube link' })
    ).toHaveAttribute('href', 'https://www.youtube.com/MakerDAO');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Github link' })
    ).toHaveAttribute('href', 'https://www.github.com/makerdao');
  });

  test('tools section', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Service Status' })
    ).toHaveAttribute('href', 'https://makerdao.statuspage.io/');

    await expect(
      page.getByRole('link', { name: 'Auctions Dashboard' })
    ).toHaveAttribute('href', 'https://auctions.makerdao.network/');

    await expect(
      page.getByRole('link', { name: 'Migrate Dashboard' })
    ).toHaveAttribute('href', 'https://migrate.makerdao.com/');

    await expect(page.getByRole('link', { name: 'MakerBurn' })).toHaveAttribute(
      'href',
      'https://makerburn.com/'
    );

    await expect(page.getByRole('link', { name: 'DAI Stats' })).toHaveAttribute(
      'href',
      'https://daistats.com/'
    );

    await expect(page.getByRole('link', { name: 'Terms' })).toHaveAttribute(
      'href',
      'https://vote.makerdao.com/terms'
    );
  });

  test('data insights channels section', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'MakerDAO Data insights Discord link' })
    ).toHaveAttribute('href', 'https://discord.com/invite/RBRumCpEDH');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Data insights Github link' })
    ).toHaveAttribute('href', 'https://github.com/makerdao-data');

    await expect(
      page.getByRole('link', { name: 'MakerDAO Data insights email link' })
    ).toHaveAttribute(
      'href',
      'mailto:hello@data.makerdao.network?subject=MakerDAO%20DICU%20Inquiry'
    );
  });
});
