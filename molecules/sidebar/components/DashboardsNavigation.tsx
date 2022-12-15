import {
  StatsIcon,
  VaultIcon,
  PressIcon,
  Text,
  DaiIcon,
  DepositIcon,
  ExchangeIcon,
  EyeIcon,
  CollateralIcon
} from '@makerdao-dicu/makerdao-ui';
import { Flex } from 'theme-ui';
import NavigationMenu, { Link } from './NavigationMenu';

export default function DashboardsNavigation() {
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

      <NavigationMenu
        title="Governance"
        links={governanceLinks}
        icon={<PressIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="Dai"
        links={daiLinks}
        icon={<DaiIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="Vaults"
        links={vaultsLinks}
        icon={<VaultIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="D3M"
        links={d3mLinks}
        icon={<DepositIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="PSM"
        links={psmLinks}
        icon={<ExchangeIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="RWAs"
        links={rwasLinks}
        icon={<CollateralIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="Teleport"
        links={teleportLinks}
        icon={<StatsIcon width={15} height={15} />}
      />

      <NavigationMenu
        title="Oracles"
        links={oraclesLinks}
        icon={<EyeIcon width={15} height={15} />}
      />
    </Flex>
  );
}

const governanceLinks: Link[] = [
  { href: '/governance/overview', text: 'Overview' },
  {
    href: '/governance/executive-votes',
    text: 'Executive votes'
  },
  { href: '/governance/poll-votes', text: 'Poll votes' },
  { href: '/governance/delegates', text: 'Delegates' },
  { href: '/governance/voters', text: 'Voters' },
  { href: '/governance/protocol-parameters', text: 'Protocol parameters' }
];

const daiLinks: Link[] = [
  { href: '/dai/overview', text: 'Overview' },
  {
    href: '/dai/balance-and-transfers',
    text: 'Balance & transfers'
  },
  { href: '/dai/dsr', text: 'DSR' }
];

const vaultsLinks: Link[] = [
  { href: '/vaults/overview', text: 'Overview' },
  {
    href: '/vaults/balance-and-transfers',
    text: 'Balance & transfers'
  }
];

const d3mLinks: Link[] = [
  { href: '/d3m/overview', text: 'Overview' },
  {
    href: '/d3m/balance-and-transfers',
    text: 'Balance & transfers'
  }
];

const psmLinks: Link[] = [{ href: '/psm/overview', text: 'Overview' }];

const rwasLinks: Link[] = [{ href: '/rwas/overview', text: 'Overview' }];

const teleportLinks: Link[] = [
  { href: '/teleport/overview', text: 'Overview' },
  {
    href: '/teleport/fast-withdrawals',
    text: 'Fast Withdrawals'
  },
  { href: '/teleport/arbitrum', text: 'Arbitrum' },
  { href: '/teleport/optimism', text: 'Optimism' },
  { href: '/teleport/starknet', text: 'Starknet' },
  { href: '/teleport/system-status', text: 'System status' }
];

const oraclesLinks: Link[] = [
  { href: '/oracles/overview', text: 'Overview' },
  {
    href: '/oracles/pricing',
    text: 'Pricing'
  },
  { href: '/oracles/p2p-network', text: 'P2P Network' },
  { href: '/oracles/attestations', text: 'Attestations' }
];
