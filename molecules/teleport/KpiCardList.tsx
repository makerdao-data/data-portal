import { Flex } from 'theme-ui';
import KpiCard from '../../components/KpiCard';
import { Text } from '@makerdao-dicu/makerdao-ui';
import Card from '../../components/Card';

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
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Data is not available at the moment.'}
        </Text>
      ) : (
        data.map((kpi) => (
          <Card key={kpi.title}>
            <KpiCard
              title={kpi.title}
              value={kpi.value}
              change={kpi.change}
              sx={{ border: 'none', padding: 0 }}
            />
          </Card>
        ))
      )}
    </Flex>
  );
}
