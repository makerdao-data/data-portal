import { ReactNode } from 'react';
import { Box, Flex, ThemeUIStyleObject } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

type CardProps = {
  title?: string;
  sx?: ThemeUIStyleObject;
  children: ReactNode;
};

export default function Card({ title, sx, children }: CardProps) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        borderRadius: 8,
        padding: '16px',
        gap: 24,
        backgroundColor: 'surface',
        ...sx
      }}>
      {title ? (
        <Text
          variant="smallHeading"
          role="textbox"
          aria-label="Delegate voting power title">
          {title}
        </Text>
      ) : null}

      <Box sx={{ flexBasis: '100%' }}>{children}</Box>
    </Flex>
  );
}
