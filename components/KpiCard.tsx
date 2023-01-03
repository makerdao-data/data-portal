import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Flex, FlexProps } from 'theme-ui';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type KpiCardProps = {
  title: string;
  value?: number | string;
  change?: number;
};

export default function KpiCard({
  title,
  value,
  change,
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
      <Text variant="smallHeading">{title}</Text>
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
