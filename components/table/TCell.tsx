import {
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
  TdHTMLAttributes
} from 'react';
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui';

type TCellProps = {
  children: ReactNode;
  sx?: ThemeUIStyleObject;
} & BoxProps &
  DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >;

export default function TCell({ children, sx, ...restProps }: TCellProps) {
  return (
    <Box
      as="td"
      sx={sx}
      {...(restProps as HTMLAttributes<HTMLTableCellElement>)}>
      {children}
    </Box>
  );
}
