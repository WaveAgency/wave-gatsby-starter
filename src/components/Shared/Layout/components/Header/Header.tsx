import React from 'react';
import styled, { StyledComponent } from 'styled-components';

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

const _Header = styled.header``;

export const Header: React.FC<HeaderProps> = props => {
  return <_Header>header</_Header>;
};
