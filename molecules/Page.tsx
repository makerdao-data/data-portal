import { Text } from '@makerdao-dicu/makerdao-ui';
import { ReactNode } from 'react';
import { Flex } from 'theme-ui';

type FlexPageProps = {
  title: string;
  children: ReactNode;
};

export default function FlexPage({ title, children }: FlexPageProps) {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 24 }}>
      <Text variant="heading">{title}</Text>
      {children}
    </Flex>
  );
}
