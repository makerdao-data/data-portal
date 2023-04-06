import { useIntl } from 'next-intl';
import { Flex } from 'theme-ui';
import Card from '../../components/Card';
import Kpi from '../../components/Kpi';
import { Overview } from '../../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import GovernancePollsBarChart from './GovernancePollsBarChart';

type AvgVotersInPollCardProps = {
  data: Overview | undefined;
  error: Error | undefined;
};

export default function AvgVotersInPollCard({
  data,
  error
}: AvgVotersInPollCardProps) {
  const intl = useIntl();

  return (
    <Card header={{ title: 'Governance Polls' }}>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Voters in polls data is not available at the moment.'}
        </Text>
      ) : (
        <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
          <Kpi
            title="Average voters in polls"
            value={
              data
                ? intl.formatNumber(data.avg_voters_count_in_polls, {
                    maximumFractionDigits: 0
                  })
                : null
            }
            sx={{ border: 'none', flexBasis: '20%' }}
          />

          <GovernancePollsBarChart data={data} error={error} />
        </Flex>
      )}
    </Card>
  );
}
