import { Action } from "../../base/action.base";
import {
  TYPE_INCREMENT_BY_5,
  TYPE_DECREMENT,
  TYPE_INCREMENT,
  TYPE_INCREMENT_BY,
} from "../types";

// TIPO DE NUESTRO ESTADO GLOBAL (LO QUE SE COMPARTE EN EL PROVIDER)
export interface GlobalState {
  counter: number;
}

export interface GlobalContextProps {
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}

// INTERFACES DE LAS ACTIONS
export interface ActionIncrement extends Action {
  type: typeof TYPE_INCREMENT;
}

export interface ActionDecrement extends Action {
  type: typeof TYPE_DECREMENT;
}

export interface ActionIncrementBy5 extends Action {
  type: typeof TYPE_INCREMENT_BY_5;
}

export interface ActionIncrementBy extends Action {
  type: typeof TYPE_INCREMENT_BY;
  payload: number;
}
