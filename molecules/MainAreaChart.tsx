import { AreaChart, DataSerie } from '@makerdao-dicu/makerdao-ui';
import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import { Box, BoxProps, useColorMode } from 'theme-ui';

type MainAreaChartProps = {
  data: DataSerie[];
  title?: string;
} & BoxProps;

export default function MainAreaChart({
  data,
  title,
  ...props
}: MainAreaChartProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  return (
    <Box
      sx={{
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        textAlign: 'center',
        padding: 2
      }}>
      {data.length > 0 ? (
        <AreaChart
          role="figure"
          aria-label={'Main area chart'}
          dataSeries={data}
          title={title}
          chartOptions={{
            layout: {
              background: {
                type: ColorType.Solid,
                color: colorMode === 'light' ? '#FFF' : '#212121'
              },
              textColor: colorMode === 'light' ? '#231536' : '#F1F1F1'
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
          {...props}
        />
      ) : (
        <Skeleton height={400} style={{ borderRadius: '8px', top: '-4px' }} />
      )}
    </Box>
  );
}
