import { useIntl } from 'next-intl';
import { useCallback } from 'react';
import useSwr, { Fetcher } from 'swr';
import { Flex } from 'theme-ui';
import Card from '../../components/Card';
import Kpi from '../../components/Kpi';
import { dataApiClient } from '../../data/dataApiClient';
import { Voter, RequestParams } from '../../__generated__/dataAPI';
import VotersTable from './VotersTable';
import { Data as ReactCsvData } from 'react-csv/components/CommonPropTypes';
import { Text } from '@makerdao-dicu/makerdao-ui';

export default function OverviewVotersCard() {
  const intl = useIntl();
  const votersFetcher: Fetcher<Voter[], RequestParams> =
    dataApiClient.v1.readVotersV1GovernanceVotersGet;

  const { data, error } = useSwr<Voter[], Error>('voters', votersFetcher);

  const downloadVotersData = useCallback(() => {
    const headers = [
      { label: 'Address', key: 'voter_address' },
      { label: 'Alias', key: 'voter_alias' },
      { label: 'Type', key: 'type' },
      { label: 'Stake', key: 'stake' },
      { label: 'Current votes', key: 'current_votes' },
      { label: 'Since', key: 'since' },
      { label: 'Last voting', key: 'last' }
    ];

    if (data) {
      const csvData = data.map((voter) => {
        return {
          ...voter,
          stake: intl.formatNumber(voter.stake),
          current_votes: voter.current_votes
            .map(({ address, title }) => `${address}: ${title}`)
            .join('\r\n'),
          since: intl.formatDateTime(new Date(voter.since), {
            dateStyle: 'medium'
          }),
          last: intl.formatDateTime(new Date(voter.last), {
            dateStyle: 'medium'
          })
        };
      }, [] as ReactCsvData);

      return {
        headers,
        data: csvData,
        filename: 'voters'
      };
    }

    return {
      headers,
      data: [] as ReactCsvData,
      filename: 'DAI_total_supply'
    };
  }, [data, intl]);

  return (
    <Card>
      <Flex sx={{ gap: 24, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <Kpi
          title="Total voters"
          value={
            data
              ? intl.formatNumber(data.length, {
                  maximumFractionDigits: 0
                })
              : null
          }
          sx={{ border: 'none', minWidth: 145, padding: 0 }}
        />

        {error ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {'Voters data is not available at the moment.'}
          </Text>
        ) : (
          <VotersTable title="List of voters" data={data} />
        )}
      </Flex>
    </Card>
  );
}
