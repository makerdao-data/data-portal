import { Box, ThemeUIStyleObject } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';

type NavbarButtonProps = {
  text: string;
  toggleSubMenu?: () => void;
  sx?: ThemeUIStyleObject;
};

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
