import { HTMLAttributes, ReactNode } from 'react';
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui';

type THeaderProps = {
  children: ReactNode;
  sx?: ThemeUIStyleObject;
} & BoxProps &
  HTMLAttributes<HTMLTableCellElement>;

export default function THeader({ children, sx, ...restProps }: THeaderProps) {
  return (
    <Box
      as="th"
      sx={{
        backgroundColor: 'background',
        ...sx
      }}
      {...restProps}>
      {children}
    </Box>
  );
}
