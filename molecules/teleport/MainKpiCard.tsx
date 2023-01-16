import { Flex, Link } from 'theme-ui';
import KpiCard from '../../components/KpiCard';
import { Text } from '@makerdao-dicu/makerdao-ui';
import { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useIntl } from 'next-intl';
import { RefreshData } from '../../hooks/refresh-data';
import { Domains } from '../../types/teleport';
import { NETWORK_SCANNERS_URLS } from '../../constants';

type MainKpiCardProps = {
  title: string;
  domain: Domains;
  value: string | number | undefined;
  change: number | undefined;
  lastRefreshData: RefreshData | null;
  error: Error | undefined;
};

export default function MainKpiCard({
  title,
  domain,
  value,
  change,
  lastRefreshData,
  error
}: MainKpiCardProps) {
  const intl = useIntl();

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        maxWidth: ['100%', '100%', '300px'],
        textAlign: 'left'
      }}>
      {error ? (
        <Text variant="error">
          {`${title} data is not available at the moment.`}
        </Text>
      ) : (
        <Fragment>
          <KpiCard
            title={title}
            value={value}
            change={change}
            sx={{
              border: 'none',
              paddingLeft: 0,
              ['span']: value
                ? {
                    alignSelf: ['center', 'flex-start', 'flex-start']
                  }
                : {}
            }}
          />

          <Flex sx={{ flexDirection: ['row', 'row', 'column'] }}>
            <Fragment>
              {lastRefreshData ? (
                <Text
                  role="textbox"
                  aria-label="Last processed block text"
                  variant="muted">
                  Last update: block{' '}
                  <Link
                    role="link"
                    aria-label="Block link"
                    target="_blank"
                    href={`${NETWORK_SCANNERS_URLS[domain]}/block/${lastRefreshData.latestProcessedBlock}`}>
                    {lastRefreshData.latestProcessedBlock}
                  </Link>{' '}
                  ({lastRefreshData.blocksDistance} blocks)
                </Text>
              ) : (
                <Text variant="muted">
                  <Skeleton />
                </Text>
              )}
              <Text
                role="textbox"
                aria-label="Last refresh date"
                variant="muted">
                {lastRefreshData ? (
                  `${intl.formatDateTime(lastRefreshData.date, {
                    dateStyle: 'medium',
                    timeStyle: 'short'
                  })} LT (${lastRefreshData.timeDistance})`
                ) : (
                  <Skeleton />
                )}
              </Text>
            </Fragment>
          </Flex>
        </Fragment>
      )}
    </Flex>
  );
}
