import React from 'react';
import styled from 'styled-components';
import { screen } from 'config';

const defaultGaps: { [key: string]: string } = {
  wide: '3rem',
  normal: '1.5rem',
  gapless: '0rem',
};

const defaultGapRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: .5,
  s: .5,
  xs: .5,
};

interface Props {
  xl?: string;
  l?: string;
  m?: string;
  s?: string;
  xs?: string;
  gap?: string;
  children?: React.ReactNode;
}

const Lined = ({ xl, l, m, s, xs, gap, children }: Props) => {
  return (
    <Component
      xl={xl || '100%'}
      l={l || '100%'}
      m={m || '100%'}
      s={s || '100%'}
      xs={xs || '100%'}
      gap={gap || 'gapless'}
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
}

const Component = styled.div<ComponentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.xl};
  padding: ${(props) =>
    `calc(var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xl, ${
      defaultGapRates.xl
    }))`};

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
