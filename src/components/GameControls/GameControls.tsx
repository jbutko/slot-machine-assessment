import React from 'react';
import { Text } from 'rebass';

import { SpinButton } from './components/SpinButton';
import { Balance } from './components/Balance';
import { Row } from 'components/Row';
import { useStore } from 'store';

export const GameControls: React.FC = () => {
  const {
    state: { totalWin },
  } = useStore();
  return (
    <Row alignItems='center'>
      <Balance />
      <SpinButton />
      {!!totalWin && (
        <Row ml='30px'>
          <Text mr='10px'>Total win: </Text>
          <Text fontWeight='bold'>{totalWin}</Text>
        </Row>
      )}
    </Row>
  );
};
