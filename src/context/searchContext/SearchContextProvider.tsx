import { PropsWithChildren, useReducer } from 'react';
import { initialState, reducer } from './reducer';
import { SearchDispatchProvider, SearchStateProvider } from './context';

const SearchContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchDispatchProvider value={dispatch}>
      <SearchStateProvider value={state}>{children}</SearchStateProvider>
    </SearchDispatchProvider>
  );
};

export default SearchContextProvider;
