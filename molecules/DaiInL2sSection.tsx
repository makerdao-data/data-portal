import { AreaChart, Text } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import { Fragment, useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Flex, Box, useColorMode } from 'theme-ui';
import AmountCard from '../components/AmountCard';
import { createOverviewAreaChartDataSeries } from '../transformers/create-overview-data-series';
import { Summary } from '../__generated__/dataAPI';

type DaiInL2sSectionProps = {
  data: Summary | undefined;
};

export default function DaiInL2sSection({ data }: DaiInL2sSectionProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  const dataSeries = useMemo(() => {
    return createOverviewAreaChartDataSeries(data);
  }, [data]);

  return (
    <Fragment>
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
              borderRadius: '8px'
            },
            border: '1px solid',
            borderColor: 'secondary',
            borderRadius: '8px',
            height: '387px',
            flex: ['1 1 100%', '1 1 0%', '1 1 0%']
          }}>
          {dataSeries.length > 0 ? (
            <AreaChart
              role="figure"
              aria-label="DAI in L2s chart"
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
                height: 380,
                localization: {
                  priceFormatter: (value: number) =>
                    intl.formatNumber(value, { maximumFractionDigits: 2 })
                }
              }}
            />
          ) : (
            <Skeleton
              height={385}
              style={{ borderRadius: '8px', top: '-4px' }}
            />
          )}
        </Box>
      </Flex>
    </Fragment>
  );
}
