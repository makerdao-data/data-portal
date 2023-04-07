import { useIntl } from 'next-intl';
import { Fragment, useMemo } from 'react';
import { ExecutivesSummary } from '../../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Link } from 'theme-ui';
import DataTable from '../DataTable';

type ExecutiveVotesTableProps = {
  data: ExecutivesSummary[] | undefined;
  error: Error | undefined;
};

export default function ExecutiveVotesTable({
  data,
  error
}: ExecutiveVotesTableProps) {
  const intl = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: any[] = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: (row: ExecutivesSummary) => row.title,
        id: 'title'
      },
      {
        Header: 'Posted',
        Cell: ({ row }: { row: { original: ExecutivesSummary } }) =>
          row.original.hat_prospect_timestamp
            ? intl.formatDateTime(
                new Date(row.original.hat_prospect_timestamp),
                {
                  dateStyle: 'medium'
                }
              )
            : '–',
        accessor: (row: ExecutivesSummary) =>
          row.cast_timestamp ? new Date(row.cast_timestamp).getTime() : null,
        id: 'start_timestamp'
      },
      {
        Header: 'MKR',
        Cell: ({ row }: { row: { original: ExecutivesSummary } }) =>
          row.original.approval
            ? intl.formatNumber(row.original.approval, {
                notation: 'compact',
                maximumFractionDigits: 0
              })
            : '–',
        accessor: (row: ExecutivesSummary) =>
          row.approval
            ? intl.formatNumber(row.approval, {
                notation: 'compact',
                maximumFractionDigits: 0
              })
            : '–',
        id: 'approval'
      },
      {
        Header: 'Spell',
        Cell: ({ row }: { row: { original: ExecutivesSummary } }) => (
          <Link href={`/governance/executives-votes/${row.original.dssspell}`}>
            {row.original.dssspell}
          </Link>
        ),
        accessor: (row: ExecutivesSummary) => row.dssspell,
        id: 'dssspell'
      }
    ];
  }, [intl]);

  return (
    <Fragment>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Executive votes data is not available at the moment.'}
        </Text>
      ) : (
        <DataTable
          title={`Total Votes (${
            data
              ? intl.formatNumber(data.length, {
                  maximumFractionDigits: 0
                })
              : '–'
          })`}
          tableData={{ data: data ?? [], columns }}
          aria-label="Total Executive Votes Table"
        />
      )}
    </Fragment>
  );
}
