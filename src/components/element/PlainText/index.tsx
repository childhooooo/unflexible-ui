import React from 'react';
import styled from 'styled-components';
import { screen, font, color as configColor } from 'lib/config';

export interface Props {
  text?: string;
  size?: string;
  color?: string;
  width?: string;
  align?: string;
  family?: string;
  lineHeight?: string;
  margin?: string;
  h1Size?: string;
  h2Size?: string;
  h3Size?: string;
  h4Size?: string;
  h5Size?: string;
  h1SizeXL?: string;
  h2SizeXL?: string;
  h3SizeXL?: string;
  h4SizeXL?: string;
  h5SizeXL?: string;
  h1SizeL?: string;
  h2SizeL?: string;
  h3SizeL?: string;
  h4SizeL?: string;
  h5SizeL?: string;
  h1SizeM?: string;
  h2SizeM?: string;
  h3SizeM?: string;
  h4SizeM?: string;
  h5SizeM?: string;
  h1SizeS?: string;
  h2SizeS?: string;
  h3SizeS?: string;
  h4SizeS?: string;
  h5SizeS?: string;
  h1SizeXS?: string;
  h2SizeXS?: string;
  h3SizeXS?: string;
  h4SizeXS?: string;
  h5SizeXS?: string;
  h1Weight?: string;
  h2Weight?: string;
  h3Weight?: string;
  h4Weight?: string;
  h5Weight?: string;
  h1Align?: string;
  h2Align?: string;
  h3Align?: string;
  h4Align?: string;
  h5Align?: string;
  h1Color?: string;
  h2Color?: string;
  h3Color?: string;
  h4Color?: string;
  h5Color?: string;
  h1Family?: string;
  h2Family?: string;
  h3Family?: string;
  h4Family?: string;
  h5Family?: string;
  h1Height?: string;
  h2Height?: string;
  h3Height?: string;
  h4Height?: string;
  h5Height?: string;
  h1Margin?: string;
  h2Margin?: string;
  h3Margin?: string;
  h4Margin?: string;
  h5Margin?: string;
  children?: React.ReactNode;
}

const PlainText = ({
  text, size, color, width, align, family, lineHeight, margin,
  h1Size, h2Size, h3Size, h4Size, h5Size,
  h1SizeXL, h2SizeXL, h3SizeXL, h4SizeXL, h5SizeXL,
  h1SizeL, h2SizeL, h3SizeL, h4SizeL, h5SizeL,
  h1SizeM, h2SizeM, h3SizeM, h4SizeM, h5SizeM,
  h1SizeS, h2SizeS, h3SizeS, h4SizeS, h5SizeS,
  h1SizeXS, h2SizeXS, h3SizeXS, h4SizeXS, h5SizeXS,
  h1Weight, h2Weight, h3Weight, h4Weight, h5Weight,
  h1Align, h2Align, h3Align, h4Align, h5Align,
  h1Color, h2Color, h3Color, h4Color, h5Color,
  h1Family, h2Family, h3Family, h4Family, h5Family,
  h1Height, h2Height, h3Height, h4Height, h5Height,
  h1Margin, h2Margin, h3Margin, h4Margin, h5Margin,
  children
}: Props) => {
  return (
  <Component
    size={size}
    color={color}
    width={width || '100%'}
    align={align || 'left'}
    family={family}
    lineHeight={lineHeight}
    margin={margin}
    h1SizeXL={h1SizeXL || h1Size}
    h2SizeXL={h2SizeXL || h2Size}
    h3SizeXL={h3SizeXL || h3Size}
    h4SizeXL={h4SizeXL || h4Size}
    h5SizeXL={h5SizeXL || h4Size}
    h1SizeL={h1SizeL}
    h2SizeL={h2SizeL}
    h3SizeL={h3SizeL}
    h4SizeL={h4SizeL}
    h5SizeL={h5SizeL}
    h1SizeM={h1SizeM}
    h2SizeM={h2SizeM}
    h3SizeM={h3SizeM}
    h4SizeM={h4SizeM}
    h5SizeM={h5SizeM}
    h1SizeS={h1SizeS}
    h2SizeS={h2SizeS}
    h3SizeS={h3SizeS}
    h4SizeS={h4SizeS}
    h5SizeS={h5SizeS}
    h1SizeXS={h1SizeXS}
    h2SizeXS={h2SizeXS}
    h3SizeXS={h3SizeXS}
    h4SizeXS={h4SizeXS}
    h5SizeXS={h5SizeXS}
    h1Weight={h1Weight}
    h2Weight={h2Weight}
    h3Weight={h3Weight}
    h4Weight={h4Weight}
    h5Weight={h5Weight}
    h1Align={h1Align || 'left'}
    h2Align={h2Align || 'left'}
    h3Align={h3Align || 'left'}
    h4Align={h4Align || 'left'}
    h5Align={h5Align || 'left'}
    h1Color={h1Color || configColor.black}
    h2Color={h2Color || configColor.black}
    h3Color={h3Color || configColor.black}
    h4Color={h4Color || configColor.black}
    h5Color={h5Color || configColor.black}
    h1Family={h1Family || font.sansSerif}
    h2Family={h2Family || font.sansSerif}
    h3Family={h3Family || font.sansSerif}
    h4Family={h4Family || font.sansSerif}
    h5Family={h5Family || font.sansSerif}
    h1Height={h1Height}
    h2Height={h2Height}
    h3Height={h3Height}
    h4Height={h4Height}
    h5Height={h5Height}
    h1Margin={h1Margin}
    h2Margin={h2Margin}
    h3Margin={h3Margin}
    h4Margin={h4Margin}
    h5Margin={h5Margin}
  >
    {text
      ? <div dangerouslySetInnerHTML={{ __html: text }}></div>
      : children
    }
  </Component>
  );
};

interface ComponentProps {
  size?: string;
  color?: string;
  width: string;
  align: string;
  family?: string;
  lineHeight?: string;
  margin?: string;
  h1SizeXL?: string;
  h2SizeXL?: string;
  h3SizeXL?: string;
  h4SizeXL?: string;
  h5SizeXL?: string;
  h1SizeL?: string;
  h2SizeL?: string;
  h3SizeL?: string;
  h4SizeL?: string;
  h5SizeL?: string;
  h1SizeM?: string;
  h2SizeM?: string;
  h3SizeM?: string;
  h4SizeM?: string;
  h5SizeM?: string;
  h1SizeS?: string;
  h2SizeS?: string;
  h3SizeS?: string;
  h4SizeS?: string;
  h5SizeS?: string;
  h1SizeXS?: string;
  h2SizeXS?: string;
  h3SizeXS?: string;
  h4SizeXS?: string;
  h5SizeXS?: string;
  h1Weight?: string;
  h2Weight?: string;
  h3Weight?: string;
  h4Weight?: string;
  h5Weight?: string;
  h1Align: string;
  h2Align: string;
  h3Align: string;
  h4Align: string;
  h5Align: string;
  h1Color: string;
  h2Color: string;
  h3Color: string;
  h4Color: string;
  h5Color: string;
  h1Family?: string;
  h2Family?: string;
  h3Family?: string;
  h4Family?: string;
  h5Family?: string;
  h1Height?: string;
  h2Height?: string;
  h3Height?: string;
  h4Height?: string;
  h5Height?: string;
  h1Margin?: string;
  h2Margin?: string;
  h3Margin?: string;
  h4Margin?: string;
  h5Margin?: string;
}

const Component = styled.div<ComponentProps>`
width: ${props => props.width};
font-size: ${props => props.size || 'var(--plain-size)'};
color: ${props => props.color || 'inherit'};
text-align: ${props => props.align};
font-family: ${props => props.family || 'inherit'};
line-height: ${props => props.lineHeight || 'inherit'};

strong {
  font-size: 1.25em;
}

h1 {
  margin: ${props => props.h1Margin || 'var(--plain-h1-margin)'};
  font-size: ${props => props.h1SizeXL || 'var(--plain-h1-size-xl)'};
  color: ${props => props.h1Color || 'inherit'};
  text-align: ${props => props.h1Align};
  font-family: ${props => props.h1Family || 'inherit'};
  font-weight: ${props => props.h1Weight || 'var(--plain-h1-weight)'};
  line-height: ${props => props.h1Height || 'inherit'};
}

h2 {
  margin: ${props => props.h2Margin || 'var(--plain-h2-margin)'};
  font-size: ${props => props.h2SizeXL || 'var(--plain-h2-size-xl)'};
  color: ${props => props.h2Color || 'inherit'};
  text-align: ${props => props.h2Align};
  font-family: ${props => props.h2Family || 'inherit'};
  font-weight: ${props => props.h2Weight || 'var(--plain-h2-weight)'};
  line-height: ${props => props.h2Height || 'inherit'};
}

h3 {
  margin: ${props => props.h3Margin || 'var(--plain-h3-margin)'};
  font-size: ${props => props.h3SizeXL || 'var(--plain-h3-size-xl)'};
  color: ${props => props.h3Color || 'inherit'};
  text-align: ${props => props.h3Align};
  font-family: ${props => props.h3Family || 'inherit'};
  font-weight: ${props => props.h3Weight || 'var(--plain-h3-weight)'};
  line-height: ${props => props.h3Height || 'inherit'};
}

h4 {
  margin: ${props => props.h4Margin || 'var(--plain-h4-margin)'};
  font-size: ${props => props.h4SizeXL || 'var(--plain-h4-size-xl)'};
  color: ${props => props.h4Color || 'inherit'};
  text-align: ${props => props.h4Align};
  font-family: ${props => props.h4Family || 'inherit'};
  font-weight: ${props => props.h4Weight || 'var(--plain-h4-weight)'};
  line-height: ${props => props.h4Height || 'inherit'};
}

h5 {
  margin: ${props => props.h5Margin || 'var(--plain-h5-margin)'};
  font-size: ${props => props.h5SizeXL || 'var(--plain-h5-size-xl)'};
  color: ${props => props.h5Color || 'inherit'};
  text-align: ${props => props.h5Align};
  font-family: ${props => props.h5Family || 'inherit'};
  font-weight: ${props => props.h5Weight || 'var(--plain-h5-weight)'};
  line-height: ${props => props.h5Height || 'inherit'};
}

> div, p {
  margin: ${props => props.margin || 'var(--plain-margin)'};
}

ul, ol {
  margin: ${props => props.margin || 'var(--plain-margin)'};
  padding-left: 1.5rem;
}

figure, img {
  margin: ${props => props.margin || 'var(--plain-margin)'};
  max-width: 100%;
}

table {
  margin: ${props => props.margin || 'var(--plain-margin)'};
}

> *:first-child {
  margin-top: 0;
}

> *:last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: ${screen.l}px) {
  h1 {
    font-size: ${props => props.h1SizeL || 'var(--plain-h1-size-l)'};
  }

  h2 {
    font-size: ${props => props.h2SizeL || 'var(--plain-h2-size-l)'};
  }

  h3 {
    font-size: ${props => props.h3SizeL || 'var(--plain-h3-size-l)'};
  }

  h4 {
    font-size: ${props => props.h4SizeL || 'var(--plain-h4-size-l)'};
  }

  h5 {
    font-size: ${props => props.h5SizeL || 'var(--plain-h5-size-l)'};
  }
}

@media only screen and (max-width: ${screen.m}px) {
  h1 {
    font-size: ${props => props.h1SizeM || 'var(--plain-h1-size-m)'};
  }

  h2 {
    font-size: ${props => props.h2SizeM || 'var(--plain-h2-size-m)'};
  }

  h3 {
    font-size: ${props => props.h3SizeM || 'var(--plain-h3-size-m)'};
  }

  h4 {
    font-size: ${props => props.h4SizeM || 'var(--plain-h4-size-m)'};
  }

  h5 {
    font-size: ${props => props.h5SizeM || 'var(--plain-h5-size-m)'};
  }
}

@media only screen and (max-width: ${screen.s}px) {
  h1 {
    font-size: ${props => props.h1SizeS || 'var(--plain-h1-size-s)'};
  }

  h2 {
    font-size: ${props => props.h2SizeS || 'var(--plain-h2-size-s)'};
  }

  h3 {
    font-size: ${props => props.h3SizeS || 'var(--plain-h3-size-s)'};
  }

  h4 {
    font-size: ${props => props.h4SizeS || 'var(--plain-h4-size-s)'};
  }

  h5 {
    font-size: ${props => props.h5SizeS || 'var(--plain-h5-size-s)'};
  }
}

@media only screen and (max-width: ${screen.xs}px) {
  h1 {
    font-size: ${props => props.h1SizeXS || 'var(--plain-h1-size-xs)'};
  }

  h2 {
    font-size: ${props => props.h2SizeXS || 'var(--plain-h2-size-xs)'};
  }

  h3 {
    font-size: ${props => props.h3SizeXS || 'var(--plain-h3-size-xs)'};
  }

  h4 {
    font-size: ${props => props.h4SizeXS || 'var(--plain-h4-size-xs)'};
  }

  h5 {
    font-size: ${props => props.h5SizeXS || 'var(--plain-h5-size-xs)'};
  }
}
`

export default PlainText;
