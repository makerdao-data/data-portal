import { Fragment, useRef, useState } from 'react';
import {
  useAsyncDebounce,
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
  Column,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState,
  TableInstance
} from 'react-table';
import { Box, Flex, Input, useColorMode } from 'theme-ui';
import { Table, THead, TRow, THeader, TBody, TCell } from '../components/table';
import 'regenerator-runtime/runtime';
import {
  SearchIcon,
  Button,
  Select,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@makerdao-dicu/makerdao-ui';
import { TableStyles } from '../components/table/Table';
import TableSkeleton from '../components/TableSkeleton';

interface TableData<T extends object> {
  columns: Column<T>[];
  data: T[];
}

interface DataTableProps<T extends object> {
  tableData: TableData<T>;
  sx?: TableStyles;
}

export default function DataTable<T extends object>({
  tableData,
  sx,
  ...rest
}: DataTableProps<T>) {
  const [colorMode] = useColorMode();

  const tableInstance = useTable(
    {
      data: tableData.data,
      columns: tableData.columns,
      initialState: { pageSize: 50 }
    },
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
    page
  } = tableInstance;

  const rowsBorderColor = colorMode === 'light' ? 'secondary' : 'onSurface';

  return (
    <Flex sx={{ flexDirection: 'column', gap: '2rem' }} role="table" {...rest}>
      <Flex
        sx={{
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

      <Box>
        <Table
          {...getTableProps()}
          sx={{
            table: {
              textAlign: 'left',
              tableLayout: 'fixed',
              ...sx?.table
            },
            tableContainer: {
              position: 'relative',
              overflowX: 'auto',
              maxWidth: [
                'calc(100vw - 3rem)',
                'calc(100vw - 276px)',
                'calc(100vw - 276px)'
              ],
              ...sx?.tableContainer
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
            {page.length ? (
              page.map((row, index) => {
                prepareRow(row);
                return (
                  // eslint-disable-next-line react/jsx-key
                  <TRow
                    {...row.getRowProps()}
                    sx={{
                      borderBottom:
                        index < page.length - 1 ? '1px solid' : 'none',
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
              })
            ) : (
              <TableSkeleton rows={3} cols={5} />
            )}
          </TBody>
        </Table>
      </Box>

      <Box>{page.length ? <Pagination {...tableInstance} /> : null}</Box>
    </Flex>
  );
}

const columnsWidths = [
  ['100px', '100px', '240px'],
  '100px',
  '700px',
  '120px',
  '120px'
];

function Pagination<T extends object>({
  state,
  canPreviousPage,
  gotoPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageOptions,
  setPageSize
}: TableInstance<T>) {
  return (
    <Flex
      sx={{ gap: 2, justifyContent: 'end', alignItems: 'center' }}
      aria-label="Data table pagination">
      <Button
        variant="smallOutline"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        aria-disabled={!canPreviousPage}
        sx={{ lineHeight: 0, height: 30 }}
        aria-label="First page button">
        First
      </Button>{' '}
      <Button
        variant="smallOutline"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        aria-disabled={!canPreviousPage}
        sx={{ lineHeight: 0 }}
        aria-label="Previous page button">
        <ChevronLeftIcon height={12} width={12} />
      </Button>{' '}
      <Button
        variant="smallOutline"
        onClick={() => nextPage()}
        disabled={!canNextPage}
        aria-disabled={!canNextPage}
        sx={{ lineHeight: 0 }}
        aria-label="Next page button">
        <ChevronRightIcon height={12} width={12} />
      </Button>{' '}
      <Button
        variant="smallOutline"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        aria-disabled={!canNextPage}
        sx={{ lineHeight: 0, height: 30 }}
        aria-label="Last page button">
        Last
      </Button>{' '}
      <span role="textbox" aria-label="Page number">
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
        }}
        aria-label="Page size select">
        {[10, 20, 30, 40, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

function GlobalFilter<T extends object>({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter
}: Partial<UseGlobalFiltersInstanceProps<T>> & UseGlobalFiltersState<T>) {
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
        aria-label="Data table global filter"
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
