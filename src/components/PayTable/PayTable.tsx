import React from 'react';

import { Column } from 'components/Column';
import { Heading } from 'components/Heading';
import { PayTableRow } from './components/PayTableRow';
import { sameSymbolsMap } from 'utils/reels.utils';
import { ESymbols } from 'types';
import { useStore } from 'store';

export const PayTable: React.FC = () => {
  const {
    state: { reelsWins },
  } = useStore();
  const winRowSymbols = reelsWins.map(i => i.symbols);

  return (
    <Column mb='10px'>
      <Heading>Pay table</Heading>
      <PayTableRow
        symbols={[ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]}
        position='TOP row'
        sum={2000}
        highlighted={reelsWins[0].symbols === sameSymbolsMap.CHERRIES}
      />
      <PayTableRow
        symbols={[ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]}
        position='CENTER row'
        sum={1000}
        highlighted={reelsWins[1].symbols === sameSymbolsMap.CHERRIES}
      />
      <PayTableRow
        symbols={[ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]}
        position='BOTTOM row'
        sum={4000}
        highlighted={reelsWins[2].symbols === sameSymbolsMap.CHERRIES}
      />
      <PayTableRow
        text='Combination of '
        symbols={[ESymbols.CHERRY, ESymbols.SEVEN]}
        position='ANY row'
        sum={75}
        highlighted={winRowSymbols.some(
          i => i.includes(ESymbols.CHERRY) && i.includes(ESymbols.SEVEN)
        )}
      />
      <PayTableRow
        symbols={[ESymbols.BAR3, ESymbols.BAR3, ESymbols.BAR3]}
        position='ANY row'
        sum={50}
        highlighted={winRowSymbols.some(
          i => i === String([ESymbols.BAR3, ESymbols.BAR3, ESymbols.BAR3])
        )}
      />
      <PayTableRow
        symbols={[ESymbols.BAR2, ESymbols.BAR2, ESymbols.BAR2]}
        position='ANY row'
        sum={20}
        highlighted={winRowSymbols.some(
          i => i === String([ESymbols.BAR2, ESymbols.BAR2, ESymbols.BAR2])
        )}
      />
      <PayTableRow
        symbols={[ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]}
        position='ANY row'
        sum={10}
        highlighted={winRowSymbols.some(
          i => i === String([ESymbols.BAR, ESymbols.BAR, ESymbols.BAR])
        )}
      />
      <PayTableRow
        text='Combination of any '
        symbols={[ESymbols.BAR]}
        position='ANY row'
        sum={5}
        highlighted={winRowSymbols.some(i => i.split(',').every(symbol => symbol.includes('BAR')))}
      />
    </Column>
  );
};
