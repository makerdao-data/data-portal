import { useIntl } from 'next-intl';
import { Fragment, useMemo, useState } from 'react';
import {
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
  Column,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState
} from 'react-table';
import { Box, Flex, Input, Link, useColorMode } from 'theme-ui';
import {
  Table,
  THead,
  TRow,
  THeader,
  TBody,
  TCell
} from '../../components/table';
import { Voter } from '../../pages/governance/voters';
import { addressShortener } from '../../utils/block-chain-utils';
import 'regenerator-runtime/runtime';
import {
  SearchIcon,
  Button,
  Select,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@makerdao-dicu/makerdao-ui';

type VotersTableProps = {
  data: Voter[];
};

export default function VotersTable({ data }: VotersTableProps) {
  const intl = useIntl();
  const [colorMode] = useColorMode();

  const columns: Column<Voter>[] = useMemo(() => {
    return [
      {
        Header: 'Voter',
        Cell: ({ row }: { row: { original: Voter } }) => (
          <Link href={`/voters/${row.original.voter_address}`}>
            {row.original.voter_alias.startsWith('0x')
              ? addressShortener(row.original.voter_alias)
              : row.original.voter_alias}
          </Link>
        ),
        accessor: 'voter_alias'
      },
      {
        Header: 'Stake (MKR)',
        accessor: 'stake'
      },
      {
        Header: 'Current votes',
        Cell: ({ row }: { row: { original: Voter } }) => (
          <Link href={`/voters/votes/${row.original.current_votes_address}`}>
            {row.original.current_votes_title}
          </Link>
        ),
        accessor: 'current_votes_title'
      },
      {
        Header: 'Since',
        accessor: (row: Voter) =>
          intl.formatDateTime(new Date(row.since), {
            dateStyle: 'medium'
          }),
        id: 'since'
      },
      {
        Header: 'Last voting',
        accessor: (row: Voter) =>
          intl.formatDateTime(new Date(row.last), {
            dateStyle: 'medium'
          }),
        id: 'last'
      }
    ];
  }, [intl]);

  const tableInstance = useTable(
    { data, columns },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize
  } = tableInstance;

  const rowsBorderColor = colorMode === 'light' ? 'secondary' : 'onSurface';

  return (
    <Fragment>
      <Flex
        sx={{
          // justifyContent: 'flex-end',
          border: '1px solid',
          borderRadius: '8px',
          borderColor: 'secondary',
          padding: '0 0.5rem'
        }}>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </Flex>

      <Table
        {...getTableProps()}
        sx={{
          table: {
            textAlign: 'left',
            tableLayout: 'fixed'
          },
          tableContainer: {
            position: 'relative',
            overflowX: 'auto',
            maxWidth: [
              'calc(100vw - 3rem)',
              'calc(100vw - 276px)',
              'calc(100vw - 276px)'
            ]
          }
        }}>
        <THead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key
            <TRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                // eslint-disable-next-line react/jsx-key
                <THeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  sx={
                    index === 0
                      ? {
                          width: columnsWidths[index],
                          minWidth: ['100px', '100px', '240px'],
                          maxWidth: ['100px', '100px', '240px'],
                          left: '0px',
                          position: 'sticky'
                        }
                      : { width: columnsWidths[index], textAlign: 'right' }
                  }>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </THeader>
              ))}
            </TRow>
          ))}
        </THead>

        <TBody {...getTableBodyProps}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/jsx-key
              <TRow
                {...row.getRowProps()}
                sx={{
                  borderBottom: index < page.length - 1 ? '1px solid' : 'none',
                  borderColor: rowsBorderColor
                }}>
                {row.cells.map((cell, index) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <TCell
                      {...cell.getCellProps()}
                      sx={
                        index === 0
                          ? {
                              width: columnsWidths[index],
                              minWidth: ['100px', '100px', '240px'],
                              maxWidth: ['100px', '100px', '240px'],
                              left: '0px',
                              position: 'sticky',
                              backgroundColor: 'background',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }
                          : {
                              width: columnsWidths[index],
                              textAlign: 'right',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }
                      }>
                      {cell.render('Cell')}
                    </TCell>
                  );
                })}
              </TRow>
            );
          })}
        </TBody>
      </Table>

      <Flex sx={{ gap: 2, justifyContent: 'end', alignItems: 'center' }}>
        <Button
          variant="smallOutline"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          sx={{ lineHeight: 0, height: 30 }}>
          First
        </Button>{' '}
        <Button
          variant="smallOutline"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          sx={{ lineHeight: 0 }}>
          <ChevronLeftIcon height={12} width={12} />
        </Button>{' '}
        <Button
          variant="smallOutline"
          onClick={() => nextPage()}
          disabled={!canNextPage}
          sx={{ lineHeight: 0 }}>
          <ChevronRightIcon height={12} width={12} />
        </Button>{' '}
        <Button
          variant="smallOutline"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          sx={{ lineHeight: 0, height: 30 }}>
          Last
        </Button>{' '}
        <span>
          Page{' '}
          <strong>
            {state.pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <Select
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          sx={{
            padding: '2px 8px',
            paddingRight: 32
          }}>
          {[10, 20, 30, 40, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>
    </Fragment>
  );
}

const columnsWidths = [
  ['100px', '100px', '240px'],
  '100px',
  '700px',
  '120px',
  '120px'
];

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}: Partial<UseGlobalFiltersInstanceProps<Voter>> &
  UseGlobalFiltersState<Voter>) {
  const count = preGlobalFilteredRows?.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter ? setGlobalFilter(value || undefined) : () => undefined;
  }, 200);

  return (
    <Flex>
      <Box sx={{ alignSelf: 'center', lineHeight: 0 }}>
        <SearchIcon
          viewBox="0 0 14 15"
          width={20}
          height={20}
          color="#7E7E88"
        />
      </Box>
      <Input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        sx={{
          fontSize: '1.1rem',
          border: '0',
          backgroundColor: 'transparent',
          width: 'auto',
          display: 'inline-block'
        }}
      />
    </Flex>
  );
}
