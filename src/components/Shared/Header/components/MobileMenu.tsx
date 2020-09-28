import React, { useEffect, useState } from "react";
import HamburgerMenu from "react-hamburger-menu";
import { theme } from "../../Theme/Theme";
import { styled } from "linaria/react";
import { MobileMenuOverlay } from "./MobileMenuOverlay";

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
      <MobileMenuOverlay open={mobileMenuIsOpen} />
    </div>
  );
};

export const MobileMenu = styled(MobileMenuInner)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8;
  .mobile-menu {
    &__icon {
      z-index: 10;
    }
  }
  @media screen and (min-width: ${theme.breakpoints.sm}px) {
    display: none;
  }
`;
