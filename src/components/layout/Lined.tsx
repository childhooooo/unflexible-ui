import React from 'react';
import styled from 'styled-components';
import { screen } from 'lib/config';

const defaultGaps: { [key: string]: string } = {
  wide: '3rem',
  normal: '1.5rem',
  narrow: '1rem',
  thin: '.5rem',
  gapless: '0rem',
};

const defaultGapRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: .5,
  s: .5,
  xs: .25,
};

interface Props {
  xl?: string;
  l?: string;
  m?: string;
  s?: string;
  xs?: string;
  gap?: string;
  maxWidth?: string;
  children?: React.ReactNode;
}

const Lined = ({ xl, l, m, s, xs, gap, maxWidth, children }: Props) => {
  return (
    <Component
      xl={xl || 'inherit'}
      l={l || 'inherit'}
      m={m || 'inherit'}
      s={s || 'inherit'}
      xs={xs || 'inherit'}
      gap={gap || 'gapless'}
      maxWidth={maxWidth || '100%'}
    >
      {children}
    </Component>
  );
};

interface ComponentProps {
  xl: string;
  l: string;
  m: string;
  s: string;
  xs: string;
  gap: string;
  maxWidth: string;
}

const Component = styled.div<ComponentProps>`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.xl};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) =>
    `calc(var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xl, ${
      defaultGapRates.xl
    }))`};

> * {
  height: 100%;
}

  @media only screen and (max-width: ${screen.l}px) {
    width: ${(props) => props.l};
    padding: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-l, ${defaultGapRates.l}))`};
  }

  @media only screen and (max-width: ${screen.m}px) {
    width: ${(props) => props.m};
    padding: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-m, ${defaultGapRates.m}))`};
  }

  @media only screen and (max-width: ${screen.s}px) {
    width: ${(props) => props.s};
    padding: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-s, ${defaultGapRates.s}))`};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: ${(props) => props.xs};
    padding: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-xs, ${defaultGapRates.xs}))`};
  }
`;

export default Lined;
