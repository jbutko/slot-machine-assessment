import React from 'react';
import styled from 'styled-components';

import { Column } from 'components/Column';
import { Symbol } from 'components/Symbol';
import { ESymbols } from 'types';

import { symbolsOffsetsMap } from 'utils/reels.utils';

interface IReelProps {
  running: boolean;
  animationDelay: number;
  reelIndex: number;
  topSymbol: string;
}

export const Reel: React.FC<IReelProps> = ({ running, animationDelay, reelIndex, topSymbol }) => (
  <Container
    running={running}
    animationDelay={animationDelay}
    reelIndex={reelIndex}
    topSymbol={topSymbol}
    topOffset={symbolsOffsetsMap[topSymbol]}
    key={reelIndex}
  >
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

const getAnimationDuration = (reelIndex: number) => {
  if (reelIndex === 0) return 3;
  if (reelIndex === 1) return 6;
  if (reelIndex === 2) return 9;
};

const Container = styled(Column)<IReelProps & { topOffset: number }>`
  // set reel position
  transform: translateY(${props => -1 * props.topOffset - 15}px);
  transition: transform 0s;

  // spinnig reel animation
  @keyframes spinReel {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-50%);
    }
  }

  animation: ${({ running, reelIndex }) =>
    running ? 'spinReel 0.' + getAnimationDuration(reelIndex) + 's linear' : 'none'};
  animation-play-state: ${({ running }) => (running ? 'running' : 'paused')};
  animation-iteration-count: ${({ running, reelIndex }) => (running ? 'infinite' : 1)};
  animation-fill-mode: forwards;
`;
