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
import { Bar } from 'react-chartjs-2';
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
      const labels = Object.keys(data.voters_in_polls).map((yearMonth) =>
        intl.formatDateTime(new Date(yearMonth + '-01'), {
          month: 'long',
          year: 'numeric'
        })
      );
      return {
        labels,
        datasets: [
          {
            data: Object.values(data.voters_in_polls).reduce(
              ({ mkr_used_for_polling }) => mkr_used_for_polling
            ),
            backgroundColor: '#4589FF'
          }
        ]
      };
    }

    return { datasets: [] };
  }, [data, intl]);

  console.log({ chartData });

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
            sx={{ border: 'none', minWidth: 251 }}
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
              <Bar
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
                      display: false
                    }
                  },
                  scales: {
                    x: {
                      title: {
                        display: false
                      },
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
