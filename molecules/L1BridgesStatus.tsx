import {
  ArbitrumIcon,
  OptimismIcon,
  StarknetIcon,
  Text
} from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';
import Link from 'next/link';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSwr from 'swr';
import { Box, Flex } from 'theme-ui';
import { dataApiClient } from '../data/dataApiClient';
import { Info } from '../__generated__/dataAPI';

export default function L1BridgesStatus() {
  const intl = useIntl();
  const { data, error } = useSwr<Info, Error>(
    'allBridgesInfo',
    dataApiClient.v1.readAllBridgesInfoV1BridgesAllGet as any
  );

  if (error) {
    console.error(error);
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        flexBasis: ['100%', '100%', '320px'],
        alignSelf: 'flex-start',
        gap: 2
      }}>
      <Text variant="smallHeading">L1 DAI Bridges</Text>

      {error ? (
        <Text variant="error">
          {"We're having an issue fetching bridges status"}
        </Text>
      ) : (
        <Box
          as="table"
          role="table"
          aria-label="Bridges status table"
          sx={{
            border: '1px solid',
            borderColor: 'secondary',
            borderRadius: '8px',
            padding: 1,
            textAlign: 'left',
            fontSize: 4,
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
              <th>Name</th>
              <th>Status</th>
              <th>Ceiling</th>
              <th>Max. Deposit</th>
            </tr>
          </thead>

          <tbody>
            {data ? (
              Object.keys(data.info).map((key) => (
                <tr key={key}>
                  <td>
                    <Flex sx={{ gap: '0.3rem', alignItems: 'center' }}>
                      {icons[key]}
                      <Link href={'/l2s/' + key}>
                        {key[0].toUpperCase() +
                          key.split('').splice(1).join('')}
                      </Link>
                    </Flex>
                  </td>
                  <td>
                    <Text
                      sx={{
                        color:
                          data.info[key].isOpen === 'Open' ? 'success' : 'error'
                      }}>
                      {data.info[key].isOpen}
                    </Text>
                  </td>
                  <td>
                    {data.info[key].ceiling
                      ? intl.formatNumber(data.info[key].ceiling, {
                          maximumFractionDigits: 2
                        })
                      : '–'}
                  </td>
                  <td>
                    {data.info[key].maxDeposit
                      ? intl.formatNumber(data.info[key].ceiling, {
                          maximumFractionDigits: 2
                        })
                      : '–'}
                  </td>
                </tr>
              ))
            ) : (
              <Fragment>
                <tr>
                  <td>
                    <Skeleton />
                  </td>
                  <td>
                    <Skeleton />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Skeleton />
                  </td>
                  <td>
                    <Skeleton />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Skeleton />
                  </td>
                  <td>
                    <Skeleton />
                  </td>
                </tr>
              </Fragment>
            )}
          </tbody>
        </Box>
      )}
    </Flex>
  );
}

const icons: Record<string, JSX.Element> = {
  starknet: <StarknetIcon width={15} height={15} />,
  optimism: <OptimismIcon width={15} height={15} />,
  abitrum: <ArbitrumIcon width={15} height={15} />,
  arbitrum: <ArbitrumIcon width={15} height={15} />
};
