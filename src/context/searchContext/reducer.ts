import { SearchInitialState, SearchReducerActions } from './search';

export const initialState: SearchInitialState = {
  searchText: '',
  isLoading: false,
  countProducts: 0,
};

export const reducer = (
  state: SearchInitialState,
  action: SearchReducerActions
): SearchInitialState => {
  switch (action.type) {
    case 'SET_searchText':
      return { ...state, searchText: action.payload };
    case 'SET_isLoading':
      return { ...state, isLoading: action.payload };
    case 'SET_countProducts':
      return { ...state, countProducts: action.payload };
    default:
      return state;
  }
};
