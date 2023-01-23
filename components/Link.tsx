import NextLink from 'next/link';
import { ReactNode } from 'react';
import { Link as ThemeUILink, ThemeUIStyleObject } from 'theme-ui';

type LinkProps = {
  href: string;
  sx?: ThemeUIStyleObject;
  children: ReactNode;
};

export default function Link({ href, sx, children, ...restProps }: LinkProps) {
  return (
    <NextLink href={href} passHref legacyBehavior {...restProps}>
      <ThemeUILink sx={sx}>{children}</ThemeUILink>
    </NextLink>
  );
}
