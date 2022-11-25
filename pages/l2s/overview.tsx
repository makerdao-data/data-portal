import { Box, Flex, useColorMode } from 'theme-ui';
import { Text, AreaChart } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import AmountCard from '../../components/AmountCard';
import useSwr from 'swr';
import { useMemo } from 'react';
import { Summary } from '../../__generated__/dataAPI';
import { createOverviewAreaChartDataSeries } from '../../transformers/create-overview-data-series';
import Skeleton from 'react-loading-skeleton';

export default function Overview() {
  const intl = useIntl();
  const [colorMode] = useColorMode();
  const { data, error } = useSwr<Summary, Error>('/metrics/summary');

  const dataSeries = useMemo(() => {
    return createOverviewAreaChartDataSeries(data);
  }, [data]);

  if (error) {
    console.error(error);

    return <Text variant="error">Something went wrong fetching the data.</Text>;
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Text variant="muted">
        Last refresh (delay): 15983125 block (107 blocks) / 2022-11-16 14:16:59
        UTC (21 mins)
      </Text>

      <Text variant="smallHeading">DAI in L2s</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'nowrap', 'nowrap'] }}>
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 3,
            flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
            maxWidth: ['100%', '100%', '280px']
          }}>
          <AmountCard
            title="DAI Supply"
            value={data?.supply_circulating.total}
            change={
              ((data?.supply_circulating_7.total -
                data?.supply_circulating.total) /
                data?.supply_circulating_7.total) *
              -1
            }
          />

          <AmountCard
            title="DAI Weekly transfer volume"
            value={data?.l2_weekly_transfers_volume.total}
            change={
              ((data?.l2_weekly_transfers_volume_2.total -
                data?.l2_weekly_transfers_volume.total) /
                data?.l2_weekly_transfers_volume_2.total) *
              -1
            }
          />

          <AmountCard
            title="Weekly transfers"
            value={data?.l2_weekly_transfers_count.total}
            change={
              ((data?.l2_weekly_transfers_count_2.total -
                data?.l2_weekly_transfers_count.total) /
                data?.l2_weekly_transfers_count_2.total) *
              -1
            }
          />
        </Flex>

        <Box
          sx={{
            ['.tv-lightweight-charts']: {
              border: '1px solid',
              borderColor: 'secondary',
              borderRadius: '8px'
            },
            height: '400px',
            flex: ['1 1 100%', '1 1 0%', '1 1 0%']
          }}>
          {dataSeries.length > 0 ? (
            <AreaChart
              dataSeries={dataSeries}
              chartOptions={{
                layout: {
                  background: {
                    type: ColorType.Solid,
                    color: colorMode === 'light' ? '#F6F8F9' : '#141414'
                  },
                  textColor: colorMode === 'light' ? '#231536' : '#fff'
                },
                grid: {
                  vertLines: {
                    visible: false
                  },
                  horzLines: {
                    visible: false
                  }
                },
                height: 387,
                localization: {
                  priceFormatter: (value: number) =>
                    intl.formatNumber(value, { maximumFractionDigits: 2 })
                }
              }}
            />
          ) : (
            <Skeleton height={387} />
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
