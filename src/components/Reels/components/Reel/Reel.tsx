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

export const Reel: React.FC<IReelProps> = ({ running, animationDelay, reelIndex, topSymbol }) => {
  return (
    <Container
      running={running}
      animationDelay={animationDelay}
      reelIndex={reelIndex}
      topSymbol={topSymbol}
      topOffset={symbolsOffsetsMap[topSymbol]}
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
    </Container>
  );
};

const Container = styled(Column)<IReelProps & { topOffset: number }>`
  transform: translateY(${props => -1 * props.topOffset - 0}px);
  transition: all 200ms linear;

  @keyframes spinReel {
    0% {
      // transform: translateY(0);
      transform: translateY(${props => -1 * props.topOffset - 0}px);
    }
    20% {
      // transform: translateY(-100px);
      transform: translateY(${props => -100 - props.topOffset - 0}px);
    }
    40% {
      // transform: translateY(-200px);
      transform: translateY(${props => -200 - props.topOffset - 0}px);
    }
    60% {
      // transform: translateY(-300px);
      transform: translateY(${props => -300 - props.topOffset - 0}px);
    }
    80% {
      // transform: translateY(-400px);
      transform: translateY(${props => -400 - props.topOffset - 0}px);
    }
    100% {
      // transform: translateY(-500px);
      transform: translateY(${props => -500 - props.topOffset - 0}px);
    }
  }

  // @keyframes positionReel {
  //   100% {
  //     transform: translateY(${props => -1 - props.topOffset}px);
  //   }
  // }

  translate-style: preserve-3d;
  animation: ${({ running, reelIndex }) => (running ? 'spinReel 1000ms linear' : 'none')};
  animation-play-state: ${({ running }) => (running ? 'running' : 'paused')};
  // animation-delay: ${({ reelIndex }) => reelIndex * -50}ms;
  // animation-delay: 0ms, ${({ reelIndex }) => 2000 + reelIndex * 500}ms;
  animation-iteration-count: ${({ running }) => (running ? 'infinite' : 1)};
  // animation-fill-mode: forwards;
`;
//running ? 'spinReel 0.' + reelIndex + 0.3 + 's linear' : 'none'};

/* @keyframes duration | timing-function | delay | name */
// animation: 3s linear 1s my-animation;
