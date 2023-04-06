import { useIntl } from 'next-intl';
import { Fragment, useMemo } from 'react';
import { Poll } from '../../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Link } from 'theme-ui';
import DataTable from '../DataTable';

type TotalPollsTableProps = {
  data: Poll[] | undefined;
  error: Error | undefined;
};

export default function TotalPollsTable({ data, error }: TotalPollsTableProps) {
  const intl = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: any[] = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: (row: Poll) => row.title,
        id: 'title'
      },
      {
        Header: 'Posted',
        Cell: ({ row }: { row: { original: Poll } }) =>
          intl.formatDateTime(new Date(row.original.start_timestamp), {
            dateStyle: 'medium'
          }),
        accessor: (row: Poll) => new Date(row.start_timestamp).getTime(),
        id: 'start_timestamp'
      },
      {
        Header: 'Result',
        accessor: (row: Poll) => (row.results ? row.winning_option : ''),
        id: 'winning_option'
      },
      {
        Header: 'Poll ID',
        Cell: ({ row }: { row: { original: Poll } }) => (
          <Link href={`/governance/poll-votes/${row.original.poll_id}`}>
            {row.original.poll_id}
          </Link>
        ),
        accessor: (row: Poll) => row.poll_id,
        id: 'poll_id'
      }
    ];
  }, [intl]);

  return (
    <Fragment>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Polls data is not available at the moment.'}
        </Text>
      ) : (
        <DataTable
          title={`Total Polls (${
            data
              ? intl.formatNumber(data.length, {
                  maximumFractionDigits: 0
                })
              : '–'
          })`}
          tableData={{ data: data ?? [], columns }}
          aria-label="Total Polls Table"
        />
      )}
    </Fragment>
  );
}
