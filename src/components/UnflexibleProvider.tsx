import 'ress';

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { font, color, screen } from 'lib/config';

interface Props {
  children?: React.ReactNode;
}

const UnflexibleProvider = ({children}: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow-x: hidden;
  color: ${color.black};
  font-size: 16px;
  font-family: ${font.sansSerif};
  line-height: 1.5;
}

@media only screen and (max-width: ${screen.s}px) {
  html, body {
    font-size: 14px;
  }
}

:root {
  --wrap-width-xl: 1240px;
  --wrap-width-l: 1030px;
  --wrap-width-m: 760px;
  --wrap-width-s: 470px;
  --wrap-width-xs: 94%;

  --stacked-padding-wide: 180px;
  --stacked-padding-normal: 120px;
  --stacked-padding-narrow: 60px;
  --stacked-padding-thin: 30px;
  --stacked-padding-gapless: 0px;

  --stacked-padding-rate-xl: 1;
  --stacked-padding-rate-l: 1;
  --stacked-padding-rate-m: .5;
  --stacked-padding-rate-s: .5;
  --stacked-padding-rate-xs: .5;

  --stacked-gap-wide: 3rem;
  --stacked-gap-normal: 1.5rem;
  --stacked-gapless: 0rem;

  --stacked-gap-rate-xl: 1;
  --stacked-gap-rate-l: 1;
  --stacked-gap-rate-m: .5;
  --stacked-gap-rate-s: .5;
  --stacked-gap-rate-xs: .25;

  --lined-gap-wide: 3rem;
  --lined-gap-normal: 1.5rem;
  --lined-gapless: 0rem;

  --lined-gap-rate-xl: 1;
  --lined-gap-rate-l: 1;
  --lined-gap-rate-m: .5;
  --lined-gap-rate-s: .5;
  --lined-gap-rate-xs: .25;

    --plain-size: 1rem;
    --plain-margin: 1rem 0;
    --plain-h1-size-xl: 2.25rem;
    --plain-h2-size-xl: 2rem;
    --plain-h3-size-xl: 1.5rem;
    --plain-h4-size-xl: 1.25rem;
    --plain-h5-size-xl: 1rem;
    --plain-h1-size-l: 2.25rem;
    --plain-h2-size-l: 2rem;
    --plain-h3-size-l: 1.5rem;
    --plain-h4-size-l: 1.25rem;
    --plain-h5-size-l: 1rem;
    --plain-h1-size-m: 2.25rem;
    --plain-h2-size-m: 2rem;
    --plain-h3-size-m: 1.5rem;
    --plain-h4-size-m: 1.25rem;
    --plain-h5-size-m: 1rem;
    --plain-h1-size-s: 1.75rem;
    --plain-h2-size-s: 1.5rem;
    --plain-h3-size-s: 1.25rem;
    --plain-h4-size-s: 1.1rem;
    --plain-h5-size-s: 1rem;
    --plain-h1-size-xs: 1.75rem;
    --plain-h2-size-xs: 1.5rem;
    --plain-h3-size-xs: 1.25rem;
    --plain-h4-size-xs: 1.1rem;
    --plain-h5-size-xs: 1rem;
    --plain-h1-weight: 700;
    --plain-h2-weight: 700;
    --plain-h3-weight: 700;
    --plain-h4-weight: 700;
    --plain-h5-weight: 700;
    --plain-h1-margin: 2rem 0 1rem 0;
    --plain-h2-margin: 2rem 0 1rem 0;
    --plain-h3-margin: 2rem 0 1rem 0;
    --plain-h4-margin: 2rem 0 1rem 0;
    --plain-h5-margin: 2rem 0 1rem 0;
  }
`;

export default UnflexibleProvider;
