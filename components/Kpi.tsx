import { Text, useTheme } from '@makerdao-dicu/makerdao-ui';
import { Box, Flex, FlexProps } from 'theme-ui';
import Skeleton from 'react-loading-skeleton';
import { Fragment, ReactNode, useMemo } from 'react';

type KpiProps = {
  title: string;
  value: number | string | null;
  error?: Error;
  unit?: string;
  delta?: ReactNode | string;
  footer?: ReactNode;
};

export default function Kpi({
  title,
  value,
  error,
  unit,
  delta,
  footer,
  ...props
}: KpiProps & FlexProps) {
  const { theme } = useTheme();
  const loading = useMemo(() => !value, [value]);

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid',
        borderColor: 'secondary',
        padding: '8px',
        borderRadius: '8px',
        height: footer ? '100%' : 'unset',
        ...props.sx
      }}>
      {error ? (
        <Text variant="error" role="textbox" aria-label="Error message">
          {`${title} data is not available at the moment.`}
        </Text>
      ) : (
        <Fragment>
          <Text
            variant="smallHeading"
            role="heading"
            aria-label={title + ' title'}>
            {title}
          </Text>

          <Flex
            sx={{ gap: '8px', ['& > span.text']: { alignSelf: 'baseline' } }}>
            <Text
              role="textbox"
              aria-label={title + ' value'}
              className="text"
              sx={{
                fontSize: theme.fontSizes?.[8],
                fontWeight: 700,
                flex: !unit || loading ? 1 : '0 1 auto'
              }}>
              {loading ? <Skeleton /> : value}
            </Text>

            {unit ? (
              <Text
                className="text"
                variant="muted"
                role="textbox"
                aria-label={title + ' unit'}
                sx={{
                  flex: '1 0 20%'
                }}>
                {unit}
              </Text>
            ) : null}
          </Flex>

          <Box sx={{ flex: 1 }}>
            {delta ? loading ? <Skeleton /> : delta : null}
          </Box>

          {footer ? <Box>{footer}</Box> : null}
        </Fragment>
      )}
    </Flex>
  );
}
