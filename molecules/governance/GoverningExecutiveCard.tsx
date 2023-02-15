import { useIntl } from 'next-intl';
import { Flex, useColorMode } from 'theme-ui';
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

type GoverningExecutiveCardProps = {
  data: Overview | undefined;
  error: Error | undefined;
};

export default function GoverningExecutiveCard({
  data,
  error
}: GoverningExecutiveCardProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  const chartData = useMemo(() => {
    if (data !== undefined) {
      const lastYearData = Object.fromEntries([
        ...Object.entries(data.executives)
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
            data: Object.values(lastYearData).map(({ passed }) => passed),
            backgroundColor: '#3DDBD9'
          }
        ]
      };
    }

    return { datasets: [] };
  }, [data]);

  return (
    <Card sx={{ padding: '8px' }}>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Governing Executive data is not available at the moment.'}
        </Text>
      ) : (
        <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
          <KpiCard
            noChangeInfo
            title="Governing Executive (Hat)"
            value={
              data
                ? intl.formatNumber(data.mkr_locked_in_governing_executive, {
                    maximumFractionDigits: 0
                  })
                : undefined
            }
            sx={{ border: 'none', flexBasis: '20%' }}
          />

          <Flex
            sx={{
              flexDirection: 'column',
              height: '400px',
              padding: '8px',
              flex: ['1 1 100%', '1 1 100%', '1 1 100%', '1 1 0%']
            }}>
            <Text
              variant="smallHeading"
              role="textbox"
              aria-label="Governing Executive chart title">
              Executives by month
            </Text>

            {data !== undefined ? (
              <Bar
                role="figure"
                aria-label="Governing executive chart"
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
          </Flex>
        </Flex>
      )}
    </Card>
  );
}
