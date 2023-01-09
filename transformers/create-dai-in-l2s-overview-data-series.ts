import { DataSerie } from '@makerdao-dicu/makerdao-ui';
import { Summary } from '../__generated__/dataAPI';

export function createDaiInL2sAreaChartDataSeries(
  data: Summary | undefined
): DataSerie[] {
  if (data !== undefined) {
    return [
      {
        styleOptions: {
          lineColor: '#ff0420',
          lineWidth: 2,
          topColor: 'transparent',
          bottomColor: 'transparent',
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
            value: parseFloat(
              data.total_supply.OPTIMISM[
                key as keyof typeof data.total_supply.OPTIMISM
              ]
            )
          }))
      },
      {
        styleOptions: {
          lineColor: '#28a0f0',
          lineWidth: 2,
          topColor: 'transparent',
          bottomColor: 'transparent',
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
            value: parseFloat(
              data.total_supply.ARBITRUM[
                key as keyof typeof data.total_supply.ARBITRUM
              ]
            )
          }))
      },
      {
        styleOptions: {
          lineColor: '#252563',
          lineWidth: 2,
          topColor: 'transparent',
          bottomColor: 'transparent',
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
