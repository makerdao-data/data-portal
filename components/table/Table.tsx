import { ReactNode } from 'react';
import { Box, Flex, ThemeUIStyleObject } from 'theme-ui';

export type TableStyles = {
  tableContainer?: ThemeUIStyleObject;
  tableSuperContainer?: ThemeUIStyleObject;
  table?: ThemeUIStyleObject;
};

type TableProps = {
  children: ReactNode;
  sx?: TableStyles;
};

export default function Table({ children, sx, ...rest }: TableProps) {
  return (
    <Flex
      sx={{
        flexBasis: ['100%', '100%', '100%'],
        alignSelf: 'flex-start',
        flex: ['1 1 100%', '1 1 0%', '1 1 0%'],
        border: '1px solid',
        borderColor: 'tableStructure',
        borderRadius: '6px',

        ...sx?.tableSuperContainer
      }}>
      <Box sx={{ borderRadius: '6px', ...sx?.tableContainer }}>
        <Box
          as="table"
          role="table"
          sx={{
            fontSize: '0.9rem',
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,

            ['td, th']: {
              padding: 16,
              verticalAlign: 'baseline',
              whiteSpace: 'nowrap',
              backgroundColor: 'surface',
              borderBottom: '1px solid',
              borderColor: 'tableStructure'
            },

            ...sx?.table
          }}
          {...rest}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
