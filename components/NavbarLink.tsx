import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, ThemeUIStyleObject } from 'theme-ui';

type NavbarLinkProps = {
  href: string;
  text: string;
  sx?: ThemeUIStyleObject;
};

export default function NavbarLink({ href, text, sx }: NavbarLinkProps) {
  const router = useRouter();

  return (
    <Box
      role="link"
      aria-label={'NavbarLink' + text}
      sx={{
        alignSelf: 'center',
        ['a']: {
          color: router.pathname === href ? 'primary' : 'currentColor',
          textDecoration: 'none',

          [':hover']: {
            textDecoration: 'underline'
          },
          ...sx
        }
      }}>
      <Link href={href}>{text}</Link>
    </Box>
  );
}
