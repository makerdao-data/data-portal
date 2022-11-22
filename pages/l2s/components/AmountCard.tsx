import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Flex } from 'theme-ui';
import { useIntl } from 'next-intl';

type AmountCardProps = {
  title: string;
  value: number;
  change: number;
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
      <Text sx={{ fontSize: theme.fontSizes?.[8], fontWeight: 700 }}>
        {intl.formatNumber(value, {
          maximumFractionDigits: 2
        })}
      </Text>
      <Text variant="muted" sx={{ color: change < 0 ? 'error' : 'success' }}>
        {intl.formatNumber(change, {
          style: 'percent',
          minimumFractionDigits: 2
        })}
      </Text>
    </Flex>
  );
}
