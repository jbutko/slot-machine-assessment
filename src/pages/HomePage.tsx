import React from 'react';

import { Column } from 'components/Column';
import { DebugMode } from 'components/DebugMode';
import { GameControls } from 'components/GameControls';
import { Heading } from 'components/Heading';
import { PayTable } from 'components/PayTable';
import { Reels } from 'components/Reels';
import { Row } from 'components/Row';

export const HomePage: React.FC = () => (
  <Column alignItems='center' width='100%' padding='10px'>
    <Heading mb='50px'>Slot machine assessment</Heading>
    <Row width='100%' maxWidth='80%'>
      <Column width='65%'>
        <Reels />
        <GameControls />
      </Column>
      <Column width='35%'>
        <PayTable />
        <DebugMode />
      </Column>
    </Row>
  </Column>
);
