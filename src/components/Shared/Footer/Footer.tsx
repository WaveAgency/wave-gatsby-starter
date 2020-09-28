import React from "react";
import { styled } from "linaria/react";

export interface FooterProps {
  className?: string;
}

const FooterInner = (props: FooterProps) => {
  return (
    <footer className={props.className}>
      <h1>Footer</h1>
    </footer>
  );
};

export const Footer = styled(FooterInner)``;
