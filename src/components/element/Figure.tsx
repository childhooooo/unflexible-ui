import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

interface Props {
  name: string;
  src: string;
  srcSet?: string;
  widthXL?: string;
  widthL?: string;
  widthM?: string;
  widthS?: string;
  widthXS?: string;
  heightXL?: string;
  heightL?: string;
  heightM?: string;
  heightS?: string;
  heightXS?: string;
}

const Figure = ({name, src, srcSet, widthXL, widthL, widthM, widthS, widthXS, heightXL, heightL, heightM, heightS, heightXS}: Props) => {
  return (
  <Component
    widthXL={widthXL || '100%'}
    widthL={widthL}
    widthM={widthM}
    widthS={widthS}
    widthXS={widthXS}
    heightXL={heightXL || '100%'}
    heightL={heightL}
    heightM={heightM}
    heightS={heightS}
    heightXS={heightXS}
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
  heightXL: string;
  heightL?: string;
  heightM?: string;
  heightS?: string;
  heightXS?: string;
}

const Component = styled.figure<ComponentProps>`
  position: relative;
  width: ${props => props.widthXL};
  margin: 0 auto;

&:before {
  position: relative;
  content: '';
  display: block;
  padding-top: ${props => props.heightXL};
}

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

@media only screen and (max-width: ${screen.l}px) {
  width: ${props => props.widthL || props.widthXL};

&:before {
  padding-top: ${props => props.heightL || props.heightXL};
}
}

@media only screen and (max-width: ${screen.m}px) {
  width: ${props => props.widthM || props.widthXL};

&:before {
  padding-top: ${props => props.heightM || props.heightXL};
}
}

@media only screen and (max-width: ${screen.s}px) {
  width: ${props => props.widthS || props.widthXL};

&:before {
  padding-top: ${props => props.heightS || props.heightXL};
}
}

@media only screen and (max-width: ${screen.xs}px) {
  width: ${props => props.widthXS || props.widthXL};

&:before {
  padding-top: ${props => props.heightXS || props.heightXL};
}
}
`;

export default Figure;
