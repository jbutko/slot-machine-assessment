import React from 'react';

import { Column } from 'components/Column';
import { DebugMode } from 'components/DebugMode';
import { GameControls } from 'components/GameControls';
import { Heading } from 'components/Heading';
import { PayTable } from 'components/PayTable';
import { Reels } from 'components/Reels';
import { Row } from 'components/Row';

export const HomePage: React.FC = () => (
  <Column alignItems='center' width='100%' padding='10px' maxWidth='1400px' margin='0 auto'>
    <Heading mb={['20px', '50px']} lineHeight={1.1}>
      Slot machine assessment
    </Heading>
    <Row width='100%' maxWidth={['100%', '80%']} flexDirection={['column', 'row']}>
      <Column width={['100%', '65%']}>
        <Reels />
        <GameControls />
      </Column>
      <Column width={['100%', '35%']}>
        <PayTable />
        <DebugMode />
      </Column>
    </Row>
  </Column>
);
