import 'ress';
import 'styles/index.scss';

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { font, color, screen } from 'config';

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
}

@media only screen and (max-width: ${screen.s}px) {
  html, body {
    font-size: 14px;
  }
}
`;

export default UnflexibleProvider;
