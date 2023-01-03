import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Summary } from '../../__generated__/dataAPI';
import MainAreaChart from '../../molecules/MainAreaChart';
import TeleportTable from '../../molecules/teleport/TeleportDomainsTable';
import { dataApiClient } from '../../data/dataApiClient';
import MainKpiCard from '../../molecules/teleport/MainKpiCard';
import NetworkComparisonBarChart from '../../molecules/teleport/NetworkComparisonBarChart';
import { useMemo } from 'react';
import { createDaiInL2sAreaChartDataSeries } from '../../transformers/create-dai-in-l2s-overview-data-series';
import { formatDistance } from 'date-fns';
import { ethLastBlockFetcher } from '../../data/alchemyApi';
import { RefreshData } from '../../hooks/refresh-data';
import KpiCardList from '../../molecules/teleport/KpiCardList';
import { useIntl } from 'next-intl';

type AlchemyLastBlock = {
  jsonrcp: string;
  id: number;
  result: string;
};

export default function Overview() {
  const intl = useIntl();
  const { data, error } = useSwr<Summary, Error>(
    'metricsSummary',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataApiClient.v1.readSummaryMetricsV1MetricsSummaryGet as any
  );

  const mainChartDataSeries = useMemo(
    () => createDaiInL2sAreaChartDataSeries(data),
    [data]
  );

  const weeklyKpiData = useMemo(
    () => [
      {
        title: 'DAI Weekly transfer volume',
        value: data
          ? intl.formatNumber(data.l2_weekly_transfers_volume.total, {
              maximumFractionDigits: 2,
              notation:
                data.l2_weekly_transfers_volume.total > 999999999
                  ? 'compact'
                  : 'standard'
            })
          : undefined,
        change:
          ((data?.l2_weekly_transfers_volume_2.total -
            data?.l2_weekly_transfers_volume.total) /
            data?.l2_weekly_transfers_volume_2.total) *
          -1
      },
      {
        title: 'Weekly transfers',
        value: data
          ? intl.formatNumber(data.l2_weekly_transfers_count.total, {
              maximumFractionDigits: 2,
              notation:
                data.l2_weekly_transfers_count.total > 999999999
                  ? 'compact'
                  : 'standard'
            })
          : undefined,
        change:
          ((data?.l2_weekly_transfers_count_2.total -
            data?.l2_weekly_transfers_count.total) /
            data?.l2_weekly_transfers_count_2.total) *
          -1
      }
    ],
    [data, intl]
  );

  const { data: lastEthBlockData } = useSwr<
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
      } as RefreshData;
    }

    return null;
  }, [data, lastEthBlockData]);

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        <MainKpiCard
          title="Dai Supply"
          value={
            data
              ? intl.formatNumber(data?.supply_circulating.total, {
                  maximumFractionDigits: 2
                })
              : undefined
          }
          change={
            ((data?.supply_circulating_7.total -
              data?.supply_circulating.total) /
              data?.supply_circulating_7.total) *
            -1
          }
          lastRefreshData={lastEthRefresh}
          error={error}
        />

        <TeleportTable data={data} error={error} />
      </Flex>

      {error ? (
        <Text variant="error">
          {'Dai in L2s data is not available at the moment.'}
        </Text>
      ) : (
        <MainAreaChart data={mainChartDataSeries} />
      )}

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={weeklyKpiData} error={error} />

        <NetworkComparisonBarChart data={data} error={error} />
      </Flex>
    </Flex>
  );
}
