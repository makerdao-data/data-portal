import { test, expect } from "@playwright/test";

test.describe("footer test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("render footer", async ({ page }) => {
    await expect(
      page.getByRole("contentinfo", { name: "Footer" })
    ).toBeVisible();
  });

  test("community channels section", async ({ page }) => {
    await expect(
      page
        .getByRole("contentinfo", { name: "Footer" })
        .locator('div:has-text("Official Community Channels")')
    ).toBeVisible();

    const [discordPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "MakerDAO Discord link" }).click(),
    ]);

    await expect(discordPage).toHaveURL(
      "https://discord.com/invite/RBRumCpEDH"
    );

    const [twitterPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "MakerDAO Twitter link" }).click(),
    ]);

    await expect(twitterPage).toHaveURL("https://twitter.com/MakerDAO");

    const [redditPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "MakerDAO Reddit link" }).click(),
    ]);

    await expect(redditPage).toHaveURL("https://www.reddit.com/r/MakerDAO/");

    const [youtubePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "MakerDAO Youtube link" }).click(),
    ]);

    await expect(youtubePage).toHaveURL("https://www.youtube.com/MakerDAO");

    const [gitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "MakerDAO Github link" }).click(),
    ]);

    await expect(gitHubPage).toHaveURL("https://github.com/makerdao");
  });

  test("governance section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Governance links title" })
    ).toBeVisible();

    const [forumPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Forum" }).click(),
    ]);

    await expect(forumPage).toHaveURL("https://forum.makerdao.com/");

    const [operationalManualPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Operational Manual" }).click(),
    ]);

    await expect(operationalManualPage).toHaveURL(
      "https://manual.makerdao.com/"
    );

    const [governanceFAQPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Governance FAQs" }).click(),
    ]);

    await expect(governanceFAQPage).toHaveURL(
      "https://makerdao.world/en/learn/governance/"
    );

    const [governanceTrackingPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Gov Tracking Sheet" }).click(),
    ]);

    await expect(governanceTrackingPage).toHaveURL(
      "https://docs.google.com/spreadsheets/d/1LWNlv6hr8oXebk8rvXZBPRVDjN-3OrzI0IgLwBVk0vM/edit#gid=0"
    );

    const [monthlyGovCyclePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Monthly Gov Cycle" }).click(),
    ]);

    await expect(monthlyGovCyclePage).toHaveURL(
      "https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle"
    );

    const [weeklyGovCyclePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Weekly Gov Cycle" }).click(),
    ]);

    await expect(weeklyGovCyclePage).toHaveURL(
      "https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle"
    );
  });

  test("products and tools section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Products & Tools links title" })
    ).toBeVisible();

    const [serviceStatusPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Service Status" }).click(),
    ]);

    await expect(serviceStatusPage).toHaveURL(
      "https://makerdao.statuspage.io/"
    );

    const [auctionsDashboardPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Auctions Dashboard" }).click(),
    ]);

    await expect(auctionsDashboardPage).toHaveURL(
      "https://unified-auctions.makerdao.com/"
    );

    const [migrateDashboardPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Migrate Dashboard" }).click(),
    ]);

    await expect(migrateDashboardPage).toHaveURL(
      "https://migrate.makerdao.com/"
    );

    const [makerBurnPage] = await Promise.all([
      page.waitForEvent("popup"),
      await page.getByRole("link", { name: "MakerBurn" }).click(),
    ]);

    await expect(makerBurnPage).toHaveURL("https://makerburn.com/");

    const [daiStatusPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "DAI Stats" }).click(),
    ]);

    await expect(daiStatusPage).toHaveURL("https://daistats.com/");

    const [termsPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Terms" }).click(),
    ]);

    await expect(termsPage).toHaveURL("https://vote.makerdao.com/terms");
  });

  test("developer section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Developer links title" })
    ).toBeVisible();

    const [whitePaperPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Whitepaper" }).click(),
    ]);

    await expect(whitePaperPage).toHaveURL("https://makerdao.com/whitepaper");

    const [technicalDocsPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Technical Docs" }).click(),
    ]);

    await expect(technicalDocsPage).toHaveURL("https://docs.makerdao.com/");

    const [apiDocsPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "API Docs" }).click(),
    ]);

    await expect(apiDocsPage).toHaveURL("https://vote.makerdao.com/api-docs");

    const [developerGuidesPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Developer Guides" }).click(),
    ]);

    await expect(developerGuidesPage).toHaveURL(
      "https://github.com/makerdao/developerguides"
    );

    const [brandAssetsPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Brand Assets" }).click(),
    ]);

    await expect(brandAssetsPage).toHaveURL(
      "https://www.notion.so/makerdao/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4"
    );

    const [oracleFeedsPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Oracle Feeds" }).click(),
    ]);

    await expect(oracleFeedsPage).toHaveURL("https://makerdao.com/en/feeds/");

    await expect(
      page.getByRole("heading", { name: "Data insights channels" })
    ).toBeVisible();
  });
});
