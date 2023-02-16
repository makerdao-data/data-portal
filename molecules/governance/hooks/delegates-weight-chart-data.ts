import _ from 'lodash';
import randomColor from 'randomcolor';
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

export default function useDelegatesWeightChartData(): DelegatesWeightChartData {
  const delegatesSupportFetcher: Fetcher<Support[]> =
    dataApiClient.v1.readDelegatesSupportV1GovernanceDelegatesSupportGet;

  const { data: recognizedDelegatesSupport, error } = useSwr<Support[], Error>(
    'recognizedDelegatesSupport',
    () => {
      const fromDate = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
      );
      return delegatesSupportFetcher({
        from_date: `${fromDate.getFullYear()}-${fromDate.getMonth()}-${fromDate.getDate()}`,
        type: 'recognized'
      });
    }
  );

  const loading = useMemo(() => {
    return recognizedDelegatesSupport === undefined && error === undefined;
  }, [recognizedDelegatesSupport, error]);

  const recognizedDelegateNames = useMemo(() => {
    const delegateNames = Array.from(
      new Set(recognizedDelegatesSupport?.map(({ delegate }) => delegate))
    );

    return delegateNames;
  }, [recognizedDelegatesSupport]);

  const colors = chartsRgbColorPallete(0.5);

  const delegatatesWithSupportChartDataSets = useMemo(() => {
    if (recognizedDelegatesSupport) {
      const recognizedDelegateSupportByDelegate = _.groupBy(
        recognizedDelegatesSupport,
        'delegate'
      );

      const delegateMonthlySupport: ChartDataSet = Object.keys(
        recognizedDelegateSupportByDelegate
      ).reduce((memo, delegate) => {
        const groupedSupport: Record<string, Support[]> = _.groupBy(
          recognizedDelegateSupportByDelegate[delegate],
          (support) => {
            const date = new Date(support.date);
            return `${date.getFullYear()}/${date.getMonth() + 1}`;
          }
        );

        const lastSupportPerMonth = Object.keys(groupedSupport).reduce(
          (memo, month) => {
            const maxDelegateSupportDate = Math.min(
              ...groupedSupport[month].map(({ date }) =>
                new Date(date).getTime()
              )
            );

            return {
              ...memo,
              [month]: groupedSupport[month].filter(
                ({ date }) =>
                  new Date(date).getTime() === maxDelegateSupportDate
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

      const dataSetList = recognizedDelegateNames.map((delegate, index) => {
        const delegateSupport = delegateMonthlySupport[delegate];

        const dataSet = {
          fill: true,
          label: delegate,
          borderColor: colors[index] ?? randomColor({ hue: 'orange' }),
          backgroundColor: colors[index] ?? randomColor({ hue: 'orange' }),
          data: Object.keys(delegateSupport).map((month) => ({
            x: delegateSupport[month].date,
            y: delegateSupport[month].support
          }))
        };

        return dataSet;
      });

      return {
        datasets: dataSetList
      };
    }

    return { datasets: [] };
  }, [colors, recognizedDelegatesSupport, recognizedDelegateNames]);

  return [delegatatesWithSupportChartDataSets, loading, error];
}
