import React, { useContext, useReducer } from 'react';

import { AppContext } from './app.context';
import * as CONSTANTS from './app.constants';
import { appReducer, initialState } from './app.reducer';
import { ESymbols } from 'types';

const Store = AppContext;
Store.displayName = 'AppStore';

export const useStore = () => useContext(Store);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actionChangeBalance = (balance: number, isUserInput = false) => {
    if (isUserInput && balance > 5000) balance = 5000;
    if (isUserInput && balance < 1) balance = 1;
    dispatch({ type: CONSTANTS.TYPE_CHANGE_BALANCE, payload: balance });
  };

  const actionToggleRun = (reelIndex: number, isRunning: boolean) =>
    dispatch({ type: CONSTANTS.TYPE_SET_RUNNING, payload: { reelIndex, isRunning } });

  const actionToggleSwitch = () =>
    dispatch({ type: CONSTANTS.TYPE_CHANGE_DEBUG_MODE, payload: !state.debugMode.enabled });

  const actionRepositionReels = (reelIndex: number) =>
    dispatch({
      type: CONSTANTS.TYPE_REPOSITION_REEL,
      payload: {
        reelIndex,
      },
    });

  const actionCalculateWins = () =>
    dispatch({
      type: CONSTANTS.TYPE_CALCULATE_WINS,
      payload: null,
    });

  const actionResetWins = () =>
    dispatch({
      type: CONSTANTS.TYPE_RESET_WINS,
      payload: null,
    });

  const actionSetDebugColumn = (column: number, position: number, symbol: ESymbols) =>
    dispatch({
      type: CONSTANTS.TYPE_SET_DEBUG_COLUMN,
      payload: {
        column,
        position,
        symbol,
      },
    });

  const selectorCheckIsRunning = () =>
    state.running.reel1 || state.running.reel2 || state.running.reel3;

  return (
    <Store.Provider
      value={{
        state,
        dispatch,
        actions: {
          actionCalculateWins,
          actionChangeBalance,
          actionRepositionReels,
          actionResetWins,
          actionToggleRun,
          actionToggleSwitch,
          actionSetDebugColumn,
        },
        selectors: {
          selectorCheckIsRunning,
        },
      }}
    >
      {children}
    </Store.Provider>
  );
};
