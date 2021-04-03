import React from 'react';

import { Row } from 'components/Row';
import { Column } from 'components/Column';
import { Reel } from './components/Reel';
import { ReelsClip } from './components/ReelsClip';
import { ReelWinRow } from './components/ReelWinRow';
import { useStore } from 'store';

export const Reels: React.FC = () => {
  const {
    state: { running, reels, reelsWins },
    selectors: { selectorCheckIsRunning },
  } = useStore();

  return (
    <ReelsClip>
      <Column width='100%' alignItems='center' position='relative'>
        <ReelWinRow rowIndex={0} isVisible={!selectorCheckIsRunning() && !!reelsWins[0].value} />
        <ReelWinRow rowIndex={1} isVisible={!selectorCheckIsRunning() && !!reelsWins[1].value} />
        <ReelWinRow rowIndex={2} isVisible={!selectorCheckIsRunning() && !!reelsWins[2].value} />
      </Column>
      <Row justifyContent='space-between'>
        <Reel running={running.reel1} animationDelay={0} reelIndex={0} topSymbol={reels[0][0]} />
        <Reel running={running.reel2} animationDelay={500} reelIndex={1} topSymbol={reels[1][0]} />
        <Reel running={running.reel3} animationDelay={1000} reelIndex={2} topSymbol={reels[2][0]} />
      </Row>
    </ReelsClip>
  );
};
