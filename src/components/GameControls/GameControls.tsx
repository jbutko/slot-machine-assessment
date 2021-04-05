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
    <Row alignItems='center' flexDirection={['column', 'row']}>
      <Row>
        <Balance />
        <SpinButton />
      </Row>
      {!!totalWin && (
        <Row ml={[0, '30px']} justifyContent={['flex-start', 'flex-end']} my={['10px', 0]}>
          <Text mr='10px'>Total win: </Text>
          <Text fontWeight='bold'>{totalWin}</Text>
        </Row>
      )}
    </Row>
  );
};
