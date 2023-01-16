import { HTMLAttributes, ReactNode } from 'react';
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui';

type TRowProps = {
  children: ReactNode;
  sx?: ThemeUIStyleObject;
} & BoxProps &
  HTMLAttributes<HTMLTableRowElement>;

export default function TRow({ children, sx, ...restProps }: TRowProps) {
  return (
    <Box as="tr" sx={sx} {...restProps}>
      {children}
    </Box>
  );
}
