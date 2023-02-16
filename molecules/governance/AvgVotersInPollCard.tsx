import { useIntl } from 'next-intl';
import { Box, Flex, useColorMode } from 'theme-ui';
import Card from '../../components/Card';
import KpiCard from '../../components/KpiCard';
import { Overview } from '../../__generated__/dataAPI';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { useMemo } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type AvgVotersInPollCardProps = {
  data: Overview | undefined;
  error: Error | undefined;
};

export default function AvgVotersInPollCard({
  data,
  error
}: AvgVotersInPollCardProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  const chartData = useMemo(() => {
    if (data !== undefined) {
      const lastYearData = Object.fromEntries([
        ...Object.entries(data.voters_in_polls)
          .map((entry) => entry)
          .slice(-12)
      ]);

      const labels = Object.keys(lastYearData).map(
        (yearMonth) => new Date(yearMonth + '-01')
      );

      return {
        labels,
        datasets: [
          {
            type: 'line' as const,
            data: Object.values(lastYearData).map(
              ({ unique_voters }) => unique_voters
            ),
            borderColor: '#FBCC5F',
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
            backgroundColor: '#4589FF',
            label: 'Recognized',
            skipNull: true,
            yAxisID: 'y'
          },
          {
            type: 'bar' as const,
            data: Object.values(lastYearData).map(
              ({ MKRs_used_for_polling }) => MKRs_used_for_polling.shadow
            ),
            backgroundColor: '#00C5C2',
            label: 'Shadow',
            skipNull: true,
            yAxisID: 'y'
          },
          {
            type: 'bar' as const,
            data: Object.values(lastYearData).map(
              ({ MKRs_used_for_polling }) => MKRs_used_for_polling.regular
            ),
            backgroundColor: '#D251E0',
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
    <Card>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Voters in polls data is not available at the moment.'}
        </Text>
      ) : (
        <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
          <KpiCard
            noChangeInfo
            title="Average voters in polls"
            value={
              data
                ? intl.formatNumber(data.avg_voters_count_in_polls, {
                    maximumFractionDigits: 0
                  })
                : undefined
            }
            sx={{ border: 'none', flexBasis: '20%' }}
          />

          <Box
            sx={{
              flexDirection: 'column',
              height: '400px',
              padding: '8px',
              flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%']
            }}>
            <Text
              variant="smallHeading"
              role="textbox"
              aria-label="MKR in polls chart title">
              Total MKR used for polls
            </Text>

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
        </Flex>
      )}
    </Card>
  );
}
