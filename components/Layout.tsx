import Head from 'next/head';
import React, { ReactNode } from 'react';
import SideBar from './Sidebar';
import { Box, Flex } from 'theme-ui';
import MobileNavbar from './MobileNavbar';
import { useToggle } from '../hooks';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, toggleSidebar] = useToggle();

  return (
    <Box
      as="div"
      sx={{
        isolation: 'isolate',
        width: '100%',
        position: 'relative',
        minHeight: '100%',
        display: 'flex',
        backgroundColor: 'background',
        transition: 'background 0.3s'
      }}>
      <Head>
        <title>Data Insights</title>
        <meta name="description" content="Maker DAO Data Insights" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MobileNavbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <SideBar sidebarOpen={sidebarOpen} />

      <Flex
        sx={{
          flexDirection: 'column',
          flex: '1 1 0%',
          margin: ['6rem 1rem', '3rem 3rem 3rem 220px'],
          isolation: 'isolate'
        }}>
        {children}

        {/* <Footer /> */}
      </Flex>
    </Box>
  );
}
