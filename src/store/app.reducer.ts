import * as CONSTANTS from './app.constants';
import { ESymbols } from 'types';
import { repositionReels, checkReelsWin } from 'utils/reels.utils';

type TAction = {
  type: string;
  payload: any;
};

export type TAppState = typeof initialState;

const initialState = {
  debugMode: {
    enabled: false,
    column1: {
      position: 0,
      symbol: ESymbols.BAR3,
    },
    column2: {
      position: 0,
      symbol: ESymbols.BAR3,
    },
    column3: {
      position: 0,
      symbol: ESymbols.BAR3,
    },
  },
  balance: 2000,
  totalWin: 0,
  running: {
    reel1: false,
    reel2: false,
    reel3: false,
  },
  reels: [
    [ESymbols.BAR3, ESymbols.BAR, ESymbols.BAR2, ESymbols.SEVEN, ESymbols.CHERRY], // reel column 1
    [ESymbols.BAR3, ESymbols.BAR, ESymbols.BAR2, ESymbols.SEVEN, ESymbols.CHERRY], // reel column 2
    [ESymbols.BAR3, ESymbols.BAR, ESymbols.BAR2, ESymbols.SEVEN, ESymbols.CHERRY], // reel column 3
  ],
  reelsWins: [
    {
      value: 0,
      symbols: '',
    },
    {
      value: 0,
      symbols: '',
    },
    {
      value: 0,
      symbols: '',
    },
  ],
};

const appReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case CONSTANTS.TYPE_CHANGE_DEBUG_MODE:
      return { ...state, debugMode: { ...state.debugMode, enabled: action.payload } };
    case CONSTANTS.TYPE_SET_DEBUG_COLUMN: {
      const { column, position, symbol } = action.payload;
      return {
        ...state,
        debugMode: {
          ...state.debugMode,
          [`column${column}`]: {
            position,
            symbol,
          },
        },
      };
    }
    case CONSTANTS.TYPE_CHANGE_BALANCE:
      return { ...state, balance: action.payload };
    case CONSTANTS.TYPE_SET_RUNNING: {
      const { reelIndex, isRunning } = action.payload;
      return {
        ...state,
        running: {
          ...state.running,
          [`reel${reelIndex}`]: isRunning,
        },
      };
    }
    case CONSTANTS.TYPE_REPOSITION_REEL: {
      const { reelIndex } = action.payload;
      const currReel = [...state.reels];
      currReel[reelIndex] = repositionReels(currReel[reelIndex], state.debugMode, reelIndex);
      return {
        ...state,
        reels: currReel,
      };
    }
    case CONSTANTS.TYPE_CALCULATE_WINS: {
      const wins = checkReelsWin(state.reels);
      const totalWin = wins.reduce((acc, val) => acc + val.value, 0);
      return {
        ...state,
        reelsWins: wins,
        totalWin,
        balance: state.balance + totalWin,
      };
    }
    case CONSTANTS.TYPE_RESET_WINS:
      return { ...state, reelsWins: initialState.reelsWins, totalWin: 0 };
    default:
      return state;
  }
};

export { appReducer, initialState };
