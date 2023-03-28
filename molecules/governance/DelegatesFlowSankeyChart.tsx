import { Chart as ChartJS } from 'chart.js';
import { SankeyController, Flow } from 'chartjs-chart-sankey';
import { useMemo } from 'react';

import { Chart } from 'react-chartjs-2';
import useSwr, { Fetcher } from 'swr';
import { Box, Flex } from 'theme-ui';
import { dataApiClient } from '../../data/dataApiClient';
import chartsRgbColorPallete from '../../utils/chartColors';
import { DelegationSummary } from '../../__generated__/dataAPI';
import Loader from '../Loader';
import randomColor from 'randomcolor';
import { Text } from '@makerdao-dicu/makerdao-ui';

ChartJS.register(SankeyController, Flow);

const colors = chartsRgbColorPallete(1);

export default function DelegatesFlowSankeyChart() {
  const delegationsFetcher: Fetcher<DelegationSummary[]> =
    dataApiClient.v1.readDelegationSummaryV1GovernanceDelegationSummaryGet;

  const { data: delegationsSummaryData, error } = useSwr<
    DelegationSummary[],
    Error
  >('recognizedDelegationsSummary', () => {
    return delegationsFetcher({ type: 'recognized' });
  });

  const data = useMemo(() => {
    if (delegationsSummaryData) {
      const bigFlows = delegationsSummaryData
        .filter(({ delegated_mkr }) => delegated_mkr > 500)
        .map((delegation) => ({
          from: delegation.delegator,
          to: delegation.delegate ?? '',
          flow: delegation.delegated_mkr
        }));

      const otherFlows = delegationsSummaryData
        .filter(({ delegated_mkr }) => delegated_mkr <= 500)
        .map((delegation) => ({
          from: 'Others',
          to: delegation.delegate ?? '',
          flow: delegation.delegated_mkr
        }));

      return {
        datasets: [
          {
            label: 'Delegation flow',
            data: [...bigFlows, ...otherFlows],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            colorFrom: (c: any) => colors[c.dataIndex] || randomColor(),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            colorTo: (c: any) => colors[c.dataIndex] || randomColor(),
            colorMode: 'gradient',
            size: 'max'
          }
        ]
      };
    }

    return null;
  }, [delegationsSummaryData]);

  return (
    <Loader data={data} error={error}>
      <Flex sx={{ flexDirection: 'column', gap: 24 }}>
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Text>Delegators</Text>
          <Text>Recognized Delegates</Text>
        </Flex>
        <Box
          role="figure"
          aria-label="Delegation flow chart"
          sx={{ minHeight: '400px', backgroundColor: '#FFF' }}>
          <Chart
            type="sankey"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            data={data}
            options={{
              plugins: {
                datalabels: {
                  display: false
                }
              }
            }}
          />
        </Box>
      </Flex>
    </Loader>
  );
}
