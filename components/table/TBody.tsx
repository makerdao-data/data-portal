import { HTMLAttributes, ReactNode } from 'react';
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui';

type TBodyProps = {
  children: ReactNode;
  sx?: ThemeUIStyleObject;
} & BoxProps &
  HTMLAttributes<HTMLTableSectionElement>;

export default function TBody({ children, sx, ...restProps }: TBodyProps) {
  return (
    <Box as="tbody" sx={sx} {...restProps}>
      {children}
    </Box>
  );
}
