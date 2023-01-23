import { useIntl } from 'next-intl';
import { Fragment, useMemo } from 'react';
import { Link } from 'theme-ui';
import 'regenerator-runtime/runtime';
import { addressShortener } from '../../utils/block-chain-utils';
import DataTable from '../DataTable';
import { Voter } from '../../__generated__/dataAPI';

type VotersTableProps = {
  data: Voter[];
};

export default function VotersTable({ data }: VotersTableProps) {
  const intl = useIntl();

  const columns: any[] = useMemo(() => {
    return [
      {
        Header: 'Voter',
        Cell: ({ row }: { row: { original: Voter } }) => (
          <Link href={`/voters/${row.original.voter_address}`}>
            {row.original.voter_alias
              ? addressShortener(row.original.voter_alias)
              : addressShortener(row.original.voter_address)}
          </Link>
        ),
        accessor: 'voter_alias'
      },
      {
        Header: 'Stake (MKR)',
        accessor: (row: Voter) =>
          intl.formatNumber(row.stake, {
            maximumFractionDigits: 2
          }),
        id: 'stake'
      },
      {
        Header: 'Current votes',
        Cell: ({ row }: { row: { original: Voter } }) => (
          <Fragment>
            {row.original.current_votes.map(({ address, title }) => (
              <Link key={address} href={`/voters/votes/${address}`}>
                {title}
              </Link>
            ))}
          </Fragment>
        ),
        accessor: (row: Voter) =>
          row.current_votes
            .map(({ address, title }) => `${address} ${title}`)
            .join(),
        id: 'current_votes'
      },
      {
        Header: 'Since',
        Cell: ({ row }: { row: { original: Voter } }) =>
          intl.formatDateTime(new Date(row.original.since), {
            dateStyle: 'medium'
          }),
        accessor: (row: Voter) => new Date(row.since).getTime(),
        id: 'since'
      },
      {
        Header: 'Last voting',
        Cell: ({ row }: { row: { original: Voter } }) =>
          intl.formatDateTime(new Date(row.original.last), {
            dateStyle: 'medium'
          }),
        accessor: (row: Voter) => new Date(row.last).getTime(),
        id: 'last'
      }
    ];
  }, [intl]);

  return <DataTable tableData={{ data, columns }} aria-label="Voters Table" />;
}
