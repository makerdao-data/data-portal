import { Text } from '@makerdao-dicu/makerdao-ui';
import Skeleton from 'react-loading-skeleton';
import { CSSProperties } from 'theme-ui';

type LoaderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  error?: Error;
  sx?: {
    skeleton: CSSProperties;
  };
  children: JSX.Element;
};

export default function Loader({
  data,
  error,
  sx,
  children
}: LoaderProps): JSX.Element {
  if (error) {
    return (
      <Text variant="error" role="textbox" aria-label="Error message">
        {'Something went wrogn trying to load the data.'}
      </Text>
    );
  }

  if (data) {
    return children;
  }

  return (
    <Skeleton
      height={220}
      style={{
        marginTop: 24,
        borderRadius: '8px',
        top: '-4px',
        ...sx?.skeleton
      }}
    />
  );
}
