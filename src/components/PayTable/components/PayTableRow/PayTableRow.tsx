import React from 'react';

import { ESymbols } from 'types';
import { Row } from 'components/Row';
import { Symbol } from 'components/Symbol';
import { Badge } from 'components/Badge';

interface IPayTableRowProps {
  text?: string;
  symbols: ESymbols[];
  sum: number;
  position?: string;
  highlighted?: boolean;
}

export const PayTableRow: React.FC<IPayTableRowProps> = ({
  text,
  symbols,
  position,
  sum,
  highlighted,
}) => (
  <Row
    justifyContent='space-between'
    alignItems='center'
    padding='2px 10px'
    bg={highlighted ? '#f9c7f0' : 'transparent'}
    my='2px'
  >
    <Row alignItems='center' mr='20px'>
      {text && <>{text} </>}
      {symbols.map((symbol, idx) => (
        <Symbol symbol={symbol} width={['35px']} key={`${idx}-${symbol}`} />
      ))}{' '}
      {position}
    </Row>
    <Badge text={String(sum)} minWidth='60px' />
  </Row>
);
