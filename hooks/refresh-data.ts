import { formatDistance } from 'date-fns';
import { useMemo } from 'react';
import useSwr from 'swr';
import {
  arbitrumLastBlockFetcher,
  ethLastBlockFetcher,
  optimismLastBlockFetcher
} from '../data/alchemyApi';
import { starknetLastBlockFetcher } from '../data/infuraApi';
import { Domains } from '../types';

type AlchemyLastBlock = {
  jsonrcp: string;
  id: number;
  result: string;
};

export type RefreshData = {
  latestProcessedBlock: number;
  blocksDistance: number;
  date: number | Date;
  timeDistance: string;
} | null;

type LastProcessedBlock =
  | {
      lastBlock: number;
      timestamp: string;
    }
  | undefined;

export default function useRefreshData(
  domain: Domains,
  lastProcessedBlock: LastProcessedBlock
) {
  const { data: lastArbitrumBlockData } = useSwr<AlchemyLastBlock, Error>(
    domain + 'LastBlockNumber',
    FETCHERS[domain]
  );

  const lastBlockRefresh: RefreshData = useMemo(() => {
    if (lastProcessedBlock && lastArbitrumBlockData) {
      const latestProcessedBlock = lastProcessedBlock.lastBlock;
      const localLastRefreshDate = new Date(lastProcessedBlock.timestamp + 'Z');
      return {
        latestProcessedBlock,
        blocksDistance:
          parseInt(lastArbitrumBlockData.result) - latestProcessedBlock,
        date: localLastRefreshDate,
        timeDistance: formatDistance(localLastRefreshDate, new Date())
      };
    }

    return null;
  }, [lastArbitrumBlockData, lastProcessedBlock]);

  return lastBlockRefresh;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FETCHERS: Record<Domains, () => Promise<any>> = {
  ETHEREUM: ethLastBlockFetcher,
  ARBITRUM: arbitrumLastBlockFetcher,
  OPTIMISM: optimismLastBlockFetcher,
  STARKNET: starknetLastBlockFetcher
};
