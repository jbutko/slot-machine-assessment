import React from 'react';
import { Image, ImageProps } from 'rebass';

import { ESymbols } from 'types';

import imgBarSymbol from 'assets/BAR.png';
import img2xBarSymbol from 'assets/2xBAR.png';
import img3xBarSymbol from 'assets/3xBAR.png';
import imgSevenSymbol from 'assets/7.png';
import imgCherrySymbol from 'assets/Cherry.png';

interface ISymbolProps extends ImageProps {
  symbol: ESymbols;
  width?: string[];
  styles?: ImageProps['sx'];
}

const symbolToPathMap = {
  [ESymbols.BAR]: imgBarSymbol,
  [ESymbols.BAR2]: img2xBarSymbol,
  [ESymbols.BAR3]: img3xBarSymbol,
  [ESymbols.SEVEN]: imgSevenSymbol,
  [ESymbols.CHERRY]: imgCherrySymbol,
};

export const Symbol: React.FC<ISymbolProps> = ({
  symbol,
  width = ['100%'],
  styles = {},
  ...imageProps
}) => (
  <Image
    src={symbolToPathMap[symbol]}
    sx={{
      width,
      borderRadius: 8,
      ...styles,
    }}
    {...imageProps}
  />
);
