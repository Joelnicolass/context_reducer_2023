import { Action } from "../../base/action.base";
import { GlobalState } from "../interfaces";
import {
  TYPE_DECREMENT,
  TYPE_INCREMENT,
  TYPE_INCREMENT_BY,
  TYPE_INCREMENT_BY_5,
} from "../types";

// INICIALIZAMOS EL ESTADO GLOBAL
export const initialState: GlobalState = {
  counter: 0,
};

// REDUCER
export const reducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case TYPE_INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case TYPE_DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case TYPE_INCREMENT_BY_5:
      return { ...state, counter: state.counter + 5 };

    case TYPE_INCREMENT_BY:
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};
