import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import VotersTable from '../../molecules/governance/VotersTable';
import { RequestParams, Voter as TVoter } from '../../__generated__/dataAPI';
import { dataApiClient } from '../../data/dataApiClient';
import useSwr, { Fetcher } from 'swr';
import { useEffect, useRef } from 'react';

export default function Voters() {
  const fetcher: Fetcher<TVoter[], RequestParams> =
    dataApiClient.v1.readVotersV1GovernanceVotersGet;

  const { data, error } = useSwr<TVoter[], Error>('voters', fetcher);

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Governance - Voters</Text>

      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Voters data is not available at the moment.'}
        </Text>
      ) : data !== undefined ? (
        <VotersTable data={data} />
      ) : (
        <VotersTable data={[]} />
      )}
    </Flex>
  );
}
