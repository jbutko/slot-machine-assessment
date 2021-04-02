import React from 'react';

import { Column } from 'components/Column';
import { Heading } from 'components/Heading';
import { PayTableRow } from './components/PayTableRow';
import { ESymbols } from 'types';

interface IPayTableProps {}

export const PayTable: React.FC<IPayTableProps> = () => (
  <Column mb='10px'>
    <Heading>Pay table</Heading>
    <PayTableRow text='3 x ' symbols={[ESymbols.CHERRY]} position='TOP row' sum={2000} />
    <PayTableRow text='3 x ' symbols={[ESymbols.CHERRY]} position='CENTER row' sum={1000} />
    <PayTableRow text='3 x ' symbols={[ESymbols.CHERRY]} position='BOTTOM row' sum={4000} />
    <PayTableRow
      text='Combination of '
      symbols={[ESymbols.CHERRY, ESymbols.SEVEN]}
      position='ANY row'
      sum={75}
    />
    <PayTableRow text='3 x ' symbols={[ESymbols.BAR3]} position='ANY row' sum={50} />
    <PayTableRow text='3 x ' symbols={[ESymbols.BAR2]} position='ANY row' sum={20} />
    <PayTableRow text='3 x ' symbols={[ESymbols.BAR]} position='ANY row' sum={10} />
    <PayTableRow text='Combination of any ' symbols={[ESymbols.BAR]} position='ANY row' sum={5} />
  </Column>
);
