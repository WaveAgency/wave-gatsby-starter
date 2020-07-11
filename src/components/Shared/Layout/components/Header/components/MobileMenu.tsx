import React, { useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import styled from "styled-components";
import { theme } from "../../../../Theme/Theme";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "../../../../../../lib/routes";
import { LogoLink } from "./LogoLink";
import { Link } from "gatsby";

export type MobileMenuProps = React.HTMLAttributes<HTMLElement>;

const MobileMenuInner: React.FC<MobileMenuProps> = (props: MobileMenuProps) => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (mobileMenuIsOpen) {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.height = "";
        document.body.style.overflowY = "initial";
      }
    }, 230);
  }, [mobileMenuIsOpen]);

  const handleChangeMenuOpenedClicked = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <div className={props.className}>
      <div className="mobile-menu__icon">
        <HamburgerMenu
          isOpen={mobileMenuIsOpen}
          color={theme.color.primary}
          menuClicked={handleChangeMenuOpenedClicked}
          width={20}
          height={15}
          strokeWidth={2}
          animationDuration={0.23}
        />
      </div>
      <AnimatePresence>
        {mobileMenuIsOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className={"mobile-menu__overlay"}
            transition={{
              stiffness: 50,
              duration: 0.23,
            }}
          >
            <HomeLinkWrapper>
              <LogoLink />
            </HomeLinkWrapper>
            <MobileMenuItems>
              {Object.values(routes).map((route) => (
                <MobileMenuItemWrapper key={route.to}>
                  <MobileMenuItem activeClassName="active" to={route.to}>
                    {route.label}
                  </MobileMenuItem>
                </MobileMenuItemWrapper>
              ))}
            </MobileMenuItems>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenuItems = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 2rem;
  width: 100%;
  flex: 1;
`;

const MobileMenuItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
`;

const MobileMenuItem = styled(Link)`
  font-size: 2.8rem;
  text-decoration: none; /* no underline */
  color: ${(props) => props.theme.color.background};
  padding: 0 2.8rem;
  margin: 2rem 0;
  font-weight: 600;

  &.active {
    color: ${(props) => props.theme.color.primary};
  }
`;

const HomeLinkWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
  }
`;

export const MobileMenu = styled(MobileMenuInner)<MobileMenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  .mobile-menu {
    &__icon {
      z-index: 10;
    }
    &__overlay {
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      overflow-y: scroll;
      overflow-x: hidden;
      background: ${(props) => props.theme.color.primaryDark};
    }
  }
`;
