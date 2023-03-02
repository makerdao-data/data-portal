import { ReactNode } from 'react';
import { Box, Flex, ThemeUIStyleObject } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

type Header = {
  title: string;
  actions?: ReactNode[];
};

type CardProps = {
  header?: Header;
  sx?: ThemeUIStyleObject;
  children: ReactNode;
};

export default function Card({ header, sx, children }: CardProps) {
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
      {header ? (
        <Flex
          sx={{
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            borderBottom: '1px solid',
            borderColor: 'secondary',
            paddingBottom: '14px'
          }}>
          <Text
            variant="smallHeading"
            role="textbox"
            aria-label={header.title + ' title'}>
            {header.title}
          </Text>

          {header.actions ? (
            <Flex sx={{ gap: '8px' }}>
              {header.actions.map((action) => action)}
            </Flex>
          ) : null}
        </Flex>
      ) : null}

      <Box sx={{ flexBasis: '100%' }}>{children}</Box>
    </Flex>
  );
}
