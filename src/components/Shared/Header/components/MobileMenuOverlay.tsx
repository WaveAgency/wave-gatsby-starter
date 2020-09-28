import React from "react";
import { styled } from "linaria/react";
import { theme } from "../../Theme/Theme";
import { LogoLink } from "./LogoLink";
import { routes } from "../../../../lib/routes";
import { Link } from "gatsby";
import {
  HomeLinkWrapper,
  MobileMenuItem,
  MobileMenuItems,
  MobileMenuItemWrapper
} from "./styled";

export interface MobileMenuOverlayProps {
  className?: string;
  open?: boolean;
}

const MobileMenuOverlayWrapper = styled.div<{ open?: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: ${props => (props.open ? 0 : "-100vw")};
  bottom: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${theme.color.light};
  transition: all 230ms ease-in-out;
`;

const renderMobileMenuLinkItems = () =>
  Object.values(routes).map(route => (
    <MobileMenuItemWrapper key={route.to}>
      <Link className={MobileMenuItem} activeClassName="active" to={route.to}>
        {route.label}
      </Link>
    </MobileMenuItemWrapper>
  ));

const MobileMenuOverlayInner = (props: MobileMenuOverlayProps) => {
  return (
    <MobileMenuOverlayWrapper open={props.open}>
      <HomeLinkWrapper>
        <LogoLink />
      </HomeLinkWrapper>
      <MobileMenuItems>{renderMobileMenuLinkItems()}</MobileMenuItems>
    </MobileMenuOverlayWrapper>
  );
};

export const MobileMenuOverlay = MobileMenuOverlayInner;
