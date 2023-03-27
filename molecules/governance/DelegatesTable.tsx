import { useIntl } from 'next-intl';
import { Fragment, useMemo } from 'react';
import { CurrentDelegates } from '../../__generated__/dataAPI';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Link } from 'theme-ui';
import { addressShortener } from '../../utils/block-chain-utils';
import DataTable from '../DataTable';

type DelegatesTableProps = {
  data: CurrentDelegates[] | undefined;
  error: Error | undefined;
};

export default function DelegatesTable({ data, error }: DelegatesTableProps) {
  const intl = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: any[] = useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: (row: CurrentDelegates) => row.name,
        id: 'name'
      },
      {
        Header: '% MKR',
        Cell: ({ row }: { row: { original: CurrentDelegates } }) =>
          intl.formatNumber(row.original.percent / 100, {
            style: 'percent',
            maximumFractionDigits: 0
          }),
        accessor: (row: CurrentDelegates) =>
          intl.formatNumber(row.percent, {
            maximumFractionDigits: 0
          }),
        id: 'percent'
      },
      {
        Header: 'Delegators',
        Cell: ({ row }: { row: { original: CurrentDelegates } }) =>
          intl.formatNumber(row.original.delegators, {
            maximumFractionDigits: 0
          }),
        accessor: (row: CurrentDelegates) => row.delegators,
        id: 'delegators'
      },
      {
        Header: 'Latest Compensation',
        Cell: ({ row }: { row: { original: CurrentDelegates } }) =>
          row.original.latest_compensation
            ? intl.formatNumber(row.original.latest_compensation, {
                maximumFractionDigits: 2
              })
            : '–',
        accessor: (row: CurrentDelegates) => row.latest_compensation,
        id: 'latest_compensation'
      },
      {
        Header: 'Active Contract',
        Cell: ({ row }: { row: { original: CurrentDelegates } }) => (
          <Link
            target="_blank"
            href={
              'https://etherscan.io/address/' + row.original.active_contract
            }>
            {addressShortener(row.original.active_contract)}
          </Link>
        ),
        accessor: (row: CurrentDelegates) => row.active_contract,
        id: 'active_contract'
      }
    ];
  }, [intl]);

  return (
    <Fragment>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {'Delegates data is not available at the moment.'}
        </Text>
      ) : (
        <DataTable
          title={`Total Recognized Delegates (${
            data
              ? intl.formatNumber(data.length, {
                  maximumFractionDigits: 0
                })
              : '–'
          })`}
          tableData={{ data: data ?? [], columns }}
          aria-label="Delegates Table"
        />
      )}
    </Fragment>
  );
}
