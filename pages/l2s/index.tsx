import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Box, Flex } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import NavbarLink from '../../components/NavbarLink';
import useHighlightLinkOnScroll, {
  Link
} from '../../hooks/highlight-active-link-onscroll';
import Overview from './components/Overview';

export default function L2s() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const fastWithdrawalsRef = useRef<HTMLDivElement>(null);
  const arbitrumRef = useRef<HTMLDivElement>(null);
  const optimismRef = useRef<HTMLDivElement>(null);
  const starknetRef = useRef<HTMLDivElement>(null);
  const appendixRef = useRef<HTMLDivElement>(null);
  const links: Link[] = useMemo(
    () => [
      { href: '/l2s#overview', text: 'Overview', ref: overviewRef }
      // {
      //   href: '/l2s#fast-withdrawals',
      //   text: 'Fast Withdrawals',
      //   ref: fastWithdrawalsRef
      // },
      // { href: '/l2s#arbitrum', text: 'Arbitrum', ref: arbitrumRef },
      // { href: '/l2s#optimism', text: 'Optimism', ref: optimismRef },
      // { href: '/l2s#starknet', text: 'Starknet', ref: starknetRef },
      // { href: '/l2s#appendix', text: 'Appendix', ref: appendixRef }
    ],
    []
  );

  const activeLinkIndex = useHighlightLinkOnScroll(links);

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Box
        as="nav"
        role="navigation"
        aria-label="L2s Sub Navbar"
        sx={{
          position: 'fixed',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          top: '56px',
          left: 0,
          backgroundColor: 'background',
          borderBottom: '1px solid',
          borderColor: 'secondary'
        }}>
        {links.map(({ href, text }, index) => (
          <NavbarLink
            key={href}
            href={href}
            text={text}
            sx={{
              color: activeLinkIndex === index ? 'primary' : 'secondaryEmphasis'
            }}
          />
        ))}
      </Box>

      <Box as="section" id="overview" ref={overviewRef}>
        <Overview />
      </Box>

      {/* <Box as="section" id="fast-withdrawals" ref={fastWithdrawalsRef}>
        <Text variant="heading" id="fast-withdrawals">
          Fast Withdrawals
        </Text>
      </Box>

      <Box as="section" id="arbitrum" ref={arbitrumRef}>
        <Text variant="heading" id="arbitrum">
          Arbitrum
        </Text>
      </Box>

      <Box as="section" id="optimism" ref={optimismRef}>
        <Text variant="heading" id="optimism">
          Optimism
        </Text>
      </Box>

      <Box as="section" id="starknet" ref={starknetRef}>
        <Text variant="heading" id="starknet">
          Starknet
        </Text>
      </Box>

      <Box as="section" id="appendix" ref={appendixRef}>
        <Text variant="heading" id="appendix">
          Appendix
        </Text>
      </Box> */}
    </Flex>
  );
}
