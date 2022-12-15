import React from 'react';
import { Flex } from 'theme-ui';
import { MakerIcon, Text } from '@makerdao-dicu/makerdao-ui';
import ColorModeSelector from '../../components/ColorModeSelector';
import DashboardsNavigation from './components/DashboardsNavigation';
import SidebarFooter from './components/SidebarFooter';

type SidebarProps = {
  sidebarOpen: boolean;
};

export default function Sidebar({ sidebarOpen }: SidebarProps) {
  return (
    <Flex
      as="aside"
      sx={{
        position: 'fixed',
        gap: '0.3rem',
        padding: '1rem',
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'background',
        zIndex: 4,
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto',
        transition: 'all 0.3s',
        visibility: sidebarOpen ? 'visible' : ['hidden', 'visible', 'visible'],
        marginLeft: sidebarOpen ? 0 : ['-210px', 0, 0]
      }}>
      <Flex
        sx={{
          gap: '0.3rem',
          ['&>svg']: {
            color: 'primary'
          }
        }}>
        <MakerIcon />

        <Text
          variant="microHeading"
          sx={{
            alignSelf: 'end',
            marginBottom: '11px'
          }}>
          Data Insights
        </Text>
      </Flex>

      <DashboardsNavigation />

      <SidebarFooter />

      <ColorModeSelector />
    </Flex>
  );
}
