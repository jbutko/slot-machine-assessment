import React from 'react';
import styled from 'styled-components';
import { Column } from 'components/Column';

interface IReelWinRowProps {
  rowIndex: number;
  isVisible: boolean;
}

export const ReelWinRow: React.FC<IReelWinRowProps> = ({ isVisible, rowIndex }) =>
  isVisible ? (
    <Container
      height='7px'
      bg='red'
      width='97%'
      top={`${rowIndex * 100 + 45}px`}
      position='absolute'
      zIndex={2}
    />
  ) : null;

const Container = styled(Column)`
  @keyframes reveal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: reveal 0.3s linear;
  animation-iteration-count: 3;
`;
