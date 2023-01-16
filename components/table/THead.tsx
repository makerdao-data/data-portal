import { HTMLAttributes, ReactNode } from 'react';
import { Box, BoxProps, ThemeUIStyleObject } from 'theme-ui';

type THeadProps = {
  children: ReactNode;
  sx?: ThemeUIStyleObject;
} & BoxProps &
  HTMLAttributes<HTMLTableSectionElement>;

export default function THead({ children, sx, ...restProps }: THeadProps) {
  return (
    <Box as="thead" sx={sx} {...restProps}>
      {children}
    </Box>
  );
}
