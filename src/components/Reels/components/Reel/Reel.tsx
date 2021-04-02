import React from 'react';
import styled from 'styled-components';

import { Column } from 'components/Column';
import { Symbol } from 'components/Symbol';
import { ESymbols } from 'types';

interface IReelProps {
  running: boolean;
}

export const Reel: React.FC<IReelProps> = ({ running }) => (
  <Container running={running}>
    <Symbol symbol={ESymbols.BAR3} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.BAR} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.BAR2} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.SEVEN} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.CHERRY} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.BAR3} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.BAR} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.BAR2} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.SEVEN} styles={{ height: '100px' }} />
    <Symbol symbol={ESymbols.CHERRY} styles={{ height: '100px' }} />
  </Container>
);

const Container = styled(Column)<IReelProps>`
  @keyframes rotateReel {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-100px);
    }
    40% {
      transform: translateY(-200px);
    }
    60% {
      transform: translateY(-300px);
    }
    80% {
      transform: translateY(-400px);
    }
    100% {
      transform: translateY(-500px);
    }
  }

  translate-style: preserve-3d;
  animation: rotateReel 500ms linear infinite;
  animation-play-state: ${({ running }) => (running ? 'running' : 'paused')};
`;
