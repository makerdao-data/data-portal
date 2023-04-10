import { Box, useColorMode } from 'theme-ui';
import { Overview } from '../../__generated__/dataAPI';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  PointElement,
  LineElement
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { Fragment, useMemo } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import adjustForTimezone from '../../utils/adjustDateOffset';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  PointElement,
  LineElement
);

type GovernancePollsBarChartProps = {
  data: Overview | undefined;
  error: Error | undefined;
};

export default function GovernancePollsBarChart({
  data,
  error
}: GovernancePollsBarChartProps) {
  const [colorMode] = useColorMode();

  const chartData = useMemo(() => {
    if (data !== undefined) {
      const lastYearData = Object.fromEntries([
        ...Object.entries(data.voters_in_polls)
          .map((entry) => entry)
          .slice(-12)
      ]);

      const labels = Object.keys(lastYearData)
        .map((yearMonth) => adjustForTimezone(new Date(yearMonth + '-01')))
        .sort((a, b) => a.getTime() - b.getTime());

      return {
        labels,
        datasets: [
          {
            type: 'line' as const,
            data: Object.values(lastYearData).map(
              ({ unique_voters }) => unique_voters
            ),
            borderColor: '#B3DD91',
            borderWidth: 2,
            label: 'Unique voters',
            skipNull: true,
            yAxisID: 'y1'
          },
          {
            type: 'bar' as const,
            data: Object.values(lastYearData).map(
              ({ MKRs_used_for_polling }) => MKRs_used_for_polling.recognized
            ),
            backgroundColor: '#A493FF',
            label: 'Recognized',
            skipNull: true,
            yAxisID: 'y'
          },
          {
            type: 'bar' as const,
            data: Object.values(lastYearData).map(
              ({ MKRs_used_for_polling }) => MKRs_used_for_polling.shadow
            ),
            backgroundColor: '#FC9585',
            label: 'Shadow',
            skipNull: true,
            yAxisID: 'y'
          },
          {
            type: 'bar' as const,
            data: Object.values(lastYearData).map(
              ({ MKRs_used_for_polling }) => MKRs_used_for_polling.regular
            ),
            backgroundColor: '#F9B672',
            label: 'Regular',
            skipNull: true,
            yAxisID: 'y'
          }
        ]
      };
    }

    return { datasets: [] };
  }, [data]);

  return (
    <Fragment>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Polls data is not available at the moment.'}
        </Text>
      ) : (
        <Box
          sx={{
            height: '400px',
            padding: '8px',
            flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%']
          }}>
          {data !== undefined ? (
            <Chart
              type="bar"
              role="figure"
              aria-label="MKR used for polls chart"
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                  padding: {
                    bottom: 16
                  }
                },
                plugins: {
                  datalabels: {
                    display: false
                  },
                  legend: {
                    display: true,
                    labels: {
                      color: colorMode === 'light' ? '#231536' : '#F1F1F1'
                    }
                  }
                },
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      tooltipFormat: 'MMM dd, yyyy',
                      unit: 'month'
                    },
                    stacked: true,
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
                    grid: {
                      color: colorMode === 'light' ? '#ECECEC' : '#4F4F4F'
                    },
                    ticks: {
                      color: colorMode === 'light' ? '#231536' : '#F1F1F1',
                      format: {
                        maximumFractionDigits: 0,
                        notation: 'compact'
                      }
                    }
                  },
                  y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: colorMode === 'light' ? '#231536' : '#F1F1F1'
                    }
                  }
                }
              }}
            />
          ) : (
            <Skeleton height={400} />
          )}
        </Box>
      )}
    </Fragment>
  );
}
