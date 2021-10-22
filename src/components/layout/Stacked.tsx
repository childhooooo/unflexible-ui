import React from 'react';
import styled from 'styled-components';
import Wrap from './Wrap';
import { screen } from 'config';

const defaultPaddings: { [key: string]: string } = {
  wide: '180px',
  normal: '120px',
  narrow: '60px',
  thin: '30px',
  gapless: '0px',
};

const defaultPaddingRates: { [key: string]: number } = {
  xl: 1,
  l: 1,
  m: .5,
  s: .5,
  xs: .5,
};

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
  size?: string;
  padding?: string;
  color?: string;
  gradient?: string;
  zIndex?: number;
  align?: string;
  justify?: string;
  gap?: string;
  imageXL?: string;
  imageL?: string;
  imageM?: string;
  imageS?: string;
  imageXS?: string;
  imageSize?: string;
  imagePosX?: string;
  imagePosY?: string;
  fullHeight?: boolean;
  wrap?: boolean;
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
  imageXL,
  imageL,
  imageM,
  imageS,
  imageXS,
  imageSize,
  imagePosX,
  imagePosY,
  fullHeight,
  wrap,
  children,
}: Props) => {
  return (
    <Component
      padding={padding || 'both'}
      size={size || 'normal'}
      color={color || 'transparent'}
      gradient={gradient}
      zIndex={zIndex || 1}
      imageXL={imageXL}
      imageL={imageL}
      imageM={imageM}
      imageS={imageS}
      imageXS={imageXS}
      imageSize={imageSize || 'cover'}
      imagePosX={imagePosX || '50%'}
      imagePosY={imagePosY || '50%'}
      fullHeight={fullHeight || false}
    >
      {wrap
        ? <Wrap>
          <Flex align={align || 'stretch'} justify={justify || 'normal'} gap={gap || 'gapless'}>
            {children}
          </Flex>
        </Wrap>
        : <Flex align={align || 'stretch'} justify={justify || 'normal'} gap={gap || 'gapless'}>
          {children}
        </Flex>
      }
    </Component>
  );
};

interface ComponentProps {
  size: string;
  padding: string;
  color: string;
  gradient?: string;
  zIndex: number;
  imageXL?: string;
  imageL?: string;
  imageM?: string;
  imageS?: string;
  imageXS?: string;
  imageSize: string;
  imagePosX: string;
  imagePosY: string;
  fullHeight: boolean;
}

const Component = styled.div<ComponentProps>`
  position: relative;
  z-index: ${(props) => props.zIndex};

  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100vh' : 'auto')};

  padding: ${(props) =>
      `calc(var(--stacked-padding-${props.size}, ${
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
${props => props.gradient ? `background: linear-gradient(${props.gradient});` : ''}
${props => props.imageXL ? `background-image: url(${props.imageXL});` : ''}
  background-size: ${props => props.imageSize};
  background-position: ${(props) => props.imagePosX} ${(props) => props.imagePosY};

  @media only screen and (max-width: ${screen.l}px) {
    ${props => props.imageL ? `background-image: url(${props.imageL});` : ''}
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-l, ${defaultPaddingRates.l}))`}
      0;
  }

  @media only screen and (max-width: ${screen.m}px) {
    ${props => props.imageM ? `background-image: url(${props.imageM});` : ''}
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-m, ${defaultPaddingRates.m}))`}
      0;
  }

  @media only screen and (max-width: ${screen.s}px) {
    ${props => props.imageS ? `background-image: url(${props.imageS});` : ''}
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.size}, ${
          defaultPaddings[props.size]
        }) * var(--stacked-padding-rate-s, ${defaultPaddingRates.s}))`}
      0;
  }

  @media only screen and (max-width: ${screen.xs}px) {
    ${props => props.imageXS ? `background-image: url(${props.imageXS});` : ''}
    padding: ${(props) =>
        `calc(var(--stacked-padding-${props.size}, ${
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
  width: ${(props) =>
    `calc((var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xl, ${
      defaultGapRates.xl
    }) * 2) + 100%)`};
  margin: ${(props) =>
    `calc(var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xl, ${
      defaultGapRates.xl
    }) * -1)`};

  @media only screen and (max-width: ${screen.l}px) {
    width: ${(props) =>
      `calc((var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-l, ${
        defaultGapRates.l
      }) * 2) + 100%)`};
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-l, ${defaultGapRates.l}) * -1)`};
  }

  @media only screen and (max-width: ${screen.m}px) {
    width: ${(props) =>
      `calc((var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-m, ${
        defaultGapRates.m
      }) * 2) + 100%)`};
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-m, ${defaultGapRates.m}) * -1)`};
  }

  @media only screen and (max-width: ${screen.s}px) {
    width: ${(props) =>
      `calc((var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-s, ${
        defaultGapRates.s
      }) * 2) + 100%)`};
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-s, ${defaultGapRates.s}) * -1)`};
  }

  @media only screen and (max-width: ${screen.xs}px) {
    width: ${(props) =>
      `calc((var(--stacked-gap-${props.gap}, ${defaultGaps[props.gap]}) * var(--stacked-gap-rate-xs, ${
        defaultGapRates.xs
      }) * 2) + 100%)`};
    margin: ${(props) =>
      `calc(var(--stacked-gap-${props.gap}, ${
        defaultGaps[props.gap]
      }) * var(--stacked-gap-rate-xs, ${defaultGapRates.xs}) * -1)`};
  }
`;

export default Stacked;
