import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, ThemeUIStyleObject } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

type NavbarButtonProps = {
  text: string;
  toggleSubMenu?: () => void;
  sx?: ThemeUIStyleObject;
};

type NavbarLinkProps = {
  href: string;
  text: string;
  toggleSubMenu?: () => void;
  active?: boolean;
  sx?: ThemeUIStyleObject;
} & Partial<HTMLAnchorElement>;

export default function NavbarButton({
  text,
  toggleSubMenu,
  sx
}: NavbarButtonProps) {
  return (
    <Box
      role="button"
      aria-label={'NavbarButton' + text}
      onClick={toggleSubMenu}>
      <Text
        variant="text"
        sx={{
          cursor: 'pointer',
          ...sx
        }}>
        {text}
      </Text>
    </Box>
  );
}

export function NavbarLink({ href, text, sx }: NavbarLinkProps) {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <Box
      role="link"
      aria-label={'NavbarLink' + text}
      sx={{
        backgroundColor: active ? 'primary' : '',
        borderRadius: '6px',
        paddingLeft: 'calc(15px + 0.5rem)',
        [':hover']: {
          backgroundColor: active ? 'primary' : 'secondary',
          ['&>a']: {
            color: 'text'
          }
        },
        ['a']: {
          color: active ? 'text' : 'textMuted',
          textDecoration: 'none',
          fontSize: 4
        },
        ...sx
      }}>
      <Link href={href}>{text}</Link>
    </Box>
  );
}

export function NavbarExternalLink({ href, text, sx }: NavbarLinkProps) {
  return (
    <Box
      sx={{
        ['a']: {
          color: 'text',
          textDecoration: 'none',
          fontSize: 4,

          [':hover']: {
            textDecoration: 'underline'
          }
        },
        ...sx
      }}>
      <Link href={href} target="_blank">
        {text}
      </Link>
    </Box>
  );
}
