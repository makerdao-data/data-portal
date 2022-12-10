import { Flex, Link } from 'theme-ui';
import DataCard from '../components/DataCard';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Summary } from '../__generated__/dataAPI';
import { Fragment, useMemo } from 'react';
import useSwr from 'swr';
import { ethLastBlockFetcher } from '../data/dataApiClient';
import { formatDistance } from 'date-fns';
import Skeleton from 'react-loading-skeleton';
import { useIntl } from 'next-intl';

type DaiSupplyProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

type AlchemyLastBlock = {
  jsonrcp: string;
  id: number;
  result: string;
};

export default function DaiSupply({ data, error }: DaiSupplyProps) {
  const intl = useIntl();
  const { data: lastEthBlockData, error: lastEthBlockFetchError } = useSwr<
    AlchemyLastBlock,
    Error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  >('ethLastBlockNumber', ethLastBlockFetcher as any);

  const lastEthRefresh = useMemo(() => {
    if (data && lastEthBlockData) {
      const latestProcessedBlock = data.last_refresh.ethereum.last_block;
      const localLastRefreshDate = new Date(
        data.last_refresh.ethereum.last_timestamp + 'Z'
      );
      return {
        latestProcessedBlock,
        blocksDistance:
          parseInt(lastEthBlockData.result) - latestProcessedBlock,
        date: localLastRefreshDate,
        timeDistance: formatDistance(localLastRefreshDate, new Date())
      };
    }

    return null;
  }, [data, lastEthBlockData]);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        maxWidth: ['100%', '100%', '280px'],
        textAlign: 'right'
      }}>
      {error ? (
        <Text variant="error">
          {'Dai Supply data is not available at the moment.'}
        </Text>
      ) : (
        <Fragment>
          <DataCard
            title="DAI Supply"
            value={data?.supply_circulating.total}
            change={
              ((data?.supply_circulating_7.total -
                data?.supply_circulating.total) /
                data?.supply_circulating_7.total) *
              -1
            }
            sx={{
              border: 'none',
              ['span']: data
                ? {
                    alignSelf: ['center', 'flex-end', 'flex-end']
                  }
                : {}
            }}
          />

          <Flex sx={{ flexDirection: ['row', 'row', 'column'] }}>
            {lastEthBlockFetchError ? (
              <Text variant="error">
                {'Last refresh data is not available at the moment.'}
              </Text>
            ) : (
              <Fragment>
                {lastEthRefresh ? (
                  <Text
                    role="textbox"
                    aria-label="Last processed block text"
                    variant="muted">
                    Last update: block{' '}
                    <Link
                      role="link"
                      aria-label="Ethereum block link"
                      target="_blank"
                      href={`https://etherscan.io/block/${lastEthRefresh.latestProcessedBlock}`}>
                      {lastEthRefresh.latestProcessedBlock}
                    </Link>{' '}
                    ({lastEthRefresh.blocksDistance} blocks)
                  </Text>
                ) : (
                  <Text variant="muted">
                    <Skeleton />
                  </Text>
                )}
                <Text
                  role="textbox"
                  aria-label="Last refresh date"
                  variant="muted">
                  {lastEthRefresh ? (
                    `${intl.formatDateTime(lastEthRefresh.date, {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })} LT (${lastEthRefresh.timeDistance})`
                  ) : (
                    <Skeleton />
                  )}
                </Text>
              </Fragment>
            )}
          </Flex>
        </Fragment>
      )}
    </Flex>
  );
}
