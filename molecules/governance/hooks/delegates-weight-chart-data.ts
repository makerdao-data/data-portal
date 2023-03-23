import _ from 'lodash';
import { useMemo } from 'react';
import useSwr, { Fetcher } from 'swr';
import { dataApiClient } from '../../../data/dataApiClient';
import { Support } from '../../../__generated__/dataAPI';
import { ChartDataset } from 'chart.js';
import chartsRgbColorPallete from '../../../utils/chartColors';

type ChartDataSet = Record<string, Record<string, Support>>;

type DelegatesWeightChartData = [
  {
    datasets: ChartDataset<
      'line',
      (number | { x: string; y: number } | null)[]
    >[];
  },
  boolean,
  Error | undefined
];

export default function useDelegatesWeightChartData(
  onlyRecognized?: boolean
): DelegatesWeightChartData {
  const delegatesSupportFetcher: Fetcher<Support[]> =
    dataApiClient.v1.readDelegatesSupportV1GovernanceDelegatesSupportGet;

  const { data: allDelegatesSupport, error } = useSwr<Support[], Error>(
    'allDelegatesSupport',
    () => {
      const fromDate = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
      );
      return delegatesSupportFetcher({
        type: onlyRecognized ? 'recognized' : undefined,
        from_date: `${fromDate.getFullYear()}-${fromDate.getMonth()}-${fromDate.getDate()}`
      });
    }
  );

  const loading = useMemo(() => {
    return allDelegatesSupport === undefined && error === undefined;
  }, [allDelegatesSupport, error]);

  const allDelegateNames = useMemo(() => {
    const delegateNames = Array.from(
      new Set(allDelegatesSupport?.map(({ delegate }) => delegate))
    );

    return delegateNames;
  }, [allDelegatesSupport]);

  const colors = chartsRgbColorPallete();

  const delegatatesWithSupportChartDataSets = useMemo(() => {
    if (allDelegatesSupport) {
      const allDelegateSupportByDelegate = _.groupBy(
        allDelegatesSupport,
        'delegate'
      );

      const delegateMonthlySupport: ChartDataSet = Object.keys(
        allDelegateSupportByDelegate
      ).reduce((memo, delegate) => {
        const groupedSupport: Record<string, Support[]> = _.groupBy(
          allDelegateSupportByDelegate[delegate],
          (support) => {
            const date = new Date(support.date);
            return `${date.getFullYear()}/${date.getMonth() + 1}`;
          }
        );

        const lastSupportPerMonth = Object.keys(groupedSupport).reduce(
          (memo, month) => {
            const minDelegateSupportDate = Math.min(
              ...groupedSupport[month].map(({ date }) =>
                new Date(date).getTime()
              )
            );

            return {
              ...memo,
              [month]: groupedSupport[month].filter(
                ({ date }) =>
                  new Date(date).getTime() === minDelegateSupportDate
              )[0]
            };
          },
          {}
        );

        return {
          ...memo,
          [delegate]: lastSupportPerMonth
        };
      }, {});

      const dataSetList = allDelegateNames
        .map((delegate, index) => {
          const delegateSupport: Record<string, Support> =
            delegateMonthlySupport[delegate];

          const dataSet = {
            fill: true,
            label: delegate,
            borderColor: colors[index],
            backgroundColor: colors[index],
            data: Object.keys(delegateSupport).map((month) => ({
              x: delegateSupport[month].date,
              y: delegateSupport[month].support,
              type: delegateSupport[month].type,
              month
            }))
          };

          return dataSet;
        })
        .sort(
          (a, b) => b.data[b.data.length - 1].y - a.data[a.data.length - 1].y
        );

      const top5Recognized = dataSetList
        .filter(({ data }) => data[0].type === 'recognized')
        .slice(0, 5)
        .map((dataSet, index) => ({
          ...dataSet,
          borderColor: colors[index],
          backgroundColor: colors[index]
        }));

      const othersRecognized = dataSetList
        .filter(({ data }) => data[0].type === 'recognized')
        .slice(5)
        .reduce(
          (memo, dataSet) => {
            dataSet.data.forEach((currentDataSet) => {
              const currentValue = memo.data.find(
                (values) => values.month === currentDataSet.month
              );

              if (currentValue) {
                const newValue = {
                  ...currentValue,
                  y: currentValue.y + currentDataSet.y
                };

                memo.data.map((value) =>
                  value.month === currentDataSet.month ? newValue : value
                );

                return;
              }

              memo.data.push(currentDataSet);
            });

            memo.data.sort(
              (a, b) => new Date(a.x).getTime() - new Date(b.x).getTime()
            );
            return memo;
          },
          {
            fill: true,
            label: onlyRecognized ? 'Others' : 'Others (Recognized)',
            borderColor: '#BEA5EA',
            backgroundColor: '#BEA5EA',
            data: []
          }
        );

      if (!onlyRecognized) {
        const othersShadow = dataSetList
          .filter(({ data }) => data[0].type === 'shadow')
          .reduce(
            (memo, dataSet) => {
              dataSet.data.forEach((currentDataSet) => {
                const currentValue = memo.data.find(
                  (values) => values.month === currentDataSet.month
                );

                if (currentValue) {
                  const newValue = {
                    ...currentValue,
                    y: currentValue.y + currentDataSet.y
                  };

                  memo.data.map((value) =>
                    value.month === currentDataSet.month ? newValue : value
                  );

                  return;
                }

                memo.data.push(currentDataSet);
              });

              memo.data.sort(
                (a, b) => new Date(a.x).getTime() - new Date(b.x).getTime()
              );
              return memo;
            },
            {
              fill: true,
              label: 'Others (Shadow)',
              borderColor: '#5BA8E1',
              backgroundColor: '#5BA8E1',
              data: []
            }
          );

        return {
          datasets: [...top5Recognized, othersRecognized, othersShadow]
        };
      }

      return {
        datasets: [...top5Recognized, othersRecognized]
      };
    }

    return { datasets: [] };
  }, [allDelegatesSupport, allDelegateNames, onlyRecognized, colors]);

  return [delegatatesWithSupportChartDataSets, loading, error];
}
