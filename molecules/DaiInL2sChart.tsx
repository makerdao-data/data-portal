import { AreaChart, Text } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Box, useColorMode } from 'theme-ui';
import { createDaiInL2sAreaChartDataSeries } from '../transformers/create-dai-in-l2s-overview-data-series';
import { Summary } from '../__generated__/dataAPI';

type DaiInL2sChartProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

export default function DaiInL2sChart({ data, error }: DaiInL2sChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  const dataSeries = useMemo(
    () => createDaiInL2sAreaChartDataSeries(data),
    [data]
  );

  return (
    <Box
      sx={{
        ['.tv-lightweight-charts']: {
          borderRadius: '8px'
        },
        border: error ? 'none' : '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        textAlign: 'center'
      }}>
      {error ? (
        <Text variant="error">
          {'Dai in L2s data is not available at the moment.'}
        </Text>
      ) : dataSeries.length > 0 ? (
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
        <Skeleton height={400} style={{ borderRadius: '8px', top: '-4px' }} />
      )}
    </Box>
  );
}
