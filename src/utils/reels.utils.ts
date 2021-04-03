import { ESymbols, IRowWin } from 'types';
import { TAppState } from 'store';
import unzip from 'lodash.unzip';

export const symbolsOffsetsMap = {
  [ESymbols.BAR3.toString()]: 0,
  [ESymbols.BAR.toString()]: 100,
  [ESymbols.BAR2.toString()]: 200,
  [ESymbols.SEVEN.toString()]: 300,
  [ESymbols.CHERRY.toString()]: 400,
};

export const allSymbols = [
  ESymbols.BAR3,
  ESymbols.BAR,
  ESymbols.BAR2,
  ESymbols.SEVEN,
  ESymbols.CHERRY,
];

export const sameSymbolsMap = {
  CHERRIES: String([ESymbols.CHERRY, ESymbols.CHERRY, ESymbols.CHERRY]),
  SEVENS: String([ESymbols.SEVEN, ESymbols.SEVEN, ESymbols.SEVEN]),
  BAR3: String([ESymbols.BAR3, ESymbols.BAR3, ESymbols.BAR3]),
  BAR2: String([ESymbols.BAR2, ESymbols.BAR2, ESymbols.BAR2]),
  BAR: String([ESymbols.BAR, ESymbols.BAR, ESymbols.BAR]),
};

export const getRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// via https://github.com/lodash/lodash/pull/3469/files
export const cycleArr = <T extends unknown>(arr: T[], num: number): T[] => {
  const arrCopy = [...arr];
  return arrCopy.splice(-num % arrCopy.length).concat(arrCopy);
};

const setRandomReels = (reel: ESymbols[]) => {
  const randNumber = getRandomNumber(0, 5);
  return cycleArr<ESymbols>(reel, randNumber);
};

const setFixedReels = (reel: ESymbols[], debugMode: TAppState['debugMode'], reelIndex: number) => {
  // TS interpolation fix: https://stackoverflow.com/questions/63063286/typescript-element-implicitly-has-an-any-type-because-expression-of-type-str
  const columnPropName = `column${String(reelIndex + 1)}` as 'column1' | 'column2' | 'column3';
  const debugValues = debugMode[columnPropName];
  const symbol = debugValues?.symbol;
  const symbolIndex = allSymbols?.indexOf(symbol);

  return cycleArr<ESymbols>(allSymbols, debugValues?.position - symbolIndex);
};

export const repositionReels = (
  reel: ESymbols[],
  debugMode: TAppState['debugMode'],
  reelIndex: number
): ESymbols[] =>
  debugMode.enabled ? setFixedReels(reel, debugMode, reelIndex) : setRandomReels(reel);

const checkRowWin = (row: ESymbols[], rowIndex: number): IRowWin => {
  const rowValue = String(row);
  const SAME_CHERRIES = rowValue === sameSymbolsMap.CHERRIES;
  const SAME_SEVENS = rowValue === sameSymbolsMap.SEVENS;
  const SAME_BAR3 = rowValue === sameSymbolsMap.BAR3;
  const SAME_2BAR = rowValue === sameSymbolsMap.BAR2;
  const SAME_BAR = rowValue === sameSymbolsMap.BAR;

  if (rowIndex === 0 && SAME_CHERRIES) return { value: 2000, symbols: sameSymbolsMap.CHERRIES };
  if (rowIndex === 1 && SAME_CHERRIES) return { value: 1000, symbols: sameSymbolsMap.CHERRIES };
  if (rowIndex === 0 && SAME_CHERRIES) return { value: 4000, symbols: sameSymbolsMap.CHERRIES };
  if (SAME_SEVENS) return { value: 150, symbols: sameSymbolsMap.SEVENS };
  if (row.includes(ESymbols.SEVEN) && row.includes(ESymbols.CHERRY))
    return { value: 75, symbols: rowValue };
  if (SAME_BAR3) return { value: 50, symbols: sameSymbolsMap.BAR3 };
  if (SAME_2BAR) return { value: 20, symbols: sameSymbolsMap.BAR2 };
  if (SAME_BAR) return { value: 10, symbols: sameSymbolsMap.BAR };
  if (row.every(i => i.includes('BAR'))) return { value: 5, symbols: rowValue };
  return { value: 0, symbols: '' };
};

export const checkReelsWin = (reels: ESymbols[][]) => {
  const rows = unzip(reels).slice(0, 3);
  const wins = rows.map((row: ESymbols[], rowIndex: number) => checkRowWin(row, rowIndex));
  return wins;
};
