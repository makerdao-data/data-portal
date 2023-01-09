import { Bridge } from '../__generated__/dataAPI';

export type BridgeDaiComparisionBarChartData = {
  categoryMapping: Record<string, string>;
  dataSeries: Record<string, string | number>[];
};

export function createBridgeDaiDistributionBarChartData(
  data: Bridge | undefined
): BridgeDaiComparisionBarChartData {
  if (data !== undefined) {
    const total = Object.values(data.DAI_buckets).reduce(
      (memo, volume) => memo + volume,
      0
    );
    const CATEGORY_MAPPING = {
      below_1: 'Up to 1',
      from_1_to_10: '1 - 10',
      from_10_to_100: '10 - 100',
      from_100_to_1K: '100 - 1K',
      from_1K_to_10K: '1K - 10K',
      from_10K_to_100K: '10K - 100K',
      from_100K_to_1M: '100k - 1M',
      over_1M: '1M+'
    };

    return {
      categoryMapping: CATEGORY_MAPPING,
      dataSeries: Object.keys(CATEGORY_MAPPING).reduce((memo, category) => {
        return [
          ...memo,
          {
            id: category,
            [category]: data.DAI_buckets[category] / total,
            value: data.DAI_buckets[category]
          }
        ];
      }, [] as Record<string, string | number>[])
    };
  }

  return { categoryMapping: {}, dataSeries: [] };
}
