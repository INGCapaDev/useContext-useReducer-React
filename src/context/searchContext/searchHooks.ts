import { useContext } from 'react';
import { StateContext, DispatchContext } from './searchContext';

export const useSearchContext = () => {
  const context = useContext(StateContext);
  if (!context)
    throw new Error(
      'useSearchContext must be used within SearchContextProvider'
    );
  return context;
};

export const useSearchActionsContext = () => {
  const context = useContext(DispatchContext);
  if (!context)
    throw new Error(
      'useActionsSearchContext must be used within ActionsContextProvider'
    );
  return context;
};
