import React from 'react';
import { Button } from 'rebass';

import { useStore } from 'store';

export const SpinButton: React.FC = () => {
  const { state, actions, selectors } = useStore();
  const {
    actionToggleRun,
    actionChangeBalance,
    actionRepositionReels,
    actionCalculateWins,
    actionResetWins,
  } = actions;
  const { selectorCheckIsRunning } = selectors;

  const runReel = (reelIndex: number, isRunning: boolean) => {
    actionResetWins();
    actionToggleRun(reelIndex + 1, isRunning);
    setTimeout(() => {
      actionToggleRun(reelIndex + 1, !isRunning);
      setNewReelsPosition(reelIndex + 1);
      if (reelIndex === 2) {
        actionCalculateWins();
      }
    }, 2 * 1000 + reelIndex * 500);
  };

  const runReels = () => {
    runReel(0, !state.running.reel1);
    runReel(1, !state.running.reel2);
    runReel(2, !state.running.reel3);
  };

  const setNewReelsPosition = (reelIndex: number) => actionRepositionReels(reelIndex - 1);

  const onBtnClick = () => {
    runReels();
    actionChangeBalance(--state.balance);
  };

  return (
    <Button sx={btnStyles} onClick={onBtnClick} disabled={selectorCheckIsRunning()}>
      SPIN
    </Button>
  );
};

const btnStyles = {
  fontWeight: 'bold',
  letterSpacing: '1.5px',
  backgroundColor: 'red',
  borderRadius: '10px',
  ':hover': {
    cursor: 'pointer',
    backgroundColor: 'tomato',
  },
  ':disabled': {
    backgroundColor: '#b4c1b7',
    cursor: 'no-drop',
  },
};
