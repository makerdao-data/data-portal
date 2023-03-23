import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
import { Box, useColorMode } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import 'chartjs-adapter-date-fns';
import { Fragment, useMemo } from 'react';
import { Fetcher } from 'swr';
import useSwr from 'swr';
import { dataApiClient } from '../../data/dataApiClient';
import { Support } from '../../__generated__/dataAPI';
import chartsRgbColorPallete from '../../utils/chartColors';
import { useIntl } from 'next-intl';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartDataLabels
);

const colors = chartsRgbColorPallete(0.8);

export default function DelegatesWeightDoughnutChart() {
  const [colorMode] = useColorMode();
  const intl = useIntl();

  const delegatesSupportFetcher: Fetcher<Support[]> =
    dataApiClient.v1.readDelegatesSupportV1GovernanceDelegatesSupportGet;

  const { data: todayDelegatesSupport, error } = useSwr<Support[], Error>(
    'todayDelegatesSupport',
    () => {
      const fromDate = new Date(new Date().setDate(new Date().getDate() - 1));
      const toDate = new Date();

      return delegatesSupportFetcher({
        type: 'recognized',
        from_date: `${fromDate.getFullYear()}-${
          fromDate.getMonth() + 1
        }-${fromDate.getDate()}`,
        to_date: `${toDate.getFullYear()}-${
          toDate.getMonth() + 1
        }-${toDate.getDate()}`
      });
    }
  );

  const data = useMemo(() => {
    if (todayDelegatesSupport) {
      const supportSorted = todayDelegatesSupport?.sort(
        (a, b) => b.support - a.support
      );
      const top5 = supportSorted.slice(0, 5);
      const others = supportSorted?.slice(5);
      const chartColors = [...top5.map((_, index) => colors[index]), colors[6]];

      return {
        labels: [...top5.map(({ delegate }) => delegate), 'Others'],
        datasets: [
          {
            data: [
              ...top5.map(({ support }) => support),
              others.reduce((memo, { support }) => memo + support, 0)
            ],
            backgroundColor: chartColors,
            borderColor: chartColors,
            borderWidth: 1
          }
        ]
      };
    }

    return null;
  }, [todayDelegatesSupport]);

  return (
    <Fragment>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Delegate voting power data is not available at the moment.'}
        </Text>
      ) : data ? (
        <Box
          role="figure"
          aria-label="Today Delegate voting power chart"
          sx={{ minHeight: '400px' }}>
          <Doughnut
            data={data}
            options={{
              hover: {},
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: 24
              },
              plugins: {
                legend: {
                  display: false
                },
                datalabels: {
                  labels: {
                    index: {
                      color: colorMode === 'light' ? '#231536' : '#F1F1F1',
                      font: {
                        lineHeight: '14px'
                      },
                      formatter: (_, ctx) => {
                        const label = ctx.chart.data.labels?.[
                          ctx.dataIndex
                        ] as string;

                        if (label?.length > 12) {
                          const lines = [];

                          for (let i = 0; i <= label.length / 12; i++) {
                            lines.push(label.substring(i * 12, i * 12 + 12));
                          }

                          console.log(lines);
                          return lines;
                        }

                        return label;
                      },
                      align: 'end',
                      anchor: 'end'
                    },
                    value: {
                      color: '#231536',
                      formatter: (value) =>
                        intl.formatNumber(value, {
                          notation: 'compact',
                          maximumFractionDigits: 0
                        })
                    }
                  }
                }
              }
            }}
          />
        </Box>
      ) : (
        <Skeleton
          height={220}
          style={{ marginTop: 24, borderRadius: '8px', top: '-4px' }}
        />
      )}
    </Fragment>
  );
}
