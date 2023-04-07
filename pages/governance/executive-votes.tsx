import { useIntl } from 'next-intl';
import useSwr, { Fetcher } from 'swr';
import Card from '../../components/Card';
import FlexRow from '../../components/grid/FlexRow';
import Kpi from '../../components/Kpi';
import { dataApiClient } from '../../data/dataApiClient';
import FlexPage from '../../molecules/Page';
import {
  RequestParams,
  Overview as TOverview,
  ExecutivesSummary,
  Executive
} from '../../__generated__/dataAPI';
import { Box } from 'theme-ui';
import ExecutiveVotesTable from '../../molecules/governance/ExecutiveVotesTable';
import GovernanceExecutivesLineChart from '../../molecules/governance/GovernanceExecutivesLineChart';

export default function ExeutiveVotes() {
  const intl = useIntl();
  const {
    executiveVotesSummaryData,
    governanceOverviewData,
    executiveVotesSummaryError,
    governanceOverviewError,
    executivesData,
    executivesError
  } = useGetDelegatesData();

  if (
    governanceOverviewError ||
    executiveVotesSummaryError ||
    executivesError
  ) {
    console.error(
      governanceOverviewError || executiveVotesSummaryError || executivesError
    );
  }

  return (
    <FlexPage title="Governance Polls">
      <Card sx={{ flex: '1 1 100%' }} header={{ title: 'Governance Polls' }}>
        <FlexRow>
          <Kpi
            title="MKR in Hat"
            value={
              governanceOverviewData
                ? intl.formatNumber(
                    governanceOverviewData.mkr_locked_in_governing_executive,
                    {
                      maximumFractionDigits: 0
                    }
                  )
                : null
            }
            error={governanceOverviewError}
            sx={{ border: 'none', flexBasis: '20%' }}
          />

          <Box sx={{ flex: '1 1 70%' }}>
            <GovernanceExecutivesLineChart
              data={executivesData}
              error={executivesError}
            />
          </Box>
        </FlexRow>
      </Card>

      <Card sx={{ flex: '1 1 100%' }}>
        <ExecutiveVotesTable
          data={executiveVotesSummaryData}
          error={executiveVotesSummaryError}
        />
      </Card>
    </FlexPage>
  );
}

function useGetDelegatesData() {
  const executiveVotesSummaryFetcher: Fetcher<ExecutivesSummary[]> =
    dataApiClient.v1.readExecutivesSummaryV1GovernanceExecutivesSummaryGet;
  const governanceOverviewFetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;
  const executivesFetcher: Fetcher<Executive[]> =
    dataApiClient.v1.readExecutivesV1GovernanceExecutivesGet;

  const { data: executiveVotesSummaryData, error: executiveVotesSummaryError } =
    useSwr<ExecutivesSummary[], Error>(
      'executiveVotesSummary',
      executiveVotesSummaryFetcher
    );

  const { data: governanceOverviewData, error: governanceOverviewError } =
    useSwr<TOverview, Error>('governanceOverview', governanceOverviewFetcher);

  const { data: executivesData, error: executivesError } = useSwr<
    Executive[],
    Error
  >('executives', () =>
    // TODO: we should get current executive in hat or this endpoint optinally should return executive for current hat
    executivesFetcher({
      executive: '0xdf4f93454cbfc864a8f045bd22566824360042b7'
    })
  );

  return {
    executiveVotesSummaryData,
    governanceOverviewData,
    executiveVotesSummaryError,
    governanceOverviewError,
    executivesData,
    executivesError
  };
}
