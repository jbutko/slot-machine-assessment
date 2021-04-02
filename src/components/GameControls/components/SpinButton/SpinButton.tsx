import React from 'react';
import { Button } from 'rebass';
import { useStore } from 'store';

interface ISpinButtonProps {}

export const SpinButton: React.FC<ISpinButtonProps> = () => {
  const { state, actions } = useStore();
  const { spin, changeBalance } = actions;
  const onBtnClick = () => {
    spin();
    changeBalance(--state.balance);
  };

  return (
    <Button sx={btnStyles} onClick={onBtnClick}>
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
};
