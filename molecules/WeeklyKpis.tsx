import { Fragment } from 'react';
import { Flex } from 'theme-ui';
import KpiCard from '../components/KpiCard';
import { Summary } from '../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';

type WeeklyKpisProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

export default function WeeklyKpis({ data, error }: WeeklyKpisProps) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        gap: 3,
        flex: ['1 1 100%', '0 0 300px', '0 0 300px']
      }}>
      {error ? (
        <Text variant="error">
          {'Weekly Kpi data is not available at the moment.'}
        </Text>
      ) : (
        <Fragment>
          <KpiCard
            title="DAI Weekly transfer volume"
            value={data?.l2_weekly_transfers_volume.total}
            change={
              ((data?.l2_weekly_transfers_volume_2.total -
                data?.l2_weekly_transfers_volume.total) /
                data?.l2_weekly_transfers_volume_2.total) *
              -1
            }
          />

          <KpiCard
            title="Weekly transfers"
            value={data?.l2_weekly_transfers_count.total}
            change={
              ((data?.l2_weekly_transfers_count_2.total -
                data?.l2_weekly_transfers_count.total) /
                data?.l2_weekly_transfers_count_2.total) *
              -1
            }
          />
        </Fragment>
      )}
    </Flex>
  );
}
