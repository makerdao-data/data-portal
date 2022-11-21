import React, { useMemo } from 'react';
import { Flex, Link, NavLink } from 'theme-ui';
import {
  MakerIcon,
  Text,
  StatsIcon,
  LinkIcon,
  VaultIcon,
  PressIcon,
  DiscordIcon,
  GithubIcon,
  TwitterIcon,
  RedditIcon,
  YoutubeIcon
} from '@makerdao-dicu/makerdao-ui';
import NavbarButton, { NavbarExternalLink, NavbarLink } from './NavbarButton';
import { useToggle } from '../hooks';
import ColorModeSelector from './ColorModeSelector';

export type Link = {
  text: string;
  href: string;
};

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  const [overviewMenuOpen, toggleOverviewMenu] = useToggle();

  const overviewLinks: Link[] = useMemo(
    () => [
      { href: '/l2s/overview', text: 'Overview' },
      {
        href: '/l2s/fast-withdrawals',
        text: 'Fast Withdrawals'
      },
      { href: '/l2s/arbitrum', text: 'Arbitrum' },
      { href: '/l2s/optimism', text: 'Optimism' },
      { href: '/l2s/starknet', text: 'Starknet' },
      { href: '/l2s/appendix', text: 'Appendix' }
    ],
    []
  );

  return (
    <Flex
      as="aside"
      sx={{
        position: 'fixed',
        gap: '0.3rem',
        padding: '1rem',
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'background',
        zIndex: 4,
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto',
        transition: 'margin-left 0.3s',
        marginLeft: sidebarOpen ? 0 : ['-210px', 0, 0]
      }}>
      <Flex
        sx={{
          gap: '0.3rem',
          ['&>svg']: {
            color: 'primary'
          }
        }}>
        <MakerIcon />

        <Text
          variant="microHeading"
          sx={{
            alignSelf: 'end',
            marginBottom: '11px'
          }}>
          Data Insights
        </Text>
      </Flex>

      <Flex
        as="nav"
        role="navigation"
        aria-label="Sidebar"
        sx={{
          flexDirection: 'column',
          flex: '1 1 0%',
          justifyContent: 'flex-start',
          gap: '0.3rem'
        }}>
        <Text variant="muted">Dashboards</Text>

        <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
          <StatsIcon width={15} height={15} />
          <NavbarButton text="L2s" toggleSubMenu={toggleOverviewMenu} />
        </Flex>
        {overviewMenuOpen ? (
          <Flex sx={{ flexDirection: 'column' }}>
            {overviewLinks.map(({ href, text }) => (
              <NavbarLink key={href} href={href} text={text} />
            ))}
          </Flex>
        ) : null}

        <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
          <VaultIcon width={15} height={15} />
          <NavbarButton text="Vaults" />
        </Flex>

        <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
          <PressIcon width={15} height={15} />
          <NavbarButton text="Governance" />
        </Flex>

        <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
          <StatsIcon width={15} height={15} />
          <NavbarButton text="Oracles" />
        </Flex>

        <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
          <LinkIcon width={15} height={15} />
          <NavbarButton text="Tokens" />
        </Flex>
      </Flex>

      <Text variant="muted">Tools</Text>
      {toolLinks.map(({ url, title }) => (
        <NavbarExternalLink key={title} href={url} text={title} />
      ))}

      <Text variant="muted" sx={{ marginTop: 2 }}>
        MakerDAO Community
      </Text>
      <Flex sx={{ gap: 3, ['a']: { color: 'text' } }}>
        <Link
          role="link"
          aria-label="MakerDAO Discord link"
          href="https://discord.com/invite/RBRumCpEDH"
          target="_blank">
          <DiscordIcon width={20} height={20} />
        </Link>

        <Link
          role="link"
          aria-label="MakerDAO Twitter link"
          href="https://twitter.com/MakerDAO"
          target="_blank">
          <TwitterIcon width={20} height={20} />
        </Link>

        <Link
          role="link"
          aria-label="MakerDAO Reddit link"
          href="https://www.reddit.com/r/MakerDAO/"
          target="_blank">
          <RedditIcon width={20} height={20} />
        </Link>

        <Link
          role="link"
          aria-label="MakerDAO Youtube link"
          href="https://www.youtube.com/MakerDAO"
          target="_blank">
          <YoutubeIcon width={20} height={20} />
        </Link>

        <Link
          role="link"
          aria-label="MakerDAO Github link"
          href="https://www.github.com/makerdao"
          target="_blank">
          <GithubIcon width={20} height={20} />
        </Link>
      </Flex>

      <Text variant="muted">Data Insigths</Text>

      <Flex sx={{ gap: 3, ['a']: { color: 'text' } }}>
        <Link
          role="link"
          aria-label="MakerDAO Data insights Discord link"
          href="https://discord.com/invite/RBRumCpEDH"
          target="_blank">
          <DiscordIcon width={20} height={20} />
        </Link>

        <Link
          role="link"
          aria-label="MakerDAO Data insights Github link"
          href="https://github.com/makerdao-data"
          target="_blank">
          <GithubIcon width={20} height={20} />
        </Link>
      </Flex>

      <NavLink
        as="a"
        role="link"
        aria-label="MakerDAO Data insights email link"
        href="mailto:hello@data.makerdao.network?subject=MakerDAO%20DICU%20Inquiry"
        sx={{ padding: 0, color: 'text', ['&:hover']: { color: 'text' } }}>
        {'hello [at] data.makerdao.network'}
      </NavLink>

      <ColorModeSelector />
    </Flex>
  );
}

const toolLinks = [
  {
    url: 'https://makerdao.statuspage.io/',
    title: 'Service Status'
  },

  {
    url: 'https://auctions.makerdao.network/',
    title: 'Auctions Dashboard'
  },
  {
    url: 'https://migrate.makerdao.com/',
    title: 'Migrate Dashboard'
  },
  {
    url: 'https://makerburn.com/',
    title: 'MakerBurn'
  },
  {
    url: 'https://daistats.com/',
    title: 'DAI Stats'
  },
  {
    url: 'https://vote.makerdao.com/terms',
    title: 'Terms'
  }
];
