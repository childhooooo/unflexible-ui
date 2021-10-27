import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

interface Props {
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  maxWidth?: string;
  children?: React.ReactNode;
}

const Width = ({widthXL, widthL, widthM, widthS, widthXS, maxWidth, children}: Props) => {
  return (
  <Component
    widthXL={widthXL || '100%'}
    widthL={widthL}
    widthM={widthM}
    widthS={widthS}
    widthXS={widthXS}
    maxWidth={maxWidth || '100%'}
  >
    {children}
  </Component>
  );
};

interface ComponentProps {
  widthXL: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  maxWidth: string;
}

const Component = styled.div<ComponentProps>`
position: relative;
width: ${props => props.widthXL};
max-width: ${props => props.maxWidth};

${props => props.widthL && `
  @media only screen and (max-width: ${screen.l}px) {
    width: ${props.widthL};
  }
`}

${props => props.widthM && `
  @media only screen and (max-width: ${screen.m}px) {
    width: ${props.widthM};
  }
`}

${props => props.widthS && `
  @media only screen and (max-width: ${screen.s}px) {
    width: ${props.widthS};
  }
`}

${props => props.widthXL && `
  @media only screen and (max-width: ${screen.xs}px) {
    width: ${props.widthXS};
  }
`}
`

export default Width;
