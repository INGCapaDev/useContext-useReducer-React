import {
  useSearchContext,
  useSearchDispatch,
} from '../context/searchContext/context';

export const Input = () => {
  const { searchText } = useSearchContext();
  const dispatch = useSearchDispatch();
  return (
    <input
      type='text'
      onChange={(e) => {
        dispatch({ type: 'SET_searchText', payload: e.target.value });
      }}
      value={searchText}
    />
  );
};
