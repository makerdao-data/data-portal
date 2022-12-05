import { Flex } from 'theme-ui';
import DataCard from '../components/DataCard';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Summary } from '../__generated__/dataAPI';
import { Fragment } from 'react';

type DaiSupplyProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

export default function DaiSupply({ data, error }: DaiSupplyProps) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        maxWidth: ['100%', '100%', '280px'],
        textAlign: 'right'
      }}>
      {error ? (
        <Text variant="error">
          {'Dai Supply data is not available at the moment.'}
        </Text>
      ) : (
        <Fragment>
          <DataCard
            title="DAI Supply"
            value={data?.supply_circulating.total}
            change={
              ((data?.supply_circulating_7.total -
                data?.supply_circulating.total) /
                data?.supply_circulating_7.total) *
              -1
            }
            sx={{
              border: 'none',
              ['span']: data
                ? {
                    alignSelf: ['center', 'flex-end', 'flex-end']
                  }
                : {}
            }}
          />

          <Flex sx={{ flexDirection: ['row', 'row', 'column'] }}>
            <Text variant="muted">
              Last update: 15983125 block (107 blocks)
            </Text>
            <Text variant="muted">2022-11-16 14:16:59 UTC (21 mins)</Text>
          </Flex>
        </Fragment>
      )}
    </Flex>
  );
}
