import React from 'react';
import { Flex, Link, NavLink } from 'theme-ui';
import {
  MakerIcon,
  Text,
  DiscordIcon,
  GithubIcon,
  TwitterIcon,
  RedditIcon,
  YoutubeIcon
} from '@makerdao-dicu/makerdao-ui';
import { NavbarExternalLink } from './NavbarButton';
import ColorModeSelector from './ColorModeSelector';
import DashboardsNavigation from './DashboardsNavigation';
import SidebarFooter from './SidebarFooter';

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
