import React from 'react';
import { Box, Flex, useThemeUI } from 'theme-ui';
import {
  MakerIcon,
  Text,
  MenuIcon,
  CloseIcon
} from '@makerdao-dicu/makerdao-ui';

type MobileNavbarProps = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function MobileNavbar({
  sidebarOpen,
  toggleSidebar
}: MobileNavbarProps) {
  const { theme } = useThemeUI();

  return (
    <Box
      as="nav"
      role="navigation"
      aria-label="Top Navbar"
      sx={{
        position: 'fixed',
        width: '100%',
        display: ['flex', 'none', 'none'],
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        top: 0,
        left: 0,
        backgroundColor: 'background',
        zIndex: 3,
        ['&>svg']: {
          cursor: 'pointer',
          zIndex: 4
        }
      }}>
      <Flex
        sx={{
          gap: '0.3rem'
        }}>
        <MakerIcon color={theme.colors?.primary as string} />

        <Text
          variant="microHeading"
          sx={{ alignSelf: 'end', marginBottom: '11px' }}>
          Data Insights
        </Text>
      </Flex>

      {sidebarOpen ? (
        <CloseIcon
          role="button"
          aria-label="Close sidebar button"
          onClick={toggleSidebar}
          width={25}
          height={25}
        />
      ) : (
        <MenuIcon
          role="button"
          aria-label="Open sidebar button"
          onClick={toggleSidebar}
          width={25}
          height={25}
        />
      )}

      {sidebarOpen ? (
        <Box
          as="div"
          sx={{
            display: 'block',
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }}
        />
      ) : null}
    </Box>
  );
}
