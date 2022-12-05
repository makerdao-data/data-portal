import {
  ArbitrumIcon,
  OptimismIcon,
  StarknetIcon,
  Text
} from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';
import Link from 'next/link';
import { Fragment, useMemo } from 'react';
import { Box, Flex } from 'theme-ui';
import { Summary } from '../__generated__/dataAPI';
import { Progress } from 'theme-ui';
import TableSkeleton from '../components/TableSkeleton';

type TeleportTableProps = {
  data: Summary | undefined;
  error: Error | undefined;
};

type Bridge = {
  isOpen: string;
  ceiling?: number;
  maxDeposit?: number;
  debt: number;
  domain: string;
  hex: string;
  id: number;
  line: number;
};

export default function TeleportTable({ data, error }: TeleportTableProps) {
  const intl = useIntl();

  const aggregatedBridgesData = useMemo(() => {
    if (data !== undefined) {
      return Object.keys(data.bridges.info).reduce((memo, bridge) => {
        return [
          ...memo,
          {
            ...data.bridges.info[bridge],
            ...data.teleport_domains.domains.find(
              ({ domain }: Partial<Bridge>) =>
                DOMAIN_NAME_MAPPING[domain as Domains] === bridge
            ),
            domain: bridge
          }
        ];
      }, [] as Bridge[]);
    }

    return data;
  }, [data]);

  if (error) {
    console.error(error);
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        flexBasis: ['100%', '100%', '100%'],
        alignSelf: 'flex-start',
        gap: 2,
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        border: '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        padding: 2
      }}>
      <Fragment>
        <Text variant="microHeading">Teleport</Text>

        <Box
          sx={{
            position: 'relative',
            overflowX: 'auto'
          }}>
          <Box
            as="table"
            role="table"
            aria-label="Bridges status table"
            sx={{
              textAlign: 'left',
              fontSize: '0.9rem',
              width: '100%',
              borderCollapse: 'collapse',
              tableLayout: 'fixed',

              ['td, th']: {
                padding: '0.3rem'
              },
              ['a']: {
                color: 'primary',
                textDecoration: 'none',

                [':hover']: {
                  textDecoration: 'underline'
                }
              }
            }}>
            <thead>
              <tr>
                <Box
                  as="th"
                  sx={{
                    width: ['100px', '100px', '240px'],
                    minWidth: ['100px', '100px', '240px'],
                    maxWidth: ['100px', '100px', '240px'],
                    left: '0px',
                    position: 'sticky',
                    backgroundColor: 'background'
                  }}>
                  Name
                </Box>
                <Box as="th" sx={{ width: '100px', textAlign: 'right' }}>
                  Status
                </Box>
                <Box as="th" sx={{ width: '100px', textAlign: 'right' }}>
                  Ceiling
                </Box>
                <Box as="th" sx={{ width: '100px', textAlign: 'right' }}>
                  Max. Deposit
                </Box>
                <Box
                  as="th"
                  sx={{
                    width: '140px',
                    textAlign: 'right',
                    position: 'relative'
                  }}>
                  Fast Withdrawals
                </Box>
                <Box as="th" sx={{ width: '100px', textAlign: 'right' }}>
                  Contract
                </Box>
              </tr>
            </thead>

            {error ? (
              <tbody>
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    <Text variant="error">
                      {'Teleport data is not available at the moment.'}
                    </Text>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                {aggregatedBridgesData ? (
                  aggregatedBridgesData.map(({ domain, ...bridge }) => {
                    return (
                      <tr
                        key={domain}
                        aria-label={domain + ' Bridge status row'}>
                        <Box
                          as="td"
                          aria-label={domain + ' Bridge name cell'}
                          sx={{
                            width: '180px',
                            minWidth: '180px',
                            maxWidth: '180px',
                            left: '0px',
                            position: 'sticky',
                            backgroundColor: 'background'
                          }}>
                          <Flex sx={{ gap: '0.3rem', alignItems: 'center' }}>
                            {icons[domain]}
                            <Link href={'/l2s/' + domain}>
                              {domain[0].toUpperCase() +
                                domain.split('').splice(1).join('')}
                            </Link>
                          </Flex>
                        </Box>

                        <Box
                          as="td"
                          aria-label={domain + ' Bridge status cell'}
                          sx={{ textAlign: 'right' }}>
                          <Text
                            sx={{
                              color:
                                bridge.isOpen === 'Open' ? 'success' : 'error'
                            }}>
                            {bridge.isOpen}
                          </Text>
                        </Box>

                        <Box
                          as="td"
                          aria-label={domain + ' Bridge ceiling cell'}
                          sx={{ textAlign: 'right' }}>
                          {bridge.ceiling
                            ? intl.formatNumber(bridge.ceiling, {
                                maximumFractionDigits: 2
                              })
                            : '–'}
                        </Box>

                        <Box
                          as="td"
                          aria-label={domain + ' Bridge max deposit cell'}
                          sx={{ textAlign: 'right' }}>
                          {bridge.maxDeposit
                            ? intl.formatNumber(bridge.maxDeposit, {
                                maximumFractionDigits: 2
                              })
                            : '–'}
                        </Box>

                        <Box
                          as="td"
                          aria-label={domain + ' Bridge fast withdrawal cell'}
                          sx={{
                            textAlign: 'right',
                            position: 'relative',
                            zIndex: -1
                          }}>
                          <Text
                            sx={{
                              position: 'absolute',
                              left: '55%',
                              top: '50%',
                              transform: 'translate(-50%, -50%)',
                              fontSize: 3
                            }}>
                            {`${intl.formatNumber(bridge.debt, {
                              notation: 'compact',
                              maximumFractionDigits: 2
                            })} / ${intl.formatNumber(bridge.line, {
                              notation: 'compact',
                              maximumFractionDigits: 2
                            })} (${intl.formatNumber(
                              bridge.debt / bridge.line,
                              {
                                style: 'percent',
                                maximumFractionDigits: 2
                              }
                            )})`}
                          </Text>
                          <Progress
                            max={1}
                            value={bridge.debt / bridge.line}
                            color={
                              bridge.debt / bridge.line >= 0.8
                                ? 'error'
                                : 'primary'
                            }
                            sx={{
                              height: 24,
                              backgroundColor: 'background',
                              border: '1px solid',
                              borderColor: 'secondary',
                              display: 'inline-block',
                              width: '90%',
                              borderRadius: '8px'
                            }}
                          />
                        </Box>

                        <Box
                          as="td"
                          aria-label={domain + ' Bridge contract cell'}
                          sx={{ textAlign: 'right' }}>
                          <Link
                            target="_blank"
                            href={'https://etherscan.io/address/' + bridge.hex}>
                            {`${bridge.hex.slice(0, 4)}...${bridge.hex.slice(
                              bridge.hex.length - 4
                            )}`}
                          </Link>
                        </Box>
                      </tr>
                    );
                  })
                ) : (
                  <TableSkeleton rows={3} cols={6} />
                )}
              </tbody>
            )}
          </Box>
        </Box>
      </Fragment>
    </Flex>
  );
}

const icons: Record<string, JSX.Element> = {
  starknet: <StarknetIcon width={24} height={24} />,
  optimism: <OptimismIcon width={24} height={24} />,
  arbitrum: <ArbitrumIcon width={24} height={24} />
};

type Domains = 'ETH-MAIN-A' | 'OPT-MAIN-A' | 'ARB-ONE-A' | 'STA-MAIN-A';

const DOMAIN_NAME_MAPPING: Record<Domains, string> = {
  'ETH-MAIN-A': 'ethereum',
  'OPT-MAIN-A': 'optimism',
  'ARB-ONE-A': 'arbitrum',
  'STA-MAIN-A': 'starknet'
};
