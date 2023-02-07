import { Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr, { Fetcher } from 'swr';
import {
  RequestParams,
  Overview as TOverview
} from '../../__generated__/dataAPI';
// import MainAreaChart from '../../molecules/MainAreaChart';
import { dataApiClient } from '../../data/dataApiClient';
import MainKpiCard from '../../molecules/teleport/MainKpiCard';
import NetworkComparisonCharts from '../../molecules/teleport/NetworkComparisonCharts';
import { createDaiInL2sAreaChartDataSeries } from '../../utils/data-transformers/create-dai-in-l2s-overview-data-series';
import { useCallback, useMemo } from 'react';
import { formatDistance } from 'date-fns';
import { ethLastBlockFetcher } from '../../data/alchemyApi';
import { RefreshData } from '../../hooks/refresh-data';
import KpiCardList from '../../molecules/teleport/KpiCardList';
import { useIntl } from 'next-intl';
import { Domains } from '../../types/teleport';
import { Data as ReactCsvData } from 'react-csv/components/CommonPropTypes';
import OverviewVoterTypesTable from '../../molecules/governance/OverviewVoterTypesTable';
import KpiCard from '../../components/KpiCard';
import DelegatesWeightChart from '../../molecules/governance/DelegatesWeightChart';

type AlchemyLastBlock = {
  jsonrcp: string;
  id: number;
  result: string;
};

export default function Overview() {
  const intl = useIntl();
  const fetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;

  const { data, error } = useSwr<TOverview, Error>('voters', fetcher);
  // const downloadVotersData = useCallback(() => {
  //   const headers = [
  //     { label: 'Address', key: 'voter_address' },
  //     { label: 'Alias', key: 'voter_alias' },
  //     { label: 'Type', key: 'type' },
  //     { label: 'Stake', key: 'stake' },
  //     { label: 'Current votes', key: 'current_votes' },
  //     { label: 'Since', key: 'since' },
  //     { label: 'Last voting', key: 'last' }
  //   ];

  //   if (data) {
  //     const csvData = data.map((voter) => {
  //       return {
  //         ...voter,
  //         stake: intl.formatNumber(voter.stake),
  //         current_votes: voter.current_votes
  //           .map(({ address, title }) => `${address}: ${title}`)
  //           .join('\r\n'),
  //         since: intl.formatDateTime(new Date(voter.since), {
  //           dateStyle: 'medium'
  //         }),
  //         last: intl.formatDateTime(new Date(voter.last), {
  //           dateStyle: 'medium'
  //         })
  //       };
  //     }, [] as ReactCsvData);

  //     return {
  //       headers,
  //       data: csvData,
  //       filename: 'voters'
  //     };
  //   }

  //   return {
  //     headers,
  //     data: [] as ReactCsvData,
  //     filename: 'DAI_total_supply'
  //   };
  // }, [data, intl]);

  if (error) {
    console.error(error);
  }

  return (
    <Flex sx={{ flexDirection: 'column', gap: 4 }}>
      <Text variant="heading">Governance overview</Text>

      <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
        {error ? (
          <Text variant="error" role="textbox" aria-label="Error message">
            {'Staked MKR data is not available at the moment.'}
          </Text>
        ) : (
          <KpiCard
            title="Staked MKR in Chief"
            value={
              data
                ? intl.formatNumber(data.total_mkr_locked_in_cheif, {
                    maximumFractionDigits: 2
                  })
                : undefined
            }
            change={0}
            // exportMethod={downloadVotersData}
            sx={{ border: 'none' }}
          />
        )}

        <OverviewVoterTypesTable data={data} error={error} />
      </Flex>

      <DelegatesWeightChart />

      {/* <Flex sx={{ gap: 2, flexWrap: ['wrap', 'wrap', 'wrap', 'nowrap'] }}>
        <KpiCardList data={weeklyKpiData} error={error} />

        <NetworkComparisonCharts data={data} error={error} />
      </Flex> */}
    </Flex>
  );
}
