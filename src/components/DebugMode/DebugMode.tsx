import React from 'react';
import { Switch } from '@rebass/forms';

import { Column } from 'components/Column';
import { Row } from 'components/Row';
import { Heading } from 'components/Heading';
import { useStore } from 'store';

interface IDebugModeProps {}

export const DebugMode: React.FC<IDebugModeProps> = () => {
  const { state, actions } = useStore();
  const { toggleSwitch } = actions;

  return (
    <Column>
      <Heading>Debug mode</Heading>
      <Row width='100%' justifyContent='space-between' px='10px'>
        Enable debug mode:{' '}
        <Switch
          checked={state.debugMode}
          onClick={() => toggleSwitch()}
          sx={{ ':hover': { cursor: 'pointer' } }}
        />
      </Row>
    </Column>
  );
};
