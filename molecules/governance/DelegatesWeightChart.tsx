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
import { Box, useColorMode } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import 'chartjs-adapter-date-fns';
import useDelegatesWeightChartData from './hooks/delegates-weight-chart-data';
import Card from '../../components/Card';
// import CsvExport from '../../components/CsvExport';

const spacingPlugin = {
  id: 'increase-legend-spacing',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  beforeInit(chart: any) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;

    // Override the fit function
    chart.legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 20;
    };
  }
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  spacingPlugin
);

export default function DelegatesWeightChart() {
  const [colorMode] = useColorMode();
  const [delegatatesWithSupportChartDataSets, loading, error] =
    useDelegatesWeightChartData();

  return (
    <Card
      header={{
        title: 'Recognized delegate voting power'
        // actions: [
        //   <CsvExport
        //     key="export-voters"
        //     exportMethod={() => ({
        //       data: []
        //     })}
        //   />
        // ]
      }}>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Delegate voting power data is not available at the moment.'}
        </Text>
      ) : !loading ? (
        <Box
          role="figure"
          aria-label="Delegate voting power chart"
          sx={{ minHeight: 400 }}>
          <Line
            data={delegatatesWithSupportChartDataSets}
            options={{
              hover: {},
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  position: 'top' as const,
                  align: 'start',
                  labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    color: colorMode === 'light' ? '#231536' : '#F1F1F1'
                  }
                },
                title: {
                  display: false
                },
                tooltip: {
                  mode: 'x' as const,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  itemSort: (a: any, b: any) => {
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
                    unit: 'month'
                  },
                  title: {
                    display: false
                  },
                  grid: {
                    display: false
                  },
                  ticks: {
                    color: colorMode === 'light' ? '#231536' : '#F1F1F1'
                  }
                },
                y: {
                  stacked: true,
                  title: {
                    display: false
                  },
                  grid: {
                    color: colorMode === 'light' ? '#ECECEC' : '#4F4F4F'
                  },
                  ticks: {
                    color: colorMode === 'light' ? '#231536' : '#F1F1F1',
                    format: { notation: 'compact' }
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
    </Card>
  );
}
