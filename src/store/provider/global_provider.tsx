import { useReducer } from "react";
import { GlobalContext } from "../context/global_context";
import { initialState, reducer } from "../reducer";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
