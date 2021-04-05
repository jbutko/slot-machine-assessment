import React from 'react';
import { Text } from 'rebass';
import { Select } from '@rebass/forms';

import { Column } from 'components/Column';
import { Row } from 'components/Row';
import { useStore } from 'store';
import { allSymbols } from 'utils/reels.utils';

export const DebugSelection: React.FC = () => {
  const {
    state: { debugMode },
    actions: { actionSetDebugColumn },
  } = useStore();

  const setDebugColumn = (column: number, position: number, symbol: string) =>
    actionSetDebugColumn(column, position, symbol);

  return (
    <Column px={[0, '10px']} mt='20px'>
      <Row alignItems='center' mb='10px' justifyContent={['flex-start', 'space-between']}>
        <Text fontWeight='bold' mr='10px'>
          1. Column:{' '}
        </Text>
        <Select
          name='positions'
          defaultValue={debugMode.column1.position}
          minWidth={['90px', '100px']}
          mr={['20px', '30px']}
          onChange={e => setDebugColumn(1, Number(e.target.value), debugMode.column1.symbol)}
        >
          <OptionsPositions />
        </Select>
        <Select
          name='symbols'
          minWidth={['90px', '100px']}
          defaultValue={debugMode.column1.symbol}
          onChange={e => setDebugColumn(1, debugMode.column1.position, e.target.value)}
        >
          <OptionsSymbols />
        </Select>
      </Row>
      <Row alignItems='center' mb='10px' justifyContent={['flex-start', 'space-between']}>
        <Text fontWeight='bold' mr='10px'>
          2. Column:{' '}
        </Text>
        <Select
          name='positions'
          defaultValue={debugMode.column2.position}
          minWidth={['90px', '100px']}
          mr={['20px', '30px']}
          onChange={e => setDebugColumn(2, Number(e.target.value), debugMode.column2.symbol)}
        >
          <OptionsPositions />
        </Select>
        <Select
          name='symbols'
          minWidth={['90px', '100px']}
          defaultValue={debugMode.column2.symbol}
          onChange={e => setDebugColumn(2, debugMode.column2.position, e.target.value)}
        >
          <OptionsSymbols />
        </Select>
      </Row>
      <Row alignItems='center' mb='10px' justifyContent={['flex-start', 'space-between']}>
        <Text fontWeight='bold' mr='10px'>
          3. Column:{' '}
        </Text>
        <Select
          name='positions'
          defaultValue={debugMode.column3.position}
          minWidth={['90px', '100px']}
          mr={['20px', '30px']}
          onChange={e => setDebugColumn(3, Number(e.target.value), debugMode.column3.symbol)}
        >
          <OptionsPositions />
        </Select>
        <Select
          name='symbols'
          minWidth={['90px', '100px']}
          defaultValue={debugMode.column3.symbol}
          onChange={e => setDebugColumn(3, debugMode.column3.position, e.target.value)}
        >
          <OptionsSymbols />
        </Select>
      </Row>
    </Column>
  );
};

const positions = [
  { label: 'TOP', value: 0 },
  { label: 'MIDDLE', value: 1 },
  { label: 'BOTTOM', value: 2 },
];

const OptionsPositions = () => (
  <>
    {positions.map(({ label, value }, idx) => (
      <option key={label} value={value}>
        {label}
      </option>
    ))}
  </>
);

const OptionsSymbols = () => (
  <>
    {allSymbols.map((symbol, idx) => (
      <option key={symbol}>{symbol}</option>
    ))}
  </>
);
