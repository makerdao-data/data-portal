import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr from 'swr';
import { Summary } from '../../__generated__/dataAPI';
import DaiInL2sChart from '../../molecules/DaiInL2sChart';
import TeleportTable from '../../molecules/TeleportTable';
import { dataApiClient } from '../../data/dataApiClient';
import DaiSupply from '../../molecules/DaiSupply';

export default function Overview() {
  const { data, error } = useSwr<Summary, Error>(
    'metricsSummary',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataApiClient.v1.readSummaryMetricsV1MetricsSummaryGet as any
  );

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Maker Teleport Monitoring</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        <TeleportTable data={data} error={error} />

        <DaiSupply data={data} error={error} />
      </Flex>

      <DaiInL2sChart data={data} error={error} />
    </Flex>
  );
}
