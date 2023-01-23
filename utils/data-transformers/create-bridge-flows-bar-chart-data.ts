import { HistogramDataSerie } from '../../components/HistogramChart';
import { Bridge } from '../../__generated__/dataAPI';

export function createBridgeFlowsBarChartData(
  data: Bridge | undefined
): HistogramDataSerie[] {
  if (data !== undefined) {
    const inflowDataSeries: HistogramDataSerie = {
      styleOptions: { color: '#139D8D', title: 'Inflow' },
      data: []
    };
    const outflowDataSeries: HistogramDataSerie = {
      styleOptions: { color: '#BC2F48', title: 'Outflow' },
      data: []
    };

    for (const flow of data.flows) {
      inflowDataSeries.data.push({
        time: flow.date,
        value: flow.bridge_inflows
      });

      outflowDataSeries.data.push({
        time: flow.date,
        value: flow.total_outflows
      });
    }

    return [inflowDataSeries, outflowDataSeries];
  }

  return [];
}
