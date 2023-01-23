import {
  ArbitrumIcon,
  OptimismIcon,
  StarknetIcon,
  Text
} from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';
import NextLink from 'next/link';
import { useMemo } from 'react';
import { Flex } from 'theme-ui';
import { Summary } from '../../__generated__/dataAPI';
import { Progress, Link } from 'theme-ui';
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

type TeleportDomainsTableProps = {
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
  address: string;
};

export default function TeleportDomainsTable({
  data,
  error
}: TeleportDomainsTableProps) {
  const intl = useIntl();

  const aggregatedBridgesData = useMemo(() => {
    if (data !== undefined) {
      return Object.keys(data.bridges.info).reduce((memo, bridge) => {
        const domainDetails = data.teleport_domains.domains.find(
          ({ domain }: Partial<Bridge>) =>
            DOMAIN_NAME_MAPPING[domain as Domains] === bridge
        );

        return [
          ...memo,
          {
            ...data.bridges.info[bridge],
            ...domainDetails,
            debt: domainDetails.debt >= 0 ? domainDetails.debt : 0,
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
    <Table
      title="Teleport"
      sx={{
        table: {
          textAlign: 'left',
          tableLayout: 'fixed'
        },
        tableContainer: {
          position: 'relative',
          overflowX: 'auto'
        }
      }}
      aria-label="Bridges status table">
      <THead>
        <TRow>
          <THeader
            sx={{
              width: ['100px', '100px', '240px'],
              minWidth: ['100px', '100px', '240px'],
              maxWidth: ['100px', '100px', '240px'],
              left: '0px',
              position: 'sticky'
            }}>
            Name
          </THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>Status</THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>Ceiling</THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>
            Max. Deposit
          </THeader>
          <THeader
            sx={{
              width: '140px',
              textAlign: 'right',
              position: 'relative'
            }}>
            Fast Withdrawals
          </THeader>
          <THeader sx={{ width: '100px', textAlign: 'right' }}>
            Contract
          </THeader>
        </TRow>
      </THead>

      {error ? (
        <TBody>
          <TRow>
            <TCell sx={{ textAlign: 'center' }} colSpan={6}>
               <Text
                      variant="error"
                      role="textbox"
                      aria-label="Error message">
                      {'Teleport data is not available at the moment.'}
                    </Text>
            </TCell>
          </TRow>
        </TBody>
      ) : (
        <TBody>
          {aggregatedBridgesData ? (
            aggregatedBridgesData.map(({ domain, ...bridge }) => {
              return (
                <TRow key={domain} aria-label={domain + ' Bridge status row'}>
                  <TCell
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
                      <NextLink
                        href={'/teleport/' + domain}
                        passHref
                        legacyBehavior>
                        <Link>
                          {domain[0].toUpperCase() +
                            domain.split('').splice(1).join('')}
                        </Link>
                      </NextLink>
                    </Flex>
                  </TCell>

                  <TCell
                    aria-label={domain + ' Bridge status cell'}
                    sx={{ textAlign: 'right' }}>
                    <Text
                      sx={{
                        color: bridge.isOpen === 'Open' ? 'success' : 'error'
                      }}>
                      {bridge.isOpen}
                    </Text>
                  </TCell>

                  <TCell
                    aria-label={domain + ' Bridge ceiling cell'}
                    sx={{ textAlign: 'right' }}>
                    {bridge.ceiling
                      ? intl.formatNumber(bridge.ceiling, {
                          maximumFractionDigits: 2,
                          notation: 'compact'
                        })
                      : '–'}
                  </TCell>

                  <TCell
                    aria-label={domain + ' Bridge max deposit cell'}
                    sx={{ textAlign: 'right' }}>
                    {bridge.maxDeposit
                      ? intl.formatNumber(bridge.maxDeposit, {
                          maximumFractionDigits: 2,
                          notation: 'compact'
                        })
                      : '–'}
                  </TCell>

                  <TCell
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
                      })} (${intl.formatNumber(bridge.debt / bridge.line, {
                        style: 'percent',
                        maximumFractionDigits: 2
                      })})`}
                    </Text>
                    <Progress
                      max={1}
                      value={bridge.debt / bridge.line}
                      color={
                        bridge.debt / bridge.line >= 0.8 ? 'error' : 'primary'
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
                  </TCell>

                  <TCell
                    aria-label={domain + ' Bridge contract cell'}
                    sx={{ textAlign: 'right' }}>
                    <Link
                      target="_blank"
                      href={'https://etherscan.io/address/' + bridge.address}>
                      {addressShortener(bridge.address)}
                    </Link>
                  </TCell>
                </TRow>
              );
            })
          ) : (
            <TableSkeleton rows={3} cols={6} />
          )}
        </TBody>
      )}
    </Table>
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
