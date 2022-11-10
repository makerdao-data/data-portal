import {
  DiscordIcon,
  GithubIcon,
  MakerColorIcon,
  MakerIcon,
  RedditIcon,
  Text,
  TwitterIcon,
  YoutubeIcon,
} from "@makerdao-dicu/makerdao-ui";
import Link from "next/link";
import { Box, Flex, useColorMode } from "theme-ui";

export default function Footer() {
  // const [colorMode] = useColorMode();

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        as="div"
        sx={{
          width: "100vw",
          height: "100%",
          left: "50%",

          zIndex: -1,
          position: "absolute",
          transform: "translateX(-50%)",
          backgroundColor: "primary",
          backgroundSize: [
            "1500px",
            "1500px",
            "1500px",
            "100% 600px",
            "100% 400px",
          ],
          backgroundRepeat: "no-repeat",
          backgroundPosition: [
            "-750px 100%",
            "-750px 100%",
            "-750px 100%",
            "bottom",
            "bottom",
          ],
        }}
      />
      <Flex
        as="footer"
        role="contentinfo"
        aria-label="Footer"
        sx={{
          boxSizing: "border-box",
          margin: "0px",
          minWidth: "0px",
          justifyContent: "space-between",
          gap: "32px",
          width: ["100%", "100%", "initial"],
          flexDirection: "row",
          flexWrap: ["wrap", "nowrap"],
          paddingTop: "32px",
          paddingBottom: "64px",
        }}
      >
        <Flex
          sx={{
            boxSizing: "border-box",
            margin: 0,
            minWidth: 0,
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Text
            role="heading"
            aria-label="Community channels title"
            variant="h3"
            sx={{ marginBottom: 2 }}
          >
            Official Community Channels
          </Text>

          <Flex sx={{ gap: 3, ["a"]: { color: "text" } }}>
            <Link
              role="link"
              aria-label="MakerDAO Discord link"
              href="https://chat.makerdao.com"
              target="_blank"
            >
              <DiscordIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Twitter link"
              href="https://twitter.com/MakerDAO"
              target="_blank"
            >
              <TwitterIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Reddit link"
              href="https://www.reddit.com/r/MakerDAO/"
              target="_blank"
            >
              <RedditIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Youtube link"
              href="https://www.youtube.com/MakerDAO"
              target="_blank"
            >
              <YoutubeIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Github link"
              href="https://www.github.com/makerdao"
              target="_blank"
            >
              <GithubIcon width={20} height={20} />
            </Link>
          </Flex>

          <Box sx={{ marginTop: [0, 0, 4] }}>
            <MakerIcon width={32} height={32} />
          </Box>
        </Flex>

        <Flex
          sx={{
            justifyContent: "space-between",
            gap: [4, 2, 5],
            width: ["100%", "100%", "initial"],
            flexWrap: ["wrap", "nowrap"],
          }}
        >
          {links.map((group) => {
            return (
              <Flex
                key={group.header}
                sx={{
                  flexDirection: "column",
                  gap: 2,
                  minWidth: ["45%", "initial"],
                  ["a"]: {
                    fontSize: [4, 5],
                    color: "text",
                    textDecoration: "none",
                  },
                }}
              >
                <Text
                  role="heading"
                  aria-label={group.header + " links title"}
                  variant="h3"
                  sx={{ fontWeight: "semiBold", marginBottom: 2 }}
                >
                  {group.header}
                </Text>
                {group.list.map(({ url, title }) => {
                  return (
                    <Link
                      role="link"
                      aria-label={title}
                      key={title}
                      href={url}
                      target="_blank"
                    >
                      <Text>{title}</Text>
                    </Link>
                  );
                })}
              </Flex>
            );
          })}
        </Flex>

        <Flex
          sx={{
            boxSizing: "border-box",
            margin: 0,
            minWidth: 0,
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Text
            role="heading"
            aria-label="Data insights channels"
            variant="h3"
            sx={{ marginBottom: 2 }}
          >
            Data Insights
          </Text>

          <Flex sx={{ gap: 3, ["a"]: { color: "text" } }}>
            <Link
              role="link"
              aria-label="MakerDAO Data insights Discord link"
              href="https://chat.makerdao.com"
              target="_blank"
            >
              <DiscordIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Data insights Twitter link"
              href="https://twitter.com/MakerDAO"
              target="_blank"
            >
              <TwitterIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Data insights Reddit link"
              href="https://www.reddit.com/r/MakerDAO/"
              target="_blank"
            >
              <RedditIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Data insights Youtube link"
              href="https://www.youtube.com/MakerDAO"
              target="_blank"
            >
              <YoutubeIcon width={20} height={20} />
            </Link>

            <Link
              role="link"
              aria-label="MakerDAO Data insights Github link"
              href="https://github.com/makerdao-data/data-portal"
              target="_blank"
            >
              <GithubIcon width={20} height={20} />
            </Link>
          </Flex>

          <Flex sx={{ gap: "0.3rem", marginTop: [0, 0, 4] }}>
            <MakerIcon width={32} height={32} />

            <Text
              variant="microText"
              sx={{ alignSelf: "end", marginBottom: "4px" }}
            >
              Data Insights
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

const links = [
  {
    header: "Governance",
    list: [
      {
        url: "https://forum.makerdao.com/",
        title: "Forum",
      },
      {
        url: "https://manual.makerdao.com/",
        title: "Operational Manual",
      },
      {
        url: "https://makerdao.world/en/learn/governance/",
        title: "Governance FAQs",
      },
      {
        url: "https://docs.google.com/spreadsheets/d/1LWNlv6hr8oXebk8rvXZBPRVDjN-3OrzI0IgLwBVk0vM/edit#gid=0",
        title: "Gov Tracking Sheet",
      },
      {
        url: "https://manual.makerdao.com/governance/governance-cycle/monthly-governance-cycle",
        title: "Monthly Gov Cycle",
      },
      {
        url: "https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle",
        title: "Weekly Gov Cycle",
      },
    ],
  },
  {
    header: "Products & Tools",
    list: [
      {
        url: "https://makerdao.statuspage.io/",
        title: "Service Status",
      },

      {
        url: "https://auctions.makerdao.network/",
        title: "Auctions Dashboard",
      },
      {
        url: "https://migrate.makerdao.com/",
        title: "Migrate Dashboard",
      },
      {
        url: "https://makerburn.com/",
        title: "MakerBurn",
      },
      {
        url: "https://daistats.com/",
        title: "DAI Stats",
      },
      {
        url: "https://vote.makerdao.com/terms",
        title: "Terms",
      },
    ],
  },
  {
    header: "Developer",
    list: [
      {
        url: "https://makerdao.com/whitepaper",
        title: "Whitepaper",
      },
      {
        url: "https://docs.makerdao.com/",
        title: "Technical Docs",
      },
      {
        url: "https://vote.makerdao.com/api-docs",
        title: "API Docs",
      },
      {
        url: "https://github.com/makerdao/developerguides",
        title: "Developer Guides",
      },
      {
        url: "https://www.notion.so/makerdao/Maker-Brand-ac517c82ff9a43089d0db5bb2ee045a4",
        title: "Brand Assets",
      },
      {
        url: "https://makerdao.com/en/feeds/",
        title: "Oracle Feeds",
      },
    ],
  },
];
