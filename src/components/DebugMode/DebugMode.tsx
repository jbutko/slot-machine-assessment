import React from 'react';
import { Switch } from '@rebass/forms';

import { Column } from 'components/Column';
import { Row } from 'components/Row';
import { Heading } from 'components/Heading';
import { DebugSelection } from './components/DebugSelection';
import { useStore } from 'store';

export const DebugMode: React.FC = () => {
  const {
    state,
    actions: { actionToggleSwitch },
  } = useStore();

  return (
    <Column>
      <Heading>Debug mode</Heading>
      <Row width='100%' justifyContent='space-between' px={[0, '10px']}>
        Enable debug mode:{' '}
        <Switch
          checked={state.debugMode.enabled}
          onClick={() => actionToggleSwitch()}
          sx={{ ':hover': { cursor: 'pointer' } }}
        />
      </Row>
      {state.debugMode.enabled && <DebugSelection />}
    </Column>
  );
};
