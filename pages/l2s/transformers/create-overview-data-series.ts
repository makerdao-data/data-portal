import { DataSerie } from '@makerdao-dicu/makerdao-ui';
import { Summary } from '../../../__generated__/dataAPI';

export default function createOverviewAreaChartDataSeries(
  data: Summary | undefined
): DataSerie[] {
  if (data !== undefined) {
    return [
      {
        colors: {
          backgroundColor: 'white',
          lineColor: '#2962FF',
          textColor: 'text',
          areaTopColor: '#2962FF',
          areaBottomColor: 'rgba(41, 98, 255, 0.28)'
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
        colors: {
          backgroundColor: 'white',
          lineColor: '#ff818f',
          textColor: 'text',
          areaTopColor: '#ff818f',
          areaBottomColor: 'rgba(255, 125, 130, 0.28)'
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
        colors: {
          backgroundColor: 'white',
          lineColor: '#9191b0',
          textColor: 'text',
          areaTopColor: '#9191b0',
          areaBottomColor: 'rgba(126, 125, 161, 0.28)'
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
