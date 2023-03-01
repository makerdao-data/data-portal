import { Box, Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Summary } from '../../__generated__/dataAPI';
import MainAreaChart from '../../molecules/MainAreaChart';
import TeleportTable from '../../molecules/teleport/TeleportDomainsTable';
import { dataApiClient } from '../../data/dataApiClient';
import MainKpiCard from '../../molecules/teleport/MainKpiCard';
import NetworkComparisonCharts from '../../molecules/teleport/NetworkComparisonCharts';
import { createDaiInL2sAreaChartDataSeries } from '../../utils/data-transformers/create-dai-in-l2s-overview-data-series';
import { useCallback, useMemo } from 'react';
import { formatDistance } from 'date-fns';
import { ethLastBlockFetcher } from '../../data/alchemyApi';
import { RefreshData } from '../../hooks/refresh-data';
import KpiCardList from '../../molecules/teleport/KpiCardList';
import { useIntl } from 'next-intl';
import { Domains } from '../../types/teleport';
import { Data as ReactCsvData } from 'react-csv/components/CommonPropTypes';
import Card from '../../components/Card';

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
              maximumFractionDigits: 1,
              notation: 'compact'
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
              maximumFractionDigits: 1,
              notation: 'compact'
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const downloadDaiSupplyData = useCallback(() => {
    const headers = [
      { label: 'Domain', key: 'domain' },
      { label: 'Date', key: 'date' },
      { label: 'Value', key: 'value' }
    ];

    if (data) {
      const csvData = Object.keys(data.total_supply).reduce((memo, domain) => {
        const domainData = Object.entries(data.total_supply[domain]).map(
          ([key, value]) => ({
            domain,
            date: key,
            value
          })
        );

        return [...memo, ...domainData];
      }, [] as ReactCsvData);

      return {
        headers,
        data: csvData,
        filename: 'DAI_total_supply'
      };
    }

    return {
      headers,
      data: [] as ReactCsvData,
      filename: 'DAI_total_supply'
    };
  }, [data]);

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        <MainKpiCard
          title="Dai Supply"
          domain={Domains.ETHEREUM}
          value={
            data
              ? intl.formatNumber(data.supply_circulating.total, {
                  maximumFractionDigits: 1,
                  notation: 'compact'
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

        <Card title="Teleport" sx={{ flex: '1 1 0%' }}>
          <TeleportTable data={data} error={error} />
        </Card>
      </Flex>

      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Dai in L2s data is not available at the moment.'}
        </Text>
      ) : (
        <Card>
          <MainAreaChart
            data={mainChartDataSeries}
            aria-label="DAI in L2s chart"
          />
        </Card>
      )}

      <Card>
        <Flex sx={{ gap: 24, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
          <KpiCardList data={weeklyKpiData} error={error} />

          <Box sx={{ flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'] }}>
            <NetworkComparisonCharts
              title="Network comparison"
              data={data}
              error={error}
            />
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}
