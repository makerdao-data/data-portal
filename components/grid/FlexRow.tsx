import { ReactNode } from 'react';
import { Flex } from 'theme-ui';

export default function FlexRow({ children }: { children: ReactNode }) {
  return (
    <Flex sx={{ gap: 24, flexWrap: ['wrap', 'wrap', 'nowrap'] }}>
      {children}
    </Flex>
  );
}
