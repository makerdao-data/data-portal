import { useIntl } from 'next-intl';
import { ReactNode } from 'react';
import { Flex } from 'theme-ui';
import Card from '../../components/Card';
import DeltaChange from '../../components/DeltaChange';
import Kpi from '../../components/Kpi';
import FlexPage from '../../molecules/Page';

function FlexRow({ children }: { children: ReactNode }) {
  return (
    <Flex sx={{ gap: 24, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
      {children}
    </Flex>
  );
}

export default function Delegates() {
  const intl = useIntl();

  return (
    <FlexPage title="Governance Delegates">
      <FlexRow>
        <Card sx={{ padding: '8px', flex: '1 1 30%' }}>
          <Kpi
            title="Delegated MKR"
            value={intl.formatNumber(16774428, {
              maximumFractionDigits: 1,
              notation: 'compact'
            })}
            unit="MKR"
            delta={<DeltaChange change={0.4} label="MKR in hat" />}
            sx={{ border: 'none' }}
          />
        </Card>

        <Card header={{ title: 'Top Delegates' }} sx={{ flex: '1 1 70%' }}>
          Top delegates table here
        </Card>
      </FlexRow>

      <FlexRow>
        <Card
          header={{ title: 'Voting Power Distribution <dd-mmm>' }}
          sx={{ flex: '1 1 50%' }}>
          Pie Chart here
        </Card>

        <Card
          header={{ title: 'Voting Power Distribution YoY' }}
          sx={{ flex: '1 1 50%' }}>
          Stream chart here
        </Card>
      </FlexRow>

      <Card header={{ title: 'Delegation Flow' }} sx={{ flex: '1 1 100%' }}>
        Sankey chart here
      </Card>

      <Card
        header={{ title: 'Delegate Compensation' }}
        sx={{ flex: '1 1 100%' }}>
        Bar Chart here
      </Card>

      <Card sx={{ flex: '1 1 100%' }}>Total Delegates table here</Card>
    </FlexPage>
  );
}
