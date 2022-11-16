import { RefObject, useEffect, useMemo, useRef, useState } from 'react';
import { Box } from 'theme-ui';
import { Text } from '@makerdao-dicu/makerdao-ui';
import NavbarLink from '../components/NavbarLink';
import useHighlightLinkOnScroll, {
  Link
} from '../hooks/highlight-active-link-onscroll';

export default function L2s() {
  const overviewRef = useRef<HTMLDivElement>(null);
  const teleportRef = useRef<HTMLDivElement>(null);
  const arbitrumRef = useRef<HTMLDivElement>(null);
  const optimismRef = useRef<HTMLDivElement>(null);
  const starknetRef = useRef<HTMLDivElement>(null);
  const appendixRef = useRef<HTMLDivElement>(null);
  const links: Link[] = useMemo(
    () => [
      { href: '/l2s#overview', text: 'Overview', ref: overviewRef },
      { href: '/l2s#teleport', text: 'Teleport', ref: teleportRef },
      { href: '/l2s#arbitrum', text: 'Arbitrum', ref: arbitrumRef },
      { href: '/l2s#optimism', text: 'Optimism', ref: optimismRef },
      { href: '/l2s#starknet', text: 'Starknet', ref: starknetRef },
      { href: '/l2s#appendix', text: 'Appendix', ref: appendixRef }
    ],
    []
  );

  const activeLinkIndex = useHighlightLinkOnScroll(links);

  return (
    <Box>
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
          top: '90px',
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

      <Box
        as="section"
        id="overview"
        ref={overviewRef}
        sx={{ height: '700px' }}>
        <Text variant="heading">Overview</Text>
      </Box>

      <Box as="section" id="teleport" ref={teleportRef}>
        <Text variant="heading" id="teleport">
          Teleport
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
      </Box>
    </Box>
  );
}
