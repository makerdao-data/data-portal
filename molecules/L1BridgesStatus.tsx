import { Text } from '@makerdao-dicu/makerdao-ui';
import Link from 'next/link';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSwr from 'swr';
import { Box, Flex } from 'theme-ui';
import { dataApiClient } from '../data/dataApiClient';
import { Info } from '../__generated__/dataAPI';

export default function L1BridgesStatus() {
  const { data, error } = useSwr<Info, Error>(
    'allBridgesInfo',
    dataApiClient.v1.readAllBridgesInfoV1BridgesAllGet as any
  );

  if (error) {
    console.error(error);

    return <Text variant="error">Something went wrong fetching the data.</Text>;
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: ['100%', '25%'],
        alignSelf: 'end',
        gap: 2
      }}>
      <Text variant="smallHeading">L1 DAI Bridges</Text>

      <Box
        as="table"
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
          </tr>
        </thead>

        <tbody>
          {data ? (
            Object.keys(data.info).map((key, index) => (
              <tr key={key}>
                <td>
                  {`${index + 1}. `}
                  <Link href={'/l2s/' + key}>
                    {key[0].toUpperCase() + key.split('').splice(1).join('')}
                  </Link>
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
    </Flex>
  );
}
