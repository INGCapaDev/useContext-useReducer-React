import { createContext } from '../../utils/createContext';
import { SearchInitialState, SearchReducerActions } from './search';

export const [useSearchDispatch, SearchDispatchProvider] =
  createContext<React.Dispatch<SearchReducerActions>>();
export const [useSearchContext, SearchStateProvider] =
  createContext<SearchInitialState>();
