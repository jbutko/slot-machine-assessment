import { Dispatch, createContext } from 'react';
import { TAppState } from './app.reducer';

type TAppContext = {
  state: TAppState;
  dispatch: Dispatch<any>;
  actions: {
    [name: string]: Function;
  };
};

export const AppContext = createContext({} as TAppContext);
