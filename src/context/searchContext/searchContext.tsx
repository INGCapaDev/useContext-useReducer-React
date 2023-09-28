import { createContext, useReducer } from 'react';
import { initialState, reducer, type Action } from './reducer';

type ProviderProps = {
  children: React.ReactNode;
};

export const StateContext = createContext<typeof initialState | null>(null);
export const DispatchContext = createContext<React.Dispatch<Action> | null>(
  null
);

export default function SearchContextProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}
