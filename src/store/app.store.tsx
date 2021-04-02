import React, { useContext, useReducer } from 'react';

import { AppContext } from './app.context';
import * as CONSTANTS from './app.constants';
import { appReducer, initialState } from './app.reducer';

const Store = AppContext;
Store.displayName = 'AppStore';

export const useStore = () => useContext(Store);

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeBalance = (balance: number) => {
    if (balance > 5000) balance = 5000;
    if (balance < 1) balance = 1;
    dispatch({ type: CONSTANTS.TYPE_CHANGE_BALANCE, payload: balance });
  };

  const spin = () => dispatch({ type: CONSTANTS.TYPE_SET_RUNNING, payload: !state.running });

  const toggleSwitch = () =>
    dispatch({ type: CONSTANTS.TYPE_CHANGE_DEBUG_MODE, payload: !state.debugMode });

  return (
    <Store.Provider
      value={{
        state,
        dispatch,
        actions: {
          changeBalance,
          spin,
          toggleSwitch,
        },
      }}
    >
      {children}
    </Store.Provider>
  );
};
