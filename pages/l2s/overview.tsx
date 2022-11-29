import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Summary } from '../../__generated__/dataAPI';
import DaiInL2sSection from '../../molecules/DaiInL2sSection';
import L1BridgesStatus from '../../molecules/L1BridgesStatus';
import { dataApiClient } from '../../data/dataApiClient';

export default function Overview() {
  const { data, error } = useSwr<Summary, Error>(
    'metricsSummary',
    dataApiClient.v1.readSummaryMetricsV1MetricsSummaryGet as any
  );

  if (error) {
    console.error(error);

    return <Text variant="error">Something went wrong fetching the data.</Text>;
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Text variant="muted">
        Last refresh (delay): 15983125 block (107 blocks) / 2022-11-16 14:16:59
        UTC (21 mins)
      </Text>

      <DaiInL2sSection data={data} />

      <L1BridgesStatus />
    </Flex>
  );
}
