import React from "react";
import styled, { StyledComponent } from "styled-components";
import { LogoLink } from "./components/LogoLink";
import { Container, Hidden } from "@material-ui/core";
import { routes } from "../../../../../lib/routes";
import { Link } from "gatsby";
import { MobileMenu } from "./components/MobileMenu";

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

const NavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 600;

  color: ${(props) => props.theme.color.background};
  padding: 0 20px;

  &.active {
    color: ${(props) => props.theme.color.primary};
  }
`;

const HeaderInner: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className={props.className}>
      <Container>
        <nav>
          <LogoLink />
          <Hidden smDown>
            <div className="nav-items">
              {Object.values(routes).map((route) => (
                <NavLink key={route.to} activeClassName="active" to={route.to}>
                  {route.label}
                </NavLink>
              ))}
            </div>
          </Hidden>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
        </nav>
      </Container>
    </header>
  );
};

export const Header = styled(HeaderInner)<HeaderProps>`
  display: flex;
  height: 80px;
  background: ${(props) => props.theme.color.primaryDark};
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
