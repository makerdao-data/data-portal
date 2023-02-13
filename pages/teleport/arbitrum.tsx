import { Flex, Link } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Bridge } from '../../__generated__/dataAPI';
import TeleportMainChart from '../../molecules/MainAreaChart';
import { dataApiClient } from '../../data/dataApiClient';
import MainKpiCard from '../../molecules/teleport/MainKpiCard';
import { useMemo } from 'react';
import { useRefreshData } from '../../hooks';
import { Domains } from '../../types/teleport';
import { createBridgeMainChartDataSeries } from '../../utils/data-transformers/create-chain-main-chart-data-series';
import KpiCardList from '../../molecules/teleport/KpiCardList';
import BridgeTopHoldersChart from '../../molecules/teleport/BridgeTopHoldersChart';
import BridgeDaiDistributionBarChart from '../../molecules/teleport/BridgeDaiDistributionBarChart';
import { useIntl } from 'next-intl';
import { createBridgeDaiDistributionBarChartData } from '../../utils/data-transformers/create-bridge-dai-distributin-bar-chart-data';
import { createBridgeFlowsBarChartData } from '../../utils/data-transformers/create-bridge-flows-bar-chart-data';
import BridgeFlowsChart from '../../molecules/teleport/BridgeFlowsChart';
import { NETWORK_SCANNERS_URLS } from '../../constants';
import Card from '../../components/Card';

export default function Overview() {
  const intl = useIntl();
  const { data, error } = useSwr<Bridge, Error>(
    'arbitrumMetrics',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataApiClient.v1.readArbitrumMetricsV1MetricsArbitrumGet as any
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
                NETWORK_SCANNERS_URLS[Domains.ARBITRUM]
              }/address/${address}`}
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
    Domains.ARBITRUM,
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
      <Text variant="heading">Maker Teleport - Arbitrum</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        <MainKpiCard
          title="L2 Dai Supply"
          domain={Domains.ARBITRUM}
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
          <Text variant="error" role="textbox" aria-label="Error message">
            {'L2 Dai supply data is not available at the moment.'}
          </Text>
        ) : (
          <Card sx={{ flex: ['1 1 100%', '1 1 0%', '1 1 0%'] }}>
            <TeleportMainChart
              data={mainChartDataSeries}
              aria-label="L2 DAI supply and escrow chart"
            />
          </Card>
        )}
      </Flex>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={uniqueHoldersKpiData} error={error} />

        <Card sx={{ flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'] }}>
          <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
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
        </Card>
      </Flex>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={netInflowsKpiData} error={error} />

        {error ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {'Net Inflows data is not available at the moment.'}
          </Text>
        ) : (
          <Card sx={{ flex: ['1 1 100%', '1 1 0%', '1 1 0%'] }}>
            <BridgeFlowsChart
              data={netFlowsChartData}
              title="Net Inflows"
              aria-label="Net inflows chart"
            />
          </Card>
        )}
      </Flex>
    </Flex>
  );
}
