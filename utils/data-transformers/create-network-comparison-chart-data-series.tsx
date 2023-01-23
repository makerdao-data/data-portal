import { Summary } from '../../__generated__/dataAPI';

export type NetworkComparisonPieChartDataSerie = {
  id: string;
  formattedId: string;
  value: number;
};

type NetworkComparitionDataSeries = {
  weeklyTransferVolume: NetworkComparisonPieChartDataSerie[];
  weeklyTransferCount: NetworkComparisonPieChartDataSerie[];
  avgTransferAmount: NetworkComparisonPieChartDataSerie[];
};

export function createNetworkComparisonChartsDataSeries(
  data: Summary | undefined
): NetworkComparitionDataSeries {
  if (data !== undefined) {
    const {
      networks_transfer_volume,
      networks_transfer_count,
      networks_avg_transfer
    } = data;
    const totalTransferAmount =
      networks_transfer_volume.Optimism +
      networks_transfer_volume.Arbitrum +
      networks_transfer_volume.Starknet;

    const totalTransferCount =
      networks_transfer_count.Optimism +
      networks_transfer_count.Arbitrum +
      networks_transfer_count.Starknet;

    const totalAvgTransfer =
      networks_avg_transfer.Optimism +
      networks_avg_transfer.Arbitrum +
      networks_avg_transfer.Starknet;

    const weeklyTransferVolumeDataSeries = [
      {
        id: 'optimism',
        formattedId: 'Optimism',
        value: networks_transfer_volume.Optimism / totalTransferAmount
      },
      {
        id: 'arbitrum',
        formattedId: 'Arbitrum',
        value: networks_transfer_volume.Arbitrum / totalTransferAmount
      },
      {
        id: 'starknet',
        formattedId: 'Starknet',
        value: networks_transfer_volume.Starknet / totalTransferAmount
      }
    ];

    const weeklyTransferCountDataSeries = [
      {
        id: 'optimism',
        formattedId: 'Optimism',
        value: networks_transfer_count.Optimism / totalTransferCount
      },
      {
        id: 'arbitrum',
        formattedId: 'Arbitrum',
        value: networks_transfer_count.Arbitrum / totalTransferCount
      },
      {
        id: 'starknet',
        formattedId: 'Starknet',
        value: networks_transfer_count.Starknet / totalTransferCount
      }
    ];

    const avgTransferAmountDataSeries = [
      {
        id: 'optimism',
        formattedId: 'Optimism',
        value: networks_avg_transfer.Optimism / totalAvgTransfer
      },
      {
        id: 'arbitrum',
        formattedId: 'Arbitrum',
        value: networks_avg_transfer.Arbitrum / totalAvgTransfer
      },
      {
        id: 'starknet',
        formattedId: 'Starknet',
        value: networks_avg_transfer.Starknet / totalAvgTransfer
      }
    ];

    const dataSeries = {
      weeklyTransferVolume: weeklyTransferVolumeDataSeries,
      weeklyTransferCount: weeklyTransferCountDataSeries,
      avgTransferAmount: avgTransferAmountDataSeries
    };

    return dataSeries;
  }

  return {
    weeklyTransferVolume: [],
    weeklyTransferCount: [],
    avgTransferAmount: []
  };
}

export const domainColor: Record<string, string> = {
  optimism: 'rgba(255, 4, 32, 0.7)',
  arbitrum: 'rgba(40, 160, 240, 0.7)',
  starknet: 'rgba(37, 37, 99, 0.7)'
};

export enum NetworkComparisonIndex {
  'weeklyTransferVolume' = 'Weekly transfer volume',
  'weeklyTransferCount' = 'Weekly transfer count',
  'avgTransferAmount' = 'Avg. Transfer amount'
}
