import { Text } from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';
import { useMemo } from 'react';
import { Overview } from '../../__generated__/dataAPI';
import { Progress } from 'theme-ui';
import TableSkeleton from '../../components/TableSkeleton';
import {
  Table,
  THead,
  TRow,
  THeader,
  TBody,
  TCell
} from '../../components/table';

type OverviewVoterTypesTableProps = {
  data: Overview | undefined;
  error: Error | undefined;
};

enum VoterType {
  shadow = 'Shadow',
  recognized = 'Recognized',
  other = 'Voting MKR holder'
}

export default function OverviewVoterTypesTable({
  data,
  error
}: OverviewVoterTypesTableProps) {
  const intl = useIntl();

  const aggregatedVoterTypesData = useMemo(() => {
    if (data !== undefined) {
      return [
        {
          voterType: VoterType.shadow,
          votingMkr: intl.formatNumber(data.mkr_locked_in_chief_by_shadow, {
            minimumIntegerDigits: 2
          }),
          uniqueAddress: intl.formatNumber(data.unique_shadow, {
            maximumFractionDigits: 2
          }),
          stakedInHat: data.mkr_locked_in_hat_from_shadow,
          total: data.total_mkr_locked_in_cheif
        },
        {
          voterType: VoterType.recognized,
          votingMkr: intl.formatNumber(data.mkr_locked_in_chief_by_recognized, {
            minimumIntegerDigits: 2
          }),
          uniqueAddress: intl.formatNumber(data.unique_recognized, {
            maximumFractionDigits: 2
          }),
          stakedInHat: data.mkr_locked_in_hat_from_recognized,
          total: data.total_mkr_locked_in_cheif
        },
        {
          voterType: VoterType.shadow,
          votingMkr: intl.formatNumber(data.mkr_locked_in_chief_by_shadow, {
            minimumIntegerDigits: 2
          }),
          uniqueAddress: intl.formatNumber(data.unique_regular, {
            maximumFractionDigits: 2
          }),
          stakedInHat: data.mkr_locked_in_hat_from_regular,
          total: data.total_mkr_locked_in_cheif
        }
      ];
    }

    return [];
  }, [data, intl]);

  if (error) {
    console.error(error);
  }

  return (
    <Table
      sx={{
        table: {
          textAlign: 'left',
          tableLayout: 'fixed',
          ['td, th']: {
            padding: '9px, 16px',
            verticalAlign: 'baseline',
            whiteSpace: 'nowrap',
            backgroundColor: 'surface'
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
      aria-label="Voter types table">
      <THead>
        <TRow>
          <THeader
            sx={{
              width: ['100px', '100px', '100px'],
              minWidth: ['100px', '100px', '100px'],
              maxWidth: ['100px', '100px', '100px'],
              left: '0px',
              position: 'sticky'
            }}>
            Voter type
          </THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>
            Voting MKR
          </THeader>
          <THeader sx={{ width: '140px', textAlign: 'right' }}>
            Unique addresses
          </THeader>
          <THeader sx={{ width: '180px', textAlign: 'right' }}>
            Staked in hat
          </THeader>
        </TRow>
      </THead>

      {error ? (
        <TBody>
          <TRow>
            <TCell sx={{ textAlign: 'center' }} colSpan={6}>
              <Text variant="error" role="textbox" aria-label="Error message">
                {'Voter types data is not available at the moment.'}
              </Text>
            </TCell>
          </TRow>
        </TBody>
      ) : (
        <TBody>
          {aggregatedVoterTypesData ? (
            aggregatedVoterTypesData.map(
              ({ voterType, votingMkr, uniqueAddress, stakedInHat, total }) => {
                return (
                  <TRow
                    key={voterType}
                    aria-label={voterType + ' voters type table row'}>
                    <TCell
                      aria-label={voterType + ' voter type cell'}
                      sx={{
                        width: '180px',
                        minWidth: '180px',
                        maxWidth: '180px',
                        left: '0px',
                        position: 'sticky',
                        backgroundColor: 'background'
                      }}>
                      <Text>{voterType}</Text>
                    </TCell>

                    <TCell
                      aria-label={voterType + ' voting mkr cell'}
                      sx={{ textAlign: 'right' }}>
                      <Text>{votingMkr}</Text>
                    </TCell>

                    <TCell
                      aria-label={voterType + ' unique addresses cell'}
                      sx={{ textAlign: 'right' }}>
                      <Text>{uniqueAddress}</Text>
                    </TCell>

                    <TCell
                      aria-label={voterType + ' staked in hat cell'}
                      sx={{
                        textAlign: 'right',
                        position: 'relative'
                        // zIndex: -1
                      }}>
                      <Text
                        sx={{
                          position: 'absolute',
                          left: '55%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: 3
                        }}>
                        {`${intl.formatNumber(stakedInHat, {
                          notation: 'compact',
                          maximumFractionDigits: 2
                        })} / ${intl.formatNumber(total, {
                          notation: 'compact',
                          maximumFractionDigits: 2
                        })} (${intl.formatNumber(stakedInHat / total, {
                          style: 'percent',
                          maximumFractionDigits: 2
                        })})`}
                      </Text>
                      <Progress
                        max={1}
                        value={stakedInHat / total}
                        color={stakedInHat / total >= 0.8 ? 'error' : 'primary'}
                        sx={{
                          height: 24,
                          backgroundColor: 'surface',
                          border: '1px solid',
                          borderColor: 'secondary',
                          display: 'inline-block',
                          width: '90%',
                          borderRadius: '8px'
                        }}
                      />
                    </TCell>
                  </TRow>
                );
              }
            )
          ) : (
            <TableSkeleton rows={3} cols={6} />
          )}
        </TBody>
      )}
    </Table>
  );
}
