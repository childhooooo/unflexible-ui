import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

export interface Props {
  name: string;
  src: string;
  srcSet?: string;
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
}

const RawFigure = ({name, src, srcSet, widthXL, widthL, widthM, widthS, widthXS }: Props) => {
  return (
  <Component
    widthXL={widthXL || '100%'}
    widthL={widthL}
    widthM={widthM}
    widthS={widthS}
    widthXS={widthXS}
  >
    <img src={src} srcSet={srcSet || src} alt={name} />
  </Component>
  );
};

interface ComponentProps {
  widthXL: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
}

const Component = styled.figure<ComponentProps>`
  position: relative;
  width: ${props => props.widthXL};
  margin: 0 auto;

  img {
    position: relative;
    width: 100%;
    height: auto;
  }

@media only screen and (max-width: ${screen.l}px) {
  width: ${props => props.widthL || props.widthXL};
}

@media only screen and (max-width: ${screen.m}px) {
  width: ${props => props.widthM || props.widthXL};
}

@media only screen and (max-width: ${screen.s}px) {
  width: ${props => props.widthS || props.widthXL};
}

@media only screen and (max-width: ${screen.xs}px) {
  width: ${props => props.widthXS || props.widthXL};
}
`;

export default RawFigure;
