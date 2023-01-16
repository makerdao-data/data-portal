import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import voters from '../../e2e/fixtures/voters.json';
import VotersTable from '../../molecules/governance/VotersTable';

export type Voter = {
  current_votes_title: string;
  current_votes_address: string;
  last: string;
  since: string;
  stake: string;
  voter_alias: string;
  voter_address: string;
};

export default function Voters() {
  const data = voters;

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Governance - Voters</Text>

      <VotersTable data={data} />
    </Flex>
  );
}
