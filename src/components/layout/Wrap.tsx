import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/style/variables';

interface Props {
  children?: React.ReactNode;
}

const Wrap = ({ children }: Props) => {
  return (
  <Component>
    {children}
  </Component>
  );
};

const Component = styled.div`
  position: relative;
  margin: 0 auto;
  width: 1240px;
  @media only screen and (max-width: ${screen.xl}px) {
    width: 1030px;
  }
  @media only screen and (max-width: ${screen.l}px) {
    width: 760px;
  }
  @media only screen and (max-width: ${screen.m}px) {
    width: 470px;
  }
  @media only screen and (max-width: ${screen.s}px) {
    width: 94%;
  }
`;

export default Wrap;
