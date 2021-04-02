import React from 'react';

import { SpinButton } from './components/SpinButton';
import { Balance } from './components/Balance';
import { Row } from 'components/Row';

interface IGameControlsProps {}

export const GameControls: React.FC<IGameControlsProps> = () => (
  <Row alignItems='center'>
    <Balance />
    <SpinButton />
  </Row>
);
