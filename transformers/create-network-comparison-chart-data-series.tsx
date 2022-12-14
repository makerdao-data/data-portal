import type { Summary } from '../__generated__/dataAPI';

export function createNetworkComparisonChartDataSeries(
  data: Summary | undefined
): Record<string, string | number>[] {
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

    const dataSeries = [
      {
        id: 'weeklyTransferVolume',
        optimism: networks_transfer_volume.Optimism / totalTransferAmount,
        optimismColor: domainColor.optimism,
        arbitrum: networks_transfer_volume.Arbitrum / totalTransferAmount,
        arbitrumColor: domainColor.arbitrum,
        starknet: networks_transfer_volume.Starknet / totalTransferAmount,
        starknetColor: domainColor.starknet
      },
      {
        id: 'weeklyTransferCount',
        optimism: networks_transfer_count.Optimism / totalTransferCount,
        optimismColor: domainColor.optimism,
        arbitrum: networks_transfer_count.Arbitrum / totalTransferCount,
        arbitrumColor: domainColor.arbitrum,
        starknet: networks_transfer_count.Starknet / totalTransferCount,
        starknetColor: domainColor.starknet
      },
      {
        id: 'avgTransferAmount',
        optimism: networks_avg_transfer.Optimism / totalAvgTransfer,
        optimismColor: domainColor.optimism,
        arbitrum: networks_avg_transfer.Arbitrum / totalAvgTransfer,
        arbitrumColor: domainColor.arbitrum,
        starknet: networks_avg_transfer.Starknet / totalAvgTransfer,
        starknetColor: domainColor.starknet
      }
    ];

    return dataSeries;
  }

  return [];
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
