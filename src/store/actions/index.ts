import {
  ActionDecrement,
  ActionIncrement,
  ActionIncrementBy,
  ActionIncrementBy5,
} from "../interfaces";
import {
  TYPE_DECREMENT,
  TYPE_INCREMENT,
  TYPE_INCREMENT_BY_5,
  TYPE_INCREMENT_BY,
} from "../types";

// ACTIONS CREATORS
export const increment = (): ActionIncrement => ({ type: TYPE_INCREMENT });

export const decrement = (): ActionDecrement => ({ type: TYPE_DECREMENT });

export const incrementBy5 = (): ActionIncrementBy5 => ({
  type: TYPE_INCREMENT_BY_5,
});

export const incrementBy = (value: number): ActionIncrementBy => ({
  type: TYPE_INCREMENT_BY,
  payload: value,
});
