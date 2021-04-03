import { ESymbols, IRowWin } from 'types';
import unzip from 'lodash.unzip';

export const symbolsOffsetsMap = {
  [ESymbols.BAR3.toString()]: 0,
  [ESymbols.BAR.toString()]: 100,
  [ESymbols.BAR2.toString()]: 200,
  [ESymbols.SEVEN.toString()]: 300,
  [ESymbols.CHERRY.toString()]: 400,
};

export const sameSymbolsMap = {
  CHERRIES: String([ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]),
  SEVENS: String([ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]),
  BAR3: String([ESymbols.BAR3, ESymbols.BAR3, ESymbols.BAR3]),
  BAR2: String([ESymbols.BAR2, ESymbols.BAR2, ESymbols.BAR2]),
  BAR: String([ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]),
};

export const getRandomNum = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shiftToRight = <T extends unknown>(arr: T[], placesToShift: number): T[] => {
  const arrCopy = [...arr];
  return arrCopy.concat(arrCopy.splice(0, placesToShift));
};

export const repositionReels = (reel: ESymbols[]): ESymbols[] => {
  const randNumber = getRandomNum(0, 5);
  return shiftToRight<ESymbols>(reel, randNumber);
};

const checkRowWin = (row: ESymbols[], rowIndex: number): IRowWin => {
  const ROW_VALUE = String(row);

  const SAME_CHERRIES = ROW_VALUE === sameSymbolsMap.CHERRIES;
  const SAME_SEVENS = ROW_VALUE === sameSymbolsMap.SEVENS;
  const SAME_BAR3 = ROW_VALUE === sameSymbolsMap.BAR3;
  const SAME_2BAR = ROW_VALUE === sameSymbolsMap.BAR2;
  const SAME_BAR = ROW_VALUE === sameSymbolsMap.BAR;

  if (rowIndex === 0 && SAME_CHERRIES) return { value: 2000, symbols: sameSymbolsMap.CHERRIES };
  if (rowIndex === 1 && SAME_CHERRIES) return { value: 1000, symbols: sameSymbolsMap.CHERRIES };
  if (rowIndex === 0 && SAME_CHERRIES) return { value: 4000, symbols: sameSymbolsMap.CHERRIES };
  if (SAME_SEVENS) return { value: 150, symbols: sameSymbolsMap.SEVENS };
  if (row.includes(ESymbols.SEVEN) && row.includes(ESymbols.CHERRY))
    return { value: 75, symbols: ROW_VALUE };
  if (SAME_BAR3) return { value: 50, symbols: sameSymbolsMap.BAR3 };
  if (SAME_2BAR) return { value: 20, symbols: sameSymbolsMap.BAR2 };
  if (SAME_BAR) return { value: 10, symbols: sameSymbolsMap.BAR };
  if (row.every(i => i.includes('BAR'))) return { value: 5, symbols: ROW_VALUE };
  return { value: 0, symbols: '' };
};

export const checkReelsWin = (reels: ESymbols[][]) => {
  const rows = unzip(reels).slice(0, 3);
  const wins = rows.map((row: ESymbols[], rowIndex: number) => checkRowWin(row, rowIndex));
  return wins;
};
