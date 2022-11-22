import { MoonIcon, SunIcon, Text } from '@makerdao-dicu/makerdao-ui';
import { Flex, Box, useColorMode } from 'theme-ui';

export default function ColorModeSelector() {
  const [selectedColorMode, setColorMode] = useColorMode();

  return (
    <Flex
      sx={{
        marginTop: 3,
        gap: '0.5rem',
        ['& > svg']: {
          cursor: 'pointer',
          alignSelf: 'center'
        }
      }}>
      <Box
        as="div"
        onClick={() => setColorMode('dark')}
        sx={{
          opacity: selectedColorMode === 'dark' ? 1 : 0.4,
          cursor: 'pointer'
        }}>
        <MoonIcon
          role="button"
          aria-label="Dark mode button"
          aria-disabled={selectedColorMode === 'light'}
          width={20}
          height={20}
        />
      </Box>
      <Text sx={{ lineHeight: 1 }}>/</Text>
      <Box
        as="div"
        onClick={() => setColorMode('light')}
        sx={{
          opacity: selectedColorMode === 'light' ? 1 : 0.4,
          cursor: 'pointer'
        }}>
        <SunIcon
          role="button"
          aria-label="Light mode button"
          aria-disabled={selectedColorMode === 'dark'}
          width={20}
          height={20}
        />
      </Box>
    </Flex>
  );
}
