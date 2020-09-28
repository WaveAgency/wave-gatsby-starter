import React from "react";
import { LogoLink } from "./components/LogoLink";
import { routes } from "../../../lib/routes";
import { Link } from "gatsby";
import { MobileMenu } from "./components/MobileMenu";
import { theme } from "../Theme/Theme";
import { styled } from "linaria/react";
import { css } from "linaria/lib";

const NavLink = css`
  font-size: 2rem;
  font-weight: 600;

  color: ${theme.color.background};
  padding: 0 20px;

  &.active {
    color: ${theme.color.primary};
  }
`;

const renderNavItems = () =>
  Object.values(routes).map(route => (
    <Link
      className={NavLink}
      key={route.to}
      activeClassName="active"
      to={route.to}
    >
      {route.label}
    </Link>
  ));

const HeaderInner = props => {
  return (
    <header className={props.className}>
      <nav>
        <LogoLink />
        <div className="nav-items">{renderNavItems()}</div>
        <MobileMenu />
      </nav>
    </header>
  );
};

export const Header = styled(HeaderInner)`
  display: flex;
  height: 80px;
  background: ${theme.color.light};
  align-items: center;

  nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .nav-items {
    display: flex;
    align-items: center;
  }
`;
