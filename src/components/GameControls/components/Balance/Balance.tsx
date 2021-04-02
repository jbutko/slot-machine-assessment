import React from 'react';
import { Input } from '@rebass/forms';

import { Row } from 'components/Row';
import { useStore } from 'store';

export const Balance: React.FC = () => {
  const { state, actions } = useStore();
  const { changeBalance } = actions;
  return (
    <Row mr='20px'>
      <Input
        max={5000}
        min={1}
        name='balance'
        onChange={e => changeBalance(Number(e.target.value))}
        placeholder='Change your balance...'
        type='number'
        value={state.balance}
        sx={{ borderRadius: '10px', minWidth: '200px' }}
      />
    </Row>
  );
};
