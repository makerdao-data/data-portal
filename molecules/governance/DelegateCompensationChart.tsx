import { Box, useColorMode } from 'theme-ui';
import { DelegatesMonthlyCompensation } from '../../__generated__/dataAPI';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Fragment, useMemo } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import adjustForTimezone from '../../utils/adjustDateOffset';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type DelegateCompensationChartProps = {
  data: DelegatesMonthlyCompensation[] | undefined;
  error: Error | undefined;
};

export default function DelegateCompensationChart({
  data,
  error
}: DelegateCompensationChartProps) {
  const [colorMode] = useColorMode();

  const chartData = useMemo(() => {
    if (data !== undefined) {
      const labels = data.map(({ date }) => adjustForTimezone(new Date(date)));

      return {
        labels,
        datasets: [
          {
            data: data.map(({ amount }) => amount),
            backgroundColor: '#16BFD6'
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
          {'Delegate Compensation data is not available at the moment.'}
        </Text>
      ) : (
        <Box
          sx={{
            height: '400px',
            padding: '8px',
            flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%']
          }}>
          {data !== undefined ? (
            <Bar
              role="figure"
              aria-label="Delegate Compensation chart"
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
                    display: false
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
                    title: {
                      display: false
                    },
                    grid: {
                      color: colorMode === 'light' ? '#ECECEC' : '#4F4F4F'
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
