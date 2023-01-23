import { Fragment, ReactNode } from 'react';
import { Flex, Box, ThemeUIStyleObject } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

export type TableStyles = {
  tableContainer?: ThemeUIStyleObject;
  tableSuperContainer?: ThemeUIStyleObject;
  table?: ThemeUIStyleObject;
};

type TableProps = {
  children: ReactNode;
  title?: string;
  sx?: TableStyles;
};

export default function Table({ children, title, sx, ...rest }: TableProps) {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        flexBasis: ['100%', '100%', '100%'],
        alignSelf: 'flex-start',
        gap: 2,
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        border: '1px solid',
        borderColor: 'secondary',
        borderRadius: '8px',
        padding: 2,

        ...sx?.tableSuperContainer
      }}>
      <Fragment>
        {title ? <Text variant="smallHeading">{title}</Text> : null}

        <Box sx={sx?.tableContainer}>
          <Box
            as="table"
            role="table"
            aria-label={title + ' table'}
            sx={{
              fontSize: '0.9rem',
              width: '100%',
              borderCollapse: 'collapse',

              ['td, th']: {
                padding: '0.3rem',
                verticalAlign: 'baseline',
                whiteSpace: 'nowrap'
              },

              ...sx?.table
            }}
            {...rest}>
            {children}
          </Box>
        </Box>
      </Fragment>
    </Flex>
  );
}
