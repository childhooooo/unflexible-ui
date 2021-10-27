import React from 'react';
import styled from 'styled-components';

interface Props {
  align: string;
  children: React.ReactNode;
}

function toJustify(align: string): string {
  switch(align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    case 'flex-start':
      return 'flex-start';
    case 'flex-end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    default:
      return 'center';
  }
}

const Align = ({align, children}: Props) => {
  return (
    <Component justify={toJustify(align)}>
      {children}
    </Component>
  );
};

interface ComponentProps {
  justify: string;
}

const Component = styled.div<ComponentProps>`
position: relative;
width: 100%;
display: flex;
justify-content: center;
`

export default Align;
