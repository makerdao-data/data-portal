import { Fragment, ReactNode } from 'react';
import { Flex } from 'theme-ui';
import { useToggle } from '../../../hooks';
import NavbarButton from './NavbarButton';
import { NavbarLink } from './NavbarLink';

export type Link = {
  text: string;
  href: string;
  disabled?: boolean;
};

type NavigationMenuProps = {
  title: string;
  links: Link[];
  icon: ReactNode;
};

export default function NavigationMenu({
  title,
  links,
  icon
}: NavigationMenuProps) {
  const [menuIsOpen, toggleMenuIsOpen] = useToggle();

  return (
    <Fragment>
      <Flex as="summary" sx={{ gap: '0.5rem', alignItems: 'center' }}>
        {icon}
        <NavbarButton text={title} toggleSubMenu={toggleMenuIsOpen} />
      </Flex>

      {menuIsOpen ? (
        <Flex
          role="menu"
          aria-label="Overview sidebar menu"
          sx={{ flexDirection: 'column' }}>
          {links.map(({ href, text, disabled }) => (
            <NavbarLink
              disabled={disabled}
              key={href}
              href={href}
              text={text}
            />
          ))}
        </Flex>
      ) : null}
    </Fragment>
  );
}
