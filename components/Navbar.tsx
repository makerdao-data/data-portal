import React from 'react';
import { Box, useColorMode, useThemeUI } from 'theme-ui';
import { MoonIcon, SunIcon, MakerIcon, Text } from '@makerdao-dicu/makerdao-ui';
import NavbarLink from './NavbarLink';

export default function Navbar() {
  const { theme } = useThemeUI();
  const [selectedColorMode, setColorMode] = useColorMode();

  return (
    <Box
      as="nav"
      role="navigation"
      aria-label="Navbar"
      sx={{
        position: 'fixed',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '2rem 1rem',
        top: 0,
        left: 0,
        backgroundColor: 'background'
      }}>
      <Box sx={{ display: 'flex', gap: '0.3rem' }}>
        <MakerIcon color={theme.colors?.primary as string} />

        <Text
          variant="microHeading"
          sx={{ alignSelf: 'end', marginBottom: '11px' }}>
          Data Insights
        </Text>
      </Box>

      <Box
        as="div"
        sx={{
          display: 'flex',
          gap: '1rem',
          ['& > svg']: {
            cursor: 'pointer',
            alignSelf: 'center'
          }
        }}>
        {/* <NavbarLink href="/" text="Home" /> */}
        <NavbarLink href="/l2s" text="L2s" />

        {/* <NavbarLink href="/l2-metrics" text="L2s" /> */}

        {selectedColorMode === 'light' ? (
          <MoonIcon
            role="button"
            aria-label="Dark mode button"
            width={24}
            height={24}
            onClick={() => setColorMode('dark')}
          />
        ) : (
          <SunIcon
            role="button"
            aria-label="Light mode button"
            width={24}
            height={24}
            onClick={() => setColorMode('light')}
          />
        )}
      </Box>
    </Box>
  );
}
