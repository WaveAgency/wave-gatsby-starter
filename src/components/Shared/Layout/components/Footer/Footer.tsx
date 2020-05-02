import React from 'react';
import styled, { StyledComponent } from 'styled-components';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

const _Footer = styled.footer``;

export const Footer: React.FC<FooterProps> = props => {
  return <_Footer>Footer</_Footer>;
};
