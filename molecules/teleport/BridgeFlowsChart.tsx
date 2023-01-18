import { ColorType } from 'lightweight-charts';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import { Box, BoxProps, useColorMode } from 'theme-ui';
import HistogramChart, {
  HistogramDataSerie
} from '../../components/HistogramChart';

type BridgeFlowsChartProps = {
  data: HistogramDataSerie[];
  title?: string;
} & BoxProps;

export default function BridgeFlowsChart({
  title,
  data,
  ...props
}: BridgeFlowsChartProps) {
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
        flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%'],
        textAlign: 'center',
        padding: 2
      }}>
      {data.length > 0 ? (
        <HistogramChart
          role="figure"
          aria-label="Histogram chart"
          dataSeries={data}
          title={title}
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
          {...props}
        />
      ) : (
        <Skeleton height={400} style={{ borderRadius: '8px', top: '-4px' }} />
      )}
    </Box>
  );
}
