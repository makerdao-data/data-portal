import { Domains } from './types';

export const NETWORK_SCANNERS_URLS: Record<Domains, string> = {
  ETHEREUM: 'https://etherscan.io',
  ARBITRUM: 'https://arbiscan.io',
  OPTIMISM: 'https://optimistic.etherscan.io',
  STARKNET: 'https://starkscan.co'
};
