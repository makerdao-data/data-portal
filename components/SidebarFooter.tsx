import {
  DiscordIcon,
  TwitterIcon,
  RedditIcon,
  YoutubeIcon,
  GithubIcon,
  Text
} from '@makerdao-dicu/makerdao-ui';
import { Flex, Link, NavLink } from 'theme-ui';
import { NavbarExternalLink } from './NavbarButton';

export default function SidebarFooter() {
  return (
    <Flex
      role="contentinfo"
      aria-label="Sidebar footer"
      sx={{ flexDirection: 'column', gap: '0.3rem' }}>
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
          href="https://chat.makerdao.com"
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
