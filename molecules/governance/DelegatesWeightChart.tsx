import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Flex, useColorMode } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import 'chartjs-adapter-date-fns';
import * as _ from 'lodash';
import useDelegatesWeightChartData from './hooks/delegates-weight-chart-data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function DelegatesWeightChart() {
  const [colorMode] = useColorMode();
  const [delegatatesWithSupportChartDataSets, loading, error] =
    useDelegatesWeightChartData();

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        padding: 3,
        gap: '2rem'
      }}>
      <Text
        variant="smallHeading"
        role="textbox"
        aria-label="Delegate voting power title">
        Recognized delegate voting power
      </Text>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Delegate voting power data is not available at the moment.'}
        </Text>
      ) : !loading ? (
        <Box role="figure" aria-label="Delegate voting power chart">
          <Line
            data={delegatatesWithSupportChartDataSets}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  display: true,
                  position: 'top' as const,
                  align: 'start',
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: colorMode === 'light' ? '#231536' : '#fff'
                  }
                },
                title: {
                  display: false
                },
                tooltip: {
                  mode: 'x' as const,
                  itemSort: (a, b) => {
                    return b.raw.y - a.raw.y;
                  }
                },
                filler: {
                  propagate: false
                }
              },
              scales: {
                x: {
                  type: 'time',
                  time: {
                    tooltipFormat: 'MMM dd, yyyy',
                    unit: 'month',
                    round: 'day'
                  },
                  title: {
                    display: false
                  },
                  ticks: {
                    color: colorMode === 'light' ? '#231536' : '#fff'
                  }
                },
                y: {
                  stacked: true,
                  title: {
                    display: false
                  },
                  ticks: {
                    color: colorMode === 'light' ? '#231536' : '#fff'
                  }
                }
              },
              elements: {
                line: {
                  tension: 0.4
                }
              }
            }}
          />
        </Box>
      ) : (
        <Skeleton height={220} style={{ borderRadius: '8px', top: '-4px' }} />
      )}
    </Flex>
  );
}
