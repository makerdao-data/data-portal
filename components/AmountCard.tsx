import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Flex } from 'theme-ui';
import { useIntl } from 'next-intl';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type AmountCardProps = {
  title: string;
  value?: number;
  change?: number;
};

export default function AmountCard({ title, value, change }: AmountCardProps) {
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
        borderRadius: '8px'
      }}>
      <Text variant="microHeading">{title}</Text>
      <Text
        role="textbox"
        aria-label={title + ' value'}
        sx={{ fontSize: theme.fontSizes?.[8], fontWeight: 700 }}>
        {value ? (
          intl.formatNumber(value, {
            maximumFractionDigits: 2
          })
        ) : (
          <Skeleton />
        )}
      </Text>
      <Text
        role="textbox"
        aria-label={title + ' change'}
        variant="muted"
        sx={{ color: change && change < 0 ? 'error' : 'success' }}>
        {change ? (
          intl.formatNumber(change, {
            style: 'percent',
            minimumFractionDigits: 2
          })
        ) : (
          <Skeleton />
        )}
      </Text>
    </Flex>
  );
}
