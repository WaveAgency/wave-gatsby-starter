import { styled } from "linaria/react";
import { css } from "linaria/lib";
import { theme } from "../../Theme/Theme";

export const HomeLinkWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenuItems = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 2rem;
  width: 100%;
  flex: 1;
`;

export const MobileMenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

export const MobileMenuItem = css`
  font-size: 2.8rem;
  text-decoration: none; /* no underline */
  color: ${theme.color.background};
  padding: 0 2.8rem;
  margin: 2rem 0;
  font-weight: 600;

  &.active {
    color: ${theme.color.primary};
  }
`;
