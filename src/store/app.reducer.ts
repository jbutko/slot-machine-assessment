import * as CONSTANTS from './app.constants';

type TAction = {
  type: string;
  payload: any;
};

export type TAppState = typeof initialState;

const initialState = {
  debugMode: false,
  balance: 2000,
  running: false,
};

const appReducer = (state = initialState, action: TAction) => {
  switch (action.type) {
    case CONSTANTS.TYPE_CHANGE_DEBUG_MODE:
      return { ...state, debugMode: action.payload };
    case CONSTANTS.TYPE_CHANGE_BALANCE:
      return { ...state, balance: action.payload };
    case CONSTANTS.TYPE_SET_RUNNING:
      return { ...state, running: action.payload };
    default:
      return state;
  }
};

export { appReducer, initialState };
