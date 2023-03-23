import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr, { Fetcher } from 'swr';
import {
  RequestParams,
  Overview as TOverview
} from '../../__generated__/dataAPI';
import { dataApiClient } from '../../data/dataApiClient';
import { useIntl } from 'next-intl';
import OverviewVoterTypesTable from '../../molecules/governance/OverviewVoterTypesTable';
import Kpi from '../../components/Kpi';
import DelegatesWeightChart from '../../molecules/governance/DelegatesWeightChart';
import Card from '../../components/Card';
import GoverningExecutiveCard from '../../molecules/governance/GoverningExecutiveCard';
import OverviewVotersCard from '../../molecules/governance/OverviewVotersCard';
import AvgVotersInPollCard from '../../molecules/governance/AvgVotersInPollCard';
// import CsvExport from '../../components/CsvExport';

export default function Overview() {
  const intl = useIntl();
  const governanceOverviewFetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;

  const { data: governanceData, error: governanceOverviewError } = useSwr<
    TOverview,
    Error
  >('governanceOverview', governanceOverviewFetcher);

  if (governanceOverviewError) {
    console.error(governanceOverviewError);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 24 }}>
      <Text variant="heading">Governance overview</Text>

      <Flex sx={{ gap: 24, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        {governanceOverviewError ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {'Staked MKR data is not available at the moment.'}
          </Text>
        ) : (
          <Card sx={{ padding: '8px', flex: '1 1 30%' }}>
            <Kpi
              title="Staked MKR in Chief"
              value={
                governanceData
                  ? intl.formatNumber(
                      governanceData.total_mkr_locked_in_cheif,
                      {
                        maximumFractionDigits: 1,
                        notation: 'compact'
                      }
                    )
                  : null
              }
              unit="MKR"
              sx={{ border: 'none' }}
            />
          </Card>
        )}

        <Card
          header={{
            title: 'Voters'
            // actions: [
            //   <CsvExport
            //     key="export-voters"
            //     exportMethod={() => ({
            //       data: []
            //     })}
            //   />
            // ]
          }}
          sx={{ flex: '1 1 70%' }}>
          <OverviewVoterTypesTable
            data={governanceData}
            error={governanceOverviewError}
          />
        </Card>
      </Flex>

      <Card
        header={{
          title: 'Recognized delegate voting power'
        }}>
        <DelegatesWeightChart />
      </Card>

      <GoverningExecutiveCard
        data={governanceData}
        error={governanceOverviewError}
      />

      <AvgVotersInPollCard
        data={governanceData}
        error={governanceOverviewError}
      />

      <OverviewVotersCard />
    </Flex>
  );
}
