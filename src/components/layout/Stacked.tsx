import React from 'react';
import styled from 'styled-components';
import { screen } from 'config';

const defaultPaddings: { [key: string]: string } = {
  wide: '180px',
  normal: '120px',
  narrow: '60px',
  thin: '30px',
  gapless: '0px',
};

const defaultPaddingRates: { [key: string]: string } = {
  xl: '100%',
  l: '100%',
  m: '50%',
  s: '50%',
  xs: '50%',
};

const defaultGaps: { [key: string]: string } = {
  wide: '3rem',
  normal: '1.5rem',
  gapless: '0rem',
};

const defaultGapRates: { [key: string]: string } = {
  xl: '100%',
  l: '100%',
  m: '50%',
  s: '50%',
  xs: '50%',
};

interface Props {
  size?: string;
  padding?: string;
  color?: string;
  gradient?: string;
  zIndex?: number;
  align?: string;
  justify?: string;
  gap?: string;
  image?: string;
  imageX?: string;
  imageY?: string;
  fullHeight?: boolean;
  children?: React.ReactNode;
}

const Stacked = ({
  size,
  padding,
  color,
  gradient,
  zIndex,
  align,
  justify,
  gap,
  image,
  imageX,
  imageY,
  fullHeight,
  children,
}: Props) => {
  return (
    <Component
      className={`padding-${padding || 'both'}`}
      padding={padding || 'both'}
      size={size || 'normal'}
      color={color || 'transparent'}
      gradient={gradient}
      zIndex={zIndex || 1}
      image={image}
      imageX={imageX || '50%'}
      imageY={imageY || '50%'}
      fullHeight={fullHeight || false}
    >
      <Flex align={align || 'stretch'} justify={justify || 'normal'} gap={gap || 'normal'}>
        {children}
      </Flex>
    </Component>
  );
};

interface ComponentProps {
  size: string;
  padding: string;
  color: string;
  gradient?: string;
  zIndex: number;
  image?: string;
  imageX: string;
  imageY: string;
  fullHeight: boolean;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  z-index: ${(props) => props.zIndex};

  width: 100%;
  height: ${(props) => (props.fullHeight ? '100vh' : 'auto')};

  padding: ${(props) =>
      `padding: calc(var(--stacked-padding-${props.size}, ${
        defaultPaddings[props.size]
      }) * var(--stacked-rate-l, ${defaultPaddingRates.xl}))`}
    0;
  ${(props) => {
    switch (props.padding) {
      case 'top':
        return 'padding-bottom: 0 !important;';
      case 'bottom':
        return 'padding-top: 0 !important;';
      default:
        return '';
    }
  }}

  background-color: ${(props) => props.color};
  background-image: ${(props) => (props.image ? `url(${props.image}),` : '')}
    ${(props) => (props.gradient ? `linear-gradient(${props.gradient})` : '')};
  background-size: cover;
  background-position: ${(props) => props.imageX} ${(props) => props.imageY};

  @media only screen and (max-width: ${screen.l}) {
    padding: ${(props) =>
        `padding: calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-l, ${defaultPaddingRates.l}))`}
      0;
  }

  @media only screen and (max-width: ${screen.m}) {
    padding: ${(props) =>
        `padding: calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-m, ${defaultPaddingRates.m}))`}
      0;
  }

  @media only screen and (max-width: ${screen.s}) {
    padding: ${(props) =>
        `padding: calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-s, ${defaultPaddingRates.s}))`}
      0;
  }

  @media only screen and (max-width: ${screen.xs}) {
    padding: ${(props) =>
        `padding: calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-xs, ${defaultPaddingRates.xs}))`}
      0;
  }
`;

interface FlexProps {
  align: string;
  justify: string;
  gap: string;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  margin: ${(props) =>
    `calc(var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xl, ${
      defaultGapRates.xl
    }) * -1)`};

  @media only screen and (max-width: ${screen.l}) {
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-l, ${defaultGapRates.l}) * -1)`};
  }

  @media only screen and (max-width: ${screen.m}) {
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-m, ${defaultGapRates.m}) * -1)`};
  }

  @media only screen and (max-width: ${screen.s}) {
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-s, ${defaultGapRates.s}) * -1)`};
  }

  @media only screen and (max-width: ${screen.xs}) {
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-xs, ${defaultGapRates.xs}) * -1)`};
  }
`;

export default Stacked;
