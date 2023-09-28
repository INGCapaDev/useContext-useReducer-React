export const ACTIONS = {
  SET_SEARCH_TEXT: 'setSearchText',
  SET_IS_LOADING: 'setIsLoading',
  SET_COUNT_PRODUCTS: 'setCountProducts',
};

type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];

export type Action = {
  type: ActionType;
  payload: string | boolean | number;
};

export const initialState = {
  searchText: '',
  isLoading: false,
  countProducts: 0,
};

export const reducer = (
  state: typeof initialState,
  action: Action
): typeof initialState => {
  switch (action.type) {
    case ACTIONS.SET_SEARCH_TEXT:
      return { ...state, searchText: action.payload as string };
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload as boolean };
    case ACTIONS.SET_COUNT_PRODUCTS:
      return { ...state, countProducts: action.payload as number };
    default:
      return state;
  }
};
