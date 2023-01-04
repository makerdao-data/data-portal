import { DataSerie } from '@makerdao-dicu/makerdao-ui';
import { Bridge } from '../__generated__/dataAPI';

export function createBridgeMainChartDataSeries(
  data: Bridge | undefined
): DataSerie[] {
  if (data !== undefined) {
    return [
      {
        styleOptions: {
          lineColor: '#7E7E88',
          lineWidth: 2,
          topColor: 'transparent',
          bottomColor: 'transparent',
          title: 'L1 Escrow'
        },
        data: Object.keys(data.supply_and_escrow_df.ESCROW)
          .filter((key) =>
            Boolean(
              data.supply_and_escrow_df.ESCROW[
                key as keyof typeof data.supply_and_escrow_df.ESCROW
              ]
            )
          )
          .map((key) => ({
            time: key,
            value: parseFloat(
              data.supply_and_escrow_df.ESCROW[
                key as keyof typeof data.supply_and_escrow_df.ESCROW
              ]
            )
          }))
      },
      {
        styleOptions: {
          lineColor: '#f4b731',
          lineWidth: 2,
          topColor: 'transparent',
          bottomColor: 'transparent',
          title: 'L2 Supply'
        },
        data: Object.keys(data.supply_and_escrow_df.SUPPLY)
          .filter((key) =>
            Boolean(
              data.supply_and_escrow_df.SUPPLY[
                key as keyof typeof data.supply_and_escrow_df.SUPPLY
              ]
            )
          )
          .map((key) => ({
            time: key,
            value: parseFloat(
              data.supply_and_escrow_df.SUPPLY[
                key as keyof typeof data.supply_and_escrow_df.SUPPLY
              ]
            )
          }))
      }
    ];
  }

  return [];
}
