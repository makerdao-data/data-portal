import { test, expect } from '@playwright/test';

test.describe('footer test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('render footer', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo', { name: 'Footer' })
    ).toBeVisible();
  });

  test('community channels section', async ({ page }) => {
    await expect(
      page
        .getByRole('contentinfo', { name: 'Footer' })
        .locator('div:has-text("Official Community Channels")')
    ).toBeVisible();

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

  test('governance section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Governance links title' })
    ).toBeVisible();

    await expect(page.getByRole('link', { name: 'Forum' })).toHaveAttribute(
      'href',
      'https://forum.makerdao.com/'
    );

    await expect(
      page.getByRole('link', { name: 'Operational Manual' })
    ).toHaveAttribute('href', 'https://manual.makerdao.com/');

    await expect(
      page.getByRole('link', { name: 'Governance FAQs' })
    ).toHaveAttribute('href', 'https://makerdao.world/en/learn/governance/');

    await expect(
      page.getByRole('link', { name: 'Gov Tracking Sheet' })
    ).toHaveAttribute(
      'href',
      'https://docs.google.com/spreadsheets/d/1LWNlv6hr8oXebk8rvXZBPRVDjN-3OrzI0IgLwBVk0vM/edit#gid=0'
    );

    await expect(
      page.getByRole('link', { name: 'Monthly Gov Cycle' })
    ).toHaveAttribute(
      'href',
      'https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle'
    );

    await expect(
      page.getByRole('link', { name: 'Weekly Gov Cycle' })
    ).toHaveAttribute(
      'href',
      'https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle'
    );
  });

  test('products and tools section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Products & Tools links title' })
    ).toBeVisible();

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

  test('developer section', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Developer links title' })
    ).toBeVisible();

    await expect(
      page.getByRole('link', { name: 'Whitepaper' })
    ).toHaveAttribute('href', 'https://makerdao.com/whitepaper');

    await expect(
      page.getByRole('link', { name: 'Technical Docs' })
    ).toHaveAttribute('href', 'https://docs.makerdao.com/');

    await expect(page.getByRole('link', { name: 'API Docs' })).toHaveAttribute(
      'href',
      'https://vote.makerdao.com/api-docs'
    );

    await expect(
      page.getByRole('link', { name: 'Developer Guides' })
    ).toHaveAttribute('href', 'https://github.com/makerdao/developerguides');

    await expect(
      page.getByRole('link', { name: 'Brand Assets' })
    ).toHaveAttribute(
      'href',
      'https://www.notion.so/makerdao/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4'
    );

    await expect(
      page.getByRole('link', { name: 'Oracle Feeds' })
    ).toHaveAttribute('href', 'https://makerdao.com/en/feeds/');

    await expect(
      page.getByRole('heading', { name: 'Data insights channels' })
    ).toBeVisible();
  });
});
