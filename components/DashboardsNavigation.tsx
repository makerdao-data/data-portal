import {
  StatsIcon,
  VaultIcon,
  PressIcon,
  LinkIcon,
  Text
} from '@makerdao-dicu/makerdao-ui';
import Link from 'next/link';
import { useMemo } from 'react';
import { Flex } from 'theme-ui';
import { useToggle } from '../hooks';
import NavbarButton, { NavbarLink } from './NavbarButton';

export type Link = {
  text: string;
  href: string;
};

export default function DashboardsNavigation() {
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
        <Flex
          role="menu"
          aria-label="Overview sidebar menu"
          sx={{ flexDirection: 'column' }}>
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
  );
}
