import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr, { Fetcher } from 'swr';
import {
  RequestParams,
  Overview as TOverview,
  Voter
} from '../../__generated__/dataAPI';
// import MainAreaChart from '../../molecules/MainAreaChart';
import { dataApiClient } from '../../data/dataApiClient';
import { useIntl } from 'next-intl';
import OverviewVoterTypesTable from '../../molecules/governance/OverviewVoterTypesTable';
import KpiCard from '../../components/KpiCard';
import DelegatesWeightChart from '../../molecules/governance/DelegatesWeightChart';
import Card from '../../components/Card';
import VotersTable from '../../molecules/governance/VotersTable';
import GoverningExecutiveCard from '../../molecules/governance/GoverningExecutiveCard';
// import AvgVotersInPollCard from '../../molecules/governance/AvgVotersInPollCard';

export default function Overview() {
  const intl = useIntl();
  const governanceOverviewFetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;
  const votersFetcher: Fetcher<Voter[], RequestParams> =
    dataApiClient.v1.readVotersV1GovernanceVotersGet;

  const { data: votersData, error: votersError } = useSwr<Voter[], Error>(
    'voters',
    votersFetcher
  );

  const { data: governanceData, error: governanceOverviewError } = useSwr<
    TOverview,
    Error
  >('governanceOverview', governanceOverviewFetcher);
  // const downloadVotersData = useCallback(() => {
  //   const headers = [
  //     { label: 'Address', key: 'voter_address' },
  //     { label: 'Alias', key: 'voter_alias' },
  //     { label: 'Type', key: 'type' },
  //     { label: 'Stake', key: 'stake' },
  //     { label: 'Current votes', key: 'current_votes' },
  //     { label: 'Since', key: 'since' },
  //     { label: 'Last voting', key: 'last' }
  //   ];

  //   if (data) {
  //     const csvData = data.map((voter) => {
  //       return {
  //         ...voter,
  //         stake: intl.formatNumber(voter.stake),
  //         current_votes: voter.current_votes
  //           .map(({ address, title }) => `${address}: ${title}`)
  //           .join('\r\n'),
  //         since: intl.formatDateTime(new Date(voter.since), {
  //           dateStyle: 'medium'
  //         }),
  //         last: intl.formatDateTime(new Date(voter.last), {
  //           dateStyle: 'medium'
  //         })
  //       };
  //     }, [] as ReactCsvData);

  //     return {
  //       headers,
  //       data: csvData,
  //       filename: 'voters'
  //     };
  //   }

  //   return {
  //     headers,
  //     data: [] as ReactCsvData,
  //     filename: 'DAI_total_supply'
  //   };
  // }, [data, intl]);

  if (votersError || governanceOverviewError) {
    console.error(votersError || governanceOverviewError);
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
          <Card sx={{ padding: '8px' }}>
            <KpiCard
              title="Staked MKR in Chief"
              value={
                governanceData
                  ? intl.formatNumber(
                      governanceData.total_mkr_locked_in_cheif,
                      {
                        maximumFractionDigits: 2
                      }
                    )
                  : undefined
              }
              change={0}
              // exportMethod={downloadVotersData}
              sx={{ border: 'none' }}
            />
          </Card>
        )}

        <Card title="Voters" sx={{ flex: '1 1 0%' }}>
          <OverviewVoterTypesTable
            data={governanceData}
            error={governanceOverviewError}
          />
        </Card>
      </Flex>

      <DelegatesWeightChart />

      <GoverningExecutiveCard
        data={governanceData}
        error={governanceOverviewError}
      />

      {/* <AvgVotersInPollCard
        data={governanceData}
        error={governanceOverviewError}
      /> */}

      <Card>
        <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
          <KpiCard
            noChangeInfo
            title="Total voters"
            value={
              votersData
                ? intl.formatNumber(votersData.length, {
                    maximumFractionDigits: 0
                  })
                : undefined
            }
            // exportMethod={downloadVotersData}
            sx={{ border: 'none', minWidth: 145, padding: 0 }}
          />

          {votersError ? (
            <Text variant="error" role="textbox" aria-label="Error message">
              {'Voters data is not available at the moment.'}
            </Text>
          ) : (
            <VotersTable title="List of voters" data={votersData} />
          )}
        </Flex>
      </Card>
    </Flex>
  );
}
