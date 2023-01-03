import { Flex } from 'theme-ui';
import KpiCard from '../../components/KpiCard';
import { Text } from '@makerdao-dicu/makerdao-ui';

type KpiData = {
  title: string;
  value: string | number | undefined;
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
        flexDirection: 'column',
        gap: 3,
        flex: ['1 1 100%', '0 0 100%', '0 0 100%', '0 0 300px']
      }}>
      {error ? (
        <Text variant="error">{'Data is not available at the moment.'}</Text>
      ) : (
        data.map((kpi) => (
          <KpiCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
          />
        ))
      )}
    </Flex>
  );
}
