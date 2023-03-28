import { useIntl } from 'next-intl';
import { useMemo } from 'react';
import { Text } from '@makerdao-dicu/makerdao-ui';
import useSwr, { Fetcher } from 'swr';
import Card from '../../components/Card';
import FlexRow from '../../components/grid/FlexRow';
import Kpi from '../../components/Kpi';
import { dataApiClient } from '../../data/dataApiClient';
import DelegatesWeightChart from '../../molecules/governance/DelegatesWeightChart';
import FlexPage from '../../molecules/Page';
import {
  RequestParams,
  Overview as TOverview,
  CurrentDelegates,
  DelegatesMonthlyCompensation
} from '../../__generated__/dataAPI';
import TopDelegatesTable from '../../molecules/governance/TopDelegatesTable';
import DelegatesWeightDoughnutChart from '../../molecules/governance/DelegatesWeightDoughnutChart';
import dynamic from 'next/dynamic';
import DelegatesTable from '../../molecules/governance/DelegatesTable';
import DelegateCompensationChart from '../../molecules/governance/DelegateCompensationChart';

const DelegatesFlowSankeyChart = dynamic(
  () => import('../../molecules/governance/DelegatesFlowSankeyChart'),
  { ssr: false }
);

export default function Delegates() {
  const intl = useIntl();
  const {
    currentDelegates,
    governanceOverviewData,
    delegatesMonthlyCompensationData,
    currentDelegatesError,
    governanceOverviewError,
    delegatesMonthlyCompensationError
  } = useGetDelegatesData();

  const delegatedMKR = useMemo(
    () =>
      currentDelegates?.reduce(
        (memo, { delegated_mkr }) => memo + delegated_mkr,
        0
      ),
    [currentDelegates]
  );

  const delegatedKpiData = useMemo(() => {
    const mkrInHat =
      governanceOverviewData && delegatedMKR
        ? governanceOverviewData?.mkr_locked_in_hat_from_recognized /
          delegatedMKR
        : null;

    return {
      delegatedMKR: delegatedMKR
        ? intl.formatNumber(delegatedMKR, {
            maximumFractionDigits: 1,
            notation: 'compact'
          })
        : 0,
      mkrInHat: mkrInHat
        ? intl.formatNumber(mkrInHat, {
            style: 'percent',
            maximumFractionDigits: 0
          })
        : mkrInHat
    };
  }, [delegatedMKR, governanceOverviewData, intl]);

  const delegateCompensationKPIData = useMemo(() => {
    if (delegatesMonthlyCompensationData) {
      const sortedComensations = delegatesMonthlyCompensationData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      const differenceWithLastMonth =
        (sortedComensations[0].amount - sortedComensations[1].amount) /
        sortedComensations[0].amount;

      return {
        currentMonthCompensation: intl.formatNumber(
          sortedComensations[0].amount,
          { notation: 'compact', maximumFractionDigits: 2 }
        ),
        change: intl.formatNumber(differenceWithLastMonth, {
          style: 'percent',
          maximumFractionDigits: 0
        })
      };
    }

    return {
      currentMonthCompensation: null,
      change: 0
    };
  }, [delegatesMonthlyCompensationData, intl]);

  if (
    currentDelegatesError ||
    governanceOverviewError ||
    delegatesMonthlyCompensationError
  ) {
    console.error(currentDelegatesError);
    console.error(governanceOverviewError);
  }

  return (
    <FlexPage title="Governance Delegates">
      <FlexRow>
        <Card sx={{ padding: '8px', flex: '1 1 30%' }}>
          <Kpi
            title="Delegated MKR"
            value={delegatedKpiData.delegatedMKR}
            error={currentDelegatesError}
            unit="MKR"
            delta={
              <Text
                role="textbox"
                aria-label="MKR in Hat"
                variant="muted"
                sx={{ color: 'success' }}>
                {`MKR in Hat ${delegatedKpiData.mkrInHat}`}
              </Text>
            }
            sx={{ border: 'none' }}
          />
        </Card>

        <Card header={{ title: 'Top Delegates' }} sx={{ flex: '1 1 70%' }}>
          <TopDelegatesTable
            data={currentDelegates}
            error={currentDelegatesError}
          />
        </Card>
      </FlexRow>

      <FlexRow>
        <Card
          header={{
            title: `Voting Power Distribution ${intl.formatDateTime(
              new Date(),
              {
                dateStyle: 'medium'
              }
            )}`
          }}
          label="Today Voting Power Distribution title"
          sx={{ flex: '1 1 50%', gap: 0 }}>
          <DelegatesWeightDoughnutChart />
        </Card>

        <Card
          header={{ title: 'Voting Power Distribution YoY' }}
          sx={{ flex: '1 1 50%' }}>
          <DelegatesWeightChart onlyRecognized />
        </Card>
      </FlexRow>

      <Card header={{ title: 'Delegation Flow' }} sx={{ flex: '1 1 100%' }}>
        <DelegatesFlowSankeyChart />
      </Card>

      <Card
        header={{ title: 'Delegate Compensation' }}
        sx={{ flex: '1 1 100%' }}>
        <FlexRow>
          <Kpi
            title="Latest monthly payment"
            value={delegateCompensationKPIData.currentMonthCompensation}
            error={currentDelegatesError}
            unit="DAI"
            delta={
              <Text
                role="textbox"
                aria-label="Delegate compensation 30d Change"
                variant="muted"
                sx={{ color: 'primary' }}>
                {`30d Change ${delegateCompensationKPIData.change}`}
              </Text>
            }
            sx={{ border: 'none' }}
          />

          <DelegateCompensationChart
            data={delegatesMonthlyCompensationData}
            error={delegatesMonthlyCompensationError}
          />
        </FlexRow>
      </Card>

      <Card sx={{ flex: '1 1 100%' }}>
        <DelegatesTable data={currentDelegates} error={currentDelegatesError} />
      </Card>
    </FlexPage>
  );
}

function useGetDelegatesData() {
  const currentDelegatesFetcher: Fetcher<CurrentDelegates[]> =
    dataApiClient.v1.readCurrentDelegatesV1GovernanceCurrentDelegatesGet;
  const governanceOverviewFetcher: Fetcher<TOverview, RequestParams> =
    dataApiClient.v1.readGovernanceOverviewV1GovernanceOverviewGet;
  const delegatesMonthlyCompensationFetcher: Fetcher<
    DelegatesMonthlyCompensation[]
  > =
    dataApiClient.v1
      .readDelegatesMonthlyCompensationV1GovernanceDelegatesMonthlyCompensationGet;

  const { data: currentDelegates, error: currentDelegatesError } = useSwr<
    CurrentDelegates[],
    Error
  >('currentDelegates', () => currentDelegatesFetcher({ type: 'recognized' }));

  const { data: governanceOverviewData, error: governanceOverviewError } =
    useSwr<TOverview, Error>('governanceOverview', governanceOverviewFetcher);

  const {
    data: delegatesMonthlyCompensationData,
    error: delegatesMonthlyCompensationError
  } = useSwr<DelegatesMonthlyCompensation[], Error>(
    'delegatesMonthlyCompensation',
    delegatesMonthlyCompensationFetcher
  );

  return {
    currentDelegates,
    governanceOverviewData,
    delegatesMonthlyCompensationData,
    currentDelegatesError,
    governanceOverviewError,
    delegatesMonthlyCompensationError
  };
}
