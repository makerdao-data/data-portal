import { useIntl } from 'next-intl';
import { useMemo } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr, { Fetcher } from 'swr';
import Card from '../../components/Card';
import FlexRow from '../../components/grid/FlexRow';
import Kpi from '../../components/Kpi';
import { dataApiClient } from '../../data/dataApiClient';
import FlexPage from '../../molecules/Page';
import {
  RequestParams,
  Overview as TOverview,
  Poll,
  VotesSummary
} from '../../__generated__/dataAPI';
import { Box, Flex } from 'theme-ui';
import TotalPollsTable from '../../molecules/governance/TotalPollsTable';
import GovernancePollsBarChart from '../../molecules/governance/GovernancePollsBarChart';

export default function PollVotes() {
  const intl = useIntl();
  const {
    pollsSummary,
    pollsSummaryError,
    votesSummary,
    votesSummaryError,
    governanceOverviewData,
    governanceOverviewError
  } = useGetDelegatesData();

  if (pollsSummaryError || votesSummaryError) {
    console.error(pollsSummaryError);
    console.error(votesSummaryError);
  }

  const kpisData = useMemo(() => {
    if (votesSummary) {
      const currentMonthVotesSummary = votesSummary[votesSummary.length - 1];
      const previousMonthVotesSummary = votesSummary[votesSummary.length - 2];

      const currentMonthMkrUsed =
        (currentMonthVotesSummary?.recognized || 0) +
        (currentMonthVotesSummary?.shadow || 0) +
        (currentMonthVotesSummary?.regular || 0);
      const previousMonthMkrUsed =
        (previousMonthVotesSummary?.recognized || 0) +
        (previousMonthVotesSummary?.shadow || 0) +
        (previousMonthVotesSummary?.regular || 0);
      const differenceWithPreviousMonthMkrUsed =
        (currentMonthMkrUsed - previousMonthMkrUsed) / currentMonthMkrUsed;

      const currentMonthUniqueVoters =
        currentMonthVotesSummary?.unique_voters || 0;
      const differenceWithPreviousMonthUniqueVoters =
        (currentMonthUniqueVoters -
          (previousMonthVotesSummary?.unique_voters || 0)) /
        currentMonthUniqueVoters;

      return {
        currentMonthMkrUsed,
        formattedCurrentMonthMkrUsed: intl.formatNumber(currentMonthMkrUsed, {
          notation: 'compact',
          maximumFractionDigits: 2
        }),
        currentMonthUniqueVoters,
        formattedCurrentMonthUniqueVoters: intl.formatNumber(
          currentMonthUniqueVoters,
          {
            notation: 'compact',
            maximumFractionDigits: 2
          }
        ),
        mkrUsedChange: intl.formatNumber(differenceWithPreviousMonthMkrUsed, {
          style: 'percent',
          maximumFractionDigits: 0,
          signDisplay: 'always'
        }),
        uniqueVotersChange: intl.formatNumber(
          differenceWithPreviousMonthUniqueVoters,
          {
            style: 'percent',
            maximumFractionDigits: 0,
            signDisplay: 'always'
          }
        )
      };
    }

    return {
      formattedCurrentMonthMkrUsed: null,
      currentMonthMkrUsed: null,
      formattedCurrentMonthUniqueVoters: null,
      currentMonthUniqueVoters: null,
      mkrUsedChange: '0',
      uniqueVotersChange: '0'
    };
  }, [intl, votesSummary]);

  return (
    <FlexPage title="Governance Polls">
      <Card sx={{ flex: '1 1 100%' }} header={{ title: 'Governance Polls' }}>
        <FlexRow>
          <Flex sx={{ flex: '1 1 30%', flexDirection: 'column', gap: 24 }}>
            <Kpi
              title="MKR used last month"
              value={kpisData.formattedCurrentMonthMkrUsed}
              error={votesSummaryError}
              unit="MKR"
              delta={
                <Text
                  role="textbox"
                  aria-label="Diff. MKR used in polls"
                  variant="muted"
                  sx={{
                    color:
                      kpisData.mkrUsedChange[0] === '+' ? 'success' : 'error'
                  }}>
                  {`${kpisData.mkrUsedChange} last month`}
                </Text>
              }
              sx={{ border: 'none' }}
            />

            <Kpi
              title="Voters last month"
              value={kpisData.formattedCurrentMonthUniqueVoters}
              error={votesSummaryError}
              unit="Voters"
              delta={
                <Text
                  role="textbox"
                  aria-label="Diff. voters in polls"
                  variant="muted"
                  sx={{
                    color:
                      kpisData.uniqueVotersChange[0] === '+'
                        ? 'success'
                        : 'error'
                  }}>
                  {`${kpisData.uniqueVotersChange} last month`}
                </Text>
              }
              sx={{ border: 'none' }}
            />
          </Flex>

          <Box sx={{ flex: '1 1 70%' }}>
            <GovernancePollsBarChart
              data={governanceOverviewData}
              error={governanceOverviewError}
            />
          </Box>
        </FlexRow>
      </Card>

      <Card sx={{ flex: '1 1 100%' }}>
        <TotalPollsTable data={pollsSummary} error={pollsSummaryError} />
      </Card>
    </FlexPage>
  );
}

function useGetDelegatesData() {
  const pollsSummaryFetcher: Fetcher<Poll[]> =
    dataApiClient.v1.readPollsDetailsV1GovernancePollsSummaryGet;
  const votesSummaryFetcher: Fetcher<VotesSummary[]> =
    dataApiClient.v1.readVotesSummaryV1GovernanceVotesSummaryGet;
  const governanceOverviewFetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;

  const { data: pollsSummary, error: pollsSummaryError } = useSwr<
    Poll[],
    Error
  >('pollsSummary', pollsSummaryFetcher);

  const { data: votesSummary, error: votesSummaryError } = useSwr<
    VotesSummary[],
    Error
  >('votesSummary', votesSummaryFetcher);

  const { data: governanceOverviewData, error: governanceOverviewError } =
    useSwr<TOverview, Error>('governanceOverview', governanceOverviewFetcher);

  return {
    pollsSummary,
    votesSummary,
    governanceOverviewData,
    pollsSummaryError,
    votesSummaryError,
    governanceOverviewError
  };
}
