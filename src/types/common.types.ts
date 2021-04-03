export enum ESymbols {
  BAR2 = '2xBAR',
  BAR3 = '3xBAR',
  SEVEN = '7',
  BAR = 'BAR',
  CHERRY = 'Cherry',
}

export enum EAgentFormBlock {
  HIDDEN_OPTIONAL = 0,
  VISIBLE_OPTIONAL = 1,
  VISIBLE_REQUIRED = 2,
}

export interface IRowWin {
  value: number;
  symbols: string;
}
