import React from 'react';
import styled from 'styled-components';

interface Props {
  maxWidth: string;
  align?: string;
  children?: React.ReactNode;
}

const MaxWidth = ({maxWidth, align, children}: Props) => {
  return (
  <Component maxWidth={maxWidth} align={align || 'center'}>
    <div>
      {children}
    </div>
  </Component>
  );
};

interface ComponentProps {
  maxWidth: string;
  align: string;
}

const Component = styled.div<ComponentProps>`
position: relative;
display: flex;
justify-content: ${props => props.align};
width: 100%;

> div {
width: 100%;
max-width: ${props => props.maxWidth};
}
`

export default MaxWidth;
