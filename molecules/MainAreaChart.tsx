import { AreaChart, DataSerie } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import { Box, useColorMode } from 'theme-ui';

type MainAreaChartProps = {
  data: DataSerie[];
};

export default function MainAreaChart({ data }: MainAreaChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  return (
    <Box
      sx={{
        ['.tv-lightweight-charts']: {
          borderRadius: '8px'
        },
        border: '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        textAlign: 'center',
        padding: 2
      }}>
      {data.length > 0 ? (
        <AreaChart
          role="figure"
          aria-label="DAI in L2s chart"
          dataSeries={data}
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
