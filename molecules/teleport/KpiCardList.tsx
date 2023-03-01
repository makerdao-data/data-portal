import { Flex } from 'theme-ui';
import Kpi from '../../components/Kpi';
import { Text } from '@makerdao-dicu/makerdao-ui';
import DeltaChange from '../../components/DeltaChange';

type KpiData = {
  title: string;
  value: string | number | undefined;
  unit?: string;
  change: number | undefined;
};

type KpiCardListProps = {
  data: KpiData[];
  error: Error | undefined;
};

export default function KpiCardList({ data, error }: KpiCardListProps) {
  return (
    <Flex
      sx={{
        flexDirection: ['row', 'row', 'row', 'column'],
        flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'],
        justifyContent: 'space-between',
        gap: 3,
        flex: ['1 1 100%', '0 0 100%', '0 0 100%', '0 0 auto']
      }}>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Data is not available at the moment.'}
        </Text>
      ) : (
        data.map((kpi) => (
          <Kpi
            key={kpi.title}
            title={kpi.title}
            value={kpi.value || null}
            unit={kpi.unit}
            delta={<DeltaChange change={kpi.change || 0} label={kpi.title} />}
            sx={{
              border: 'none',
              padding: 0,
              flex: ['1 1 100%', '1 1 auto', '0 0 auto', '0 0 auto'],
              alignItems: ['center', 'center', 'center', 'start']
            }}
          />
        ))
      )}
    </Flex>
  );
}
