import { Text } from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';
import { useMemo } from 'react';
import { DelegatesSupport } from '../../__generated__/dataAPI';
import TableSkeleton from '../../components/TableSkeleton';
import {
  Table,
  THead,
  TRow,
  THeader,
  TBody,
  TCell
} from '../../components/table';
import { addressShortener } from '../../utils/block-chain-utils';
import { Link } from 'theme-ui';

type TopDelegatesTableProps = {
  data: DelegatesSupport[] | undefined;
  totalDelegated: number | undefined;
  error: Error | undefined;
};

export default function TopDelegatesTable({
  data,
  totalDelegated,
  error
}: TopDelegatesTableProps) {
  const intl = useIntl();

  const formattedData = useMemo(() => {
    if (data && totalDelegated) {
      const top5 = data.sort((a, b) => b.amount - a.amount).slice(0, 5);

      return top5.map(({ delegate, amount, vote_delegate }) => ({
        name: delegate,
        amount: intl.formatNumber(amount, {
          notation: 'compact',
          maximumFractionDigits: 0
        }),
        percentOfDelegated: intl.formatNumber(amount / totalDelegated, {
          style: 'percent',
          maximumFractionDigits: 0
        }),
        contract: vote_delegate
      }));
    }

    return [];
  }, [data, intl, totalDelegated]);

  if (error) {
    console.error(error);
  }

  return (
    <Table
      sx={{
        table: {
          textAlign: 'left',
          tableLayout: 'fixed',
          ['th']: {
            padding: 0,
            paddingBottom: 16,
            border: 'none'
          },
          ['td']: {
            padding: '4px 0',
            verticalAlign: 'baseline',
            whiteSpace: 'nowrap',
            backgroundColor: 'surface',
            border: 'none'
          }
        },
        tableSuperContainer: {
          border: 'none'
        },
        tableContainer: {
          position: 'relative',
          overflowX: 'auto'
        }
      }}
      aria-label="Top Delegates table">
      <THead>
        <TRow>
          <THeader
            sx={{
              width: ['150px', '150px', '150px'],
              minWidth: ['150px', '150px', '150px'],
              maxWidth: ['150px', '150px', '150px'],
              left: '0px',
              position: 'sticky'
            }}>
            Name
          </THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>
            Delegated MKR
          </THeader>
          <THeader sx={{ width: '140px', textAlign: 'right' }}>% MKR</THeader>
          <THeader sx={{ width: '180px', textAlign: 'right' }}>
            Contract
          </THeader>
        </TRow>
      </THead>

      {error ? (
        <TBody>
          <TRow>
            <TCell sx={{ textAlign: 'center' }} colSpan={4}>
              <Text variant="error" role="textbox" aria-label="Error message">
                {'Top Delegates data is not available at the moment.'}
              </Text>
            </TCell>
          </TRow>
        </TBody>
      ) : (
        <TBody>
          {formattedData.length > 0 ? (
            formattedData.map(
              ({ name, amount, contract, percentOfDelegated }) => {
                return (
                  <TRow key={name} aria-label={name + ' table row'}>
                    <TCell
                      aria-label={name + ' name cell'}
                      sx={{
                        width: '200px',
                        minWidth: '200px',
                        maxWidth: '200px',
                        left: '0px',
                        position: 'sticky',
                        backgroundColor: 'background'
                      }}>
                      <Text>{name}</Text>
                    </TCell>

                    <TCell
                      aria-label={name + ' delegated mkr cell'}
                      sx={{ textAlign: 'right' }}>
                      <Text>{amount}</Text>
                    </TCell>

                    <TCell
                      aria-label={name + ' %MKR cell'}
                      sx={{ textAlign: 'right' }}>
                      <Text>{percentOfDelegated}</Text>
                    </TCell>

                    <TCell
                      aria-label={name + ' contract cell'}
                      sx={{
                        textAlign: 'right',
                        position: 'relative'
                      }}>
                      <Text>
                        <Link
                          target="_blank"
                          href={'https://etherscan.io/address/' + contract}>
                          {addressShortener(contract)}
                        </Link>
                      </Text>
                    </TCell>
                  </TRow>
                );
              }
            )
          ) : (
            <TableSkeleton rows={3} cols={4} />
          )}
        </TBody>
      )}
    </Table>
  );
}
