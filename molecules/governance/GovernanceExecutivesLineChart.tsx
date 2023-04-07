import { Box, useColorMode } from 'theme-ui';
import { Executive } from '../../__generated__/dataAPI';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Fragment, useCallback } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import adjustForTimezone from '../../utils/adjustDateOffset';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Filler,
  Legend
);

type GovernanceExecutivesLineChartProps = {
  data: Executive[] | undefined;
  error: Error | undefined;
};

export default function GovernanceExecutivesLineChart({
  data,
  error
}: GovernanceExecutivesLineChartProps) {
  const [colorMode] = useColorMode();

  const chartData = useCallback(() => {
    if (data !== undefined) {
      const labels = data.map(({ timestamp }) =>
        adjustForTimezone(new Date(timestamp))
      );

      return {
        labels,
        datasets: [
          {
            fill: true,
            data: data.map(({ dapproval }) => dapproval),
            borderColor: '#A674FC',
            backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, 'rgba(166, 116, 252, 0.76)');
              gradient.addColorStop(1, 'rgba(166, 116, 252, 0)');
              return gradient;
            }
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
          {'Executive votes data is not available at the moment.'}
        </Text>
      ) : (
        <Box
          sx={{
            height: '400px',
            padding: '8px',
            flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%']
          }}>
          {data !== undefined ? (
            <Line
              role="figure"
              aria-label="Governing executive chart"
              data={chartData()}
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
                    display: false
                  }
                },
                scales: {
                  x: {
                    type: 'time',
                    time: {
                      tooltipFormat: 'MMM dd, yyyy HH:MM:SS',
                      unit: 'day'
                    },
                    title: {
                      display: true
                    },
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: colorMode === 'light' ? '#231536' : '#F1F1F1'
                    }
                  },
                  y: {
                    title: {
                      display: false
                    },
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
