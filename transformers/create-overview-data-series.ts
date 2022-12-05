import { DataSerie } from '@makerdao-dicu/makerdao-ui';
import { Summary } from '../__generated__/dataAPI';

export function createOverviewAreaChartDataSeries(
  data: Summary | undefined
): DataSerie[] {
  if (data !== undefined) {
    return [
      {
        styleOptions: {
          lineColor: '#ff0420',
          topColor: '#ff0420',
          bottomColor: 'rgba(255, 4, 32, 0.28)',
          title: 'Optimism'
        },
        data: Object.keys(data.total_supply.OPTIMISM)
          .filter((key) =>
            Boolean(
              data.total_supply.OPTIMISM[
                key as keyof typeof data.total_supply.OPTIMISM
              ]
            )
          )
          .map((key) => ({
            time: key,
            value: data.total_supply.OPTIMISM[
              key as keyof typeof data.total_supply.OPTIMISM
            ] as number
          }))
      },
      {
        styleOptions: {
          lineColor: '#28a0f0',
          topColor: '#28a0f0',
          bottomColor: 'rgba(40, 160, 240, 0.28)',
          title: 'Arbitrum'
        },
        data: Object.keys(data.total_supply.ARBITRUM)
          .filter((key) =>
            Boolean(
              data.total_supply.ARBITRUM[
                key as keyof typeof data.total_supply.ARBITRUM
              ]
            )
          )
          .map((key) => ({
            time: key,
            value:
              data.total_supply.ARBITRUM[
                key as keyof typeof data.total_supply.ARBITRUM
              ]
          }))
      },
      {
        styleOptions: {
          lineColor: '#252563',
          topColor: '#252563',
          bottomColor: 'rgba(37, 37, 99, 0.28)',
          title: 'Starknet'
        },
        data: Object.keys(data.total_supply.STARKNET)
          .filter((key) =>
            Boolean(
              data.total_supply.STARKNET[
                key as keyof typeof data.total_supply.STARKNET
              ]
            )
          )
          .map((key) => ({
            time: key,
            value:
              data.total_supply.STARKNET[
                key as keyof typeof data.total_supply.STARKNET
              ]
          }))
      }
    ];
  }

  return [];
}
