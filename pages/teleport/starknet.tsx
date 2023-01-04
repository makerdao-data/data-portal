import { Flex, Link } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Bridge } from '../../__generated__/dataAPI';
import TeleportMainChart from '../../molecules/MainAreaChart';
import { dataApiClient } from '../../data/dataApiClient';
import MainKpiCard from '../../molecules/teleport/MainKpiCard';
import { useMemo } from 'react';
import { useRefreshData } from '../../hooks';
import { Domains } from '../../types';
import { createBridgeMainChartDataSeries } from '../../transformers/create-chain-main-chart-data-series';
import KpiCardList from '../../molecules/teleport/KpiCardList';
import BridgeTopHoldersChart from '../../molecules/teleport/BridgeTopHoldersChart';
import BridgeDaiDistributionBarChart from '../../molecules/teleport/BridgeDaiDistributionBarChart';
import { useIntl } from 'next-intl';
import { createBridgeDaiDistributionBarChartData } from '../../transformers/create-bridge-dai-distributin-bar-chart-data';
import { createBridgeFlowsBarChartData } from '../../transformers/create-bridge-flows-bar-chart-data';
import BridgeFlowsChart from '../../molecules/teleport/BridgeFlowsChart';
import { NETWORK_SCANNERS_URLS } from '../../constants';

export default function Overview() {
  const intl = useIntl();
  const { data, error } = useSwr<Bridge, Error>(
    'starknetMetrics',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataApiClient.v1.readStarknetMetricsV1MetricsStarknetGet as any
  );

  const mainChartDataSeries = useMemo(
    () => createBridgeMainChartDataSeries(data),
    [data]
  );

  const uniqueHoldersKpiData = useMemo(
    () => [
      {
        title: 'Unique DAI Holders',
        value: data
          ? intl.formatNumber(data.unique_holders, {
              maximumFractionDigits: 2
            })
          : undefined,
        change:
          ((Number(data?.unique_holders_7) - Number(data?.unique_holders)) /
            Number(data?.unique_holders_7)) *
          -1
      },
      {
        title: 'Avg. DAI ownership/holding',
        value: data
          ? intl.formatNumber(data.average_dai_ownership, {
              maximumFractionDigits: 2
            })
          : undefined,
        change:
          ((Number(data?.average_dai_ownership_7) -
            Number(data?.average_dai_ownership)) /
            Number(data?.average_dai_ownership_7)) *
          -1
      }
    ],
    [data, intl]
  );

  const netInflowsKpiData = useMemo(
    () => [
      {
        title: '7d. Inflow',
        value: data
          ? intl.formatNumber(data.l2_weekly_inflows, {
              maximumFractionDigits: 2
            })
          : undefined,
        change:
          ((Number(data?.l2_weekly_inflows_2) -
            Number(data?.l2_weekly_inflows)) /
            Number(data?.l2_weekly_inflows_2)) *
          -1
      },
      {
        title: '7d. Outfow',
        value: data
          ? intl.formatNumber(data.l2_weekly_outflows, {
              maximumFractionDigits: 2
            })
          : undefined,
        change:
          ((Number(data?.l2_weekly_outflows_2) -
            Number(data?.l2_weekly_outflows)) /
            Number(data?.l2_weekly_outflows_2)) *
          -1
      },
      {
        title: '7d. Fast Withdrawal Share',
        value: data
          ? intl.formatNumber(data.weekly_teleport_share, {
              maximumFractionDigits: 2
            })
          : undefined,
        change:
          Number(data?.weekly_teleport_share_7) > 0
            ? ((Number(data?.weekly_teleport_share_7) -
                Number(data?.weekly_teleport_share)) /
                Number(data?.weekly_teleport_share_7)) *
              -1
            : 0
      }
    ],
    [data, intl]
  );

  const topDaiHoldersPieChartDataSeries = useMemo(() => {
    if (data) {
      return Object.keys(data?.top_10_holders).map((address) => {
        const holderDaiAmount = data?.top_10_holders[address];
        const formattedAddress = `${address.slice(0, 4)}...${address.slice(
          address.length - 4
        )}`;
        return {
          id: address,
          formattedId: formattedAddress,
          label: (
            <Link
              href={`${
                NETWORK_SCANNERS_URLS[Domains.STARKNET]
              }/contract/${address}`}
              target="_blank">
              {formattedAddress}
            </Link>
          ),
          value: holderDaiAmount
        };
      });
    }

    return [];
  }, [data]);

  const daiDistributionData = useMemo(() => {
    return createBridgeDaiDistributionBarChartData(data);
  }, [data]);

  const netFlowsChartData = useMemo(() => {
    return createBridgeFlowsBarChartData(data);
  }, [data]);

  const refreshData = useRefreshData(
    Domains.STARKNET,
    data
      ? {
          lastBlock: data.last_refresh.last_block,
          timestamp: data.last_refresh.last_timestamp
        }
      : undefined
  );

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport - Starknet</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        <MainKpiCard
          title="L2 Dai Supply"
          domain={Domains.STARKNET}
          value={
            data
              ? intl.formatNumber(data.supply_circulating, {
                  maximumFractionDigits: 2,
                  notation:
                    data.supply_circulating > 999999999 ? 'compact' : 'standard'
                })
              : undefined
          }
          change={
            ((Number(data?.supply_circulating_7) -
              Number(data?.supply_circulating)) /
              Number(data?.supply_circulating_7)) *
            -1
          }
          lastRefreshData={refreshData}
          error={error}
        />

        {error ? (
          <Text variant="error">
            {'Dai in L2s data is not available at the moment.'}
          </Text>
        ) : (
          <TeleportMainChart data={mainChartDataSeries} />
        )}
      </Flex>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={uniqueHoldersKpiData} error={error} />

        <BridgeTopHoldersChart
          title="Top DAI Holders"
          dataSeries={topDaiHoldersPieChartDataSeries}
          error={error}
        />

        <BridgeDaiDistributionBarChart
          title="DAI Distribution"
          error={error}
          data={daiDistributionData}
        />
      </Flex>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={netInflowsKpiData} error={error} />

        <BridgeFlowsChart data={netFlowsChartData} title="Net Inflows" />
      </Flex>
    </Flex>
  );
}
