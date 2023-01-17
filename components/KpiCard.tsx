import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Flex, FlexProps } from 'theme-ui';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CsvExport, { CsvData } from './CsvExport';

type KpiCardProps = {
  title: string;
  value?: number | string;
  change?: number;
  exportMethod?: () => CsvData;
};

export default function KpiCard({
  title,
  value,
  change,
  exportMethod,
  ...props
}: KpiCardProps & FlexProps) {
  const intl = useIntl();
  const { theme } = useTheme();

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        gap: 2,
        border: '1px solid',
        borderColor: 'secondary',
        padding: 2,
        borderRadius: '8px',
        ...props.sx
      }}>
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Text variant="smallHeading">{title}</Text>

        {exportMethod ? <CsvExport exportMethod={exportMethod} /> : null}
      </Flex>
      <Text
        role="textbox"
        aria-label={title + ' value'}
        sx={{ fontSize: theme.fontSizes?.[8], fontWeight: 700 }}>
        {value ?? <Skeleton />}
      </Text>
      <Text
        role="textbox"
        aria-label={title + ' change'}
        variant="muted"
        sx={{ color: change && change < 0 ? 'error' : 'success' }}>
        {change !== undefined ? (
          `7d Change ${change > 0 ? '+' : ''}${intl.formatNumber(change, {
            style: 'percent',
            minimumFractionDigits: 2
          })}`
        ) : (
          <Skeleton />
        )}
      </Text>
    </Flex>
  );
}
