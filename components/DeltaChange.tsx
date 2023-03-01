import { Text } from '@makerdao-dicu/makerdao-ui';
import { useIntl } from 'next-intl';

type DeltaChangeProps = {
  label: string;
  change: number;
};

export default function DeltaChange({ label, change }: DeltaChangeProps) {
  const intl = useIntl();

  return (
    <Text
      role="textbox"
      aria-label={label + ' delta'}
      variant="muted"
      sx={{ color: change && change < 0 ? 'error' : 'success' }}>
      {`7d Change ${change > 0 ? '+' : ''}${intl.formatNumber(change, {
        style: 'percent',
        minimumFractionDigits: 2
      })}`}
    </Text>
  );
}
