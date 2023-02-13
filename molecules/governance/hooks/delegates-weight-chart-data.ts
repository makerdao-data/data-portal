import _ from 'lodash';
import randomColor from 'randomcolor';
import { useMemo } from 'react';
import useSwr, { Fetcher } from 'swr';
import { dataApiClient } from '../../../data/dataApiClient';
import { Delegate, Support } from '../../../__generated__/dataAPI';
import { ChartDataset } from 'chart.js';
import chartsRgbColorPallete from '../../../utils/chartColors';

interface DelegateWithName extends Omit<Delegate, 'name'> {
  name: string;
}

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
  const delegatesFetcher: Fetcher<Delegate[]> =
    dataApiClient.v1.readDelegatesV1GovernanceDelegatesGet;
  const delegatesSupportFetcher: Fetcher<Support[]> =
    dataApiClient.v1.readDelegatesSupportV1GovernanceDelegatesSupportGet;

  const { data: delegates, error: delegatesQueryError } = useSwr<
    Delegate[],
    Error
  >('delegates', delegatesFetcher);

  const { data: delegatesSupport, error: delegatesSupportQueryError } = useSwr<
    Support[],
    Error
  >('delegatesSupport', () =>
    delegatesSupportFetcher({
      from_date: '2021-07-27'
    })
  );

  const error = useMemo(
    () => delegatesQueryError || delegatesSupportQueryError,
    [delegatesQueryError, delegatesSupportQueryError]
  );

  const loading = useMemo(() => {
    return (
      (delegates === undefined || delegatesSupport === undefined) &&
      delegatesQueryError === undefined &&
      delegatesSupportQueryError === undefined
    );
  }, [
    delegates,
    delegatesQueryError,
    delegatesSupport,
    delegatesSupportQueryError
  ]);

  const recognizedDelegates = useMemo(
    () =>
      delegates?.filter((delegate) => Boolean(delegate.name)) as
        | DelegateWithName[]
        | undefined,
    [delegates]
  );

  const colors = chartsRgbColorPallete(0.5);

  const delegatatesWithSupportChartDataSets = useMemo(() => {
    if (delegatesSupport && recognizedDelegates) {
      const recognizedDelegatesKeys = recognizedDelegates.map(
        ({ vote_delegate }) => vote_delegate
      );
      const recognizedDelegatesSupport = delegatesSupport.filter(
        ({ vote_delegate }) => recognizedDelegatesKeys.includes(vote_delegate)
      );
      const recognizedDelegateSupportByDelegate = _.groupBy(
        recognizedDelegatesSupport,
        'vote_delegate'
      );

      const delegateMonthlySupport: ChartDataSet = Object.keys(
        recognizedDelegateSupportByDelegate
      ).reduce((memo, vote_delegate) => {
        const groupedSupport: Record<string, Support[]> = _.groupBy(
          recognizedDelegateSupportByDelegate[vote_delegate],
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
          [vote_delegate]: lastSupportPerMonth
        };
      }, {});

      const dataSetList = recognizedDelegates.map((delegate, index) => {
        const delegateSupport = delegateMonthlySupport[delegate.vote_delegate];

        const dataSet = {
          fill: true,
          label: delegate.name,
          borderColor: colors[index] ?? randomColor({ hue: 'orange' }),
          backgroundColor: colors[index] ?? randomColor({ hue: 'orange' }),
          data: Object.keys(delegateSupport).map((month) => ({
            x: delegateSupport[month].date,
            y: delegateSupport[month].support
          })),
          options: {
            onHover: (e, activeEls, chart) => {
              if (activeEls.length === 0) {
                chart.data.datasets.forEach((dataset) => {
                  dataset.backgroundColor =
                    dataset.backgroundColor.length === 9
                      ? dataset.backgroundColor.slice(0, -2)
                      : dataset.backgroundColor;
                  dataset.borderColor =
                    dataset.borderColor.length === 9
                      ? dataset.borderColor.slice(0, -2)
                      : dataset.borderColor;
                });
                chart.update();
                return;
              }

              const hoveredEl = chart.getElementsAtEventForMode(
                e,
                'point',
                {
                  intersect: true
                },
                true
              )[0];

              chart.data.datasets.forEach((dataset, i) => {
                dataset.backgroundColor =
                  hoveredEl.datasetIndex === i ||
                  dataset.backgroundColor.length === 9
                    ? dataset.backgroundColor
                    : dataset.backgroundColor + '4D';
                dataset.borderColor =
                  hoveredEl.datasetIndex === i ||
                  dataset.borderColor.length === 9
                    ? dataset.borderColor
                    : dataset.borderColor + '4D';
              });

              chart.update();
            }
          }
        };

        return dataSet;
      });

      return {
        datasets: dataSetList
      };
    }

    return { datasets: [] };
  }, [colors, delegatesSupport, recognizedDelegates]);

  return [delegatatesWithSupportChartDataSets, loading, error];
}
