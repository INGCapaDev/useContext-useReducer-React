export type SearchInitialState = {
  searchText: string;
  isLoading: boolean;
  countProducts: number;
};

type ActionTypes = `SET_${keyof SearchInitialState}`;

type Actions<T, K extends keyof T & string> = {
  type: `SET_${K}`;
  payload: T[K];
};

type SearchTextAction = Actions<SearchInitialState, 'searchText'>;
type IsLoadingAction = Actions<SearchInitialState, 'isLoading'>;
type CountProductsAction = Actions<SearchInitialState, 'countProducts'>;

export type SearchReducerActions =
  | SearchTextAction
  | IsLoadingAction
  | CountProductsAction;
